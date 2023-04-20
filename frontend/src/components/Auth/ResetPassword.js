import { useRef, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/use-auth"

const ResetPassword = () => {
  const navigate = useNavigate()
  const formRef = useRef()
  const [errors, setErrors] = useState([])
  const [message, setMessage] = useState("")
  const { resetPasswordMutation, checkResetTokenMutation } = useAuth()
  const urlParams = new URLSearchParams(window.location.search)
  const token = urlParams.get('token')

  useEffect(() => {
    checkResetTokenMutation.mutate({ reset_password_token: token })
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    const data = Object.fromEntries(formData)
    if (data.password !== data.confirmPassword) setErrors(["Passwords are not the same"])

    const payload = {
      user: {
        password: data.password,
        password_confirmation: data.confirmPassword,
        reset_password_token: token
      }
    }

    resetPasswordMutation.mutate(
      payload,
      {
        onSuccess: (response) => {
          setMessage("Password has been reset. You will be re-directed in 5 seconds...")
          setTimeout(() => {
            navigate("/app/login")
          }, 5000)
        },
        onError: () => {
          setMessage("An error has occured...")
        }
      }
    )
    e.target.reset()
  }

  if (message) return (message)


  return (
    <>
      {checkResetTokenMutation.isSuccess
        ?
        <div className="mt-10">
          <h1 className="text-center text-2xl mb-3"> Reset Your Password </h1>
          <div className="flex flex-col justify-center items-center px-5">
            <form ref={formRef} onSubmit={handleSubmit} className="w-full max-w-2xl">
              <label className="form-label">
                Password:
                <input className="form-input" type="password" name="password" placeholder="Password must be at least 6 characters long" required />
              </label>
              <label className="form-label">
                Confirm Password:
                <input className="form-input" type="password" name="confirmPassword" placeholder="Confirm new password" required />
              </label>
              <input className="form-submit mt-5" type="submit" value="Reset Password" />
            </form>
            <div className="text-cyan-500">
              {errors}
              {resetPasswordMutation.isError ? resetPasswordMutation.error : ""}
            </div>
          </div>
        </div>
        :
        <div>
          <p>Invalid Token</p>
        </div>
      }
    </>
  )
}
export default ResetPassword
