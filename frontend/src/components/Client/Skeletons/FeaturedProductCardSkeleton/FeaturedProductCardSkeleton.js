import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const FeaturedProductCardSkeleton = () => {
  return (
    <div className="flex flex-col p-3 mx-7 w-full sm:w-1/2 sm:mx-0 md:w-1/4 md:p-1 lg:p-3">
      <div
        className="
          aspect-square
          w-full
          rounded-md
          transition
          duration-300"
      >
        <Skeleton height="100%"/>
      </div>
      <div className="pt-3 text-left">
        <Skeleton height="50%"/>
        <Skeleton height="50%"/>
      </div>
    </div>
  );
}
 
export default FeaturedProductCardSkeleton;