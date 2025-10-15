import React from 'react'

import Image from 'next/image'

import NotFoundImagen from './not-found-imagen'

interface CardImageProps {
  sprite: string | null | undefined
  alt: string
  imgError: boolean | undefined
  setImgError: (v: boolean) => void
}

const CardImage: React.FC<CardImageProps> = ({
  sprite,
  alt,
  imgError,
  setImgError,
}) => {
  const handleError = () => setImgError(true)
  return (
    <div className="relative flex h-32 w-32 items-center justify-center pt-4">
      {sprite && !imgError ? (
        <Image
          src={sprite}
          alt={alt}
          // width={124}
          // height={124}
          layout="fill"
          objectFit="contain"
          //style={{ height: 'auto' }}
          onError={handleError}
          priority
        />
      ) : (
        <NotFoundImagen />
      )}
    </div>
  )
}
export default CardImage
