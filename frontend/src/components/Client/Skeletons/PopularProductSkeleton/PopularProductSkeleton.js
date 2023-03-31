import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const PopularProductSkeleton = () => {
    return (
        <div>
            <div className="container mx-auto max-w-6xl shadow-[rgba(0,0,0,0.1)_0px_4px_12px] px-6 md:px-2">
                <div className="flex flex-col md:flex-row items-center md:space-x-8 space-y-8 md:space-y-0 max-w-6xl h-auto m-auto mt-4">
                    <div className="w-full md:w-96 h-96 mr-3">
                        <Skeleton height={384} />
                    </div>
                    <div className="w-full md:w-96">
                        <div className="h-14 mb-2">
                            <Skeleton height="100%" width="80%"/>
                        </div>
                        <div className="h-14 pb-2">
                            <Skeleton height="100%" width="40%" />
                        </div>
                        <div className="h-14">
                            <Skeleton height="100%" width="40%" />
                            <Skeleton height="100%" width="100%"/>
                        </div>
                        <div className="w-38 h-12 mb-6 mt-16 md:mt-36">
                            <Skeleton height="100%" width="50%" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopularProductSkeleton