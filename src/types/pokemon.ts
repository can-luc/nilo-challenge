interface PokemonStats {
  hp: number
  attack: number
  defense: number
  gen: number
}
export interface Pokemon {
  key?: string
  num: string
  species: string
  sprite: string
  baseStats: PokemonStats
  types: [{ name: string }]

  // Props agregadas para el contexto SeenPokemon
  id?: string
  seen?: boolean
}
