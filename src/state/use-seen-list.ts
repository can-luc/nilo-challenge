import { useReactiveVar } from '@apollo/client'

import { seenListVar } from './seen.store'

export function useSeenList() {
  return useReactiveVar(seenListVar)
}
