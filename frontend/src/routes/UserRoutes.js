import React from "react"
import AuthPage from "../pages/AuthPage/AuthPage"
import { Routes, Route, Navigate } from "react-router-dom"
import ProtectedRoute from "./ProtectedRoute"
import ResetPassword from "../components/Auth/ResetPassword"
import Confirmation from "../components/Auth/Confirmation"
import { useBoundStore } from "../stores/useBoundStore"
import SearchPage from "../pages/Client/SearchPage/SearchPage"
import Header from "../components/Header/Header"
import Homepage from "../pages/Client/Homepage/Homepage"
import { SkeletonTheme } from 'react-loading-skeleton'
import Footer from "../components/Footer/Footer"

function UserRoutes() {
  const user = useBoundStore((state) => state.user)
  return (
    <div className="flex flex-col min-h-screen">
      <SkeletonTheme baseColor='#ffeaf1' highlightColor='#fff5f7'>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/app" />} />
          <Route path="/app" element={<Homepage />} index />
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
          <Route
            path="/app/cart"
          />
          <Route
            path="/app/search"
            element={
              <SearchPage />
            }
          />
        </Routes>
        <Footer />
      </SkeletonTheme>
    </div>
  )
}

export default UserRoutes
