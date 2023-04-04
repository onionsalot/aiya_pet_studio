import { usePopularProduct } from "../../../hooks/product-hooks"
import AddToCartButton from "../AddToCartButton/AddToCartButton";
import PopularProductSkeleton from "../Skeletons/PopularProductSkeleton/PopularProductSkeleton"
import TextSection from "../TextSection/TextSection";

const PopularProductCard = () => {
    const { data, status } = usePopularProduct();
    const popularProduct = data?.data?.data.popularProduct
    const sampleImage = "https://i.etsystatic.com/24762991/r/il/9f62c0/3430721950/il_794xN.3430721950_4c7c.jpg"
    if (status === "error") return <h1>Something went wrong!</h1>
    if (status === "loading") return <PopularProductSkeleton />
    
    return (
        <div>
            <div className="mx-auto max-w-6xl px-6 md:px-2">
                <div className="flex flex-col md:flex-row md:h-96">
                    <div className="w-full md:w-96 mr-10">
                        <img src={sampleImage} className="w-96 h-96 object-cover" />
                    </div>
                    <div className="flex flex-col h-80 justify-between md:h-96">
                        <div className="w-full mt-2">
                            <div className="h-14">
                                <span className="text-2xl pt-3">{popularProduct.name}</span>
                            </div>
                            <TextSection title="Price" content={`$${popularProduct.price}`} />
                            <TextSection title="Description" content={popularProduct.description} />
                        </div>
                        <div className="flex flex-col items-start mb-4">
                            <AddToCartButton />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopularProductCard