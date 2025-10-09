import { useMemo } from 'react'

/**
 * Custom hook para filtrar una lista de objetos basada en un término de búsqueda.
 * @param list Lista de objetos a filtrar.
 * @param search Término de búsqueda.
 * @param field Campo del objeto donde se realizará la búsqueda (por defecto 'species').
 * @returns Lista filtrada de objetos que coinciden con el término de búsqueda.
 */
export function useFilter<T extends Object>(
  list: T[],
  search: string,
  field: keyof T,
): T[] {
  return useMemo(() => {
    if (!search) return list
    return list.filter((item) =>
      String(item[field]).toLowerCase().includes(search.toLowerCase()),
    )
  }, [list, search, field])
}
