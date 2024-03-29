import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const ReviewCardSkeleton = () => {
  return (
    <div className="h-60 rounded-md mx-2 p-2 border-2 border-gray-300">
      <div className="flex flex-row">
        <div className="w-44 h-32 rounded-md" draggable="false">
          <Skeleton height="100%" baseColor='#ffeaf1' highlightColor='#fff5f7' />
        </div>
        <div className="flex flex-col grow items-center justify-around m-1">
          {Array(3)
            .fill()
            .map((_, i) => (
              <div className='w-36' key={i}>
                <Skeleton baseColor='#ffeaf1' highlightColor='#fff5f7' />
              </div>
            ))}
        </div>
      </div>
      <div className="mt-4">
        <Skeleton height={70} baseColor='#ffeaf1' highlightColor='#fff5f7' />
      </div>
    </div>
  )
}

export default ReviewCardSkeleton