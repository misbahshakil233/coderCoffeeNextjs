"use client";
import React from 'react';
import { FaCoffee } from 'react-icons/fa'; // Coffee icon for branding
import { FaArrowUp } from 'react-icons/fa'; // Icon for back to top button
import Link from 'next/link'; // For navigation links

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-5">
        {/* Logo Section */}
        <div className="flex items-center mb-5 md:mb-0">
          <FaCoffee className="text-4xl mr-2" />
          <h1 className="text-3xl font-bold">Coders Coffee</h1>
        </div>

        {/* Navigation Links */}
        <nav className="mb-5 md:mb-0">
          <ul className="flex space-x-6 text-lg">
            <li>
              <Link href="/" className="hover:text-yellow-500">Home</Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-yellow-500">About</Link>
            </li>
            <li>
              <Link href="#products" className="hover:text-yellow-500">Products</Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-yellow-500">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Back to Top Button */}
        <div>
          <button
            onClick={scrollToTop}
            className="flex items-center bg-yellow-500 hover:bg-yellow-600 text-gray-800 px-4 py-2 rounded-full"
            aria-label="Scroll to top"
          >
            <FaArrowUp className="mr-2" /> Back to Top
          </button>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 text-center border-t border-gray-700 pt-4">
        <p className="text-gray-400">© {new Date().getFullYear()} Coders Coffee. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
