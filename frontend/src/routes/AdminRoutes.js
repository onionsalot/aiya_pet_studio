import React from "react"
import AdminDashboard from "../pages/AdminDashboard/AdminDashboard"
import { Routes, Route } from "react-router-dom"
import ProtectedRoute from "./ProtectedRoute"
import { useBoundStore } from "../stores/useBoundStore"
import AdminNav from "../components/Admin/AdminNav/AdminNav"
import AdminTitleBar from "../components/Admin/AdminTitleBar/AdminTitleBar"
import UsersPage from "../pages/UsersPage/UsersPage"
import CreateUpdateUser from "../pages/CreateUpdateUser/CreateUpdateUser"
import TagsPage from "../pages/TagsPage/TagsPage"
import CreateUpdateTag from "../pages/CreateUpdateTag/CreateUpdateTag"
import ProductsPage from "../pages/ProductsPage/ProductsPage"
import CreateUpdateProduct from "../pages/CreateUpdateProduct/CreateUpdateProduct"
import FeaturedProductsPage from "../pages/FeaturedProductsPage/FeaturedProductsPage"
import CreateUpdateFeaturedProduct from "../pages/CreateUpdateFeaturedProduct/CreateUpdateFeaturedProduct"
import { SkeletonTheme } from 'react-loading-skeleton';

function AdminRoutes() {
  const user = useBoundStore((state) => state.user)
  return (
    <SkeletonTheme baseColor="#E9F0F8" highlightColor="#FFFFFF">
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
                    <CreateUpdateUser />
                  </ProtectedRoute>
                }
              />
              <Route
                path="tags"
                element={
                  <ProtectedRoute isAllowed={!!user && user.admin}>
                    <TagsPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="tags/:id"
                element={
                  <ProtectedRoute isAllowed={!!user && user.admin}>
                    <CreateUpdateTag />
                  </ProtectedRoute>
                }
              />
              <Route
                path="tags/create"
                element={
                  <ProtectedRoute isAllowed={!!user && user.admin}>
                    <CreateUpdateTag />
                  </ProtectedRoute>
                }
              />
              <Route
                path="products"
                element={
                  <ProtectedRoute isAllowed={!!user && user.admin}>
                    <ProductsPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="products/:id"
                element={
                  <ProtectedRoute isAllowed={!!user && user.admin}>
                    <CreateUpdateProduct />
                  </ProtectedRoute>
                }
              />
              <Route
                path="products/create"
                element={
                  <ProtectedRoute isAllowed={!!user && user.admin}>
                    <CreateUpdateProduct />
                  </ProtectedRoute>
                }
              />
              <Route
                path="featured-products"
                element={
                  <ProtectedRoute isAllowed={!!user && user.admin}>
                    <FeaturedProductsPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="featured-products/:id"
                element={
                  <ProtectedRoute isAllowed={!!user && user.admin}>
                    <CreateUpdateFeaturedProduct />
                  </ProtectedRoute>
                }
              />
              <Route
                path="featured-products/create"
                element={
                  <ProtectedRoute isAllowed={!!user && user.admin}>
                    <CreateUpdateFeaturedProduct />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </SkeletonTheme>
  )
}

export default AdminRoutes
