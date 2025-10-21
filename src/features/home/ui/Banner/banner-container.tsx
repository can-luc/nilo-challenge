import Banner from '../'
interface ContainerBannerProps {
  initialData: PokemonsList
}

const ContainerBanner: React.FC<ContainerBanner> = ({
  message,
  show = false,
}) => {
  return <Banner />
}
