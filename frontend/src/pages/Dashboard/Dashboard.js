import React from "react"
import { useBoundStore } from "../../stores/useBoundStore"
import { useProducts } from "../../hooks/product-hooks"

const Dashboard = () => {
  const user = useBoundStore((state) => state.user)
  const { error, isLoading, isSuccess, data } = useProducts()

  if (error) return <h1>Something went wrong!</h1>
  if (isLoading) return <h1>Loading...</h1>

  return (
    <div>
      <div>
        <h1>DashBoard</h1>
        <h1>Status: {user ? "Logged In" : "Not logged In"}</h1>
        <hr />
        <h3>All Products -</h3>
        { 
          isSuccess && (
            data.data.data.products.map((product) => {
            return <li>{product.name}</li>
            })
          )
        }
      </div>
    </div>
  )
}

export default Dashboard
