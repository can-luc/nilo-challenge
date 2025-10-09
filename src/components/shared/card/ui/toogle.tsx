import EyeClosedIcon from '../../../icons/eye-closed';
import EyeOpenIcon from '../../../icons/eye-open';

interface ToogleProps {
  seen?: boolean;
  onClick?: () => void;
}
export default function Toogle({ seen = false, onClick }: ToogleProps) {
  return (
    <div
      className='absolute right-4 top-4'
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >
      {seen ? (
        <span className='flex items-center justify-center w-8 h-8 bg-success rounded-full shadow-md transition-all duration-300'>
          <EyeOpenIcon />
        </span>
      ) : (
        <span className='flex items-center justify-center w-8 h-8 bg-white border border-classic rounded-full shadow-md transition-all duration-300'>
          <EyeClosedIcon />
        </span>
      )}
    </div>
  );
}
