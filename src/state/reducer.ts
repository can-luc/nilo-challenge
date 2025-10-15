import { Pokemon } from 'src/types/pokemon'

import { SeenAction } from './actions'

/**
 * Interfaz que define el estado para los Pokémon vistos.
 */
export interface SeenState {
  data: Pokemon[] // Lista de Pokémon que han sido vistos.
  lastAdded: Pokemon | null // Último Pokémon agregado a la lista.
}

/**
 * Reducer para manejar el estado de los Pokémon vistos.
 * Actualiza el estado según las acciones recibidas.
 *
 * @param state - Estado actual de los Pokémon vistos.
 * @param action - Acción que define cómo se debe actualizar el estado.
 * @returns Estado actualizado.
 */
export function seenReducer(state: SeenState, action: SeenAction): SeenState {
  switch (action.type) {
    /**
     * Acción para inicializar el estado con una lista de Pokémon.
     * Reemplaza la lista actual con los datos proporcionados.
     */
    case 'INIT':
      return {
        ...state,
        data: action.payload, // Lista inicial de Pokémon vistos.
      }

    /**
     * Acción para agregar un nuevo Pokémon a la lista.
     * Verifica si el Pokémon ya existe en la lista antes de agregarlo.
     * Actualiza el último Pokémon agregado.
     */
    case 'ADD':
      if (state.data.some((p) => p.id === action.payload.data.id)) return state // No agrega duplicados.
      return {
        ...state,
        data: [...state.data, action.payload.data], // Agrega el nuevo Pokémon a la lista.
        lastAdded: action.payload.data, // Actualiza el último Pokémon agregado.
      }

    /**
     * Acción para eliminar un Pokémon de la lista.
     * Filtra la lista para excluir el Pokémon con el ID especificado.
     */
    case 'REMOVE':
      return {
        ...state,
        data: state.data.filter((p) => p.id !== action.payload), // Elimina el Pokémon con el ID proporcionado.
      }

    /**
     * Acción para limpiar la lista de Pokémon vistos.
     * Vacía completamente la lista de datos.
     */
    case 'CLEAR':
      return { ...state, data: [] } // Limpia la lista de Pokémon.

    /**
     * Acción para limpiar el último Pokémon agregado.
     * Establece `lastAdded` como `null`.
     */
    case 'CLEAR_LAST_ADDED':
      return { ...state, lastAdded: null } // Limpia el último Pokémon agregado.

    /**
     * Acción por defecto para manejar casos no definidos.
     * Retorna el estado actual sin cambios.
     */
    default:
      return state
  }
}
