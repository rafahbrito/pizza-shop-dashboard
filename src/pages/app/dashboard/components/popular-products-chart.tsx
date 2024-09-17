import { BarChart } from 'lucide-react'
import { Cell, Pie, PieChart } from 'recharts'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

const data = [
  { product: 'Pizza Pepperoni', amount: 40 },
  { product: 'Pizza Mussarela', amount: 30 },
  { product: 'Coca-Cola 2L', amount: 60 },
  { product: 'Pizza Manjericão', amount: 35 },
  { product: 'Pizza Brigadeiro', amount: 20 },
]

const COLORS = [
  'hsl(var(--chart-1))',
  'hsl(var(--chart-2))',
  'hsl(var(--chart-3))',
  'hsl(var(--chart-4))',
  'hsl(var(--chart-5))',
]

const chartConfig = data.reduce((config, item, index) => {
  config[item.product] = {
    label: item.product,
    color: COLORS[index % COLORS.length],
  }
  return config
}, {} as ChartConfig)

const Label = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  value,
  index,
}: any) => {
  const RADIAN = Math.PI / 180
  const radius = 12 + innerRadius + (outerRadius - innerRadius)
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text
      x={x}
      y={y}
      className="fill-muted-foreground text-sm"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {data[index].product.substring(0, 15).concat('...')} {`(${value})`}
    </text>
  )
}

export function PopularProductsChart() {
  return (
    <Card className="col-span-3">
      <CardHeader className="pb-8">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium">
            Produtos Populares
          </CardTitle>
          <BarChart className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-60 w-full">
          <PieChart accessibilityLayer>
            <ChartTooltip
              content={<ChartTooltipContent cursor={false} indicator="line" />}
            />
            <Pie
              data={data}
              dataKey="amount"
              nameKey="product"
              innerRadius={60}
              label={Label}
              labelLine={false}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={chartConfig[entry.product]?.color}
                  className="hover:opacity-80"
                />
              ))}
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
