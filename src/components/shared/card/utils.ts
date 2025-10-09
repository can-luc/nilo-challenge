import { typeColors } from './entity'
import { BadgeColor } from 'src/components/ui/badge'

function getTypeColor(type: string): BadgeColor {
  return typeColors[type.toUpperCase()] || 'gray'
}

export { getTypeColor }
