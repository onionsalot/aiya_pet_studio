import ProductCard from "../ProductCard/ProductCard";

const SearchSection = ({ foundProducts = [] }) => {
  const display = 
    foundProducts.length === 0 ?
     <div className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-2xl text-center">Your search term(s) did not return any matching products</h1>
      </div>
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