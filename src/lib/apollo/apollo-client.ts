import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { offsetLimitPagination } from '@apollo/client/utilities'

const httpLink = createHttpLink({
  uri: 'https://graphqlpokemon.favware.tech/v8',
})

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})
// export const apolloClient = new ApolloClient({
//   link: httpLink,
//   cache: new InMemoryCache({
//     typePolicies: {
//       Query: {
//         fields: {
//           getAllPokemon: offsetLimitPagination(),
//         },
//       },
//       Pokemon: { keyFields: ['id'] },
//     },
//   }),
// })