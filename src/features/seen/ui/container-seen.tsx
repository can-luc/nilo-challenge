'use client'

import React from 'react'

import Hero from 'src/components/shared/hero/hero'

import SkeletonContainer from 'src/components/skeletons/container'
import { Button } from 'src/components/ui/button'

import { useSeenList } from 'src/state/use-seen-list'

import ErrorState from '../../../components/error-state'
import CardGridAllSeen from '../../../components/shared/card/ui/card-grid-all-seen'
import { NOT_FOUND_SEEN } from '../constants'
import { useClearSeenWithSkeleton } from '../hooks/use-clear-seen'
import { formatTitleAndSubtitle } from '../utils'

import { BackButton } from './back-button'

const ContainerSeen: React.FC = () => {
  const seenList = useSeenList()

  const { title, subtitle } = formatTitleAndSubtitle(seenList.length)
  const { showSkeleton, handleClearSeen } = useClearSeenWithSkeleton()
  const countPokemons = seenList.length

  if (showSkeleton) {
    return <SkeletonContainer />
  }

  if (countPokemons === NOT_FOUND_SEEN) {
    return <ErrorState isEmpty={true} />
  }
  return (
    <>
      <div className="pt-3">
        <BackButton />
      </div>

      <div className="pt-6">
        <Hero title={title} subtitle={subtitle} />
      </div>

      <div>
        <span className="font-poppins text-xs font-normal text-secondary">
          Sorted by most recently seen
        </span>
      </div>

      <div className="py-6">
        <Button color="clear" size="sm" onClick={handleClearSeen}>
          Clear All Seen Pokémon
        </Button>
      </div>
      <CardGridAllSeen pokemons={seenList} />
    </>
  )
}
export default ContainerSeen
