export default function Hero({
  title = 'Discover Amazing Pokemon',
  subtitle = 'Explore the world of Pokémon, discover their unique abilities, and build your collection. Mark your favorites as seen to keep track of your progress!',
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    // <section className='pt-28 w-full text-center justify-center  max-w-4xl sm:px-0 md:px-14 '></section>
    <section className='text-center  px-4 md:px-10 lg:px-[20.375rem]'>
      <div className=''>
        <h1 className='text-2xl md:text-2xl lg:text-[32px] content-center font-poppins font-bold tracking-normal'>
          {title}
        </h1>
      </div>

      <div className='mt-2  lg:p-2 max-w-full'>
        <p className='text-sm md:text-base leading-normal tracking-normal font-poppins'>
          {subtitle}
        </p>
      </div>
    </section>
  );
}
