// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router";
import { IoMenu, IoClose } from "react-icons/io5";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const linkClass = (path) =>
    `block px-6 py-3 font-medium rounded-md transition
     ${
       pathname === path
         ? "bg-yellow-400 text-gray-900" /* active = yellow */
         : "text-white hover:bg-yellow-300 hover:text-gray-900"
     }`;

  return (
    <nav className="bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 text-white shadow-md relative">
      <div className="container mx-auto flex items-center justify-between lg:justify-normal lg:gap-10 p-4">
        {/* Brand */}
        <Link to="/" className="flex items-center space-x-2">
          <img src="icon.webp" alt="Shopful icon" className="h-12" />
          <span className="text-xl font-bold">Shopful</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex space-x-4">
          <Link to="/" className={linkClass("/")}>
            Home
          </Link>
          <Link to="/shop" className={linkClass("/shop")}>
            Shop Now
          </Link>
        </div>

        {/* Burger button */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="lg:hidden focus:outline-none"
        >
          {menuOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden bg-gradient-to-r from-green-500 via-emerald-400 to-teal-500 overflow-hidden transition-[max-height] duration-300
          ${menuOpen ? "max-h-screen" : "max-h-0"}`}
      >
        <ul className="flex flex-col">
          <li>
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className={linkClass("/")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/shop"
              onClick={() => setMenuOpen(false)}
              className={linkClass("/shop")}
            >
              Shop
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
