//const ContainerHome: React.FC<ContainerHomeProps> = ({ initialData }) => {

import React from 'react'

import CardGrid from 'src/components/shared/card/ui/card-grid'

import { Pokemon } from 'src/types/pokemon'

import Search from '../search'
import SearchInfo from '../Searchinfo/search-info'
import { useFuzzySearch } from '../../hooks/use-fuzzy-search'

interface HeaderContainerProps {
  pokemons: Pokemon[]
}

const HeaderContainer: React.FC<HeaderContainerProps> = ({ pokemons }) => {
  const [searchInput, setSearchInput] = React.useState<string>('')

  const { results, loading } = useFuzzySearch(searchInput, 30)

  const handleSearchChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchInput(e.target.value)
    },
    [],
  )

  return (
    <>
      <Search value={searchInput} onChange={handleSearchChange} />
      <div className="px-4 pt-6">
        <SearchInfo
          search={searchInput}
          pokemonsCount={
            searchInput && searchInput.length >= 3 ? results.length : pokemons.length
          }
        />
      </div>
      <CardGrid
        pokemons={
          (searchInput && searchInput.length >= 3
            ? results
            : pokemons) as unknown as Pokemon[]
        }
      />
    </>
  )
}
export default React.memo(HeaderContainer)
