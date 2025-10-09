import { apolloServerClient } from 'src/lib/apollo-server-client';
import { GET_ALL_POKEMON } from 'src/graphql/queries';

import ContainerHome from 'src/features/home/ui/container-home';

const OFFSET = 93;
const TAKE = 10;

export default async function PageHome() {
  const { data } = await apolloServerClient.query({
    query: GET_ALL_POKEMON,
    variables: { offset: OFFSET, take: TAKE },
  });
  const initialData = data?.getAllPokemon ?? [];
  return (
    <>
      <ContainerHome initialData={initialData} />
    </>
  );
}
