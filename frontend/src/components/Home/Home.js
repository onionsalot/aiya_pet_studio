import Login from '../Auth/Login'
import Registration from '../Auth/Registration'

function Home({ user, setUser }) {
  return (
      <div>
        <h1>Home</h1>
        <h1>Status: { user ? user.email : "Not logged In"}</h1>
        <Registration setUser={setUser}/>
        <br />
        <Login setUser={setUser}/>
      </div>
    )
}

export default Home