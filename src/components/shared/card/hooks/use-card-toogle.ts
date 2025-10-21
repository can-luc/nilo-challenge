import { useCallback } from 'react'

import { useSeenActions } from 'src/state/use-seen-actions'

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
  const { addSeen, removeSeen } = useSeenActions()

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
