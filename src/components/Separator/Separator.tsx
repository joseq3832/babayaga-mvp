interface SeparatorProps {
  label?: string
}

export const Separator = ({ label }: SeparatorProps): JSX.Element => {
  return (
    <div className="flex items-center justify-center bg-white relative text-gray-600 text-sm">
      <span className="absolute top-1/2 z-0 border-t border-gray-300 w-full h-full" />
      <span className="z-10 bg-white px-1.5">{label}</span>
    </div>
  )
}
