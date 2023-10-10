import { classNames } from '@/core/utils'

interface SubmitButtonProps {
  children: React.ReactNode
  className?: string
}

export const SubmitButton = ({
  children,
  className,
}: SubmitButtonProps): JSX.Element => {
  return (
    <button
      className={classNames(
        className,
        'bg-red-600 text-white focus:ring-red-600 hover:bg-red-700 px-4 py-2 text-sm flex justify-center relative rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-offset-2',
      )}
      type="submit"
    >
      {children}
    </button>
  )
}
