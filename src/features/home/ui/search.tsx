import SearchIcon from 'src/components/icons/search';

export default function Search({
  value,
  onChange,
}: {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <>
      <div className='pt-6 md:pt-10 w-full max-w-[20rem] md:max-w-[41.5rem] lg:max-w-[64.7rem] '>
        <div className='relative'>
          <span className='absolute left-3 top-1/2 -translate-y-1/2 text-search-text leading-none'>
            <SearchIcon />
          </span>
          <input
            value={value}
            onChange={onChange}
            type='text'
            placeholder='Search for Pokémon by name...'
            className='w-full pl-10  h-12  border border-search-border rounded-lg font-poppins font-normal text-[11px] leading-none tracking-normal text-carbon-text'
          />
        </div>
      </div>
      {/* <div className='w-full px-4 sm:px-10 md:px-48 xl:px-36 2xl:px-32 md:pt-6 '>
      <div className='relative'>
        <span className='absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8] leading-none'>
          <SearchIcon />
        </span>
        <input
          value={value}
          onChange={onChange}
          type='text'
          placeholder='Search for Pokémon by name...'
          className='w-full pl-10 lg:h-12 border border-gray-300 rounded-lg font-poppins font-normal text-[11px] leading-none tracking-normal text-[#94A3B8]'
        />
      </div>
    </div> */}
    </>
  );
}
