import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const AdminNavbar = () => {
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useContext(AuthContext);

  const handleClick = () => {
    if (isLoggedIn) {
      logout(); // clear login state
      navigate("/admin/login"); // redirect to login
    } else {
      navigate("/admin/login"); // go to login page
    }
  };

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
      {/* Left side: Logo + Name */}
      <div className="flex items-center space-x-3">
        <img src="/mylogo.jpg" alt="Logo" className="w-10 h-10 rounded-full" />
        <span className="text-xl font-bold">Tour</span>
      </div>

      {/* Right side: Login/Logout */}
      <div
        className="flex items-center space-x-2 cursor-pointer"
        onClick={handleClick}
      >
        {isLoggedIn ? (
          <span className="font-semibold">Logout</span>
        ) : (
          <>
            <span className="hidden md:block">Login</span>
            <span className="text-2xl">&#128100;</span> {/* simple user icon */}
          </>
        )}
      </div>
    </nav>
  );
};

export default AdminNavbar;
