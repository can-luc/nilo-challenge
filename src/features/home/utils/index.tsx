import { Dispatch, useEffect } from 'react'

import { INITIAL_OFFSET } from '../constants'
import { PokemonAction } from '../states/actions'
import { PokemonState } from '../states/reducer'
import { PokemonsList } from '../types/pokemons-list'

function useInitPokemons(
  data: PokemonsList,
  state: PokemonState,
  dispatch: Dispatch<PokemonAction>,
) {
  const { pokemons } = state
  useEffect(() => {
    if (data && pokemons.length === 0) {
      dispatch({
        type: 'INIT',
        payload: {
          pokemons: data,
          offset: INITIAL_OFFSET + data.length,
        },
      })
    }
  }, [data, pokemons.length, dispatch])
}

function useAutoFetchMore(
  inView: boolean,
  state: PokemonState,
  handleFetchMore: () => void,
) {
  const { loadingMore, hasMore } = state
  useEffect(() => {
    if (inView && !loadingMore && hasMore) {
      handleFetchMore()
    }
  }, [inView, loadingMore, hasMore, handleFetchMore])
}

export { useInitPokemons, useAutoFetchMore }
