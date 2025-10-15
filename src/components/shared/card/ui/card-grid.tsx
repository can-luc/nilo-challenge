import React from 'react'

import dynamic from 'next/dynamic'

import SkeletonCard from 'src/components/skeletons/card'

import { Pokemon } from 'src/types/pokemon'

//const Card = lazy(() => import('./card'))

const Card = dynamic(() => import('./card'), {
  loading: () => <SkeletonCard />,
  ssr: true,
})

interface CardGridProps {
  pokemons: Pokemon[]
  seenList: Pokemon[]
  allSeen?: boolean
}

const CardGrid: React.FC<CardGridProps> = ({
  pokemons,
  seenList = [],
  allSeen = false,
}) => {
  return (
    <div className="grid grid-cols-1 gap-3 pt-6 md:grid-cols-2 md:gap-1.5 lg:grid-cols-3 lg:gap-8">
      {pokemons.map((pokemon, index) => {
        const { key, num, species, sprite, baseStats, types } = pokemon

        const formattedId = key ?? `${num}-${index}`
        return (
          <Card
            id={formattedId}
            species={species ?? key}
            num={num}
            sprite={sprite}
            baseStats={baseStats}
            types={types}
            seen={allSeen ? true : seenList.some((p) => p.id === key)}
            key={formattedId}
          />
        )
      })}
    </div>
  )
}
export default CardGrid
