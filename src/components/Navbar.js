import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-yellow-400 to-pink-500 text-white p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold">Logo</Link>
        </div>
        <div className="hidden lg:flex items-center space-x-6">
          <Link to="/" className="text-white">Home</Link>
          <Link to="/about" className="text-white">About</Link>
          <Link to="/articles-list" className="text-white">Articles</Link>
        </div>
        <button
          className="lg:hidden focus:outline-none transition-transform transform duration-500 hover:scale-110"
          onClick={toggleMenu}
        >
          <svg
            className={`w-6 h-6 ${menuOpen ? 'block' : 'hidden'}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <svg
            className={`w-6 h-6 ${menuOpen ? 'hidden' : 'block'}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <div
        className={`lg:hidden ${menuOpen ? 'block' : 'hidden'} mt-4`}
      >
        <Link to="/" className="py-2 block px-4 text-white">Home</Link>
        <Link to="/about" className="py-2 block px-4 text-white">About</Link>
        <Link to="/articles-list" className="py-2 block px-4 text-white">Articles</Link>
      </div>
    </nav>
  );
}

export default Navbar;
