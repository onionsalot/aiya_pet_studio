import { useAuth } from "../../hooks/use-auth"

const Logout = () => {
  const { signoutUserMutation } = useAuth()

  const handleClick = async (e) => {
    e.preventDefault()
    signoutUserMutation.mutate()
  }

  return (
    <div>
      <input type="button" value="Logout" onClick={handleClick} />
    </div>
  )
}

export default Logout
