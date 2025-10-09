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

export { allowedColors }

export type { BadgeColor }
