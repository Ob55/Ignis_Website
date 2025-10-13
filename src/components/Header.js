import { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { Bars3Icon, XMarkIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useCart } from "../CartContext";
import { FiShoppingBag } from "react-icons/fi";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // ✅ get current route
  const { cart } = useCart(); // get cart items

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-green-600 font-bold border-b-2 border-green-600 transition px-3 py-2 text-lg"
      : "text-gray-700 hover:text-green-600 font-bold transition px-3 py-2 text-lg";

  // Show cart only on /product page
const showCart = location.pathname === "/product" || location.pathname === "/cart";

  return (
    <header className="bg-white shadow-md ">
      <div className="container mx-auto flex justify-between items-center py-6 px-6">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="/images/ignis-logo.png"
            alt="Ignis Logo"
            className="h-12 w-auto cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About Us</NavLink>
          <NavLink to="/product" className={linkClass}>Product</NavLink>
          <NavLink to="/insight" className={linkClass}>Insight</NavLink>
          <NavLink to="/faqs" className={linkClass}>FAQs</NavLink>
        </nav>

        {/* Right section: Contact + Cart */}
        <div className="hidden md:flex items-center space-x-4">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg text-lg"
                : "bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition text-lg"
            }
          >
            Contact Us
          </NavLink>

                {/* Cart Icon - only show on /product */}
            {showCart && (
            <button
              className="relative p-1" // no background
              onClick={() => navigate("/cart")}
              title="View Cart"
            >
              <FiShoppingBag className="h-8 w-8 text-green-700" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 text-white text-xs font-bold rounded-full flex items-center justify-center min-w-[20px] h-5 px-1 bg-red-600">
                  {cart.length}
                </span>
              )}
            </button>
          )}
        </div>
        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center gap-2">
         {showCart && (
          <button
            className="relative p-1" // no background
            onClick={() => navigate("/cart")}
            title="View Cart"
          >
            <ShoppingCartIcon className="h-8 w-8 text-green-600" />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 text-white text-xs font-bold rounded-full flex items-center justify-center min-w-[20px] h-5 px-1 bg-red-600">
                {cart.length}
              </span>
            )}
          </button>
        )}

          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 flex flex-col space-y-4 text-lg">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About Us</NavLink>
          <NavLink to="/product" className={linkClass}>Product</NavLink>
          <NavLink to="/insight" className={linkClass}>Insight</NavLink>
          <NavLink to="/faqs" className={linkClass}>FAQs</NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg text-lg"
                : "bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition text-lg"
            }
          >
            Contact Us
          </NavLink>
        </div>
      )}
    </header>
  );
}
