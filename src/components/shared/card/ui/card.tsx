'use client'
import { useState } from 'react'

// Components

import Toogle from './toogle'
import CardImage from './card-image'
import CardHeader from './card-header'
import CardStats from './card-stats'

//Hooks
import { useCardToggle } from '../hooks/use-card-toogle'

// Interfaces
import { CardProps } from '../entity'

export default function Card({
  id,
  species,
  num,
  type,
  imgSrc,
  stats,
  seen = false,
  color,
}: CardProps) {
  const [imgError, setImgError] = useState(false)
  const handleToggle = useCardToggle({
    id,
    species,
    num,
    type,
    imgSrc,
    stats,
    seen,
    color,
  })

  return (
    <div className={`relative w-80 overflow-hidden rounded bg-white shadow-lg`}>
      {seen && (
        <div className="absolute left-0 top-0 z-10 h-3 w-full rounded-t bg-success"></div>
      )}
      <div className="bg-success"></div>
      <Toogle seen={seen} onClick={handleToggle} />
      <CardImage
        imgSrc={imgSrc}
        alt={species ?? 'pokemon image'}
        imgError={imgError}
        setImgError={setImgError}
      />
      <CardHeader
        num={num ?? '#000'}
        species={species ?? 'Unknown'}
        displayType={type ?? [{ name: 'Unknown' }]}
        color={color ?? 'gray'}
      />

      <CardStats stats={stats ?? { hp: 0, attack: 0, defense: 0, gen: 0 }} />
    </div>
  )
}
