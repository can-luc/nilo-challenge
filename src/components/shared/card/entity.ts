import type { BadgeColor } from 'src/components/ui/badge'
const allowedColors = [
  'primary',
  'secondary',
  'orange',
  'green',
  'red',
  'yellow',
  'gray',
  'black',
  'white',
  'purple',
] as const

//type BadgeColor = (typeof allowedColors)[number];

export const typeColors: Record<string, BadgeColor> = {
  FIRE: 'orange',
  FLYING: 'blue',
  WATER: 'blue',
  GRASS: 'green',
  POISON: 'purple',
  ELECTRIC: 'yellow',
  BUG: 'green',
  NORMAL: 'gray',
  DARK: 'black',
  FAIRY: 'pink',
  FIGHTING: 'red',
  PSYCHIC: 'purple',
  ROCK: 'brown',
  GROUND: 'yellow',
  ICE: 'cyan',
  DRAGON: 'indigo',
  STEEL: 'gray',
  GHOST: 'teal',
}

interface CardProps {
  id: string
  species?: string
  num?: string
  type?: []
  imgSrc?: string | null
  stats?: {
    hp: number
    attack: number
    defense: number
    gen: number
  }
  seen?: boolean
  color?: string // Agregado color como prop opcional
}

export { allowedColors }

export type { BadgeColor, CardProps }
