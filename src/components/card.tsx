import Image from 'next/image';
import { Badge } from './ui/badge';
import Progress from './ui/progress';
import Toogle from './toogle';

interface CardProps {
  name?: string;
  number?: string;
  type?: string;
  imgSrc?: string;
  stats?: {
    hp: number;
    attack: number;
    defense: number;
    gen: number;
  };
  seen?: boolean;
}
export default function Card({
  name = 'Charmander',
  number = '#004',
  type = 'FIRE',
  imgSrc = '/charmander.png',
  stats = { hp: 35, attack: 55, defense: 40, gen: 0 },
  seen = true,
}: CardProps) {
  return (
    <div className='relative w-full rounded overflow-hidden shadow-lg bg-[#FFFFFF] '>
      {/* //Section Top */}

      <Toogle seen={seen} />
      {/* Image */}
      <div className='flex items-center justify-center pt-4'>
        <Image
          src={imgSrc}
          alt={name}
          width={124}
          height={124}
        />
        {/* <span>eye</span> */}
      </div>

      {/* //Section Middle */}
      <div className='flex items-center  justify-center pt-4'>
        {/* TODO agregar la font font Post No Bills Colombo para #004 */}
        <span className='font-bold text-sm tracking-normal leading-[1.5]'>
        {number}
        </span>
      </div>

      <div className='flex flex-col items-center justify-center'>
        <div className='font-bold text-xl mb-2'>{name}</div>
        <p className='text-gray-700 text-base'>
          <Badge color='orange' size='s'>
            {type}
          </Badge>
        </p>
      </div>

      {/* //Section Bottom */}
      <div className=' p-4 pb-2 space-y-2'>
        <Progress value={stats.hp} label='HP' />
        <Progress value={stats.attack} label='Attack' />
        <Progress value={stats.defense} label='Defense' />
        <Progress value={stats.gen} label='Gen' />
      </div>
    </div>
  );
}
