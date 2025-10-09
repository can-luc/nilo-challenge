import { GET_ALL_POKEMON } from 'src/graphql/queries'
import { apolloServerClient } from 'src/lib/apollo/apollo-server-client'

import { INITIAL_OFFSET, PAGE_SIZE } from '../constants'
import { PokemonsList } from '../types/pokemons-list'

export async function getInitialPokemons(): Promise<PokemonsList> {
  const {
    data: { getAllPokemon },
  } = await apolloServerClient.query({
    query: GET_ALL_POKEMON,
    variables: { offset: INITIAL_OFFSET, take: PAGE_SIZE },
  })

  return getAllPokemon ?? []
}
