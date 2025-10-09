import { Badge } from '../../../ui/badge'

//Utils
import { getTypeColor } from '../utils'

interface CardHeaderProps {
  num: string
  species: string
  displayType: [{ name: string }]
  color: string
}

export default function CardHeader({
  num,
  species,
  displayType,
  color,
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
          {displayType.map((type) => (
            <Badge key={type.name} color={getTypeColor(type.name)} size="s">
              {type.name.toUpperCase()}
            </Badge>
          ))}
        </div>
      </div>
    </>
  )
}
