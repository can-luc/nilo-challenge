export default function SkeletonCard() {
  return (
    <div className="relative w-full rounded overflow-hidden shadow-lg bg-white animate-pulse">
      {/* Top Section */}
      <div className="absolute right-4 top-4 w-8 h-8 bg-gray-200 rounded-full" />
      {/* Image */}
      <div className="flex items-center justify-center pt-4">
        <div className="w-[124px] h-[124px] bg-gray-200 rounded-full" />
      </div>
      {/* Middle Section */}
      <div className="flex items-center justify-center pt-4">
        <span className="w-12 h-4 bg-gray-200 rounded" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="w-24 h-6 bg-gray-200 rounded mb-2" />
        <div className="w-16 h-5 bg-gray-200 rounded" />
      </div>
      {/* Bottom Section */}
      <div className="p-4 pb-2 space-y-2">
        <div className="w-full h-4 bg-gray-200 rounded" />
        <div className="w-full h-4 bg-gray-200 rounded" />
        <div className="w-full h-4 bg-gray-200 rounded" />
        <div className="w-full h-4 bg-gray-200 rounded" />
      </div>
    </div>
  );
}