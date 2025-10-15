'use client'

import * as React from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { useSeen } from 'src/state/use-seen'

import EyeNavbarIcon from '../icons/eye-navbar'
import { Button } from '../ui/button'

const Navbar: React.FC = () => {
  const { seenList } = useSeen()
  const countPokemons = seenList.length
  const pathname = usePathname()

  return (
    <nav className="xl:h-28 fixed left-0 top-0 z-40 h-[112px] w-screen bg-navbar-background shadow-navbar">
      <div className="sm:px-6 h-26 sm:h-20 container mx-auto flex items-center justify-between px-4 md:px-10 lg:h-24 lg:px-52">
        <div className="pb-10 pt-6 md:pt-[34px]">
          <div className="flex flex-col space-y-[2px]">
            <h1 className="inline-block bg-gradient-to-r from-[#275FBB] to-[#932482] bg-clip-text font-poppins text-2xl font-semibold leading-[1.5] tracking-normal text-transparent">
              PokeDex
            </h1>

            <span className="font-poppins text-xs font-medium">
              Gotta catch ‘em all!
            </span>
          </div>
        </div>
        <div className="py-11 pr-2">
          {pathname !== '/seen' && (
            <Link href="/seen" className="text-link font-poppins text-sm">
              <Button color="primary" size="s">
                <EyeNavbarIcon />
                Seen ({countPokemons})
              </Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}
export default Navbar
