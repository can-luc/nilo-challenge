import IconCheck from 'src/components/icons/check';

interface BannerProps {
  message: string;
  show?: boolean;
}

export default function Banner({ message, show }: BannerProps) {
  return (
    <div className='px-2 fixed top-16 left-0 w-full flex justify-center z-50'>
      <div
        className={`
          w-full bg-success text-white rounded-xl flex items-center gap-2 px-4 py-3
          transition-all duration-500 ease-in-out
          ${show ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}
          pointer-events-auto
        `}
      >
        {' '}
        <IconCheck />
        <span className='font-poppins text-base'>¡Agregaste a {message}!</span>
      </div>
    </div>
  );
}
