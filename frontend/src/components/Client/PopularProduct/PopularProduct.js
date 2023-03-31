import { usePopularProduct } from "../../../hooks/product-hooks"
import PopularProductSkeleton from "../Skeletons/PopularProductSkeleton/PopularProductSkeleton"

const PopularProduct = () => {
    const { data, status } = usePopularProduct();
    const popularProduct = data?.data?.data.popularProduct
    const sampleImage = "https://i.etsystatic.com/24762991/r/il/9f62c0/3430721950/il_794xN.3430721950_4c7c.jpg"

    if (status === "error") return <h1>Something went wrong!</h1>
    if (status === "loading") return <PopularProductSkeleton />
    
    return (
        <div>
            <div className="container mx-auto max-w-6xl shadow-[rgba(0,0,0,0.1)_0px_4px_12px] px-6 md:px-2">
                <div className="flex flex-col md:flex-row items-center md:space-x-8 space-y-8 md:space-y-0 max-w-6xl h-auto m-auto mt-4">
                    <div className="w-full md:w-96 h-96 mr-3">
                        <img src={sampleImage} className="w-full h-full object-cover" />
                    </div>
                    <div className="w-full md:w-96">
                        <div className="h-14">
                            <h2 className="text-3xl pt-3">{popularProduct.name}</h2>
                        </div>
                        <div className="h-14">
                            <h3 className="text-2xl pt-3">Price: ${popularProduct.price}</h3>
                        </div>
                        <div className="h-14">
                            <h5 className="text-xl pt-3">Description:</h5>
                            <p className="text-sm text-stone-600">{popularProduct.description}</p>
                        </div>
                        <button className="bg-violet-400 text-white cursor-pointer w-28 h-8 mb-6 mt-16 rounded-[5px] md:mt-36 md:w-32 md:h-10 md:text-xl">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopularProduct