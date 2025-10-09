import Progress from '../../../ui/progress'

interface CardStatsProps {
  stats: {
    hp: number
    attack: number
    defense: number
    gen: number
  }
}

export default function CardStats({ stats }: CardStatsProps) {
  return (
    <div className="space-y-2 p-4 pb-2">
      <Progress value={stats.hp} label="HP" />
      <Progress value={stats.attack} label="Attack" />
      <Progress value={stats.defense} label="Defense" />
      <Progress value={stats.gen} label="Gen" />
    </div>
  )
}
