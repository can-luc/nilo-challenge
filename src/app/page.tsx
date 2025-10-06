import Card from 'src/components/card';
import Hero from 'src/components/hero';
import Search from 'src/components/search';

export default function Home() {
  return (
    <main className='pt-24 relative p-4 bg-gradient-to-r from-[#E3E9F1] to-slate-100 rounded-xl flex flex-col items-center space-y-2 min-h-screen shadow-2xl '>
      <Hero />
      <Search />
      <h3 className='font-poppins font-normal text-sm tracking-normal text-[#0F172A]'>
        Showing 70 Pokémon
      </h3>
      <div className='w-full grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3'>
        <Card />
      </div>
    </main>
  );
}
