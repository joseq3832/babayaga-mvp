import { classNames } from '@/core/utils'
import { FieldError, UseFormRegisterReturn } from 'react-hook-form'

interface CheckboxInputProps {
  label: string
  className?: string
  register?: UseFormRegisterReturn
  error?: FieldError
  defaultChecked?: boolean
}

export const CheckboxInput = ({
  label,
  className,
  register,
  error,
  defaultChecked = false,
}: CheckboxInputProps): JSX.Element => {
  return (
    <div className="flex items-center cursor-pointer">
      <input
        className={classNames(
          className,
          'border-gray-200 h-4 rounded text-red-600 w-4 focus:ring-red-200 focus:ring-opacity-50 cursor-pointer',
        )}
        id={label}
        type="checkbox"
        defaultChecked={defaultChecked}
        {...register}
      />
      <label
        className="ml-2 text-gray-600 text-sm cursor-pointer"
        htmlFor={label}
      >
        {label}
      </label>
      {error && <span className="text-sm text-red-500">{error.message}</span>}
    </div>
  )
}
