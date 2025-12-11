import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/AdminSidebar";
import Navbar from "../components/AdminNavbar";

export default function AdminLayout() {
  return (
    <div className="flex h-screen">

      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1 flex flex-col">

        {/* Navbar */}
        <Navbar />

        {/* Page content */}
        <main className="p-6 flex-1 overflow-y-auto bg-gray-100">
          <Outlet /> {/* <-- THIS RENDERS YOUR DASHBOARD */}
        </main>
      </div>
    </div>
  );
}
