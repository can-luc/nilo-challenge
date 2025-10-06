export default function Hero({
  title = 'Discover Amazing Pokemon',
  subtitle = 'Explore the world of Pokémon, discover their unique abilities, and build your collection. Mark your favorites as seen to keep track of your progress!',
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className='w-full text-center'>
      <h1 className='text-3xl font-poppins font-bold tracking-normal'>
        {title}
      </h1>
      <p className='mt-4 leading-normal'>{subtitle}</p>
    </section>
  );
}
