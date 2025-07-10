import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLink = (to, label) => (
    <Link
      to={to}
      className={`nav-link font-semibold px-3 py-1 rounded transition ${
        location.pathname === to
          ? "bg-white/30 text-yellow-300"
          : "text-white hover:text-yellow-300"
      }`}
      onClick={() => setIsOpen(false)}
    >
      {label}
    </Link>
  );

  return (
    <nav className="w-full bg-gradient-to-r from-purple-800 via-rose-500 to-rose-600 shadow-lg transition-colors duration-300 fixed z-20 backdrop-blur-md bg-opacity-90">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h2 className="font-extrabold text-white text-2xl tracking-tight font-stretch-expanded drop-shadow-lg flex justify-between items-center">
          <span className="bg-black/20 px-3 py-1 rounded-xl">Crud-App</span>
        </h2>
        <div className="hidden md:flex gap-6 items-center">
          {navLink("/", "Home")}
          {navLink("/about", "About")}
          {navLink("/create", "Create")}
          {navLink("/fav", "Fav page")}
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white font-extrabold font-stretch-expanded focus:outline-none"
          >
            {isOpen ? <X className="size-10" /> : <Menu className="size-10" />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`flex flex-col gap-4 items-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-52 py-2" : "max-h-0 py-0"
        }`}
      >
        {navLink("/", "Home")}
        {navLink("/about", "About")}
        {navLink("/fav", "Fav page")}
        {navLink("/create", "Create")}
      </div>
    </nav>
  );
};

export default Navbar;