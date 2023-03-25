import { useMutate } from "../../hooks/use-mutate"
import { useRef, useState, useEffect} from "react"
import { useUser } from "../../hooks/user-hooks"
import { useParams } from "react-router"
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

const UserForm = () => {
  const formRef = useRef()
  const { updateUser } = useMutate()
  const { id } = useParams()
  const { status, data: userData } = useUser({ id })

  const user = userData?.data?.data?.user
  const isAdmin = user?.admin

  const fetchedCountry = user?.country
  const fetchedState = user?.state
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    if (fetchedCountry) setCountry(fetchedCountry);
    if (fetchedState) setRegion(fetchedState);
  }, [fetchedCountry, fetchedState]);

  if (status === "error") return <h1>Something went wrong!</h1>
  if (status === "loading") return <h1>Loading...</h1>

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    const data = Object.fromEntries(formData)
    const adminValue = data.admin === 'true' ? true : false;
    data.country = country;
    data.state = region;
      const input = {
        id: id,
        first_name: data.firstName,
        middle_name: data.middleName,
        last_name: data.lastName,
        gender: data.gender,
        email: data.email,
        admin: adminValue,
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

  return (
    <>
      <form ref={formRef} onSubmit={handleSubmit} className="max-w-2xl m-6">
        <h1 className="text-2xl text-center mb-3">{id ? "Edit User" : "Add User"}</h1>
        <label className="admin-form-label">
          First Name:
          <input
            className="form-input admin-form-input"
            defaultValue={user.firstName}
            type="text"
            name="firstName"
          />
        </label>
        <label className="admin-form-label">
          Middle Name:
          <input
            className="admin-form-input"
            defaultValue={user.middleName}
            type="text"
            name="middleName"
          />
        </label>
        <label className="admin-form-label">
          Last Name:
          <textarea
            className="admin-form-input"
            defaultValue={user.lastName}
            type="text"
            name="lastName"
          />
        </label>
        <label className="admin-form-label">
          Gender:
          <textarea
            className="admin-form-input"
            defaultValue={user.gender}
            type="text"
            name="gender"
          />
        </label>
        <label className="admin-form-label">
          Email:
          <textarea
            className="admin-form-input"
            defaultValue={user.email}
            type="text"
            name="email"
            required
          />
        </label>
        <label className="admin-form-label">
          Admin:
          <select className="admin-form-input" name="admin" defaultValue={isAdmin.toString()}>
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </label>
        <label className="admin-form-label">
          Address1:
          <textarea
            className="admin-form-input"
            defaultValue={user.address1}
            type="text"
            name="address1"
          />
        </label>
        <label className="admin-form-label">
          Address2:
          <textarea
            className="admin-form-input"
            defaultValue={user.address2}
            type="text"
            name="address2"
          />
        </label>
        <label className="admin-form-label">
          City:
          <textarea
            className="admin-form-input"
            defaultValue={user.city}
            type="text"
            name="city"
          />
        </label>
        <label className="admin-form-label">
          State:
          <RegionDropdown
            className="form-input"
            name="state"
            country={country}
            value={region}
            onChange={(val) => setRegion(val)}
          />
        </label>
        <label className="admin-form-label">
          Country
          <CountryDropdown
            className="admin-form-input"
            name="country"
            value={country}
            onChange={setCountry}
          />
        </label>
        <label className="admin-form-label">
          Zipcode:
          <textarea
            className="admin-form-input"
            defaultValue={user.zipcode}
            type="text"
            name="zipcode"
          />
        </label>
        <label className="admin-form-label">
          Phone Number:
          <textarea
            className="admin-form-input"
            defaultValue={user.phoneNumber}
            type="text"
            name="phoneNumber"
          />
        </label>
        <input className="admin-form-submit" type="submit" value="Submit" />
      </form>
    </>
  )
}

export default UserForm