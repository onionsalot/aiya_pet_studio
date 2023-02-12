import { useMutate } from "../../hooks/use-mutate"

const Product = ({ product }) => {
  const { deleteProduct } = useMutate()

  function handleClick() {
    const input = { id: product.id }
    deleteProduct.mutate(input)
  }

  return (
    <>
      <li><button onClick={handleClick}>x</button> ID: {product.id} || Name: {product.name}</li>
    </>
  )
}
export default Product