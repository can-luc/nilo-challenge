import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

export const apolloServerClient = new ApolloClient({
  ssrMode: true,
  link: new HttpLink({
    uri: 'https://graphqlpokemon.favware.tech/v8', // Cambia por tu endpoint
    fetch,
  }),
  cache: new InMemoryCache(),
});
