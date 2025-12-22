import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaPlusSquare,
  FaBoxOpen,
  FaAddressBook,
  FaClipboardList,
  FaListAlt,
  FaHotel,
  FaRegEye,
  FaCheckCircle,
} from "react-icons/fa";

const AdminSidebar = () => {
  const activeClass =
    "flex items-center gap-3 p-3 mb-2 rounded-lg bg-blue-600 text-white shadow-md";

  const normalClass =
    "flex items-center gap-3 p-3 mb-2 rounded-lg text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-all duration-200";

  return (
    <div className="w-64 bg-white min-h-screen shadow-xl p-6 border-r">
      <h2 className="text-2xl font-bold mb-8 text-blue-700 tracking-wide">
        Admin Panel
      </h2>

      <ul className="text-sm font-medium">
        <li>
          <NavLink to="/admin/dashboard" className={({ isActive }) => (isActive ? activeClass : normalClass)}>
            <FaTachometerAlt className="text-lg" />
            Dashboard
          </NavLink>
        </li>

        <p className="text-xs text-gray-400 uppercase mt-6 mb-2">Packages</p>

        <li>
          <NavLink to="/admin/add-packages" className={({ isActive }) => (isActive ? activeClass : normalClass)}>
            <FaPlusSquare className="text-lg" />
            Add Packages
          </NavLink>
        </li>

        <li>
          <NavLink to="/admin/view-packages" className={({ isActive }) => (isActive ? activeClass : normalClass)}>
            <FaBoxOpen className="text-lg" />
            View Packages
          </NavLink>
        </li>

        <p className="text-xs text-gray-400 uppercase mt-6 mb-2">Bookings</p>

        <li>
          <NavLink to="/admin/BookPackage" className={({ isActive }) => (isActive ? activeClass : normalClass)}>
            <FaClipboardList className="text-lg" />
            Book Package
          </NavLink>
        </li>

        <li>
          <NavLink to="/admin/ViewBooking" className={({ isActive }) => (isActive ? activeClass : normalClass)}>
            <FaListAlt className="text-lg" />
            View Booking
          </NavLink>
        </li>

        <li>
          <NavLink to="/admin/HotelBooking" className={({ isActive }) => (isActive ? activeClass : normalClass)}>
            <FaHotel className="text-lg" />
            Hotel Booking
          </NavLink>
        </li>

        <li>
          <NavLink to="/admin/ViewHotelBooking" className={({ isActive }) => (isActive ? activeClass : normalClass)}>
            <FaRegEye className="text-lg" />
            View Hotel Booking
          </NavLink>
        </li>

        <li>
          <NavLink to="/admin/BookingConfirm" className={({ isActive }) => (isActive ? activeClass : normalClass)}>
            <FaCheckCircle className="text-lg" />
            Booking Confirm
          </NavLink>
        </li>

        <p className="text-xs text-gray-400 uppercase mt-6 mb-2">Others</p>

        <li>
          <NavLink to="/admin/ViewContactDetails" className={({ isActive }) => (isActive ? activeClass : normalClass)}>
            <FaAddressBook className="text-lg" />
            Contact Details
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
