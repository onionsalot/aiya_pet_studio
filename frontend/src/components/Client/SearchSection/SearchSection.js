import ProductCard from "../ProductCard/ProductCard";
import ProductCardSkeleton from "../Skeletons/ProductCardSkeleton/ProductCardSkeleton";

const SearchSection = ({ foundProducts = [] }) => {
  const display = 
  foundProducts.length === 0 ?
    Array(16)
      .fill()
      .map((_, i) => (
        <ProductCardSkeleton key={i} />
      )
    )
  :
  foundProducts.map((product, i) => {
    return <ProductCard product={product} key={i} />
  })

  return (
    <div className="align-center-max">
      {display}
    </div>
  );
}
 
export default SearchSection;