'use client'

import React, { useTransition } from 'react'

import { useRouter } from 'next/navigation'

import BackIcon from 'src/components/icons/back'

const BackButton: React.FC = () => {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    startTransition(() => {
      router.push('/')
    })
  }

  return (
    <button
      onClick={handleClick}
      className={`flex w-fit items-center font-poppins text-sm font-medium text-classic hover:underline ${
        isPending ? 'cursor-not-allowed opacity-50' : 'opacity-100'
      }`}
      disabled={isPending} // Deshabilitar el botón mientras la transición está en progreso
    >
      <BackIcon />
      Back to All Pokémon
    </button>
  )
}

export { BackButton }
