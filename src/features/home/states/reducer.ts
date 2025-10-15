import { PokemonsList } from '../types/pokemons-list'

import { PokemonAction } from './actions'

/**
 * Interfaz que define el estado de la paginación de Pokémon.
 */
export interface PokemonState {
  pokemons: PokemonsList // Lista de Pokémon actualmente cargados.
  loadingMore: boolean // Indica si se están cargando más datos.
  hasMore: boolean // Indica si hay más datos disponibles para cargar.
  fetchMoreError: Error | null // Error ocurrido durante la carga de más datos.
  currentOffset: number // Offset actual para la próxima consulta.
}

/**
 * Reducer para manejar el estado de la paginación de Pokémon.
 * Actualiza el estado según las acciones recibidas.
 *
 * @param state - Estado actual de la paginación.
 * @param action - Acción que define cómo se debe actualizar el estado.
 * @returns Estado actualizado.
 */
export function pokemonReducer(
  state: PokemonState,
  action: PokemonAction,
): PokemonState {
  switch (action.type) {
    /**
     * Acción para inicializar el estado con datos iniciales.
     * Actualiza la lista de Pokémon y el offset inicial.
     */
    case 'INIT':
      return {
        ...state,
        pokemons: action.payload.pokemons, // Lista inicial de Pokémon.
        currentOffset: action.payload.offset, // Offset inicial basado en los datos iniciales.
      }

    /**
     * Acción para indicar que se está comenzando a cargar más datos.
     * Resetea el error y activa el estado de carga.
     */
    case 'FETCH_MORE_START':
      return {
        ...state,
        loadingMore: true, // Indica que la carga está en progreso.
        fetchMoreError: null, // Resetea cualquier error previo.
      }

    /**
     * Acción para manejar el éxito al cargar más datos.
     * Agrega los nuevos Pokémon a la lista y actualiza el offset.
     */
    case 'FETCH_MORE_SUCCESS':
      return {
        ...state,
        pokemons: [...state.pokemons, ...action.payload], // Agrega los nuevos Pokémon a la lista existente.
        loadingMore: false, // Indica que la carga ha finalizado.
        currentOffset: state.currentOffset + action.payload.length, // Actualiza el offset basado en la cantidad de datos cargados.
      }

    /**
     * Acción para manejar errores durante la carga de más datos.
     * Actualiza el estado con el error recibido y desactiva el estado de carga.
     */
    case 'FETCH_MORE_ERROR':
      return {
        ...state,
        loadingMore: false, // Indica que la carga ha finalizado.
        fetchMoreError: action.payload, // Almacena el error recibido.
      }

    /**
     * Acción para indicar que no hay más datos disponibles para cargar.
     * Desactiva el estado de carga y marca que no hay más datos.
     */
    case 'NO_MORE':
      return {
        ...state,
        hasMore: false, // Indica que no hay más datos disponibles.
        loadingMore: false, // Indica que la carga ha finalizado.
      }

    /**
     * Acción por defecto para manejar casos no definidos.
     * Retorna el estado actual sin cambios.
     */
    default:
      return state
  }
}
