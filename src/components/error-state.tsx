import Link from 'next/link';
import { Button } from 'src/components/ui/button';
import EyeEmptyIcon from 'src/components/icons/eye-empty';

interface ErrorStateProps {
  title?: string;
  isEmpty?: boolean;
}

export default function ErrorState({
  title = 'No Pokémon Seen Yet',
  isEmpty = false,
}: ErrorStateProps) {
  return (
    <>
      <div className='w-full max-w-xs mx-auto rounded-2xl overflow-hidden bg-white shadow-lg flex flex-col items-center p-6'>
        {/* icon eye closed */}
        <div className='flex items-center justify-center mb-4 mt-2'>
          <EyeEmptyIcon />
        </div>
        <span className='font-poppins font-bold text-lg text-primary mb-2 text-center'>
          {title}
        </span>
        {isEmpty && (
          <div className='text-primary text-center font-poppins text-base font-normal mb-6'>
            You haven’t marked any Pokémon as seen yet. Start exploring and
            click the eye icon on Pokémon cards to track your discoveries!
          </div>
        )}

        <Link href='/'>
          <Button color='primary' size='md'>
            Explore Pokémon
          </Button>
        </Link>
      </div>
    </>
  );
}
