import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'

import { router } from './Routes'

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | PizzaShop" />
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}
