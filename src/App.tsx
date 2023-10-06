import { Navigation } from '@/routes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Toaster } from 'sonner'
import './App.css'

const queryClient = new QueryClient()

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
      <Toaster position="top-right" />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
