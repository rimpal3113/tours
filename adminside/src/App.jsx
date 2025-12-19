import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/AdminNavbar";
import Sidebar from "./components/AdminSidebar";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import AddPackages from "./pages/AddPackages";
import ViewPackages from "./pages/ViewPackages";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminViewContacts from "./pages/ViewContactDetails";
import BookPackage from "./pages/BookPackage";
import ViewBooking from "./pages/ViewBooking";
import HotelBooking from "./pages/HotelBooking";
import BookingConfirm from "./pages/BookingConfirm";
import ViewHotelBooking from "./pages/ViewHotelBooking";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="flex h-screen">
          <Sidebar /> {/* Always visible */}
          <div className="flex-1 flex flex-col">
            <Navbar /> {/* Always visible */}
            <div className="flex-1 bg-gray-50 p-6 overflow-auto">
              <Routes>
                <Route path="/admin/login" element={<Login />} />

                {/* Protected admin routes */}
                <Route
                  path="/admin/dashboard"
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/Add-Packages"
                  element={
                    <ProtectedRoute>
                      <AddPackages />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/View-Packages"
                  element={
                    <ProtectedRoute>
                      <ViewPackages />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/ViewContactDetails"
                  element={
                    <ProtectedRoute>
                      <AdminViewContacts />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/BookPackage"
                  element={
                    <ProtectedRoute>
                      <BookPackage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/ViewBooking"
                  element={
                    <ProtectedRoute>
                      <ViewBooking />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/HotelBooking"
                  element={
                    <ProtectedRoute>
                      <HotelBooking />
                    </ProtectedRoute>
                  }
                />
                 <Route
                  path="/admin/ViewHotelBooking"
                  element={
                    <ProtectedRoute>
                      <ViewHotelBooking />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/BookingConfirm"
                  element={
                    <ProtectedRoute>
                      <BookingConfirm />
                    </ProtectedRoute>
                  }
                />

                {/* Fallback */}
                <Route
                  path="*"
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
