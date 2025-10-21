import React from 'react'

import Image from 'next/image'

import NotFoundImagen from './not-found-imagen'

interface CardImageProps {
  sprite: string | null | undefined
  alt: string
  imgError: boolean | undefined
  setImgError: (v: boolean) => void
  priority?: boolean
}

const CardImage: React.FC<CardImageProps> = ({
  sprite,
  alt,
  imgError,
  setImgError,
  priority = false,
}) => {
  const handleError = () => setImgError(true)
  return (
    <div className="relative flex h-32 w-32 items-center justify-center pt-4">
      {sprite && !imgError ? (
        <Image
          src={sprite}
          alt={alt}
          // Prefer modern fill API to avoid layout shifts
          fill
          sizes="(max-width: 768px) 128px, (max-width: 1200px) 160px, 200px"
          style={{ objectFit: 'contain' }}
          onError={handleError}
          priority={priority}
        />
      ) : (
        <NotFoundImagen />
      )}
    </div>
  )
}
export default CardImage
