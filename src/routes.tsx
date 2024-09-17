import { createBrowserRouter } from 'react-router-dom'

import { Dashboard } from '@/pages/app/dashboard/dashboard'
import { Orders } from '@/pages/app/orders/orders'
import { SignIn } from '@/pages/auth/sign-in'
import { SignUp } from '@/pages/auth/sign-up'
import { AppLayout } from '@/pages/layouts/app'
import { AuthLayout } from '@/pages/layouts/auth'
import { NotFoundPage } from '@/pages/NotFoundPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/orders', element: <Orders /> },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: '/sign-in', element: <SignIn /> },
      { path: '/sign-up', element: <SignUp /> },
    ],
  },
])
