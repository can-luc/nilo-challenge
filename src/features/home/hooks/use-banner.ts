'use client'
import { useEffect, useState } from 'react'

interface UseBannerOptions {
  duration?: number
}

/**
 * Custom hook para mostrar un banner temporal cuando un item cambia de valor.
 * @template T Tipo del item a observar.
 * @param item Item cuyo cambio de valor dispara el banner.
 * @param onHide Callback que se ejecuta cuando el banner se oculta.
 * @param options Opciones para configurar el comportamiento del banner.
 * @returns Estado que indica si el banner debe mostrarse.
 */
export function useBanner<T>(
  item: T | null,
  onHide: () => void,
  options: UseBannerOptions = {},
) {
  const { duration = 2000 } = options
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    if (item) {
      setShowBanner(true)
      const timer = setTimeout(() => {
        setShowBanner(false)
        onHide()
      }, duration)
      return () => clearTimeout(timer)
    }
  }, [item, onHide, duration])

  return { showBanner }
}
