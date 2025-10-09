import SkeletonCard from './card';
export default function SkeletonLoading() {
  return (
    <>
      <div className='w-full pt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3'>
        {[...Array(3)].map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </>
  );
}
