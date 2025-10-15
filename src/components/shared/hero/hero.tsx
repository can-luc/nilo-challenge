import React from 'react'
interface HeroProps {
  title?: string
  subtitle?: string
}

const Hero: React.FC<HeroProps> = ({
  title = 'Discover Amazing Pokemon',
  subtitle = 'Explore the world of Pokémon, discover their unique abilities, and build your collection. Mark your favorites as seen to keep track of your progress!',
}) => {
  return (
    <section className="px-4 text-center md:px-10 lg:px-[20.375rem]">
      <div className="">
        <h1 className="content-center font-poppins text-2xl font-bold tracking-normal md:text-2xl lg:text-[32px]">
          {title}
        </h1>
      </div>

      <div className="mt-2 max-w-full lg:p-2">
        <p className="font-poppins text-sm leading-normal tracking-normal md:text-base">
          {subtitle}
        </p>
      </div>
    </section>
  )
}
export default Hero
