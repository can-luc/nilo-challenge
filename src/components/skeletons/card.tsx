export default function SkeletonCard() {
  return (
    <div className="relative w-full animate-pulse overflow-hidden rounded bg-white shadow-lg">
      {/* Top Section */}
      <div className="absolute right-4 top-4 h-8 w-8 rounded-full bg-gray-200" />
      {/* Image */}
      <div className="flex items-center justify-center pt-4">
        <div className="h-[124px] w-[124px] rounded-full bg-gray-200" />
      </div>
      {/* Middle Section */}
      <div className="flex items-center justify-center pt-4">
        <span className="h-4 w-12 rounded bg-gray-200" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="mb-2 h-6 w-24 rounded bg-gray-200" />
        <div className="h-5 w-16 rounded bg-gray-200" />
      </div>
      {/* Bottom Section */}
      <div className="space-y-2 p-4 pb-2">
        <div className="h-4 w-full rounded bg-gray-200" />
        <div className="h-4 w-full rounded bg-gray-200" />
        <div className="h-4 w-full rounded bg-gray-200" />
        <div className="h-4 w-full rounded bg-gray-200" />
      </div>
    </div>
  )
}
