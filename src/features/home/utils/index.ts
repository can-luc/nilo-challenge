import { INITIAL_OFFSET } from '../constants'
import { PokemonsList } from '../types/pokemons-list'

const initializeState = (
  data: PokemonsList | undefined,
  dispatch: Function,
) => {
  if (data && data.length > 0) {
    dispatch({
      type: 'INIT',
      payload: {
        pokemons: data,
        offset: INITIAL_OFFSET + data.length,
      },
    })
  }
}

const handleFetchError = (err: unknown, dispatch: Function) => {
  dispatch({ type: 'FETCH_MORE_ERROR', payload: err as Error })
}

export { initializeState, handleFetchError }
