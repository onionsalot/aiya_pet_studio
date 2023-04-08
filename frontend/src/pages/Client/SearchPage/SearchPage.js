import { useLocation, useNavigate } from "react-router-dom"
import { useSearchedProducts } from "../../../hooks/product-hooks"
import SearchSection from "../../../components/Client/SearchSection/SearchSection"
import Dropdown from "../../../components/Client/Dropdown/Dropdown"
import { useState, useEffect } from "react"

const SearchPage = () => {
  const searchParams = new URLSearchParams(useLocation().search)
  const searchTerm = searchParams.get("query")
  const sortQuery = searchParams.get("sort") || "relevant"
  const { status, data: productData } = useSearchedProducts({ searchTerm })
  const foundProducts = productData?.data?.data?.searchProducts
  const [sortBy, setSortBy] = useState(sortQuery)
  const navigate = useNavigate()

  useEffect(() => {
    setSortBy(sortQuery)
  }, [sortQuery])

  if (status === "error") return <h1>Something went wrong!</h1>

  const sortOptions = [
    {
      value: "relevant",
      display: 'Relevance'
    },
    {
      value: "lowestPrice",
      display: 'Lowest Price'
    },
    {
      value: "highestPrice",
      display: 'Highest Price'
    },
    {
      value: "topReviewed",
      display: 'Top Reviewed'
    },
    {
      value: "mostRecent",
      display: 'Most Recent'
    }
  ]

  const handleOptions = (e) => {
    setSortBy(e.target.value)

    const updatedSearchParams = new URLSearchParams(searchParams);
    updatedSearchParams.set("sort", e.target.value);
    navigate(`/app/search?${updatedSearchParams.toString()}`, { replace: true });
  }

  return (
    <div className="flex flex-col">
      <div className="align-center-max">
        <div className="ml-auto">
          <Dropdown prefix={"Sort"} sortOptions={sortOptions} handleOptions={handleOptions} defaultValue={sortQuery} />
        </div>
      </div>
      <SearchSection foundProducts={foundProducts} />
    </div>
  )
}
 
export default SearchPage