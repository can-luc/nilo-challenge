'use client'
import { useEffect, useMemo, useState } from 'react'

import { useLazyQuery } from '@apollo/client'

import { GET_FUZZY_POKEMON } from 'src/graphql/queries'
import { Pokemon } from 'src/types/pokemon'

interface FuzzyResponse {
  getFuzzyPokemon: Pokemon[]
}

export function useFuzzySearch(searchInput: string, take = 30) {
  const [search, setSearch] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const [runSearch, { data, loading, error }] = useLazyQuery<FuzzyResponse>(
    GET_FUZZY_POKEMON,
    {
      fetchPolicy: 'cache-first',
    },
  )

  useEffect(() => {
    if (!searchInput || searchInput.length < 3) {
      setSearch('')
      setIsTyping(false)
      return
    }
    setIsTyping(true)
    const handler = setTimeout(() => {
      setSearch(searchInput)
      setIsTyping(false)
    }, 500)
    return () => clearTimeout(handler)
  }, [searchInput])

  useEffect(() => {
    if (search.length >= 3) {
      runSearch({ variables: { pokemon: search, take } })
    }
  }, [search, take, runSearch])

  const results = useMemo(() => data?.getFuzzyPokemon ?? [], [data])

  return { results, loading, error, isTyping, debouncedValue: search }
}

