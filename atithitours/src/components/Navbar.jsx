import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/tourlogo.jpeg"; // ✅ adjust path as needed

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const currentPath = window.location.pathname;
  const isActive = (path) =>
    currentPath === path
      ? "text-blue-600 font-bold"
      : "text-gray-700 hover:text-blue-600";

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">

          {/* Logo (Imported Image) */}
          <div className="flex items-center gap-2">
         <img
  src={logo}
  alt="Atithi Tours Logo"
  className="h-10 w-40"
/>


            
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="/" className={isActive("/")}>Home</a>
            <a href="/tours" className={isActive("/tours")}>Tours</a>
            <a href="/about" className={isActive("/about")}>About</a>
            <a href="/contact" className={isActive("/contact")}>Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="text-gray-700 hover:text-blue-600 text-2xl"
            >
              {open ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t shadow">
          <div className="px-4 py-3 flex flex-col gap-3">
            <a href="/" className={isActive("/")}>Home</a>
            <a href="/tours" className={isActive("/tours")}>Tours</a>
            <a href="/about" className={isActive("/about")}>About</a>
            <a href="/contact" className={isActive("/contact")}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
