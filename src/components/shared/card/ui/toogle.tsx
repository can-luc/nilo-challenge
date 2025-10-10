import EyeClosedIcon from '../../../icons/eye-closed'
import EyeOpenIcon from '../../../icons/eye-open'

interface ToogleProps {
  seen?: boolean
  onClick?: () => void
}
export default function Toogle({ seen = false, onClick }: ToogleProps) {
  return (
    <div
      className="absolute right-4 top-4"
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >
      {seen ? (
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-success shadow-md transition-all duration-300">
          <EyeOpenIcon />
        </span>
      ) : (
        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-classic bg-white shadow-md transition-all duration-300">
          <EyeClosedIcon />
        </span>
      )}
    </div>
  )
}
