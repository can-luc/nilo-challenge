'use client';
import React, {
  createContext,
  useContext,
  useEffect,
  ReactNode,
  useReducer,
  useState,
} from 'react';
import { seenReducer, SeenState } from './reducer';
import { SeenPokemon } from './entity';

type SeenContextType = {
  seenList: SeenPokemon[];
  lastAdded?: SeenPokemon | null;
  addSeen: (pokemon: SeenPokemon) => void;
  clearSeen: () => void;
  removeSeen: (id: string) => void;
  clearLastAdded: () => void;
};

const SeenContext = createContext<SeenContextType | undefined>(undefined);

export function SeenProvider({ children }: { children: ReactNode }) {
  const [isClient, setIsClient] = useState(false);

  const [state, dispatch] = useReducer(seenReducer, {
    seenList: [],
    lastAdded: null,
  } as SeenState);

  // Solo lee de localStorage en el cliente
  useEffect(() => {
    const stored = localStorage.getItem('seenList');
    if (stored) {
      dispatch({ type: 'INIT', payload: JSON.parse(stored) });
    }
    setIsClient(true);
  }, []);

  // Guarda en localStorage cuando seenList cambia (solo en cliente)
  useEffect(() => {
    if (isClient) {
      localStorage.setItem('seenList', JSON.stringify(state.seenList));
    }
  }, [state.seenList, isClient]);

  const addSeen = (pokemon: SeenPokemon) =>
    dispatch({ type: 'ADD', payload: pokemon });
  const removeSeen = (id: string) =>
    dispatch({ type: 'REMOVE', payload: id });
  const clearSeen = () => dispatch({ type: 'CLEAR' });
  const clearLastAdded = () => dispatch({ type: 'CLEAR_LAST_ADDED' });

  if (!isClient) return null;

  return (
    <SeenContext.Provider
      value={{
        seenList: state.seenList,
        addSeen,
        clearSeen,
        removeSeen,
        lastAdded: state.lastAdded,
        clearLastAdded,
      }}
    >
      {children}
    </SeenContext.Provider>
  );
}

export function useSeen() {
  const context = useContext(SeenContext);
  if (!context) throw new Error('useSeen must be used within SeenProvider');
  return context;
}
