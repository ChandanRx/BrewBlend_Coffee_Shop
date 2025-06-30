import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import {
  FaBars,
  FaTimes,
  FaShoppingCart,
  FaHome,
  FaMugHot,
  FaInfoCircle,
  FaEnvelope,
  FaCoffee
} from 'react-icons/fa'
import { useCart } from '../context/CartContext'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const { cart } = useCart()

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 70, damping: 12 }}
      className="bg-[#f9f9f9] text-[#2e2e2e] sticky top-0 z-50 shadow-md"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-2 text-[#2e2e2e]">
          <FaCoffee className="text-[#2e2e2e]" />
          BrewBlend
        </h1>

        <div className="hidden md:flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-1 relative group transition duration-200 ${
                isActive ? 'font-semibold after:w-full' : 'after:w-0'
              } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#2e2e2e] after:transition-all after:duration-300`
            }
          >
            <FaHome />
            Home
          </NavLink>

          <NavLink
            to="/menu"
            className={({ isActive }) =>
              `flex items-center gap-1 relative group transition duration-200 ${
                isActive ? 'font-semibold after:w-full' : 'after:w-0'
              } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#2e2e2e] after:transition-all after:duration-300`
            }
          >
            <FaMugHot />
            Menu
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `flex items-center gap-1 relative group transition duration-200 ${
                isActive ? 'font-semibold after:w-full' : 'after:w-0'
              } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#2e2e2e] after:transition-all after:duration-300`
            }
          >
            <FaInfoCircle />
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `flex items-center gap-1 relative group transition duration-200 ${
                isActive ? 'font-semibold after:w-full' : 'after:w-0'
              } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#2e2e2e] after:transition-all after:duration-300`
            }
          >
            <FaEnvelope />
            Contact
          </NavLink>

          <NavLink to="/cart" className="relative">
            <FaShoppingCart className="text-xl text-[#2e2e2e] hover:text-[#4b4b4b] transition" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#2e2e2e] text-white text-xs px-1.5 py-0.5 rounded-full">
                {cart.length}
              </span>
            )}
          </NavLink>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-[#2e2e2e]"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-[#f0f0f0] px-6 pb-4 border-t border-[#e0e0e0]"
          >
            <NavLink
              to="/"
              onClick={() => setOpen(false)}
              className="block py-2 border-b border-[#ddd] text-base font-medium hover:text-[#2e2e2e]"
            >
              Home
            </NavLink>
            <NavLink
              to="/menu"
              onClick={() => setOpen(false)}
              className="block py-2 border-b border-[#ddd] text-base font-medium hover:text-[#2e2e2e]"
            >
              Menu
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setOpen(false)}
              className="block py-2 border-b border-[#ddd] text-base font-medium hover:text-[#2e2e2e]"
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className="block py-2 border-b border-[#ddd] text-base font-medium hover:text-[#2e2e2e]"
            >
              Contact
            </NavLink>
            <NavLink
              to="/cart"
              onClick={() => setOpen(false)}
              className="block py-2 text-base font-medium hover:text-[#2e2e2e]"
            >
              Cart 🛒
            </NavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar
