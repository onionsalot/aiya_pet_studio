import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import TextSection from '../../TextSection/TextSection'

const PopularProductSkeleton = () => {
    return (
            <div className="mx-auto mb-8 max-w-6xl px-6 md:px-2">
                <div className="flex flex-col md:flex-row">
                    <div className="mb-2 w-96 mr-10 h-96">
                        <Skeleton height="100%" baseColor='#ffeaf1' highlightColor='#fff5f7'/>
                    </div>
                    <div className="flex flex-col w-96 h-80 justify-between md:h-96">
                        <div className="w-full mt-2">
                            <div className="w-full h-14">
                                <Skeleton height={35} baseColor='#ffeaf1' highlightColor='#fff5f7' />
                            </div>
                            <div>
                                <div className="h-14">
                                    <Skeleton width="20%" height={30} baseColor='#ffeaf1' highlightColor='#fff5f7'/>
                                    <Skeleton width="20%" height={30} baseColor='#ffeaf1' highlightColor='#fff5f7'/>
                                </div>
                                <div className='mt-6'>
                                    <Skeleton width="30%" height={30} baseColor='#ffeaf1' highlightColor='#fff5f7'/>
                                    <Skeleton height={120} baseColor='#ffeaf1' highlightColor='#fff5f7'/>        
                                </div>
                            </div>
                        </div>
                        <div>
                            <Skeleton height={40} width="35%" baseColor='#ffeaf1' highlightColor='#fff5f7'/>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default PopularProductSkeleton