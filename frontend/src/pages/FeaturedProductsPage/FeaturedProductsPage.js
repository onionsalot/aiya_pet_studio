import Table from "../../components/Admin/Table/Table"
import { useFeaturedProducts } from "../../hooks/featured-product-hooks"
import { useMemo } from "react"
import { Link } from "react-router-dom"
import { humanReadableDate } from "../../helpers/helper"
import TableSkeleton from "../../components/Admin/TableSkeleton/TableSkeleton"

const FeaturedProductsPage = () => {
  const featuredProducts = useFeaturedProducts()
  const columns = useMemo(
    () => [
      {
        Header: "Products",
        columns: [
          {
            Header: "ID",
            accessor: "id",
          },
          {
            Header: "Product ID",
            accessor: "productId",
          },
          {
            Header: "Created At",
            accessor: "createdAt",
            Cell: ({ cell: { value } }) => humanReadableDate(value),
          },
          {
            Header: "Updated At",
            accessor: "updatedAt",
            Cell: ({ cell: { value } }) => humanReadableDate(value),
          },
        ],
      },
    ],
    []
  )

  const content = useMemo(
    () => {
      if (featuredProducts.isError) return <h1>Something went wrong!</h1>
      if (featuredProducts.isLoading) return <TableSkeleton />
      return <Table columns={columns} data={featuredProducts?.data?.data?.data?.featuredProducts} />
    }, [featuredProducts]
  )

  return (
    <div className="bg-white h-full overflow-y-scroll">
      <Link className="admin-form-submit w-24 ml-2" to="/admin/featured-products/create">+ Add</Link>
      {content}
    </div>
  )
}
 
export default FeaturedProductsPage