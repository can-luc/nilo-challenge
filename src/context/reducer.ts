import { SeenPokemon } from './entity';

export type SeenState = {
  seenList: SeenPokemon[];
  lastAdded: SeenPokemon | null;
};

export type SeenAction =
  | { type: 'INIT'; payload: SeenPokemon[] }
  | { type: 'ADD'; payload: SeenPokemon }
  | { type: 'REMOVE'; payload: number | string }
  | { type: 'CLEAR' }
  | { type: 'CLEAR_LAST_ADDED' };

export function seenReducer(state: SeenState, action: SeenAction): SeenState {
  switch (action.type) {
    case 'INIT':
      return { ...state, seenList: action.payload };
    case 'ADD':
      if (state.seenList.some((p) => p.id === action.payload.id)) return state;
      return {
        ...state,
        seenList: [action.payload, ...state.seenList],
        lastAdded: action.payload,
      };
    case 'REMOVE':
      return {
        ...state,
        seenList: state.seenList.filter((p) => p.id !== action.payload),
      };
    case 'CLEAR':
      return { ...state, seenList: [] };
    case 'CLEAR_LAST_ADDED':
      return { ...state, lastAdded: null };
    default:
      return state;
  }
}
