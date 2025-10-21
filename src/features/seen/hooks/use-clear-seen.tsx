'use client'
import { useState } from 'react'

import { useSeenActions } from 'src/state/use-seen-actions'

/**
 * Custom hook to clear the seen Pokémon list with a loading skeleton effect.
 * @param delay - Time in milliseconds to show the skeleton after clearing the list. Default is 1000ms.
 * @returns An object containing:
 * - showSkeleton: A boolean indicating whether to show the loading skeleton.
 * - handleClearSeen: A function to clear the seen list and trigger the skeleton display.
 */
export function useClearSeenWithSkeleton(delay = 1000) {
  const { clearSeen } = useSeenActions()
  const [showSkeleton, setShowSkeleton] = useState(false)

  const handleClearSeen = () => {
    clearSeen()
    setShowSkeleton(true)
    setTimeout(() => setShowSkeleton(false), delay)
  }

  return { showSkeleton, handleClearSeen }
}
