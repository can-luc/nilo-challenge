import Link from 'next/link'
import BackIcon from 'src/components/icons/back'

function BackButton() {
  return (
    <Link
      href="/"
      className="flex w-fit items-center font-poppins text-sm font-medium text-classic hover:underline"
    >
      <BackIcon />
      Back to All Pokémon
    </Link>
  )
}
export default BackButton
