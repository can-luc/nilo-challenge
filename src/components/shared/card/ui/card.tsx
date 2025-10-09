'use client'
import { useState } from 'react'

import { Pokemon } from 'src/types/pokemon'

import { useCardToggle } from '../hooks/use-card-toogle'

import CardHeader from './card-header'
import CardImage from './card-image'
import CardStats from './card-stats'
import Toogle from './toogle'

export interface CardProps extends Pokemon {
  id: string
  seen?: boolean
  key?: string
}

export default function Card({
  id,
  species,
  num,
  types,
  sprite,
  baseStats,
  seen = false,
}: CardProps) {
  const [imgError, setImgError] = useState(false)
  const handleToggle = useCardToggle({
    id,
    species,
    num,
    types,
    sprite,
    baseStats,
    seen,
  })

  return (
    <div className={`relative w-80 overflow-hidden rounded bg-white shadow-lg`}>
      {seen && (
        <div className="absolute left-0 top-0 z-10 h-3 w-full rounded-t bg-success" />
      )}
      <div className="bg-success" />
      <Toogle seen={seen} onClick={handleToggle} />
      <CardImage
        sprite={sprite}
        alt={species ?? 'pokemon image'}
        imgError={imgError}
        setImgError={setImgError}
      />
      <CardHeader
        num={num ?? '#000'}
        species={species ?? 'Unknown'}
        displayType={types ?? [{ name: 'Unknown' }]}
      />

      <CardStats
        stats={
          baseStats ?? {
            hp: 0,
            attack: 0,
            defense: 0,
            gen: 0,
          }
        }
      />
    </div>
  )
}
