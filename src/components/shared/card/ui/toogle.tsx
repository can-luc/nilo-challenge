import React, { useCallback, useEffect, useState } from 'react'

import EyeClosedIcon from '../../../icons/eye-closed'
import EyeOpenIcon from '../../../icons/eye-open'
import { useCardToggle } from '../hooks/use-card-toogle'

interface ToogleProps {
  id: string
  species?: string
  num?: string
  types?: string[]
  sprite?: string
  baseStats?: Record<string, number>
  seen: boolean
}
const Toogle: React.FC<ToogleProps> = ({
  id,
  species,
  num,
  types,
  sprite,
  baseStats,
  seen,
}) => {
  const [localSeen, setLocalSeen] = useState(seen)
  const handleToggle = useCardToggle({
    id,
    species,
    num,
    types,
    sprite,
    baseStats,
    seen,
  })

  // Mantener el estado local sincronizado con la prop `seen`
  useEffect(() => {
    setLocalSeen(seen)
  }, [seen])

  const handleToggless = useCallback(() => {
    handleToggle()
    setLocalSeen((prev) => !prev)
  }, [handleToggle])

  return (
    <div
      className="absolute right-4 top-4"
      onClick={handleToggless}
      style={{ cursor: 'pointer' }}
    >
      {localSeen ? (
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-success shadow-md transition-all duration-300">
          <EyeOpenIcon />
        </span>
      ) : (
        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-classic bg-white shadow-md transition-all duration-300">
          <EyeClosedIcon />
        </span>
      )}
    </div>
  )
}
export default Toogle

