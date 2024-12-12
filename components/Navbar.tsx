"use client"; // Add this line at the very top

import Link from 'next/link';
import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black text-white shadow-xl z-50">
      <div className="flex justify-between items-center px-4 py-3 md:py-4">
        {/* Logo Section */}
        <h1 className="text-4xl font-bold uppercase">
          <span className="text-yellow-500">Coders</span>
          <span className="font-normal">Coffee</span>
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-8 font-bold text-lg">
            <li>
              <Link href="/#home" className="hover:text-yellow-500 transition-colors duration-300">Home</Link>
            </li>
            <li>
              <Link href="/#about" className="hover:text-yellow-500 transition-colors duration-300">About</Link>
            </li>
            <li>
              <Link href="/#product" className="hover:text-yellow-500 transition-colors duration-300">Product</Link>
            </li>
            <li>
              <Link href="/#contact" className="hover:text-yellow-500 transition-colors duration-300">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <GiHamburgerMenu
            onClick={toggleMenu}
            className="text-3xl cursor-pointer hover:text-yellow-500 transition-colors duration-300"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-black text-white flex flex-col items-center justify-center z-40">
          <IoClose
            onClick={toggleMenu}
            className="text-4xl cursor-pointer hover:text-yellow-500 transition-colors duration-300 absolute top-4 right-4"
          />
          <ul className="flex flex-col items-center gap-6 font-bold text-lg">
            <li>
              <Link
                href="/#home"
                onClick={toggleMenu}
                className="hover:text-yellow-500 transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/#about"
                onClick={toggleMenu}
                className="hover:text-yellow-500 transition-colors duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/#product"
                onClick={toggleMenu}
                className="hover:text-yellow-500 transition-colors duration-300"
              >
                Product
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                onClick={toggleMenu}
                className="hover:text-yellow-500 transition-colors duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
