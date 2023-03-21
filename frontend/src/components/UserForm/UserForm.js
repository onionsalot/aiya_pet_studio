import { useMutate } from "../../hooks/use-mutate"
import { useRef } from "react"
import { useUser } from "../../hooks/user-hooks"
import { useParams } from "react-router"

const UserForm = () => {
  const formRef = useRef()
  const { updateUser } = useMutate()
  const { addUser } = useMutate()
  const { id } = useParams()
  const user = useUser({ "id": id })

  if (user.isError) return <h1>Something went wrong!</h1>
  if (user.isLoading) return <h1>Loading...</h1>

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    const data = Object.fromEntries(formData)
    if (!id) {
      const input = {
        first_name: data.firstName,
        middle_name: data.middleName,
        last_name: data.lastName,
        gender: data.gender,
        email: data.email,
        admin: data.admin,
        address1: data.address1,
        address2: data.address2,
        city: data.city,
        state: data.state,
        country: data.country,
        zipcode: data.zipcode,
        phone_number: data.phoneNumber
      }
      addUser.mutate(input)
    } else {
      const input = {
        id: id,
        first_name: data.firstName,
        middle_name: data.middleName,
        last_name: data.lastName,
        gender: data.gender,
        email: data.email,
        admin: data.admin,
        address1: data.address1,
        address2: data.address2,
        city: data.city,
        state: data.state,
        country: data.country,
        zipcode: data.zipcode,
        phone_number: data.phoneNumber
      }
      updateUser.mutate(input)
    }
  }

  return (
    <>
      <form ref={formRef} onSubmit={handleSubmit} className="max-w-2xl m-6">
        <h1 className="text-2xl text-center mb-3">{id ? "Edit User" : "Add User"}</h1>
        <label className="admin-form-label">
          First Name:
          <input
            className="form-input admin-form-input"
            defaultValue={user?.data?.data?.data?.user.firstName && user.data.data.data.user.firstName}
            type="text"
            name="firstName"
            required
          />
        </label>
        <label className="admin-form-label">
          Middle Name:
          <input
            className="admin-form-input"
            defaultValue={user?.data?.data?.data?.user.middleName && user.data.data.data.user.middleName}
            type="text"
            name="middleName"
          />
        </label>
        <label className="admin-form-label">
          Last Name:
          <textarea
            className="admin-form-input"
            defaultValue={user?.data?.data?.data?.user.lastName && user.data.data.data.user.lastName}
            type="text"
            name="lastName"
            required
          />
        </label>
        <label className="admin-form-label">
          Gender:
          <textarea
            className="admin-form-input"
            defaultValue={user?.data?.data?.data?.user.gender && user.data.data.data.user.gender}
            type="text"
            name="gender"
            required
          />
        </label>
        <label className="admin-form-label">
          Email:
          <textarea
            className="admin-form-input"
            defaultValue={user?.data?.data?.data?.user.email && user.data.data.data.user.email}
            type="text"
            name="email"
            required
          />
        </label>
        <label className="admin-form-label">
          Admin:
          <textarea
            className="admin-form-input"
            defaultValue={user?.data?.data?.data?.user.admin && user.data.data.data.user.admin}
            type="text"
            name="admin"
            required
          />
        </label>
        <label className="admin-form-label">
          Address1:
          <textarea
            className="admin-form-input"
            defaultValue={user?.data?.data?.data?.user.address1 && user.data.data.data.user.address1}
            type="text"
            name="address1"
            required
          />
        </label>
        <label className="admin-form-label">
          Address2:
          <textarea
            className="admin-form-input"
            defaultValue={user?.data?.data?.data?.user.address2 && user.data.data.data.user.address2}
            type="text"
            name="address2"
            required
          />
        </label>
        <label className="admin-form-label">
          City:
          <textarea
            className="admin-form-input"
            defaultValue={user?.data?.data?.data?.user.city && user.data.data.data.user.city}
            type="text"
            name="city"
            required
          />
        </label>
        <label className="admin-form-label">
          State:
          <textarea
            className="admin-form-input"
            defaultValue={user?.data?.data?.data?.user.state && user.data.data.data.user.state}
            type="text"
            name="state"
            required
          />
        </label>
        <label className="admin-form-label">
          Country:
          <textarea
            className="admin-form-input"
            defaultValue={user?.data?.data?.data?.user.country && user.data.data.data.user.country}
            type="text"
            name="country"
            required
          />
        </label>
        <label className="admin-form-label">
          Zipcode:
          <textarea
            className="admin-form-input"
            defaultValue={user?.data?.data?.data?.user.zipcode && user.data.data.data.user.zipcode}
            type="text"
            name="zipcode"
            required
          />
        </label>
        <label className="admin-form-label">
          Phone Number:
          <textarea
            className="admin-form-input"
            defaultValue={user?.data?.data?.data?.user.phoneNumber && user.data.data.data.user.phoneNumber}
            type="text"
            name="phoneNumber"
            required
          />
        </label>
        <input className="admin-form-submit" type="submit" value="Submit" />
      </form>
    </>
  )
}
export default UserForm