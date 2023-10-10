// Import Layouts
import { AuthLayout, MainLayout } from '@/layouts'

// Import Pages
import { Home, Login, NotFound } from '@/pages'

// Import Dependencies
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const Navigation = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Routes */}
        <Route path="/" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>

        {/* Not Found Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
