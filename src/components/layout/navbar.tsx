'use client'

import * as React from 'react'

import ButtonNavbar from '../button-navbar/button-navbar'

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed left-0 top-0 z-40 h-[124px] w-screen rounded-b-xl bg-navbar-background ${
        scrolled
          ? 'shadow-[0_8px_20px_rgba(15,23,42,0.12)]'
          : 'shadow-navbar'
      }`}
    >
      <div className="container mx-auto flex h-full items-center justify-between px-4 sm:px-6 md:px-10 lg:px-52">
        <div>
          <div className="flex flex-col space-y-[2px]">
            <h1 className="inline-block bg-gradient-to-r from-[#275FBB] to-[#932482] bg-clip-text font-poppins text-2xl font-semibold leading-[1.5] tracking-normal text-transparent">
              PokeDex
            </h1>

            <span className="font-poppins text-xs font-medium">
              Gotta catch ‘em all!
            </span>
          </div>
        </div>
        <ButtonNavbar />
        {/* Bottom fade overlay to emphasize separation on scroll */}
        <div
          className={`pointer-events-none absolute left-0 right-0 -bottom-3 h-6 rounded-b-xl bg-gradient-to-b from-[#0F172A]/10 to-transparent transition-opacity duration-300 ${
            scrolled ? 'opacity-0' : 'opacity-0'
          }`}
        />
      </div>
    </nav>
  )
}
export default React.memo(Navbar)
