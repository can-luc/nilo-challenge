'use client'
import React from 'react'

import Hero from 'src/components/shared/hero/hero'

import ErrorState from 'src/components/error-state'
import SkeletonCard from 'src/components/skeletons/card'

import { useSeen } from 'src/state/use-seen'
import { Pokemon } from 'src/types/pokemon'

import CardGrid from '../../../components/shared/card/ui/card-grid'
import { DURATION_BANNER, NOT_FOUND_POKEMONS } from '../constants'
import { useBanner } from '../hooks/use-banner'
import { useDebouncedFilter } from '../hooks/use-debounced-filter'
import { useFetchMore } from '../states/use-fetch-more'
import { PokemonsList } from '../types/pokemons-list'

import Banner from './banner'
import Search from './search'
import SearchInfo from './search-info'

interface ContainerHomeProps {
  initialData: PokemonsList
}

const ContainerHome: React.FC<ContainerHomeProps> = ({ initialData }) => {
  const [searchInput, setSearchInput] = React.useState<string>('')
  const { seenList, lastAdded, clearLastAdded } = useSeen()

  const showBanner = useBanner(lastAdded, clearLastAdded, {
    duration: DURATION_BANNER,
  })

  // Infinite scroll hook
  const { pokemons, loadingMore, hasMore, ref } = useFetchMore(initialData)

  const { filtered, isTyping } = useDebouncedFilter<Pokemon>(
    pokemons,
    searchInput,
    'species',
  )

  const countPokemons = React.useMemo(() => filtered.length, [filtered])

  if (countPokemons === NOT_FOUND_POKEMONS) {
    return <ErrorState title={'There are no Pokémons to SEE'} isEmpty={false} />
  }

  return (
    <>
      {showBanner && lastAdded && (
        <Banner message={lastAdded.species ?? 'Unknown'} show={true} />
      )}
      <div className="pt-2 md:pt-6">
        <Hero />
      </div>

      <Search
        value={searchInput}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchInput(e.target.value)
        }
      />

      <div className="px-4 pt-6">
        <SearchInfo search={searchInput} pokemonsCount={filtered.length} />
      </div>

      {isTyping ? (
        <SkeletonCard />
      ) : (
        <CardGrid
          pokemons={filtered as unknown as Pokemon[]}
          seenList={seenList}
        />
      )}
      {hasMore && (
        <div
          className="sm:grid-cols-2 xl:grid-cols-3 grid w-full grid-cols-1 gap-4"
          ref={ref}
        >
          {loadingMore && <SkeletonCard />}
        </div>
      )}
    </>
  )
}

export default ContainerHome
