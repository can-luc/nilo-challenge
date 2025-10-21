import React from 'react'

import SearchIcon from 'src/components/icons/search'

interface SearchProps {
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Search: React.FC<SearchProps> = ({ value, onChange }) => {
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
    </>
  )
}

export default React.memo(Search)
