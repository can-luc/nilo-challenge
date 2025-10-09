import Link from 'next/link';
import BackIcon from 'src/components/icons/back';

function BackButton() {
  return (
    <Link
      href='/'
      className='flex items-center text-classic font-poppins font-medium text-sm hover:underline w-fit'
    >
      <BackIcon />
      Back to All Pokémon
    </Link>
  );
}
export default BackButton;
