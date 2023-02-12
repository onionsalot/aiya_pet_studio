import React from "react"
import AdminDashboard from "../pages/AdminDashboard/AdminDashboard"
import { Routes, Route } from "react-router-dom"
import ProtectedRoute from "./ProtectedRoute"
import { useBoundStore } from "../stores/useBoundStore"

function AdminRoutes() {
  const user = useBoundStore((state) => state.user)
  return (
    <Routes>
      <Route
          path="dashboard"
          element={
            <ProtectedRoute isAllowed={!!user && user.admin}>
              <AdminDashboard />
            </ProtectedRoute>
          }
      />
    </Routes>
  )
}

export default AdminRoutes
