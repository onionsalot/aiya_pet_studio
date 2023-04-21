import { useLocation, useNavigate } from "react-router-dom"
import { useSearchProducts } from "../../../hooks/product-hooks"
import SearchSection from "../../../components/Client/SearchSection/SearchSection"
import Dropdown from "../../../components/Client/Dropdown/Dropdown"
import { useState, useEffect, useMemo } from "react"
import ProductCardSkeleton from "../../../components/Client/Skeletons/ProductCardSkeleton/ProductCardSkeleton"
import SearchBar from "../../../components/Header/TitleBanner/SearchBar"

const SearchPage = () => {
  const searchParams = new URLSearchParams(useLocation().search)
  const searchTerm = searchParams.get("query")
  const sortQuery = searchParams.get("sort") || "relevant"
  const { status, data: productData, error } = useSearchProducts({ searchTerm })
  const foundProducts = productData?.data?.data?.searchProducts
  const [sortBy, setSortBy] = useState(sortQuery)
  const navigate = useNavigate()

  useEffect(() => {
    setSortBy(sortQuery)
  }, [sortQuery])

  const content = useMemo(
    () => {
      if (status === 'error') return <h1>{error.message || "Something went wrong!"}</h1>
      if (status === 'loading') {
        return Array(16)
          .fill()
          .map((_, i) => (
            <ProductCardSkeleton key={i} />
          )
          )
      }
      return <SearchSection foundProducts={foundProducts} />
    }, [status]
  )

  const sortOptions = [
    {
      value: "relevant",
      label: 'Relevance'
    },
    {
      value: "lowestPrice",
      label: 'Lowest Price'
    },
    {
      value: "highestPrice",
      label: 'Highest Price'
    },
    {
      value: "topReviewed",
      label: 'Top Reviewed'
    },
    {
      value: "mostRecent",
      label: 'Most Recent'
    }
  ]

  const handleOptions = (e) => {
    setSortBy(e.target.value)

    const updatedSearchParams = new URLSearchParams(searchParams);
    updatedSearchParams.set("sort", e.target.value);
    navigate(`/app/search?${updatedSearchParams.toString()}`, { replace: true });
  }

  return (
    <div>
      <div className="align-center-max flex-nowrap flex-col-reverse justify-between items-start sm:flex-row sm:items-center">
        <p className="basis-2/3 text-start ml-10 sm:ml-3">Results for <span className="text-cyan-500 ml-1">"{searchTerm}"</span></p>
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