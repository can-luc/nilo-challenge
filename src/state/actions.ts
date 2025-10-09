import { Pokemon } from 'src/types/pokemon'

export type SeenAction =
  | { type: 'INIT'; payload: Pokemon[] }
  | { type: 'ADD'; payload: { data: Pokemon } }
  | { type: 'REMOVE'; payload: number | string }
  | { type: 'CLEAR' }
  | { type: 'CLEAR_LAST_ADDED' }
