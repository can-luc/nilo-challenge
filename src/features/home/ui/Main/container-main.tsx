import React from 'react'

import Search from '../search'

import CardGrid from '../../../../components/shared/card/ui/card-grid'

const ContainerMain: React.FC<> = ({
  filtered,
  seenList,
}) => {
  const [searchInput, setSearchInput] = React.useState<string>('')
  const handleSearchChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchInput(e.target.value)
    },
    [],
  )

  return (
    <>
      <Search value={searchInput} onChange={handleSearchChange} />
      <CardGrid
        pokemons={filtered as unknown as Pokemon[]}
        seenList={seenList}
      />
    </>
  )
}

export { ContainerMain }
