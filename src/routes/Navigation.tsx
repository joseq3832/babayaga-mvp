// Import Layouts
import { AuthLayout, LoginLayout, MainLayout } from '@/layouts'

// Import Pages
import { ForgotPassword, Home, Login, NotFound, Register } from '@/pages'

// Import Dependencies
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const Navigation = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Routes */}
        <Route path="/" element={<LoginLayout />}>
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="/" element={<AuthLayout />}>
          <Route path="register" element={<Register />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
        </Route>
        {/* End AuthRoutes */}

        {/* Admin Pages */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
        {/* End admin pages */}

        {/* Not Found Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
