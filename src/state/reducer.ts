import { Pokemon } from 'src/types/pokemon'

import { SeenAction } from './actions'

export interface SeenState {
  data: Pokemon[]
  lastAdded: Pokemon | null
}

export function seenReducer(state: SeenState, action: SeenAction): SeenState {
  switch (action.type) {
    case 'INIT':
      return {
        ...state,
        data: action.payload,
      }
    case 'ADD':
      if (state.data.some((p) => p.id === action.payload.data.id)) return state
      return {
        ...state,
        data: [...state.data, action.payload.data],
        lastAdded: action.payload.data,
      }
    case 'REMOVE':
      return {
        ...state,
        data: state.data.filter((p) => p.id !== action.payload),
      }
    case 'CLEAR':
      return { ...state, data: [] }
    case 'CLEAR_LAST_ADDED':
      return { ...state, lastAdded: null }
    default:
      return state
  }
}
