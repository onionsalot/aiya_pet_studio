import { useRef, useState } from "react"
import { useAuth } from "../../hooks/use-auth"
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector'

const Registration = () => {
  const formRef = useRef()
  const { signupUserMutation } = useAuth()
  const [country, setCountry] = useState('')
  const [region, setRegion] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    const data = Object.fromEntries(formData)
    if (data.email === data.email_confirm) {
      const userInfo = {
        user: {
          email: data.email,
          password: data.password,
          password_confirmation: data.password_confirmation,
          first_name: data.first_name,
          last_name: data.last_name,
          address1: data.address1,
          address2: data.address2,
          country: data.country,
          state: data.state,
          zipcode: data.zipcode
        }
      }
      console.log(userInfo)
      signupUserMutation.mutate(userInfo)
      e.target.reset()
    } else {
      console.log("Emails do not match")
    }
  }

  return (
    <div>
      <h3> Register </h3>
      <form ref={formRef} onSubmit={handleSubmit}>
        First Name: <input type="text" name="first_name" placeholder="first name" />
        <br />
        Last Name: <input type="text" name="last_name" placeholder="last name" />
        <br />
        Address: <input type="text" name="address1" placeholder="street number and name" />
        <br />
        Address: <input type="text" name="address2" placeholder="apt, suite, unit" />
        <br />
        Country: <CountryDropdown
          name="country"
          value={country}
          onChange={(val) => setCountry(val)}
        />
        State/Province: <RegionDropdown
          name="state"
          country={country}
          value={region}
          onChange={(val) => setRegion(val)} />
        <br />
        Zipcode: <input type="text" name="zipcode" placeholder="zipcode" />
        <br />
        Email: <input type="email" name="email" placeholder="email" required />
        <br />
        Confirm Email: <input type="email" name="email_confirm" placeholder="email" required />
        <br />
        Password:{" "}
        <input type="password" name="password" placeholder="password" required />
        <br />
        Password Confirmation:{" "}
        <input
          type="password"
          name="password_confirmation"
          placeholder="Password Confirmation"
          required
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      {signupUserMutation.isSuccess ? "Successfully Signed up! Please check and confirm your email to log in." : ""}
      {signupUserMutation.isError ? signupUserMutation.error.response?.data?.message : ""}
    </div>
  )
}
export default Registration
