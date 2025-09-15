// Footer.jsx
import { FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* Main Footer Section */}
      <footer className="relative bg-green-100 py-16 overflow-hidden">
        {/* Floating blobs */}
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-green-300 rounded-full opacity-30 animate-pulse-slow -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
        <div className="absolute bottom-10 right-1/4 w-60 h-60 bg-green-200 rounded-full opacity-25 animate-pulse-slow translate-x-1/2 translate-y-1/2 blur-xl"></div>
        <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-green-400 rounded-full opacity-20 animate-pulse-slow blur-2xl"></div>

        {/* Content Grid */}
        <div className="relative container mx-auto px-6 md:px-12">
          {/* Desktop layout: 5 cols | Mobile: stack with 2 cols */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
            
            {/* Logo + Info (span 2 on mobile so it looks full width, span 1 on desktop) */}
            <div className="col-span-2 md:col-span-1 flex flex-col items-start">
              <img
                src="/images/ignis-logo.png"
                alt="Ignis Innovation Logo"
                className="h-16 mb-4 cursor-pointer"
                onClick={() => navigate("/")}
              />
              <p className="text-sm">
                Ignis Innovation – Efficient, scalable, and modern kitchen solutions.
              </p>
              {/* Social Links */}
              <div className="flex mt-4 space-x-4">
                <a
                  href="https://wa.me/254720907612"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-700 hover:text-green-600 transition text-2xl"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://www.linkedin.com/company/ignis-innovation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-600 transition text-2xl"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>

            {/* Useful Links */}
            <div>
              <h3 className="font-bold text-lg mb-4">Useful Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="hover:text-gray-700 transition">Home</Link></li>
                <li><Link to="/about" className="hover:text-gray-700 transition">About Us</Link></li>
                <li><Link to="/product" className="hover:text-gray-700 transition">Products</Link></li>
                <li><Link to="/insight" className="hover:text-gray-700 transition">Insight</Link></li>
                <li><Link to="/faqs" className="hover:text-gray-700 transition">FAQs</Link></li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3 className="font-bold text-lg mb-4">Products</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/products/steamcookers" className="hover:text-gray-700 transition">Steam Cookers</a></li>
                <li><a href="/products/epcs" className="hover:text-gray-700 transition">EPCs</a></li>
                <li><a href="/products/induction" className="hover:text-gray-700 transition">Induction Cookers</a></li>
                <li><a href="/products/add-ons" className="hover:text-gray-700 transition">Add-ons & Spares</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-bold text-lg mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/privacy-policy" className="hover:text-gray-700 transition">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-gray-700 transition">Terms & Conditions</a></li>
                <li><a href="/returns" className="hover:text-gray-700 transition">Return Policy</a></li>
                <li><a href="/warranty" className="hover:text-gray-700 transition">Warranty Information</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-bold text-lg mb-4">Contact Info</h3>
              <ul className="space-y-2 text-sm">
                <li>Warehouse: Lavington</li>
                <li>Office Hours: 8am - 5pm</li>
                <li>
                  Phone:{" "}
                  <a href="tel:+254720907612" className="hover:text-gray-700 transition">
                    +254 720 907 612
                  </a>
                </li>
                <li>
                  Email:{" "}
                  <a href="mailto:info@ignis-innovation.com" className="hover:text-gray-700 transition">
                    info@ignis-innovation.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Lower Footer */}
      <div className="bg-black py-6 text-center text-white text-sm md:text-base">
        &copy; {new Date().getFullYear()} Ignis Innovation. All rights reserved.
      </div>
    </>
  );
};

export default Footer;
