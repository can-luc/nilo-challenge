import { useCallback, useEffect, useReducer } from 'react'

import { useSuspenseQuery } from '@apollo/client'

import { GET_ALL_POKEMON } from 'src/graphql/queries'

import { INITIAL_OFFSET, PAGE_SIZE } from '../constants'
import { pokemonReducer, PokemonState } from '../states/reducer'
import { PokemonsList } from '../types/pokemons-list'
import { handleFetchError, initializeState } from '../utils'

interface PokemonsListMore {
  getAllPokemon: PokemonsList
}

/**
 * Función para obtener el estado inicial del reducer.
 * Calcula el estado inicial basado en los datos iniciales proporcionados.
 *
 * @param initialData - Lista inicial de Pokémon.
 * @returns Estado inicial para el reducer.
 */
const getInitialState = (initialData: PokemonsList): PokemonState => ({
  pokemons: initialData ?? [], // Lista inicial de Pokémon.
  loadingMore: false, // Indica si se están cargando más datos.
  hasMore: true, // Indica si hay más datos disponibles para cargar.
  fetchMoreError: null, // Error ocurrido durante la carga de más datos.
  currentOffset: INITIAL_OFFSET + (initialData?.length ?? 0), // Offset inicial basado en los datos iniciales.
})

/**
 * Hook para manejar la paginación de Pokémon.
 * Permite cargar más datos de Pokémon cuando el usuario llega al final de la lista.
 *
 * @param initialData - Lista inicial de Pokémon obtenida desde el servidor.
 * @returns Estado actual, funciones para manejar la paginación y errores.
 */
export function usePokemonPagination(initialData: PokemonsList) {
  // Usa un reducer para manejar el estado de la paginación.
  const [state, dispatch] = useReducer(
    pokemonReducer,
    getInitialState(initialData),
  )

  // Usa Apollo Client para realizar consultas a la API GraphQL.
  const { data, fetchMore } = useSuspenseQuery<PokemonsListMore>(
    GET_ALL_POKEMON,
    {
      variables: { offset: INITIAL_OFFSET, take: PAGE_SIZE }, // Parámetros iniciales para la consulta.
      skip: !!initialData?.length, // Omite la consulta si ya hay datos iniciales.
    },
  )

  /**
   * Efecto para inicializar el estado del reducer cuando se obtienen nuevos datos.
   * Se ejecuta cada vez que los datos de la consulta cambian.
   */
  useEffect(() => {
    initializeState(data?.getAllPokemon, dispatch)
  }, [data, dispatch])

  /**
   * Función para cargar más datos de Pokémon.
   * Se ejecuta cuando el usuario llega al final de la lista.
   */
  const fetchMorePaginated = useCallback(async () => {
    dispatch({ type: 'FETCH_MORE_START' }) // Indica que la carga de más datos ha comenzado.

    try {
      const res = await fetchMore({
        variables: {
          offset: state.currentOffset, // Offset actual para la consulta.
          take: PAGE_SIZE, // Cantidad de datos a cargar.
        },
      })
      const newPokemons = res?.data?.getAllPokemon ?? [] // Obtiene los nuevos datos de Pokémon.
      dispatch({
        type: newPokemons.length === 0 ? 'NO_MORE' : 'FETCH_MORE_SUCCESS', // Actualiza el estado según los datos obtenidos.
        payload: newPokemons,
      })
    } catch (err) {
      handleFetchError(err, dispatch) // Maneja errores durante la carga de más datos.
    }
  }, [fetchMore, state.currentOffset])

  /**
   * Retorna el estado actual de la paginación y las funciones para manejarla.
   */
  return {
    pokemons: state.pokemons, // Lista actual de Pokémon.
    loadingMore: state.loadingMore, // Indica si se están cargando más datos.
    hasMore: state.hasMore, // Indica si hay más datos disponibles para cargar.
    fetchMoreError: state.fetchMoreError, // Error ocurrido durante la carga de más datos.
    fetchMore: fetchMorePaginated, // Función para cargar más datos.
  }
}
