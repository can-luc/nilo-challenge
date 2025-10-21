'use client'
import { makeVar } from '@apollo/client'

import { Pokemon } from 'src/types/pokemon'

// Reactive variables scoped to what components actually need
export const seenListVar = makeVar<Pokemon[]>([])
export const seenLastAddedVar = makeVar<Pokemon | null>(null)

// Actions operating over the reactive vars
export function addSeen(pokemon: Pokemon) {
  const current = seenListVar()
  if (current.some((p) => p.id === pokemon.id)) return
  const next = [...current, pokemon]
  seenListVar(next)
  seenLastAddedVar(pokemon)
}

export function removeSeen(id: string | number) {
  const current = seenListVar()
  const next = current.filter((p) => p.id !== id)
  // Only update if something actually changed to avoid needless notifications
  if (next.length !== current.length) {
    seenListVar(next)
  }
}

export function clearSeen() {
  seenListVar([])
}

export function clearLastAdded() {
  seenLastAddedVar(null)
}

