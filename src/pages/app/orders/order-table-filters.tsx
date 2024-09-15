import { Input } from '@/components/ui/input'

export function OrderTableFilters() {
  return (
    <div className="space-y-2.5">
      <form action="" className="flex items-center gap-2">
        <span className="text-sm font-semibold">Filtros:</span>
        <Input placeholder="ID do pedido" className="h-8 w-auto" />
        <Input placeholder="Nome do cliente" className="h-8 w-80" />
      </form>
    </div>
  )
}
