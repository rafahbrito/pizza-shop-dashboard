import { Pizza } from 'lucide-react'
import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div className="grid min-h-screen grid-cols-2">
      <div className="flex h-full flex-col items-center justify-between border-r border-foreground/5 bg-muted p-10 text-muted-foreground">
        <div className="flex items-center gap-1 text-lg text-foreground">
          <Pizza className="h5 w-5" />
          <span className="font-bold">pizza.shop</span>
        </div>
        <p className="text-sm">
          Painel do Parceiro &copy;pizza.shop - {new Date().getFullYear()}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Outlet />
      </div>
    </div>
  )
}
