import { useContext } from 'react'

import { SeenContext } from 'src/providers/seen-provider'

export function useSeen() {
  const context = useContext(SeenContext)
  if (!context) throw new Error('useSeen must be used within SeenProvider')
  return context
}
