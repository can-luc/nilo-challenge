import Image from 'next/image'
import NotFoundImagen from './not-found-imagen'

interface CardImageProps {
  imgSrc: string | null | undefined
  alt: string
  imgError: boolean | undefined
  setImgError: (v: boolean) => void
}

export default function CardImage({
  imgSrc,
  alt,
  imgError,
  setImgError,
}: CardImageProps) {
  return (
    <div className="flex items-center justify-center pt-4">
      {imgSrc && !imgError ? (
        <Image
          src={imgSrc}
          alt={alt}
          width={124}
          height={124}
          style={{ height: 'auto' }}
          onError={() => setImgError(true)}
          unoptimized
        />
      ) : (
        <NotFoundImagen />
      )}
    </div>
  )
}
