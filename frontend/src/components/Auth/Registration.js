import { useRef } from "react"
import { useAuth } from "../../hooks/use-auth"

const Registration = () => {
  const formRef = useRef()
  const { signupUserMutation } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    const data = Object.fromEntries(formData)
    const userInfo = { user: {email: data.email, password: data.password, password_confirmation: data.password_confirmation} }
    signupUserMutation.mutate(userInfo)
    e.target.reset()
  }

  return (
    <div>
      <h3> Register </h3>
      <form ref={formRef} onSubmit={handleSubmit}>
        Email: <input type="email" name="email" placeholder="email" required/>
        <br />
        Password:{" "}
        <input type="password" name="password" placeholder="password" required/>
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
