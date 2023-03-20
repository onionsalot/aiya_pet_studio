import { useRef } from "react"
import { useFeaturedProduct } from "../../../hooks/featured-product-hooks"
import { useMutate } from "../../../hooks/use-mutate"
import { useParams } from "react-router"
import FormSkeleton from "../Skeletons/FormSkeleton/FormSkeleton"

const FeaturedProductForm = () => {
  const formRef = useRef()
  const { id } = useParams()
  const { updateFeaturedProduct } = useMutate()
  const { addFeaturedProduct } = useMutate()
  let featuredProduct = useFeaturedProduct({ "id": id });

  if (featuredProduct.isError) return <h1>Something went wrong!</h1>
  if (featuredProduct.isLoading) return <FormSkeleton count={1}/>

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    const data = Object.fromEntries(formData)
    if (!id) {
      const input = {
        productId: parseFloat(data.productId),
      }
      addFeaturedProduct.mutate(input)
    } else {
      const input = {
        id: id,
        productId: parseFloat(data.productId)
      }
      updateFeaturedProduct.mutate(input)
    }
  }

  return ( 
    <>
      <form ref={formRef} onSubmit={handleSubmit} className="max-w-2xl m-6">
        <h1 className="text-2xl text-center mb-3">{id ? "Edit Featured Product" : "Add Featured Product"}</h1>
        <label className="admin-form-label">
          Product:
          <input
            className="admin-form-input"
            defaultValue={id ? featuredProduct.data.data.data.featuredProduct.productId : ''}
            type="number"
            name="productId"
            required
          />
        </label>
        <input className="admin-form-submit" type="submit" value="Submit" />
      </form>
    </>
  );
}
 
export default FeaturedProductForm;