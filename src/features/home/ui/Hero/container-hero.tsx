'use client'
import React from 'react'

import Hero from 'src/components/shared/hero/hero'

/**
 * Componente estático para mostrar la sección del héroe.
 * Este componente no depende de ningún estado dinámico.
 */
const StaticHeroSection: React.FC = () => {
  return (
    <div className="pt-2 md:pt-6">
      <Hero />
    </div>
  )
}

export default React.memo(StaticHeroSection)
