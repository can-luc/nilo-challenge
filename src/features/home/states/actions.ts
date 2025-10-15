import { PokemonsList } from '../types/pokemons-list'

export type PokemonAction =
  | {
      type: 'INIT'
      payload: { pokemons: PokemonsList; offset: number }
    }
  | { type: 'FETCH_MORE_START' }
  | { type: 'FETCH_MORE_SUCCESS'; payload: PokemonsList }
  | { type: 'FETCH_MORE_ERROR'; payload: Error }
  | { type: 'NO_MORE' }
