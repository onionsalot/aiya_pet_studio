import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AdminRoutes from "../routes/AdminRoutes"
import UserRoutes from "../routes/UserRoutes"
import DefaultToaster from '../lib/toaster'
import { useCurrentUser } from "../hooks/user-hooks"
import { WindowSizeProvider } from "../components/WindowSizeContext/WindowSizeContext"

function App() {
  const user = useCurrentUser()

  if (user.isLoading) return <span>Loading...</span>

  return (
    <WindowSizeProvider>
      <Router>
        <Routes>
          <Route
            path="*"
            element={<UserRoutes />}
          />
          <Route path="/admin/*" element={<AdminRoutes />} />
        </Routes>
      </Router>
      <DefaultToaster />
    </WindowSizeProvider>
  )
}

export default App
