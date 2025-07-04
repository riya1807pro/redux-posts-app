import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-slate-100 dark:bg-zinc-800 shadow transition-colors duration-300 fixed z-10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h3 className="font-bold text-teal-700 dark:text-teal-400 text-xl">
          Crud-App
        </h3>

        <div className="hidden md:flex gap-6 items-center">
          <a href="/" className="nav-link">Home</a>
          <a href="/about" className="nav-link">About</a>
          <a href="/create" className="nav-link">Create</a>
        </div>

        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-teal-700 dark:text-teal-400 focus:outline-none"
          >
            {isOpen ? <X className="size-8"/> : <Menu className="size-8"/>}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`flex flex-col gap-4 items-center bg-slate-100 dark:bg-zinc-800 md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40 py-4" : "max-h-0 py-0"}`}
      >
        <a href="/" className="nav-link">Home</a>
        <a href="/about" className="nav-link">About</a>
        <a href="/create" className="nav-link">Create</a>
      </div>
    </nav>
  );
};

export default Navbar;
