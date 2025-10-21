'use client'
import { useEffect } from 'react'

import { useReactiveVar } from '@apollo/client'

import { seenListVar } from 'src/state/seen.store'

export default function SeenStoreInit() {
  // On mount, hydrate from localStorage
  useEffect(() => {
    try {
      const stored = typeof window !== 'undefined' && localStorage.getItem('seenList')
      if (stored) {
        const parsed = JSON.parse(stored)
        if (Array.isArray(parsed)) {
          seenListVar(parsed)
        }
      }
    } catch {
      // noop if storage is inaccessible or data invalid
    }
    // run only once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Persist changes
  const seenList = useReactiveVar(seenListVar)
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem('seenList', JSON.stringify(seenList))
      }
    } catch {
      // noop
    }
  }, [seenList])

  return null
}

