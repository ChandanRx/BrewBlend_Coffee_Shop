import { FaFacebookF, FaInstagram, FaTwitter, FaCoffee } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-[#f9f9f9] text-[#2e2e2e] border-t border-[#ddd]">
      <div className="max-w-7xl mx-auto px-6 py-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-start">

        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-2">
            <FaCoffee className="text-[#2e2e2e]" />
            BrewBlend
          </h2>
          <p className="text-sm text-[#555] max-w-xs leading-relaxed">
            Brewing joy with handcrafted tea & coffee for your everyday moments.
          </p>
        </div>

        <div className="flex flex-col gap-1 text-sm sm:items-start lg:items-center">
          <NavLink to="/" className="hover:text-[#2e2e2e]">Home</NavLink>
          <NavLink to="/menu" className="hover:text-[#2e2e2e]">Menu</NavLink>
          <NavLink to="/about" className="hover:text-[#2e2e2e]">About</NavLink>
          <NavLink to="/contact" className="hover:text-[#2e2e2e]">Contact</NavLink>
        </div>

        <div className="flex gap-4 text-xl text-[#2e2e2e] sm:justify-start lg:justify-end">
          <a href="#" className="hover:text-[#4b4b4b] transition"><FaFacebookF /></a>
          <a href="#" className="hover:text-[#4b4b4b] transition"><FaInstagram /></a>
          <a href="#" className="hover:text-[#4b4b4b] transition"><FaTwitter /></a>
        </div>
      </div>

      <div className="bg-[#f3f3f3] text-center text-xs text-[#888] py-4 border-t border-[#e0e0e0]">
        © {new Date().getFullYear()} <span className="text-[#2e2e2e] font-semibold">BrewBlend</span>. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
