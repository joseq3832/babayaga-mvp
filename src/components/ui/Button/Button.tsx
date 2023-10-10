import { classNames } from '@/core/utils'
import { useTheme } from '.'
import { sizes } from '.'
import { ButtonProps } from '.'

const Button = ({
  color = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  content,
  children,
  onClick,
  ...rest
}: ButtonProps): JSX.Element => {
  const theme = useTheme(color)
  const styleSize = sizes.get(size)
  const styleColor = Object.values(theme).join(' ')
  const styles = `${styleSize} ${styleColor} ${className}`
  return (
    <button
      type={type}
      className={classNames(
        `${styles}
      rounded-md flex gap-2 items-center justify-between shadow-sm
      focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`,
      )}
      onClick={onClick}
    >
      {rest.iconLeft !== undefined && rest.iconLeft}
      <span className={classNames('font-semibold')}>{content ?? children}</span>
      {rest.iconRight !== undefined && rest.iconRight}
    </button>
  )
}

export { Button }
