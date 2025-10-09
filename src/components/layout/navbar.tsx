'use client';
// Libraries
import Link from 'next/link';

// Components
import { Button } from '../ui/button';
import EyeNavbarIcon from '../icons/eye-navbar';

// Context
import { useSeen } from 'src/context/seen-context';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const { seenList } = useSeen();
  const countPokemons = seenList.length;
  const pathname = usePathname();

  return (
    <nav className='shadow-navbar fixed h-[112px] top-0 left-0 z-40 w-screen  bg-navbar-background  xl:h-28 '>
      <div
        className='container 
                    mx-auto flex items-center justify-between
                    md:px-10
                    lg:px-52
                    px-4 sm:px-6 
                    h-26 sm:h-20 lg:h-24'
      >
        <div className='pt-6 pb-10 md:pt-[34px]'>
          <div className='flex flex-col space-y-[2px]'>
            <h1
              className=' text-2xl font-semibold font-poppins leading-[1.5] tracking-normal
    bg-gradient-to-r from-[#275FBB] to-[#932482]
    text-transparent bg-clip-text inline-block'
            >
              PokeDex
            </h1>

            <span className='text-xs font-medium font-poppins'>
              Gotta catch ‘em all!
            </span>
          </div>
        </div>
        <div className='pr-2 py-11'>
          {pathname !== '/seen' && (
            <Link href='/seen' className='text-sm font-poppins text-link'>
              <Button color='primary' size='s'>
                <EyeNavbarIcon />
                Seen ({countPokemons})
              </Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
