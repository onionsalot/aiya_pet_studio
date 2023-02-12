import React, { useState } from "react"
import Registration from "../../components/Auth/Registration"
import Login from "../../components/Auth/Login"
const AuthPage = () => {
  const [showLogin, setShowLogin] = useState(true)

  return (
    <div>
      <div>
        <h1>AuthPage</h1>
        { showLogin 
        ? <>
            <Login /> <br /> <p> Don't have an account? <span className="clickable-span" onClick={() => setShowLogin(!showLogin)}>Register Here</span></p>
          </>
        : <>
            <Registration /> <br /> <p> Already have an account? <span className="clickable-span" onClick={() => setShowLogin(!showLogin)}>Login Here</span></p>
          </>
        }
      </div>
    </div>
  )
}

export default AuthPage
