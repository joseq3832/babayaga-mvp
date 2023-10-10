import { classNames } from '@/core/utils'

interface FormProps {
  onSubmit: () => void
  children: React.ReactNode
  className?: string
}

export const Form = ({
  onSubmit,
  children,
  className,
}: FormProps): JSX.Element => {
  return (
    <form className={classNames(className, '')} onSubmit={onSubmit}>
      {children}
    </form>
  )
}
