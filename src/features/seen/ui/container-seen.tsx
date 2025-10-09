'use client';

import { Button } from 'src/components/ui/button';

import Hero from 'src/components/shared/hero/hero';

import ErrorState from '../../../components/error-state';
import BackButton from './back-button';

import { useSeen } from '../../../context/seen-context';

import { useClearSeenWithSkeleton } from '../hooks/use-clear-seen';

import { formatTitleAndSubtitle } from '../utils';
import CardGrid from './card-grid';

import SkeletonContainer from 'src/components/skeletons/container';
const NOT_FOUND_SEEN = 0;
export default function ContainerSeen() {
  const { seenList } = useSeen();

  const { title, subtitle } = formatTitleAndSubtitle(seenList.length);
  const { showSkeleton, handleClearSeen } = useClearSeenWithSkeleton();
  const countPokemons = seenList.length;

  if (showSkeleton) {
    return <SkeletonContainer />;
  }

  if (countPokemons === NOT_FOUND_SEEN) {
    return <ErrorState isEmpty={true} />;
  }
  return (
    <>
      <div className='pt-3'>
        <BackButton />
      </div>

      <div className='pt-6'>
        <Hero title={title} subtitle={subtitle} />
      </div>

      <div>
        <span className='font-poppins text-xs font-normal text-secondary'>
          Sorted by most recently seen
        </span>
      </div>

      <div className='py-6'>
        <Button color='clear' size='sm' onClick={handleClearSeen}>
          Clear All Seen Pokémon
        </Button>
      </div>

      <CardGrid seenList={seenList} />
    </>
  );
}
