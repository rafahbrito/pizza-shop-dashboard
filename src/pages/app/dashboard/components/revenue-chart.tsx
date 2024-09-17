import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

const data = [
  { date: '2024-04-01', revenue: 1000 },
  { date: '2024-04-02', revenue: 1100 },
  { date: '2024-04-03', revenue: 900 },
  { date: '2024-04-04', revenue: 1200 },
  { date: '2024-04-05', revenue: 1300 },
  { date: '2024-04-06', revenue: 800 },
  { date: '2024-04-07', revenue: 1450 },
]

const chartConfig = {
  revenue: {
    label: 'Receita',
    color: 'hsl(var(--chart-4))',
  },
} satisfies ChartConfig

export function RevenueChart() {
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">Receita</CardTitle>
          <CardDescription>Receita diária no período</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-60 w-full">
          <LineChart data={data} accessibilityLayer>
            <YAxis
              stroke="#888"
              axisLine={false}
              width={80}
              tickLine={false}
              tickMargin={10}
              tickFormatter={(value: number) =>
                value.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })
              }
            />
            <CartesianGrid vertical={false} />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  indicator="dot"
                  labelFormatter={(value: Date) => {
                    const date = new Date(value)
                    return date.toLocaleDateString('pt-BR', {
                      year: '2-digit',
                      month: '2-digit',
                      day: '2-digit',
                    })
                  }}
                />
              }
            />
            <Line
              type="linear"
              strokeWidth={2}
              dataKey="revenue"
              dot={{
                fill: 'var(--color-revenue)',
              }}
              stroke="var(--color-revenue)"
              activeDot={{
                r: 6,
              }}
            />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              dy={15}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString('pt-BR', {
                  year: '2-digit',
                  month: '2-digit',
                  day: '2-digit',
                })
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
