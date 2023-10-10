import { Outlet } from 'react-router-dom'

export const AuthLayout = (): JSX.Element => {
  return (
    <>
      <div className="w-full h-full bg-white py-8 px-2 md:px-4 lg:px-6">
        <Outlet />
      </div>
    </>
  )
}
