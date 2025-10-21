import { useMemo } from 'react'

import { addSeen, clearLastAdded, clearSeen, removeSeen } from './seen.store'

export interface SeenActions {
  addSeen: typeof addSeen
  removeSeen: typeof removeSeen
  clearSeen: typeof clearSeen
  clearLastAdded: typeof clearLastAdded
}

export function useSeenActions(): SeenActions {
  // Stable reference to action functions
  return useMemo(
    () => ({ addSeen, removeSeen, clearSeen, clearLastAdded }),
    [],
  )
}
