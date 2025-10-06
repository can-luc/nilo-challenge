import Hero from '../../components/hero';
import Card from '../../components/card';
import { Button } from '../../components/ui/button';
import BackButton from 'src/components/back-button';
import EmptyState from 'src/components/empty-state';

export default function SeenPage() {
  const contextPokemons = [{ name: 'charmander' }]; // Replace with actual context or state management to get seen Pokémon
  const countPokemons = 0; //contextPokemons.length;
  const title = 'Your Seen Pokémon';
  const subtitle = `You´ve discovered ${countPokemons} Pokémon so far! Keep exploring to catch ‘em all.`;
  if (countPokemons === 0) {
    return (
      <main className='pt-24 mt-4 bg-gradient-to-r from-[#E3E9F1] to-slate-100 rounded-xl items-center min-h-screen shadow-2xl '>
        <EmptyState />
      </main>
    );
  }

  return (
    <main className='pt-24 relative p-4 bg-gradient-to-r from-[#E3E9F1] to-slate-100 rounded-xl flex flex-col items-center space-y-2 min-h-screen shadow-2xl '>
      <BackButton />
      <Hero title={title} subtitle={subtitle} />
      <span className='font-poppins text-xs font-normal text-[#6B7280]'>
        Sorted by most recently seen
      </span>
      <Button color='clear' size='sm'>
        Clear All Seen Pokémon
      </Button>

      <div className='w-full grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3'>
        <Card />
      </div>
    </main>
  );
}
