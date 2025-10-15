import React, { useEffect } from 'react'

import { useIntersectionObserver } from '../hooks/use-Intersection-observer'
import { usePokemonPagination } from '../hooks/use-pokemon-pagination'
import { PokemonsList } from '../types/pokemons-list'

interface FetchMoreResult {
  pokemons: PokemonsList
  loadingMore: boolean
  hasMore: boolean
  fetchMoreError: Error | null
  ref: React.RefCallback<HTMLDivElement> | React.RefObject<HTMLDivElement>
}

/**
 * Hook para manejar la lógica de paginación y carga adicional de datos
 * cuando el usuario llega al final de la lista.
 *
 * @param initialData - Lista inicial de Pokémon obtenida desde el servidor.
 * @returns Un objeto con los datos actuales, estado de carga, errores y una referencia para el observador.
 */
export function useFetchMore(initialData: PokemonsList): FetchMoreResult {
  // Usa el hook de paginación para manejar el estado y la lógica de carga de más datos.
  const { pokemons, loadingMore, hasMore, fetchMoreError, fetchMore } =
    usePokemonPagination(initialData)

  // Usa el hook de Intersection Observer para detectar cuando el usuario llega al final de la lista.
  const { ref, inView } = useIntersectionObserver()

  /**
   * Efecto para cargar más datos cuando el elemento observado está en vista,
   * no hay una carga en progreso y aún hay más datos disponibles.
   */
  useEffect(() => {
    if (inView && !loadingMore && hasMore) {
      fetchMore() // Llama a la función para cargar más datos.
    }
  }, [inView, loadingMore, hasMore, fetchMore])

  /**
   * Retorna el estado actual de los datos, el estado de carga, los errores
   * y la referencia para el observador.
   */
  return {
    pokemons, // Lista actual de Pokémon.
    loadingMore, // Indica si se está cargando más datos.
    hasMore, // Indica si hay más datos disponibles para cargar.
    fetchMoreError, // Error ocurrido durante la carga de más datos.
    ref, // Referencia para el elemento observado.
  }
}
