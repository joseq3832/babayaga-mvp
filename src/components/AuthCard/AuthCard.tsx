import { Link } from 'react-router-dom'
import { IconLogo } from '..'

interface AuthCardProps {
  title?: string
  children: React.ReactNode
  register?: boolean
}

export const AuthCard = ({
  title,
  children,
  register = false,
}: AuthCardProps): JSX.Element => {
  return (
    <>
      <div className="space-y-4">
        <div className="flex justify-center">
          <a
            title="Autos usados, autos nuevos, opiniones e información I SemiNuevos"
            href="https://seminuevos.com/"
          >
            <IconLogo />
          </a>
        </div>
        <div className="text-center text-xl">
          <h1>{title}</h1>
          {register && (
            <div className="text-center text-base">
              o{' '}
              <Link
                className="text-blue-600 hover:text-blue-500 inline-flex"
                to="/register"
              >
                crea tu cuenta de usuario gratis
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="space-y-4">{children}</div>
    </>
  )
}
