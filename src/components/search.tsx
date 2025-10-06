export default function Search() {
  return (
    <div className="w-full p-4">
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8] leading-none">
          {/* icon search */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" fill="none" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>
        <input
          type="text"
          placeholder="Search for Pokémon by name..."
          className="w-full pl-10 p-2 border border-gray-300 rounded-lg font-poppins font-normal text-[11px] leading-none tracking-normal text-[#94A3B8]"
        />
      </div>
    </div>
  );
}