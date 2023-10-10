import { classNames } from '@/core/utils'
import { FieldError, UseFormRegisterReturn } from 'react-hook-form'

interface TextInputProps {
  defaultValue?: string
  register?: UseFormRegisterReturn
  error?: FieldError
  placeholder?: string
  disabled?: boolean
  className?: string
  id?: string
  type?: string
}

export const TextInput = ({
  defaultValue,
  register,
  error,
  placeholder,
  disabled,
  className,
  id,
  type = 'text',
}: TextInputProps): JSX.Element => {
  return (
    <>
      <input
        type={type}
        id={id}
        className={classNames(
          className,
          error && '',
          'block border-gray-200 mt-1 rounded-md w-full focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50 sm:text-sm',
        )}
        defaultValue={defaultValue}
        placeholder={placeholder}
        disabled={disabled}
        {...register}
      />
      {error && (
        <span className="text-sm text-red-500 mt-1">{error.message}</span>
      )}
    </>
  )
}
