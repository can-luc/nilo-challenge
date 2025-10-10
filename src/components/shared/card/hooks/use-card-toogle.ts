import { useCallback } from 'react'

import { useSeen } from 'src/state/use-seen'

import { CardProps } from '../ui/card'

export function useCardToggle({
  id,
  species,
  num,
  types,
  sprite,
  baseStats,
  seen,
}: CardProps): () => void {
  const { addSeen, removeSeen } = useSeen()

  const handleToggle = useCallback(() => {
    if (seen) {
      removeSeen(id)
    } else {
      addSeen({
        id,
        species,
        num,
        sprite,
        types,
        baseStats,
      })
    }
  }, [seen, removeSeen, addSeen, id, species, num, types, sprite, baseStats])

  return handleToggle
}
