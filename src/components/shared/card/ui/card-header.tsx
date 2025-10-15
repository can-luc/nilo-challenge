import React from 'react'

import { Badge } from 'src/components/ui/badge'

import { getTypeColor } from '../utils'

interface CardHeaderProps {
  num: string
  species: string
  displayType: [{ name: string }]
}

const CardHeader: React.FC<CardHeaderProps> = ({
  num,
  species,
  displayType,
}) => {
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
export default CardHeader
