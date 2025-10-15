import React from 'react'

import { NOT_FOUND_POKEMONS } from '../constants'

interface SearchInfoProps {
  search: string
  pokemonsCount: number
}

const SearchInfo: React.FC<SearchInfoProps> = ({ search, pokemonsCount }) => {
  if (!search) {
    return (
      <h3 className="font-poppins text-sm font-normal tracking-normal text-primary">
        Showing {pokemonsCount} Pokémons
      </h3>
    )
  }
  if (search && pokemonsCount === NOT_FOUND_POKEMONS) {
    return (
      <p className="text-red-500">No Pokémon found for &quot;{search}&quot;</p>
    )
  }
  return (
    <h3 className="font-poppins text-sm font-normal tracking-normal text-primary">
      Found {pokemonsCount} Pokémons matching &quot;{search}&quot;
    </h3>
  )
}
export default SearchInfo
