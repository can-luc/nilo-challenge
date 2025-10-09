import { useSeen } from 'src/context/seen-context';
import { useCallback } from 'react';
import { CardProps } from '../entity';

export function useCardToggle({
  id,
  species,
  num,
  type,
  imgSrc,
  stats,
  seen,
  color,
}: CardProps) {
  const { addSeen, removeSeen } = useSeen();

  const handleToggle = useCallback(() => {
    if (seen) {
      removeSeen(id);
    } else {
      addSeen({
        id,
        species,
        num,
        imgSrc: imgSrc ?? '',
        type: [type],
        stats,
        color,
      });
    }
  }, [seen, removeSeen, addSeen, id, species, num, type, imgSrc, stats, color]);

  return handleToggle;
}
