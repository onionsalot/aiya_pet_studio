import ProductCard from "../ProductCard/ProductCard";

const SearchSection = ({ foundProducts = [] }) => {
  const display = foundProducts.map((product, i) => {
    return <ProductCard product={product} key={i} />
  })
  console.log(foundProducts)

  return (
    <div>
      {display}
    </div>
  );
}
 
export default SearchSection;