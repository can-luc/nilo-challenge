type BannerProps = {
  message: string;
};

export default function Banner({ message }: BannerProps) {
  return (
    <div className="w-full bg-[#22C55E] text-white rounded-xl flex items-center gap-2 px-4 py-3">
      {/* icon check */}
      <span className="flex items-center justify-center w-6 h-6 bg-white bg-opacity-20 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      <span className="font-poppins text-base">
        {message}
      </span>
    </div>
  );
}