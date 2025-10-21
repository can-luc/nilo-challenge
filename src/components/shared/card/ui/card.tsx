'use client';
import React, { useState } from 'react';

import { Pokemon } from 'src/types/pokemon';

import CardHeader from './card-header';
import CardImage from './card-image';
import CardStats from './card-stats';
import Toogle from './toogle';

export interface CardProps extends Pokemon {
  id: string;
  seen?: boolean;
  key?: string;
  priority?: boolean;
}

const Card: React.FC<CardProps> = ({
  id,
  species,
  num,
  types,
  sprite,
  baseStats,
  seen = false,
  priority = false,
}) => {
  const [imgError, setImgError] = useState(false);

  const childrenToogle = (
    <Toogle
      id={id}
      species={species}
      num={num}
      types={types}
      sprite={sprite}
      baseStats={baseStats}
      seen={seen}
    />
  );

  const childrenCardImage = (
    <CardImage
      sprite={sprite}
      alt={species ?? 'pokemon image'}
      imgError={imgError}
      setImgError={setImgError}
      priority={priority}
    />
  );

  const childrenCardFooter = (
    <CardStats
      stats={
        baseStats ?? {
          hp: 0,
          attack: 0,
          defense: 0,
          gen: 0,
        }
      }
    />
  );

  return (
    <div
      className={`relative h-full w-[328px] overflow-hidden rounded-xl bg-white shadow-[0_4px_4px_rgba(15,23,42,0.05)]`}
    >
      {seen && (
        <div className='absolute left-0 top-0 z-10 h-3 w-full rounded-t bg-success' />
      )}
      <div className='bg-success' />
      {childrenToogle}
      <div className='flex h-40 w-full items-center justify-center'>
        {childrenCardImage}
      </div>
      <CardHeader
        num={num ?? '#000'}
        species={species ?? 'Unknown'}
        displayType={types ?? [{ name: 'Unknown' }]}
      />
      {childrenCardFooter}
    </div>
  );
};

export default React.memo(
  Card,
  (prev, next) => prev.id === next.id && prev.seen === next.seen
);
