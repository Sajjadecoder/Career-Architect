import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/fokusme-logo.png"; 
import { Link } from "react-router-dom";

export default function Navbar() {
  const [user, setUser] = useState(null); // mock: { username: "Sajjad" }
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white text-charcoal font-inter shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Fokus Me Logo" className="h-10 w-auto" />
          <b className="font-poppins text-deep-navy text-lg">FOKUS ME</b>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 font-poppins text-base md:text-sm">

          <a href="#features" className="hover:text-primary-blue transition md:text-lg">
            Features
          </a>
          <a href="#pricing" className="hover:text-primary-blue transition md:text-lg">
            Pricing
          </a>
          <a href="#faq" className="hover:text-primary-blue transition md:text-lg">
            FAQ
          </a>
          <a href="/candidate-dashboard" className="hover:text-primary-blue">
              Dashboard
            </a>

          {user ? (
            <span className="font-semibold text-gold-accent">
              {user.username}
            </span>
          ) : (

            <button className="bg-primary-blue text-white px-4 py-2 rounded-lg hover:bg-gold-accent transition">
              <Link to={'/login'} >
              Login
              </Link>
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-inner border-t border-gray-100">
          <div className="flex flex-col items-center space-y-4 py-6">
            <a href="#features" className="hover:text-primary-blue">
              Features
            </a>
            <a href="#pricing" className="hover:text-primary-blue">
              Pricing
            </a>
            <a href="#faq" className="hover:text-primary-blue">
              FAQ
            </a>
            <a href="/candidate-dashboard" className="hover:text-primary-blue">
              Dashboard
            </a>
            {user ? (
              <span className="font-semibold text-gold-accent">
                {user.username}
              </span>
            ) : (
              <button className="bg-primary-blue text-white px-4 py-2 rounded-lg hover:bg-gold-accent transition">
              <Link to={'/login'} >
              Login
              </Link>
            </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
