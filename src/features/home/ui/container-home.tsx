'use client';
import React from 'react';
// Components shared
import Hero from 'src/components/shared/hero/hero';

// Components feature
import Search from './search';
import SearchInfo from './search-info';
import CardGrid from './card-grid';
import Banner from './banner';

// Hooks
import { useDebouncedFilter } from '../hooks/use-debounced-filter';
import { useBanner } from '../hooks/use-banner';
import { useFetchMore } from '../hooks/use-fetch-more';

// Context
import { useSeen } from 'src/context/seen-context';
import SkeletonCard from 'src/components/skeletons/card';

const DURATION_BANNER = 2000;

export default function ContainerHome({ initialData }: { initialData: any }) {
  const [searchInput, setSearchInput] = React.useState('');
  const { seenList, lastAdded, clearLastAdded } = useSeen();

  const showBanner = useBanner(lastAdded, clearLastAdded, {
    duration: DURATION_BANNER,
  });

  // Infinite scroll hook
  const { pokemons, loadingMore, hasMore, ref } = useFetchMore(initialData);

  const { filtered, isTyping } = useDebouncedFilter(
    pokemons,
    searchInput,
    'species'
  );

  return (
    <>
      {showBanner && lastAdded && (
        <Banner message={lastAdded.species ?? 'Unknown'} show={true} />
      )}
      <div className='pt-2 md:pt-6'>
        <Hero />
      </div>

      <Search
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />

      <div className='pt-6 px-4'>
        <SearchInfo search={searchInput} pokemonsCount={filtered.length} />
      </div>

      {isTyping ? (
        <SkeletonCard />
      ) : (
        <CardGrid filteredPokemons={filtered} seenList={seenList} />
      )}
      {hasMore && (
        <div
          className='w-full grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3'
          ref={ref}
        >
          {loadingMore && <SkeletonCard />}
        </div>
      )}
    </>
  );
}
