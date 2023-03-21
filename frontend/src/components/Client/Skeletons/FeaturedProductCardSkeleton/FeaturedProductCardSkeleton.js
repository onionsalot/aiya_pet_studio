import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const FeaturedProductCardSkeleton = () => {
  return (
    <div class="w-1/2 sm:w-1/4 aspect-square">
      <div
        class="
          m-2
          h-5/6
          rounded-md
          hover:shadow-lg
          cursor-pointer
          lg:m-4
          transition
          duration-300"
      >
        <Skeleton height="100%"/>
      </div>
    </div>
  );
}
 
export default FeaturedProductCardSkeleton;