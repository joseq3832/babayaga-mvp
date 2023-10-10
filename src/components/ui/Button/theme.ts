const theme = new Map()

theme.set('primary', {
  bg: 'bg-primary',
  border: 'border border-primary',
  textColor: 'text-white',
  focusRing: 'focus:ring-primary',
  hoverBg: 'hover:bg-red-500',
})
theme.set('success', {
  bg: 'bg-emerald-500',
  border: 'border border-emerald-500',
  textColor: 'text-white',
  focusRing: 'focus:ring-emerald-500',
  hoverBg: 'hover:bg-emerald-400',
})
theme.set('default', {
  bg: 'bg-gray-50',
  border: 'border border-gray-200',
  textColor: 'text-gray-800',
  focusRing: 'focus:ring-gray-200',
  hoverBg: 'hover:bg-white',
})
theme.set('dark', {
  bg: 'bg-gray-600',
  border: 'border border-gray-600',
  textColor: 'text-white',
  focusRing: 'focus:ring-gray-600',
  hoverBg: 'hover:bg-gray-700',
})
theme.set('blue', {
  bg: 'bg-latam-blue',
  border: 'border border-latam-blue',
  textColor: 'text-white',
  focusRing: 'focus:ring-latam-blue',
  hoverBg: 'hover:bg-latam-blue',
})
theme.set('light', {
  bg: 'bg-white',
  border: 'border border-gray-300',
  textColor: 'text-gray-900',
  focusRing: 'focus:ring-gray-200',
  hoverBg: 'hover:bg-white',
})

export type ThemeTypes =
  | 'primary'
  | 'success'
  | 'default'
  | 'dark'
  | 'blue'
  | 'light'

const useTheme = (key: ThemeTypes) => {
  return theme.get(key)
}

export { useTheme }
