import React from 'react'

import IconCheck from 'src/components/icons/check'

interface BannerProps {
  message: string
  show?: boolean
}
const Banner: React.FC<BannerProps> = ({ message, show = false }) => {
  return (
    <div className="fixed left-0 top-24 z-50 flex w-full justify-center px-2">
      <div
        className={`flex w-full items-center gap-2 rounded-xl bg-success px-4 py-3 text-white transition-all duration-500 ease-in-out ${show ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'} pointer-events-auto`}
      >
        {' '}
        <IconCheck />
        <span className="font-poppins text-base">¡Agregaste a {message}!</span>
      </div>
    </div>
  )
}
export default Banner
