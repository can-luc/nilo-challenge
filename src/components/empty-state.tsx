import Link from 'next/link';
import { Button } from './ui/button';

export default function EmptyState() {
  return (
    <div className='w-full max-w-xs mx-auto rounded-2xl overflow-hidden bg-white shadow-lg flex flex-col items-center p-6'>
      {/* icon eye closed */}
      <div className='flex items-center justify-center mb-4 mt-2'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-10 w-10 text-[#3784F7]'
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
      </div>
      <span className='font-poppins font-bold text-lg text-[#0F172A] mb-2 text-center'>
        No Pokémon Seen Yet
      </span>
      <div className='text-[#0F172A] text-center font-poppins text-base font-normal mb-6'>
        You haven’t marked any Pokémon as seen yet. Start exploring and click
        the eye icon on Pokémon cards to track your discoveries!
      </div>
      <Link href='/'>
        <Button color='primary' size='md'>
          Explore Pokémon
        </Button>
      </Link>
    </div>
  );
}
