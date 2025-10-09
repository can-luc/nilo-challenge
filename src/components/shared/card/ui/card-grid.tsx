import { lazy, Suspense } from 'react'

import { Pokemon } from 'src/types/pokemon'

const Card = lazy(() => import('./card'))

interface CardGridProps {
  pokemons: Pokemon[]
  seenList: Pokemon[]
  allSeen?: boolean
}

export default function CardGrid({
  pokemons,
  seenList = [],
  allSeen = false,
}: CardGridProps) {
  return (
    <div className="grid grid-cols-1 gap-3 pt-6 md:grid-cols-2 md:gap-1.5 lg:grid-cols-3 lg:gap-8">
      <Suspense fallback={<div>Cargando tarjetas...</div>}>
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
      </Suspense>
    </div>
  )
}
