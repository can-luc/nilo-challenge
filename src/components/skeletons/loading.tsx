import React from 'react'

import SkeletonCard from './card'
const SkeletonLoading: React.FC = () => {
  return (
    <>
      <div className="sm:grid-cols-2 xl:grid-cols-3 grid w-full grid-cols-1 gap-4 pt-4">
        {[...Array(3)].map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </>
  )
}
export default SkeletonLoading
