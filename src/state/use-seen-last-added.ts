import { useReactiveVar } from '@apollo/client'

import { seenLastAddedVar } from './seen.store'

export function useSeenLastAdded() {
  return useReactiveVar(seenLastAddedVar)
}
