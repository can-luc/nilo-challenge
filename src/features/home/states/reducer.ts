import { Pokemon } from 'src/types/pokemon'

import { PokemonAction } from './actions'

export interface PokemonState {
  pokemons: Pokemon[] // <-- solo el array
  loadingMore: boolean
  hasMore: boolean
  fetchMoreError: Error | null
  currentOffset: number
}

export function pokemonReducer(
  state: PokemonState,
  action: PokemonAction,
): PokemonState {
  switch (action.type) {
    case 'INIT':
      return {
        ...state,
        pokemons: action.payload.pokemons, // <-- solo el array
        currentOffset: action.payload.offset,
      }
    case 'FETCH_MORE_START':
      return {
        ...state,
        loadingMore: true,
        fetchMoreError: null,
      }
    case 'FETCH_MORE_SUCCESS':
      return {
        ...state,
        pokemons: [...state.pokemons, ...action.payload],
        loadingMore: false,
        currentOffset: state.currentOffset + action.payload.length,
      }
    case 'FETCH_MORE_ERROR':
      return {
        ...state,
        loadingMore: false,
        fetchMoreError: action.payload,
      }
    case 'NO_MORE':
      return {
        ...state,
        hasMore: false,
        loadingMore: false,
      }
    default:
      return state
  }
}
