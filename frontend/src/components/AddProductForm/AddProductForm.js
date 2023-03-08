import { useMutate } from "../../hooks/use-mutate";
import { useRef } from "react";

const AddProductForm = () => {
  const formRef = useRef();
  const { addProduct } = useMutate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    const input = { name: data.name, price: parseFloat(data.price) };
    addProduct.mutate(input);
    e.target.reset();
  };

  return (
    <>
      <form ref={formRef} onSubmit={handleSubmit}>
        Name: <input type="name" name="name" required />
        Price: <input type="number" name="price" required />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};
export default AddProductForm;
