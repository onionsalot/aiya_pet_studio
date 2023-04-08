import ProductCard from "../ProductCard/ProductCard";

const SearchSection = ({ foundProducts = [] }) => {
  const display = foundProducts.map((product, i) => {
    return <ProductCard product={product} key={i} />
  })

  return (
    <div className="align-center-max">
      {display}
    </div>
  );
}
 
export default SearchSection;