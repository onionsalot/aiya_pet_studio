import React from "react"
import Dashboard from "../pages/Dashboard/Dashboard"
import AuthPage from "../pages/AuthPage/AuthPage"
import Navbar from "../components/Navbar/Navbar"
import { Routes, Route } from "react-router-dom"
import ProtectedRoute from "./ProtectedRoute"
import ResetPassword from "../components/Auth/ResetPassword"
import Confirmation from "../components/Auth/Confirmation"
import { useBoundStore } from "../stores/useBoundStore"

function UserRoutes() {
  const user = useBoundStore((state) => state.user)
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/app" element={<Dashboard />} />
        <Route
          path="/app/login"
          element={
            <ProtectedRoute isAllowed={!user}>
              <AuthPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/app/reset"
          element={
            <ProtectedRoute isAllowed={!user}>
              <ResetPassword />
            </ProtectedRoute>
          }
        />
        <Route
          path="/app/confirmation"
          element={
            <ProtectedRoute isAllowed={!user}>
              <Confirmation />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default UserRoutes
