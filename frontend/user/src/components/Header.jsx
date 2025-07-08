import React, { useState } from "react";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#3b240c] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 font-semibold text-xl">
          <span role="img" aria-label="tree">
            🌲
          </span>
          <span className="font-bold tracking-wide">Photomatic</span>
        </div>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden md:flex space-x-8 items-center text-sm font-medium">
          <li className="hover:text-yellow-400 cursor-pointer transition">
            Home
          </li>
          <li className="hover:text-yellow-400 cursor-pointer transition">
            Services
          </li>
          <li className="hover:text-yellow-400 cursor-pointer transition">
            Quote
          </li>
          <li className="hover:text-yellow-400 cursor-pointer transition">
            Contact
          </li>
          <li>
            <button className="ml-4 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition">
              Book Now
            </button>
          </li>
        </ul>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button
            className="focus:outline-none"
            aria-label="Open menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  mobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#3b240c] px-6 pb-4">
          <ul className="flex flex-col space-y-4 text-sm font-medium">
            <li className="hover:text-yellow-400 cursor-pointer transition">
              Home
            </li>
            <li className="hover:text-yellow-400 cursor-pointer transition">
              About
            </li>
            <li className="hover:text-yellow-400 cursor-pointer transition">
              Services
            </li>
            <li className="hover:text-yellow-400 cursor-pointer transition">
              Contact
            </li>
            <li>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition w-full">
                Book Now
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
