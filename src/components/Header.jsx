import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full fixed bg-gradient-to-tl from-gray-800 to-black opacity-90    top-0 left-0 font-bold text-accent shadow-lg z-50 font-body">

      <div className="flex justify-between items-center max-w-6xl mx-auto ">

        <img
          src="/Logo dark.png"
          alt="GDG MGM COET Logo"
          className="h-8 sm:h-10 md:h-12 lg:h-14 drop-shadow-lg transition-all duration-300"
        />

        {/* Hamburger Menu for Mobile */}
        <button
          className="text-3xl lg:hidden focus:outline-none text-accent"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen ? "true" : "false"}
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Navigation Menu */}
        <nav
          className={`${isOpen ? "block" : "hidden"} absolute lg:relative top-full left-0 w-full lg:w-auto lg:flex lg:items-center bg-black lg:bg-transparent p-6 lg:p-0`}
        >
          <ul className="flex flex-col text-accent lg:flex-row gap-4 lg:gap-8 text-base sm:text-lg font-medium">
            <li>
              <a
                href="#home"
                className="hover:text-yellow-600 cursor-pointer"
                style={{ textShadow: "0 2px 5px rgba(0, 0, 0, 0.3)" }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-yellow-600 cursor-pointer"
                style={{ textShadow: "0 2px 5px rgba(0, 0, 0, 0.3)" }}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#register"
                className="hover:text-yellow-600 cursor-pointer"
                style={{ textShadow: "0 2px 5px rgba(0, 0, 0, 0.3)" }}
              >
                Register
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-yellow-600 cursor-pointer"
                style={{ textShadow: "0 2px 5px rgba(0, 0, 0, 0.3)" }}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  );
};

export default Header;
