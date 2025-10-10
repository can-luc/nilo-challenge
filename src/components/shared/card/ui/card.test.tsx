import { render, screen } from '@testing-library/react'
import { expect, test, vi } from 'vitest'

import { SeenProvider } from 'src/providers/seen-provider'

import Card from './card'
//  id,
//   species,
//   num,
//   types,
//   sprite,
//   baseStats,
//   seen = false,
test('renders Card component with correct props', () => {
  const mockProps = {
    id: '1',
    species: 'Pikachu',
    num: '#025',
    sprite: 'pikachu.png',
    types: [{ name: 'Electric' }],
    baseStats: { hp: 35, attack: 55, defense: 40, gen: 1 },
    seen: true,
  }
  render(
    <SeenProvider>
      <Card {...mockProps} />
    </SeenProvider>,
  )
  expect(screen.getByText('Pikachu')).toBeInTheDocument()
})
