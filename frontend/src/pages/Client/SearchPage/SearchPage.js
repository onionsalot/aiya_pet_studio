import { useLocation, useNavigate } from "react-router-dom"
import { useSearchProducts } from "../../../hooks/product-hooks"
import SearchSection from "../../../components/Client/SearchSection/SearchSection"
import Dropdown from "../../../components/Client/Dropdown/Dropdown"
import { useMemo } from "react"
import ProductCardSkeleton from "../../../components/Client/Skeletons/ProductCardSkeleton/ProductCardSkeleton"
import SearchBar from "../../../components/Header/TitleBanner/SearchBar"

const SearchPage = () => {
  const searchParams = new URLSearchParams(useLocation().search)
  const searchTerm = searchParams.get("query")
  const sortQuery = searchParams.get("sort") || "relevant"
  const { status, data: productData, error } = useSearchProducts({ searchTerm, sortBy: sortQuery })
  const foundProducts = productData?.data?.data?.searchProducts
  const navigate = useNavigate()

  const content = useMemo(
    () => {
      if (status === 'error') return <h1>{error.message || "Something went wrong!"}</h1>
      if (status === 'loading') {
        return Array(4)
          .fill()
          .map((_, i) => (
            <ProductCardSkeleton key={i} />
          )
          )
      }
      return <SearchSection foundProducts={foundProducts} />
    }, [status, foundProducts]
  )

  const sortOptions = [
    {
      value: "relevant",
      label: 'Relevance'
    },
    {
      value: "price_asc",
      display: 'Lowest Price'
    },
    {
      value: "price_desc",
      display: 'Highest Price'
    },
    {
      value: "top_reviewed",
      display: 'Top Reviewed'
    },
    {
      value: "recent",
      display: 'Most Recent'
    },
    {
      value: "name",
      display: 'Name'
    }
  ]

  const handleOptions = (e) => {
    const updatedSearchParams = new URLSearchParams(searchParams);
    updatedSearchParams.set("sort", e.target.value);
    navigate(`/app/search?${updatedSearchParams.toString()}`, { replace: true });
  }

  return (
    <div className="mx-4">
      <div className="align-center-max mt-4 flex-nowrap flex-col-reverse justify-between items-start sm:flex-row sm:items-center">
        <p className="basis-2/3 text-start ml-10 mt-3 sm:ml-0 sm:mt-0">Results for <span className="text-cyan-500 ml-1">"{searchTerm}"</span></p>
        <div className="align-center-max flex-nowrap justify-evenly sm:justify-end items-center">
          <SearchBar />
          <Dropdown prefix={"Sort"} options={sortOptions} handleOptions={handleOptions} defaultValue={sortQuery} />
        </div>
      </div>
      <div className="align-center-max mt-4">
        {content}
      </div>
    </div>
  )
}

export default SearchPage