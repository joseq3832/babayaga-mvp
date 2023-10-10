import { classNames } from '@/core/utils'

interface LabelProps {
  children: React.ReactNode
  htmlFor?: string
  className?: string
  required?: boolean
}

export const Label = ({
  children,
  htmlFor,
  className,
  required,
}: LabelProps): JSX.Element => {
  return (
    <label
      className={classNames(className, 'mb-1 ml-2 text-sm text-gray-500')}
      htmlFor={htmlFor}
    >
      {children} {required && '*'}
    </label>
  )
}
