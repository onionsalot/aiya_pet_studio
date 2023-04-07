import { usePopularProduct } from "../../../hooks/product-hooks"
import AddToCartButton from "../AddToCartButton/AddToCartButton";
import PopularProductCardSkeleton from "../Skeletons/PopularProductCardSkeleton/PopularProductCardSkeleton"
import TextSection from "../TextSection/TextSection";

const PopularProductCard = () => {
    const { data, status} = usePopularProduct();
    const popularProduct = data?.data?.data.popularProduct
    const sampleImage = "https://i.etsystatic.com/24762991/r/il/9f62c0/3430721950/il_794xN.3430721950_4c7c.jpg"
    if (status === "error") return <h1>Something went wrong!</h1>
    if (status === "loading") return <PopularProductCardSkeleton />
    
    return (
        <div>
            <div className="mx-auto mb-6 max-w-6xl px-6 md:px-2">
                <div className="flex flex-col md:flex-row md:h-96">
                    <div className="w-full md:w-96 mr-10">
                        <img src={sampleImage} className="w-full object-cover md:h-96" />
                    </div>
                    <div className="flex flex-col h-80 justify-between md:h-96">
                        <div className="w-full mt-2">
                            <div className="h-12">
                                <span className="text-2xl pt-3">{popularProduct.name}</span>
                            </div>
                            <TextSection title="Price" content={`$${popularProduct.price}`} />
                            <div className="w-full md:w-96 mt-2">
                                <TextSection title="Description" content={`${popularProduct.description}
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.`} />
                            </div>
                        </div>
                        <div>
                            <AddToCartButton />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopularProductCard