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
    const remember = data.remember_me === "on" ? true : false
    const userInfo = {
      user: {
        email: data.email,
        password: data.password,
        remember_me: remember
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
    <div className="mt-10">
      {showReset
        ?
        <>
          <h1 className="text-center text-2xl mb-3">Forgot Password</h1>
          <div className="flex justify-center px-5">
            <form ref={formRef} onSubmit={handlePasswordReset} className="w-full max-w-2xl">
              <p className="text-center my-3 text-gray-600 ">Please enter your email address and we'll send you a link to reset your password:</p>
              <label className="form-label">
                Email
                <input className="form-input" type="email" name="email" placeholder="Email" required />
              </label>
              <input className="form-submit mt-5" type="submit" value="Submit" />
            </form>
          </div>
          {requestPasswordResetMutation.isError ? requestPasswordResetMutation.error.response.data.message : ""}
          <p className="text-center"><span className="clickable-span" onClick={() => setShowReset(!showReset)}>Return to Login</span></p>
        </>
        :
        <>
          <div className="flex justify-center px-5">
            <form ref={formRef} onSubmit={handleSubmit} className="w-full max-w-2xl">
              <label className="form-label">
                Email
                <input className="form-input" type="email" name="email" placeholder="Email" required />
              </label>
              <label className="form-label">
                Password
                <input className="form-input" type="password" name="password" placeholder="Password" required />
              </label>
              <label className="form-label">
                <input className="w-4 h-4 ml-1 mr-3 shadow accent-indigo-500 hover:accent-indigo-400" type="checkbox" name="remember_me" />
                Remember Me
              </label>
              <input className="form-submit mt-5" type="submit" value="Login" />
            </form>
          </div>
          <p className="text-center">Forgot password? <span className="clickable-span" onClick={() => setShowReset(!showReset)}>Reset here</span></p>
        </>
      }
      {signinUserMutation.isError ? signinUserMutation.error.response?.data : ""}
    </div>
  )
}
export default Login
