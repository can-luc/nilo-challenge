'use client'

import { useEffect } from 'react'

import { Button } from 'src/components/ui/button'

interface ErrorProps {
  error: Error & { digest?: string; code?: string }
  reset: () => void
}

function getMessageByCode(code?: string) {
  switch (code) {
    case 'VALIDATION_ERROR':
      return 'Algo está mal con los datos ingresados'
    default:
      return 'Ocurrió un error inesperado.'
  }
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // add more details to the log , loggin service, etc
    // eslint-disable-next-line no-console
    console.error(' Error:', error)
  }, [error])

  const customMessage = getMessageByCode(error.code)

  return (
    <div className="mx-auto flex w-full max-w-xs flex-col items-center justify-center overflow-hidden rounded-2xl bg-white p-6 shadow-lg">
      <span className="mb-2 text-center font-poppins text-lg font-bold text-primary">
        Oops!
      </span>
      <div className="mb-6 text-center font-poppins text-base font-normal text-primary">
        {customMessage}
      </div>
      <Button color="primary" size="md" onClick={reset}>
        Reintentar
      </Button>

      <p className="mt-4 text-xs text-gray-400">
        Código: <code>{error.code || 'GENERIC_ERROR'}</code>
      </p>
    </div>
  )
}
