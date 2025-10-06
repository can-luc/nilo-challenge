interface ProgressProps {
  label: string;
  value: number;
}

export default function Progress({ label, value }: ProgressProps) {
  return (
    <div className='w-full'>
      <div className='flex justify-between mb-1 pt-2 pb-2'>
        <span className='text-xs font-poppins font-normal leading-none tracking-normal text-[#64748B]'>
          {label}
        </span>
        <span className='text-xs font-poppins font-semibold leading-none tracking-normal text-[#64748B]'>
          {value === 0 ? 'ZU' : value}
        </span>
      </div>
      {value > 0 && (
        <div className='w-full bg-[#F1F5F9] rounded-full h-1.5'>
          <div
            className='bg-[#4338CA] h-1.5 rounded-full transition-all duration-300'
            style={{ width: `${value}%` }}
          ></div>
        </div>
      )}
    </div>
  );
}
