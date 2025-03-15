import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // Hamburger और Close Icon
import { Link, NavLink, useNavigate } from "react-router-dom"; // React Router Import

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Menu Toggle State
  const navigate = useNavigate();
  const isLogin = JSON.parse(localStorage.getItem("loginEmail")) || null;

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">
          <Link to="/">MyBrand</Link>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-gray-300" : "hover:text-gray-300"
              }
            >
              Home
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-gray-300" : "hover:text-gray-300"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "text-gray-300" : "hover:text-gray-300"
              }
            >
              Services
            </NavLink> */}
          {/* </li> */}
          <li>
            {isLogin ? (
              <NavLink
                to="/logout"
                className={({ isActive }) =>
                  isActive ? "text-gray-300" : "hover:text-gray-300"
                }
              >
                Logout
              </NavLink>
            ) : (
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? "text-gray-300" : "hover:text-gray-300"
                }
              >
                Login
              </NavLink>
            )}
          </li>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? "text-gray-300" : "hover:text-gray-300"
              }
            >
              Cart
            </NavLink>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-blue-700 p-4 space-y-2 text-center">
          <li>
            <NavLink
              to="/"
              className="block py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="/about"
              className="block py-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className="block py-2"
              onClick={() => setIsOpen(false)}
            >
              Services
            </NavLink>
          </li> */}
          <li>
            {/* <NavLink
              to="/contact"
              className="block py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink> */}
            {isLogin ? (
              <NavLink to="/logout" className="block py-2">
                Logout
              </NavLink>
            ) : (
              <NavLink to="/login" className="block py-2">
                Login
              </NavLink>
            )}
          </li>
          <li>
            <NavLink
              to="/cart"
              className="block py-2"
              onClick={() => setIsOpen(false)}
            >
              Cart
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
