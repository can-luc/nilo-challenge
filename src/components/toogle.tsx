export default function Toogle(seen: boolean = false) {
  return (
    <div className='absolute right-4 top-4'>
      {seen ? (
        <span className='flex items-center justify-center w-8 h-8 bg-[#22C55E] rounded-full shadow-md'>
          {/* eye open */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5 text-white'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path d='M1.5 12s4-7 10.5-7 10.5 7 10.5 7-4 7-10.5 7S1.5 12 1.5 12Z' />
            <circle
              cx='12'
              cy='12'
              r='3'
              fill='white'
              stroke='currentColor'
              strokeWidth='2'
            />
          </svg>
        </span>
      ) : (
        <span className='flex items-center justify-center w-8 h-8 bg-white border border-[#3784F7] rounded-full shadow-md'>
          {/* eye closed */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5 text-[#3784F7]'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              d='M17.94 17.94A10.06 10.06 0 0 1 12 19.5c-6.5 0-10.5-7.5-10.5-7.5a18.2 18.2 0 0 1 4.06-5.44M9.88 9.88A3 3 0 0 1 12 9c1.66 0 3 1.34 3 3 0 .41-.08.8-.22 1.16M3 3l18 18'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </span>
      )}
    </div>
  );
}
