import { gql } from '@apollo/client'

export const GET_ALL_POKEMON = gql`
  query getAllPokemon($offset: Int, $take: Int) {
    getAllPokemon(offset: $offset, take: $take) {
      key
      num
      color
      species
      sprite
      baseStats {
        hp
        attack
        defense
      }
      types {
        name
      }
    }
  }
`

export const GET_POKEMON_DETAILS = gql`
  {
    getPokemon(pokemon: dragonite) {
      sprite
      num
      species
      color
    }
  }
`

export const GET_FUZZY_POKEMON = gql`
  query getFuzzyPokemon($pokemon: String!, $take: Int) {
    getFuzzyPokemon(pokemon: $pokemon, take: $take) {
      key
      num
      species
      sprite
      baseStats {
        hp
        attack
        defense
      }
      types {
        name
      }
    }
  }
`
