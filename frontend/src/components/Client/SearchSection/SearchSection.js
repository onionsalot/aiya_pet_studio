import ProductCard from "../ProductCard/ProductCard";
import ProductCardSkeleton from "../Skeletons/ProductCardSkeleton/ProductCardSkeleton";

const SearchSection = ({ foundProducts = [] }) => {
  const display = 
    foundProducts.length === 0 ?
      <span className="text-2xl">No products found</span>
    :
    foundProducts.map((product, i) => {
      return <ProductCard product={product} key={i} />
    })

  return (
    <>
      {display}
    </>
  );
}
 
export default SearchSection;