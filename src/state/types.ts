import { Pokemon } from 'src/types/pokemon'

export interface SeenContextType {
  seenList: Pokemon[]
  lastAdded?: Pokemon | null
  addSeen: (pokemon: Pokemon) => void
  clearSeen: () => void
  removeSeen: (id: string) => void
  clearLastAdded: () => void
}
