import React from 'react'

import SearchIcon from 'src/components/icons/search'

interface SearchProps {
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Search({ value, onChange }: SearchProps) {
  return (
    <>
      <div className="w-full max-w-[20rem] pt-6 md:max-w-[41.5rem] md:pt-10 lg:max-w-[64.7rem]">
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 leading-none text-search-text">
            <SearchIcon />
          </span>
          <input
            value={value}
            onChange={onChange}
            type="text"
            placeholder="Search for Pokémon by name..."
            className="text-carbon-text h-12 w-full rounded-lg border border-search-border pl-10 font-poppins text-[11px] font-normal leading-none tracking-normal"
          />
        </div>
      </div>
      {/* <div className='w-full px-4 sm:px-10 md:px-48 xl:px-36 2xl:px-32 md:pt-6 '>
      <div className='relative'>
        <span className='absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8] leading-none'>
          <SearchIcon />
        </span>
        <input
          value={value}
          onChange={onChange}
          type='text'
          placeholder='Search for Pokémon by name...'
          className='w-full pl-10 lg:h-12 border border-gray-300 rounded-lg font-poppins font-normal text-[11px] leading-none tracking-normal text-[#94A3B8]'
        />
      </div>
    </div> */}
    </>
  )
}
