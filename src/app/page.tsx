import ContainerHome from 'src/features/home/ui/container-home'
import { getInitialPokemons } from 'src/features/home/use-cases/get-initial-pokemons'

export default async function Home() {
  const initialData = await getInitialPokemons()
  return (
    <>
      <ContainerHome initialData={initialData} />
    </>
  )
}
