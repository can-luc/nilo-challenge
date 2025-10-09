type SeenPokemon = {
  id: string | number | undefined;
  species: string | undefined;
  num: string | number | undefined;
  imgSrc: string | undefined;
  type:[{ name: string }] | undefined;
  stats: {
    hp: number;
    attack: number;
    defense: number;
    gen: number;
  } | undefined;
  color: string | undefined;
};

export type { SeenPokemon };
