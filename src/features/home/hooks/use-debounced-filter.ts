'use client'
import { useState, useEffect } from 'react'

import { useFilter } from './use-filter'

/**
 * Hook para filtrar una lista con debounce sobre un campo específico.
 * @template T Tipo de los elementos de la lista.
 * @param list Lista de elementos a filtrar.
 * @param searchInput Valor actual del input de búsqueda.
 * @param field Campo del objeto sobre el que se filtra.
 * @param delay Tiempo de debounce en ms (default: 500).
 * @returns { filtered, isTyping, search }
 */
export function useDebouncedFilter<T extends object>(
  list: T[],
  searchInput: string,
  field: keyof T & string,
  delay = 500,
) {
  const [search, setSearch] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    if (searchInput === '' || searchInput.length < 3) {
      setSearch('')
      setIsTyping(false)
      return
    }
    setIsTyping(true)
    const handler = setTimeout(() => {
      setSearch(searchInput)
      setIsTyping(false)
    }, delay)

    return () => clearTimeout(handler)
  }, [searchInput, delay])

  // Filtrar la lista usando el hook useFilter
  const filtered = useFilter(list, search, field)

  return {
    filtered,
    isTyping,
    debouncedValue: search,
  }
}
