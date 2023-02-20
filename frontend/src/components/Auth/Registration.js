import { useRef, useState } from "react"
import { useAuth } from "../../hooks/use-auth"
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector'

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
          middle_name: data.middle_name,
          last_name: data.last_name,
          gender: data.gender,
          address1: data.address1,
          address2: data.address2,
          country: data.country,
          state: data.state,
          city: data.city,
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
        First Name:
        <input type="text" name="first_name" placeholder="first name" />
        <br />
        Middle Name:
        <input type="text" name="middle_name" placeholder="middle name" />
        <br />
        Last Name:
        <input type="text" name="last_name" placeholder="last name" />
        <br />
        Gender:
        <select name="gender" required>
          <option value="" disabled selected>Choose</option>
          <option value="woman">Woman</option>
          <option value="man">Man</option>
          <option value="transgender">Transgender</option>
          <option value="non_binary">Non Binary</option>
          <option value="unknown">Unknown</option>
        </select>
        <br />
        Address Line 1:
        <input type="text" name="address1" placeholder="street number and name" />
        <br />
        Address Line 2:
        <input type="text" name="address2" placeholder="apt, suite, unit" />
        <br />
        Country: <CountryDropdown
          name="country"
          value={country}
          onChange={(val) => setCountry(val)}
        />
        <br />
        State/Province: <RegionDropdown
          name="state"
          country={country}
          value={region}
          onChange={(val) => setRegion(val)} />
        <br />
        City: <input type="text" name="city" placeholder="city"/>
        <br />
        Zipcode:
        <input type="text" name="zipcode" placeholder="zipcode" />
        <br />
        Email:
        <input type="email" name="email" placeholder="email" required />
        <br />
        Confirm Email:
        <input type="email" name="email_confirm" placeholder="email" required />
        <br />
        Password:{" "}
        <input type="password" name="password" placeholder="password" minlength="6" required />
        <br />
        Password Confirmation:{" "}
        <input
          type="password"
          name="password_confirmation"
          placeholder="Password Confirmation"
          minlength="6"
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
