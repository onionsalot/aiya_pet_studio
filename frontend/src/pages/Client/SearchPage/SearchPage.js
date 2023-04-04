import { useLocation } from "react-router-dom"
import { useSearchedProducts } from "../../../hooks/product-hooks"
import SearchSection from "../../../components/Client/SearchSection/SearchSection"

const SearchPage = () => {
  const searchParams = new URLSearchParams(useLocation().search)
  const searchTerm = searchParams.get("query")
  const { status, data: productData } = useSearchedProducts({ searchTerm })
  const foundProducts = productData?.data?.data?.searchProducts

  if (status === "error") return <h1>Something went wrong!</h1>
  if (status === "loading") return <h1>loading</h1>
  console.log(foundProducts)
  return (
    <div>
      <h1>Search Page</h1>
      <SearchSection foundProducts={ foundProducts }/>
    </div>
  );
}
 
export default SearchPage;