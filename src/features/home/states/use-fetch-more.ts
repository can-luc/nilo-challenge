'use client'
import { useEffect, useCallback, useReducer } from 'react'

import { useSuspenseQuery } from '@apollo/client'
import { useInView } from 'react-intersection-observer'

import { GET_ALL_POKEMON } from 'src/graphql/queries'
import { Pokemon } from 'src/types/pokemon'

import { pokemonReducer, PokemonState } from './reducer'

export const PAGE_SIZE = 10
export const INITIAL_OFFSET = 93

const getInitialState = (initialData: Pokemon[]): PokemonState => ({
  pokemons: initialData ?? [],
  loadingMore: false,
  hasMore: true,
  fetchMoreError: null,
  currentOffset: INITIAL_OFFSET + (initialData?.length ?? 0),
})

/**
 * Custom hook para manejar la carga paginada de pokemons con infinite scroll.
 * @param initialData Datos iniciales para poblar la lista de pokemons.
 * @returns Estado y funciones para manejar la carga de pokemons.
 * /
 */
export function useFetchMore(initialData: Pokemon[]) {
  const [state, dispatch] = useReducer(
    pokemonReducer,
    getInitialState(initialData),
  )
  interface PokemonsListMore {
    getAllPokemon: Pokemon[]
  }
  const { data, fetchMore } = useSuspenseQuery<PokemonsListMore>(
    GET_ALL_POKEMON,
    {
      variables: { offset: INITIAL_OFFSET, take: PAGE_SIZE },
      skip: !!initialData?.length,
    },
  )

  const getAllPokemon = data?.getAllPokemon ?? []

  // Inicializa los pokemons solo una vez con los datos de la query
  useEffect(() => {
    if (data && state.pokemons.length === 0) {
      dispatch({
        type: 'INIT',
        payload: {
          pokemons: getAllPokemon,
          offset: INITIAL_OFFSET + getAllPokemon.length,
        },
      })
    }
  }, [data, state.pokemons.length])

  // Callback para cargar más pokemons
  const handleFetchMore = useCallback(async () => {
    dispatch({ type: 'FETCH_MORE_START' })
    try {
      const res = await fetchMore({
        variables: { offset: state.currentOffset, take: PAGE_SIZE },
      })
      const newPokemons = res?.data?.getAllPokemon ?? []
      if (newPokemons.length === 0) {
        dispatch({ type: 'NO_MORE' })
      } else {
        dispatch({ type: 'FETCH_MORE_SUCCESS', payload: newPokemons })
      }
    } catch (err) {
      dispatch({ type: 'FETCH_MORE_ERROR', payload: err as Error })
    }
  }, [fetchMore, state.currentOffset])

  // Dispara fetchMore cuando el sentinel está en vista
  const { ref, inView } = useInView({ threshold: 0, triggerOnce: false })

  useEffect(() => {
    if (inView && !state.loadingMore && state.hasMore) {
      handleFetchMore()
    }
  }, [inView, state.loadingMore, state.hasMore, handleFetchMore])

  return {
    pokemons: state.pokemons,
    loadingMore: state.loadingMore,
    hasMore: state.hasMore,
    fetchMoreError: state.fetchMoreError,
    ref,
  }
}
