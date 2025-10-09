import { Badge } from '../../../ui/badge'
import { getTypeColor } from '../utils'

interface CardHeaderProps {
  num: string
  species: string
  displayType: [{ name: string }]
}

export default function CardHeader({
  num,
  species,
  displayType,
}: CardHeaderProps) {
  const formatSpecies = species.charAt(0).toUpperCase() + species.slice(1)
  return (
    <>
      <div className="flex items-center justify-center pt-4">
        <span className="radius-[8px] bg-grayLight text-sm font-bold leading-[1.5] tracking-normal text-secondary">
          #00{num}
        </span>
      </div>
      <div className="flex flex-col items-center justify-center pt-3">
        <div className="mb-2 text-base font-semibold">{formatSpecies}</div>
        <div className="flex gap-2 pt-3">
          {displayType.map(({ name }) => (
            <Badge key={name} color={getTypeColor(name)} size="s">
              {name.toUpperCase()}
            </Badge>
          ))}
        </div>
      </div>
    </>
  )
}
