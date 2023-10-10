import { ThemeTypes } from '.'

export const BUTTON_SIZES = {
  XS: 'xs',
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
  XL: 'xl',
}

export interface ButtonProps {
  children?: JSX.Element | string
  content?: string
  className?: string
  color?: ThemeTypes
  type?: 'button' | 'reset'
  size?: string
  iconLeft?: JSX.Element
  iconRight?: JSX.Element
  onClick?: () => void
}
