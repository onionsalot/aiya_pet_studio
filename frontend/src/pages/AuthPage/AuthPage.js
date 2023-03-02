import React, { useState } from "react"
import Registration from "../../components/Auth/Registration"
import Login from "../../components/Auth/Login"
const AuthPage = () => {
  const [showLogin, setShowLogin] = useState(true)

  return (
    <div>
      {showLogin
        ?
        <>
          <Login />
          <p className="text-center mb-7"> Don't have an account? <span className="clickable-span" onClick={() => setShowLogin(!showLogin)}> Register Here</span></p>
        </>
        :
        <>
          <Registration />
          <p className="text-center mb-7"> Already have an account? <span className="clickable-span" onClick={() => setShowLogin(!showLogin)}> Login Here</span></p>
        </>
      }
    </div>
  )
}

export default AuthPage
