// import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client"

// const createApolloClient = () => {
// return new ApolloClient({
//   ssrMode: typeof window === "undefined", // true en SSR
//   link: new HttpLink({
//     uri: "https://graphqlpokemon.favware.tech/v8",
//     fetch,
//   }),
//   cache: new InMemoryCache(),
//  });
// };
// export default createApolloClient;


import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const httpLink = createHttpLink({
  uri: "https://graphqlpokemon.favware.tech/v8",
});

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
