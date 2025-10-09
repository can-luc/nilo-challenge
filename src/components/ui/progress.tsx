interface ProgressProps {
  label: string;
  value: number;
}
const NOT_VALUE = 0;
export default function Progress({ label, value }: ProgressProps) {
  return (
    <div className='w-full'>
      <div className='flex justify-between mb-1 pt-2 '>
        <span className='text-xs font-poppins font-normal leading-none tracking-normal text-card-progress-text'>
          {label}
        </span>
        <span className='text-xs font-poppins font-semibold leading-none tracking-normal text-card-progress-text'>
          {value === NOT_VALUE ? 'ZU' : value}
        </span>
      </div>
      {value > NOT_VALUE && (
        <div className='w-full bg-card-progress-container rounded-full h-1.5'>
          <div
            className='bg-card-progress-bar h-1.5 rounded-full transition-all duration-300'
            style={{ width: `${value}%` }}
          ></div>
        </div>
      )}
    </div>
  );
}
