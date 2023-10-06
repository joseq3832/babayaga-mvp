// Import Layouts
import { MainLayout } from '@/layouts'

// Import Pages
import { Home, NotFound } from '@/pages'

// Import Dependencies
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const Navigation = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>

        {/* Not Found Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
