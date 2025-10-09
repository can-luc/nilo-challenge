import Card from 'src/components/shared/card/ui/card'

interface CardGridProps {
  filteredPokemons: any[]
  seenList: { id: number | string }[]
}

export default function CardGrid({
  filteredPokemons,
  seenList,
}: CardGridProps) {
  return (
    // <div className='p-8 max-w-screen-lg pt-4 mr-3  sm:px-10 md:px-40 xl:px-0 grid grid-cols-1 gap-7 sm:grid-cols-2 md:gap-5 xl:gap-5 xl:grid-cols-3'></div>
    <div className="grid grid-cols-1 gap-3 pt-6 md:grid-cols-2 md:gap-1.5 lg:grid-cols-3 lg:gap-8">
      {filteredPokemons.map((pokemon) => (
        <Card
          key={pokemon.key}
          id={pokemon.key}
          species={pokemon.key}
          num={pokemon.num}
          imgSrc={pokemon.sprite}
          stats={pokemon.baseStats}
          type={pokemon.types}
          color={pokemon.color}
          seen={seenList.some((p) => p.id === pokemon.key)}
        />
      ))}
    </div>
  )
}
