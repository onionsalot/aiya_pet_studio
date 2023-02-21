import React from "react"
import { useProducts } from "../../hooks/product-hooks"
import { useUsers } from "../../hooks/user-hooks"
import { useBoundStore } from "../../stores/useBoundStore"
import AddProductForm from "../../components/AddProductForm/AddProductForm"
import Product from "../../components/Product/Product"
import EditProductForm from "../../components/EditProductForm/EditProductForm"

const AdminDashboard = () => {
  const user = useBoundStore((state) => state.user)
  const users = useUsers()
  const products = useProducts()

  if (users.isError || products.isError) return <h1>Something went wrong!</h1>
  if (users.isLoading || products.isLoading) return <h1>Loading...</h1>

  return(
    <div className="bg-white h-full overflow-y-scroll">
      <h1>Admin Dashboard</h1>
      <h3>All Users -</h3>
      {
        user.admin && users.isSuccess && (
          users.data.data.data.users.map((user) => {
            return <li>ID: {user.id} || Name: {user.fullName}</li>
          })
        )
      }

      <hr />
      <h3>Add Product -</h3>
      <AddProductForm />

      <hr />
      <h3>Edit Product -</h3>
      <EditProductForm />

      <hr />
      <h3>All Products -</h3>
      {
        user.admin && products.isSuccess && (
          products.data.data.data.products.map((product) => {
            return <Product product={product}/>
          })
        )
      }
    </div>
  )
}

export default AdminDashboard
