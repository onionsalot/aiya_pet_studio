import Table from "../../components/Admin/Table/Table"
import { useProducts } from "../../hooks/product-hooks"
import { useMemo } from "react"
import { Link } from "react-router-dom"
import { humanReadableDate } from "../../helpers/helper"
import TableSkeleton from "../../components/Admin/TableSkeleton/TableSkeleton"

const ProductsPage = () => {
  const products = useProducts()
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
            Header: "Name",
            accessor: "name",
          },
          {
            Header: "Price",
            accessor: "price",
          },
          {
            Header: "Created At",
            accessor: "createdAt",
            Cell: ({ cell: { value } }) => humanReadableDate(value),
          },
        ],
      },
    ],
    []
  )

  const content = useMemo(
    () => {
      if (products.isError) return <h1>Something went wrong!</h1>
      if (products.isLoading) return <TableSkeleton />
      return <Table columns={columns} data={products?.data?.data?.data?.products} />
    }, [products]
  )

  return (
    <div className="bg-white h-full overflow-y-scroll">
      <Link className="admin-form-submit w-24 ml-2" to="/admin/products/create">+ Add</Link>
      {content}
    </div>
  )
}

export default ProductsPage
