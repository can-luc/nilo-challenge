import React from 'react'

import Progress from '../../../ui/progress'

interface CardStatsProps {
  stats: {
    hp: number
    attack: number
    defense: number
    gen: number
  }
}

const CardStats: React.FC<CardStatsProps> = ({ stats }) => {
  const { hp, attack, defense, gen } = stats
  return (
    <div className="space-y-2 p-4 pb-2">
      <Progress value={hp} label="HP" />
      <Progress value={attack} label="Attack" />
      <Progress value={defense} label="Defense" />
      <Progress value={gen} label="Gen" />
    </div>
  )
}
export default CardStats
