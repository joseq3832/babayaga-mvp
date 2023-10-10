import { classNames } from '@/core/utils'
import { Logo } from '..'

interface AuthCardProps {
  children: React.ReactNode
  title?: string
  showLogo?: boolean
  flex?: boolean
}

export const AuthCard = ({
  children,
  title,
  showLogo,
  flex,
}: AuthCardProps): JSX.Element => {
  return (
    <>
      <div className="flex flex-col min-h-full">
        <div className="flex-none mb-4">
          {showLogo && <Logo />}
          {title && (
            <h1 className="text-xl font-semibold text-red-500 border-b border-gray-300 p-4">
              {title}
            </h1>
          )}
        </div>
        <div
          className={classNames(
            flex
              ? 'flex-auto p-6'
              : 'flex items-center justify-center flex-auto',
            'h-full bg-gray-100 rounded-lg shadow',
          )}
        >
          <div
            className={classNames(
              flex ? 'w-full' : 'max-w-md space-y-6 w-full p-8',
            )}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
