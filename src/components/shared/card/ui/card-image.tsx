import Image from 'next/image'

import NotFoundImagen from './not-found-imagen'

interface CardImageProps {
  sprite: string | null | undefined
  alt: string
  imgError: boolean | undefined
  setImgError: (v: boolean) => void
}

export default function CardImage({
  sprite,
  alt,
  imgError,
  setImgError,
}: CardImageProps) {
  const handleError = () => setImgError(true)
  return (
    <div className="flex items-center justify-center pt-4">
      {sprite && !imgError ? (
        <Image
          src={sprite}
          alt={alt}
          width={124}
          height={124}
          style={{ height: 'auto' }}
          onError={handleError}
          unoptimized
        />
      ) : (
        <NotFoundImagen />
      )}
    </div>
  )
}
