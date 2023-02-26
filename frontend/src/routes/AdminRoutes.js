import React from "react"
import AdminDashboard from "../pages/AdminDashboard/AdminDashboard"
import { Routes, Route } from "react-router-dom"
import ProtectedRoute from "./ProtectedRoute"
import { useBoundStore } from "../stores/useBoundStore"
import AdminNav from "../components/Admin/AdminNav/AdminNav"
import AdminTitleBar from "../components/Admin/AdminTitleBar/AdminTitleBar"
import UsersPage from "../pages/UsersPage/UsersPage"

function AdminRoutes() {
  const user = useBoundStore((state) => state.user)
  return (
    <div className="flex flex-row bg-admin_bg">
      <AdminNav />
      <div className="flex flex-col w-full max-h-screen overflow-y-hidden">
        <AdminTitleBar />
        <div className="m-3 h-[90%]">
          <Routes>
            <Route
              path="dashboard"
              element={
                <ProtectedRoute isAllowed={!!user && user.admin}>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="users"
              element={
                <ProtectedRoute isAllowed={!!user && user.admin}>
                  <UsersPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="users/:id"
              element={
                <ProtectedRoute isAllowed={!!user && user.admin}>

                </ProtectedRoute>
              }
            />
          </Routes> 
        </div>
      </div>
    </div>
  )
}

export default AdminRoutes
