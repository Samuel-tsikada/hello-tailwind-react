import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ReactLogo from '../assets/react.svg';

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-gray-700 text-white fixed w-full top-0 left-0 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo + Dropdown */}
          <div className="relative flex items-center">
            <img
              src={ReactLogo}
              alt="React Logo"
              className="h-10 w-10 cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />

            {/* Dropdown menu */}
            {dropdownOpen && (
              <div className="absolute left-0 mt-12 w-40 bg-white text-black rounded-md shadow-lg py-2">
                <Link
                  to="/login"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={() => setDropdownOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={() => setDropdownOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Navigation links */}
          <div className="space-x-6">
            <Link to="/" className="hover:text-gray-300">Home</Link>
            <Link to="/about" className="hover:text-gray-300">About</Link>
            <Link to="/contact" className="hover:text-gray-300">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}