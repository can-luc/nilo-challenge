'use client'
import React from 'react'

import { useFetchMore } from '../states/use-fetch-more'
import { PokemonsList } from '../types/pokemons-list'

import HeaderContainer from './Header/container-header'
import StaticHeroSection from './Hero/container-hero'
import Banner from './banner'

interface ContainerHomeProps {
  initialData: PokemonsList
}

const ContainerHome: React.FC<ContainerHomeProps> = ({ initialData }) => {
  // Infinite scroll hook
  const { pokemons, loadingMore, hasMore, ref } = useFetchMore(initialData)

  return (
    <>
     <Banner />
      <StaticHeroSection />
      <HeaderContainer pokemons={pokemons} />

      {hasMore && (
        <div
          className="sm:grid-cols-2 xl:grid-cols-3 grid w-full grid-cols-1 gap-4"
          ref={ref}
        >
          {loadingMore && null}
        </div>
      )}
    </>
  )
}

export default ContainerHome
