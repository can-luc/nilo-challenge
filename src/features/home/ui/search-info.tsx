interface SearchInfoProps {
  search: string
  pokemonsCount: number
}

const NOT_POKEMONS = 0

export default function SearchInfo({ search, pokemonsCount }: SearchInfoProps) {
  const POKEMONS_COUNT = pokemonsCount
  if (!search) {
    return (
      <h3 className="font-poppins text-sm font-normal tracking-normal text-primary">
        Showing {POKEMONS_COUNT} Pokémons
      </h3>
    )
  }
  if (search && POKEMONS_COUNT === NOT_POKEMONS) {
    return (
      <p className="text-red-500">No Pokémon found for &quot;{search}&quot;</p>
    )
  }
  return (
    <h3 className="font-poppins text-sm font-normal tracking-normal text-primary">
      Found {POKEMONS_COUNT} Pokémons matching &quot;{search}&quot;
    </h3>
  )
}
