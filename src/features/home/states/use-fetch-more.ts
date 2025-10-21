import React, { useEffect, useRef } from 'react'

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

  // Evita dobles llamadas cuando el sentinel permanece en vista al terminar una carga
  const hasTriggeredRef = useRef(false)

  useEffect(() => {
    if (!inView) {
      hasTriggeredRef.current = false
      return
    }
    if (inView && !loadingMore && hasMore && !hasTriggeredRef.current) {
      hasTriggeredRef.current = true
      fetchMore()
    }
  }, [inView, loadingMore, hasMore, fetchMore])

  return {
    pokemons,
    loadingMore,
    hasMore,
    fetchMoreError,
    ref,
  }
}
