import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-green-600 font-medium border-b-2 border-green-600 transition"
      : "text-gray-700 hover:text-green-600 font-medium transition";

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex-shrink-0">
  <img
      src="/images/ignis-logo.png"
      alt="Ignis Logo"
      className="h-10 w-auto cursor-pointer"
      onClick={() => navigate("/")}
    />        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-10">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About Us</NavLink>
          <NavLink to="/product" className={linkClass}>Product</NavLink>
          <NavLink to="/insight" className={linkClass}>Insight</NavLink>
          <NavLink to="/faqs" className={linkClass}>FAQs</NavLink>
        </nav>

        {/* Contact button */}
        <div className="hidden md:block">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "bg-green-600 text-white px-5 py-2 rounded-lg shadow-lg"
                : "bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition"
            }
          >
            Contact Us
          </NavLink>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <XMarkIcon className="h-6 w-6"/> : <Bars3Icon className="h-6 w-6"/>}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 flex flex-col space-y-3">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About Us</NavLink>
          <NavLink to="/product" className={linkClass}>Product</NavLink>
          <NavLink to="/insight" className={linkClass}>Insight</NavLink>
          <NavLink to="/faqs" className={linkClass}>FAQs</NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "bg-green-600 text-white px-5 py-2 rounded-lg shadow-lg"
                : "bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition"
            }
          >
            Contact Us
          </NavLink>
        </div>
      )}
    </header>
  );
}
