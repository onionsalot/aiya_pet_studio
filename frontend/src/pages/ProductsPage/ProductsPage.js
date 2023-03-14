import Table from "../../components/Admin/Table/Table"
import { useProducts } from "../../hooks/product-hooks"
import { useMemo } from "react"
import { Link } from "react-router-dom"

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
                        Header: "Description",
                        accessor: "description",
                    },
                    {
                        Header: "Created At",
                        accessor: "createdAt",
                    },
                ],
            },
        ],
        []
    )

    if (products.isError) return <h1>Something went wrong!</h1>
    if (products.isLoading) return <h1>Loading...</h1>

    return (
        <div className="bg-white h-full overflow-y-scroll">
            <Link className="admin-form-submit w-24 ml-2" to="/admin/products/create">+ Add</Link>
            <Table columns={columns} data={products?.data?.data?.data?.products} />
        </div>
    )
}

export default ProductsPage
