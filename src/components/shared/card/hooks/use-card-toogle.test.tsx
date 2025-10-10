import { renderHook, act } from '@testing-library/react';
import { vi } from 'vitest';

import * as useSeenModule from 'src/state/use-seen';

import { useCardToggle } from './use-card-toogle';

const mockAddSeen = vi.fn();
const mockRemoveSeen = vi.fn();

vi.spyOn(useSeenModule, 'useSeen').mockImplementation(() => ({
  addSeen: mockAddSeen,
  removeSeen: mockRemoveSeen,
}));

const baseProps = {
  id: '1',
  species: 'Bulbasaur',
  num: '001',
  sprite: 'bulbasaur.png',
  types: [{ name: 'Grass' }],
  baseStats: { hp: 45, attack: 49, defense: 49, gen: 1 },
};

describe('useCardToggle', () => {
  beforeEach(() => {
    mockAddSeen.mockClear();
    mockRemoveSeen.mockClear();
  });

  it('calls removeSeen when seen is true', () => {
    const { result } = renderHook(() =>
      useCardToggle({ ...baseProps, seen: true })
    );
    act(() => {
      result.current();
    });
    expect(mockRemoveSeen).toHaveBeenCalledWith('1');
    expect(mockAddSeen).not.toHaveBeenCalled();
  });

  it('calls addSeen when seen is false', () => {
    const { result } = renderHook(() =>
      useCardToggle({ ...baseProps, seen: false })
    );
    act(() => {
      result.current();
    });
    expect(mockAddSeen).toHaveBeenCalledWith({
      id: '1',
      species: 'Bulbasaur',
      num: '001',
      sprite: 'bulbasaur.png',
      types: [{ name: 'Grass' }],
      baseStats: { hp: 45, attack: 49, defense: 49, gen: 1 },
    });
    expect(mockRemoveSeen).not.toHaveBeenCalled();
  });
});
