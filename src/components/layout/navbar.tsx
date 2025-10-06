import Link from 'next/link';
import { Button } from '../ui/button';

export default function Navbar() {
  return (
    <nav className='fixed top-0 left-0 z-50 w-full  p-4 bg-[#F8FAFC] '>
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='text-2xl font-semibold font-poppins leading-[1.5] tracking-normal bg-gradient-to-r from-blue-700 via-purple-700 to-purple-600 text-transparent bg-clip-text text-inline-block'>
            PokeDex
          </h1>

          <span className='text-xs'>Gotta catch ‘em all!</span>
        </div>
        <Link href='/seen' className='text-sm font-poppins text-[#6B7280]'>
        <Button color='primary' size='sm'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
            />
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
            />
          </svg>
          Seen (0)
        </Button>
        </Link>
      </div>
    </nav>
  );
}
