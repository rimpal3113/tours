import React from "react";
import { NavLink } from "react-router-dom";
import { FaTachometerAlt, FaBoxOpen, FaEye, FaCommentDots } from "react-icons/fa";

const AdminSidebar = () => {
  const activeClass =
    "flex items-center space-x-3 p-3 mb-2 rounded-lg bg-blue-600 text-white";
  const normalClass =
    "flex items-center space-x-3 p-3 mb-2 rounded-lg text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition duration-200";

  return (
    <div className="w-64 bg-gray-50 min-h-screen shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-blue-700">Admin Panel</h2>
      <ul>
        <li>
          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) => (isActive ? activeClass : normalClass)}
          >
            <FaTachometerAlt />
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/add-packages"
            className={({ isActive }) => (isActive ? activeClass : normalClass)}
          >
            <FaBoxOpen />
            <span>Add Packages</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/view-packages"
            className={({ isActive }) => (isActive ? activeClass : normalClass)}
          >
            <FaEye />
            <span>View Packages</span>
          </NavLink>
        </li>

         <li>
          <NavLink
            to="/admin/ViewContactDetails"
            className={({ isActive }) => (isActive ? activeClass : normalClass)}
          >
            <FaEye />
            <span>ViewContact Details</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/BookPackage"
            className={({ isActive }) => (isActive ? activeClass : normalClass)}
          >
            <FaBoxOpen  />
            <span>BookPackage</span>
          </NavLink>
        </li>
        <li>
         <NavLink
            to="/admin/ViewBooking"
            className={({ isActive }) => (isActive ? activeClass : normalClass)}
          >
            <FaEye />
            <span>ViewBooking</span>
          </NavLink>
        </li>
        <li>
         <NavLink
            to="/admin/HotelBooking"
            className={({ isActive }) => (isActive ? activeClass : normalClass)}
          >
            <FaEye />
            <span>HotelBooking</span>
          </NavLink>
        </li>

         <li>
         <NavLink
            to="/admin/ViewHotelBooking"
            className={({ isActive }) => (isActive ? activeClass : normalClass)}
          >
            <FaEye />
            <span>ViewHotelBooking</span>
          </NavLink>
        </li>
        <li>
         <NavLink
            to="/admin/BookingConfirm"
            className={({ isActive }) => (isActive ? activeClass : normalClass)}
          >
            <FaEye />
            <span>BookingConfirm</span>
          </NavLink>
        </li>
        
      </ul>
    </div>
  );
};

export default AdminSidebar;
