import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-[#00000044] px-6 py-4 font-body font-bold text-accent shadow-xl backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/">
          <img
            src="/Logo dark.png"
            alt="GDG MGM COET Logo"
            className="h-8 rounded-full transition-all duration-300 sm:h-10 md:h-12 lg:h-14"
          />
        </Link>

        {/* Hamburger Menu for Mobile */}
        <button
          className="text-3xl text-accent focus:outline-none lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen ? "true" : "false"}
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Navigation Menu */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } absolute left-0 top-full w-full bg-[#00000077] p-6 font-mono lg:relative lg:flex lg:w-auto lg:items-center lg:bg-transparent lg:p-0`}
        >
          <ul className="flex flex-col items-center gap-4 text-base font-medium text-accent sm:text-lg lg:flex-row lg:gap-8">
            <li>
              <Link to="/" className="cursor-pointer hover:text-yellow-600">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="cursor-pointer hover:text-yellow-600"
              >
                Register
              </Link>
            </li>
            <li>
              <a
                href="https://chat.whatsapp.com/KRWeftwCWgN633y9JRS8eg"
                className="cursor-pointer hover:text-yellow-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
