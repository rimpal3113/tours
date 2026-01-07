import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import logo from "../assets/tourlogo.jpeg"; // ✅ adjust path if needed

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
    <nav className="bg-white text-blue-600 px-6 py-4 flex justify-between items-center shadow-md">
      {/* Left side: Logo + Name */}
       <div className="flex items-center gap-2">
               <img
        src={logo}
        alt="Atithi Tours Logo"
        className="h-10 w-40"
      />
       
      </div>

      {/* Right side: Login / Logout */}
      <div
        className="flex items-center space-x-2 cursor-pointer"
        onClick={handleClick}
      >
        {isLoggedIn ? (
          <span className="font-semibold">Logout</span>
        ) : (
          <>
            <span className="hidden md:block">Login</span>
            <span className="text-2xl">&#128100;</span>
          </>
        )}
      </div>
    </nav>
  );
};

export default AdminNavbar;
