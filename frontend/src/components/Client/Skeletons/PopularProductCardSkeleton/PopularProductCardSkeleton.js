import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const PopularProductCardSkeleton = () => {
    return (
        <div className="mx-auto mb-6 max-w-6xl px-6 md:px-2">
            <div className="flex flex-col md:flex-row">
                <div className="mb-2 w-full mr-10 h-96 md:w-96">
                    <Skeleton height="100%" baseColor='#ffeaf1' highlightColor='#fff5f7'/>
                </div>
                <div className="flex flex-col justify-between md:w-96 md:h-96">
                    <div className="w-full mt-2">
                        <div className="w-full h-14">
                            <Skeleton height={35} baseColor='#ffeaf1' highlightColor='#fff5f7' />
                        </div>
                        <div>
                            <div className="h-14">
                                <Skeleton width="20%" height={25} baseColor='#ffeaf1' highlightColor='#fff5f7'/>
                                <Skeleton width="20%" height={25} baseColor='#ffeaf1' highlightColor='#fff5f7'/>
                            </div>
                            <div className='mt-3'>
                                <Skeleton width="30%" height={30} baseColor='#ffeaf1' highlightColor='#fff5f7'/>
                                <div>
                                    <Skeleton width="100%" height={120} baseColor='#ffeaf1' highlightColor='#fff5f7' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Skeleton height={35} width="35%" baseColor='#ffeaf1' highlightColor='#fff5f7'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopularProductCardSkeleton