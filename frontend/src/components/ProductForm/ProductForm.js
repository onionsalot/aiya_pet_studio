import { useMutate } from "../../hooks/use-mutate"
import { useRef } from "react"
import { useProduct } from "../../hooks/product-hooks"
import { useParams } from "react-router"

const ProductForm = () => {
  const formRef = useRef()
  const { updateProduct } = useMutate()
  const { addProduct } = useMutate()
  const { id } = useParams()
  const product = useProduct({ "id": id })

  if (product.isError) return <h1>Something went wrong!</h1>
  if (product.isLoading) return <h1>Loading...</h1>

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    const data = Object.fromEntries(formData)
    if (!id) {
      const input = {
        name: data.name,
        price: parseFloat(data.price),
        description: data.description
      }
      addProduct.mutate(input)
    } else {
      const input = {
        id: id,
        name: data.name,
        price: parseFloat(data.price),
        description: data.description
      }
      updateProduct.mutate(input)
    }
  }

  return (
    <>
      <form ref={formRef} onSubmit={handleSubmit}>
        <label className="form-label">
          Name:
          <input
            className="form-input"
            defaultValue={product?.data?.data?.data?.product.name && product.data.data.data.product.name}
            type="text"
            name="name" required />
        </label>
        <label className="form-label">
          Price:
          <input
            className="form-input"
            defaultValue={product?.data?.data?.data?.product.price && product.data.data.data.product.price}
            type="number"
            name="price" required />
        </label>
        <label className="form-label">
          Description:
          <input
            className="form-input"
            defaultValue={product?.data?.data?.data?.product.description && product.data.data.data.product.description}
            type="text"
            name="description" required />
        </label>
        <input className="form-submit" type="submit" value="Submit" />
      </form>
    </>
  )
}
export default ProductForm