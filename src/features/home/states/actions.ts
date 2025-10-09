import { Pokemon } from 'src/types/pokemon'

export type PokemonAction =
  | {
      type: 'INIT'
      payload: { pokemons: Pokemon[]; offset: number }
    }
  | { type: 'FETCH_MORE_START' }
  | { type: 'FETCH_MORE_SUCCESS'; payload: Pokemon[] }
  | { type: 'FETCH_MORE_ERROR'; payload: Error }
  | { type: 'NO_MORE' }
