import { classNames } from '@/core/utils'
import { AppleIcon, FacebookIcon, GoogleIcon } from '../icons'

interface SsoButtonProps {
  type: 'Google' | 'Facebook' | 'Apple'
}

export const SsoButton = ({ type }: SsoButtonProps): JSX.Element => {
  return (
    <button
      className={classNames(
        type === 'Google' ? 'hover:bg-provider-google/10' : '',
        type === 'Facebook' ? 'hover:bg-provider-facebook/10' : '',
        type === 'Apple' ? 'hover:bg-provider-apple/10' : '',
        'border border-gray-200 flex justify-center py-2 rounded-lg hover:border-transparent',
      )}
      type="button"
    >
      <div className="h-6 w-6">
        {type === 'Google' && <GoogleIcon />}
        {type === 'Facebook' && <FacebookIcon />}
        {type === 'Apple' && <AppleIcon />}
      </div>
    </button>
  )
}
