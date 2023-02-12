import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/use-auth"

const Login = () => {
  const navigate = useNavigate()
  const formRef = useRef()
  const [showReset, setShowReset] = useState(false)
  const { signinUserMutation, requestPasswordResetMutation } = useAuth()
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    const data = Object.fromEntries(formData)
    const userInfo = {
      user: {
        email: data.email,
        password: data.password,
        remember_me: true
      }
    }
    signinUserMutation.mutate(
      userInfo,
      { 
        onSuccess: (response) => {
          navigate("/app")
        }
      }
    )
    e.target.reset()
  }
  
  const handlePasswordReset = async (e) => {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    const data = Object.fromEntries(formData)
    const userInfo = { user: { email: data.email } }

    requestPasswordResetMutation.mutate(userInfo)
    e.target.reset()
  }

  return (
    <div>
      <h3> Login </h3>
      { showReset 
      ? 
        <>
          <form ref={formRef} onSubmit={handlePasswordReset}>
          Email: <input type="email" name="email" placeholder="email" required/>
          <input type="submit" value="Submit" />
          </form>
          
          {requestPasswordResetMutation.isError ? requestPasswordResetMutation.error.response.data.message : ""}
          <br />
          <p><span className="clickable-span" onClick={() => setShowReset(!showReset)}>Return to Login</span></p>
        </>
      : 
        <>
          <form ref={formRef} onSubmit={handleSubmit}>
            Email: <input type="email" name="email" placeholder="email" required/>
            <br />
            Password:{" "}
            <input type="password" name="password" placeholder="password" required/>
            <br />
            <input type="submit" value="Login" />
          </form>
          <br />
          <p>Forgot password? <span className="clickable-span" onClick={() => setShowReset(!showReset)}>Reset here</span></p>
        </>
      }
      {signinUserMutation.isError ? signinUserMutation.error.response?.data : ""}
    </div>
  )
}
export default Login
