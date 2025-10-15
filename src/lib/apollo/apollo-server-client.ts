import { InMemoryCache } from '@apollo/client/cache'
import { ApolloClient } from '@apollo/client/core'
import { HttpLink } from '@apollo/client/link/http'

export const apolloServerClient = new ApolloClient({
  ssrMode: true,
  link: new HttpLink({
    uri: 'https://graphqlpokemon.favware.tech/v8',
    fetch,
  }),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          pokemon: {
            merge(existing, incoming) {
              return incoming
            },
          },
        },
      },
    },
  }),
})
