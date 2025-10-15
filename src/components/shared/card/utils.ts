import { BadgeColor } from 'src/components/ui/badge/types'

import { typeColors } from './types/card'

function getTypeColor(type: string): BadgeColor {
  return typeColors[type.toUpperCase()] || 'gray'
}

export { getTypeColor }
