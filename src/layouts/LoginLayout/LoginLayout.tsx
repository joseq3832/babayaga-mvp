import { Outlet } from 'react-router-dom'

export const LoginLayout = (): JSX.Element => {
  return (
    <div className="bg-secondary-100 flex flex-col items-center justify-center min-h-screen sm:py-16 bg-white sm:bg-auth bg-cover bg-norepeat sm:overflow-hidden">
      <div className="max-w-md space-y-6 w-full">
        <div className="bg-white p-8 rounded-lg space-y-6">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
