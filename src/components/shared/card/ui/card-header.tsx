import { Badge } from '../../../ui/badge';

//Utils
import { getTypeColor } from '../utils';

interface CardHeaderProps {
  num: string;
  species: string;
  displayType: [{ name: string }];
  color: string;
}

export default function CardHeader({
  num,
  species,
  displayType,
  color,
}: CardHeaderProps) {
  const formatSpecies = species.charAt(0).toUpperCase() + species.slice(1);
  return (
    <>
      <div className='flex items-center  justify-center pt-4'>
        <span className='font-bold text-sm tracking-normal leading-[1.5] text-secondary bg-grayLight radius-[8px]'>
          #00{num}
        </span>
      </div>
      <div className='pt-3 flex flex-col items-center justify-center'>
        <div className='font-semibold text-base mb-2'>{formatSpecies}</div>
        <div className='pt-3 flex gap-2'>
          {displayType.map((type) => (
            <Badge key={type.name} color={getTypeColor(type.name)} size='s'>
              {type.name.toUpperCase()}
            </Badge>
          ))}
        </div>
      </div>
    </>
  );
}
