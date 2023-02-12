import { useEffect} from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/use-auth"

const Confirmation = () => {
  const navigate = useNavigate()
  const { confirmationMutation } = useAuth()

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const token = urlParams.get('token')
    const payload = { params: { confirmation_token: token } }

    confirmationMutation.mutate(
      payload,
      {
        onSettled: () => navigate("/app/login")
      }
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <>
      <p>Checking confirmation token...</p>
    </>
  )
}
export default Confirmation
