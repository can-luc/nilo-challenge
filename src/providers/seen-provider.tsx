'use client'
import React, {
  createContext,
  useEffect,
  ReactNode,
  useReducer,
  useState,
} from 'react'

import { SeenContextType } from 'src/state/types'
import { Pokemon } from 'src/types/pokemon'

import { seenReducer, SeenState } from '../state/reducer'

export const SeenContext = createContext<SeenContextType | undefined>(undefined)

export function SeenProvider({ children }: { children: ReactNode }) {
  const [isClient, setIsClient] = useState(false)

  const [state, dispatch] = useReducer(seenReducer, {
    data: [],
    lastAdded: null,
  } as SeenState)

  // Solo lee de localStorage en el cliente
  useEffect(() => {
    const stored = localStorage.getItem('seenList')
    if (stored) {
      dispatch({
        type: 'INIT',
        payload: JSON.parse(stored),
      })
    }
    setIsClient(true)
  }, [])

  // Guarda en localStorage cuando seenList cambia (solo en cliente)
  useEffect(() => {
    if (isClient) {
      localStorage.setItem('seenList', JSON.stringify(state.data))
    }
  }, [state.data, isClient])

  const addSeen = (pokemon: Pokemon) =>
    dispatch({ type: 'ADD', payload: { data: pokemon } })
  const removeSeen = (id: string) => dispatch({ type: 'REMOVE', payload: id })
  const clearSeen = () => dispatch({ type: 'CLEAR' })
  const clearLastAdded = () => dispatch({ type: 'CLEAR_LAST_ADDED' })

  if (!isClient) return null

  return (
    <SeenContext.Provider
      value={{
        seenList: state.data,
        addSeen,
        clearSeen,
        removeSeen,
        lastAdded: state.lastAdded,
        clearLastAdded,
      }}
    >
      {children}
    </SeenContext.Provider>
  )
}
