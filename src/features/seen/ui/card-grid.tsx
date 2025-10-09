import Card from 'src/components/shared/card/ui/card'

interface CardGridProps {
  seenList: Array<{
    id: number | string
    species: string
    num: string
    imgSrc: string
    stats: any
    type: string[]
    color: string
  }>
}

export default function CardGrid({ seenList }: CardGridProps) {
  return (
    <div className="grid grid-cols-1 gap-3 pt-6 md:grid-cols-2 md:gap-1.5 lg:grid-cols-3 lg:gap-8">
      {seenList.map((pokemon) => (
        <Card
          key={pokemon.id}
          id={pokemon.id}
          species={pokemon.species}
          num={pokemon.num}
          imgSrc={pokemon.imgSrc}
          stats={pokemon.stats}
          type={pokemon.type && pokemon.type.length > 0 ? pokemon.type[0] : ''}
          color={pokemon.color}
          seen={true}
        />
      ))}
    </div>
  )
}
