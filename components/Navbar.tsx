"use client"; // Add this line at the very top

import Link from 'next/link';
import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

// CSS for animations
const styles = {
  animation: `
    @keyframes colorChange {
      0% {
        color: white; /* Starting color */
      }
      100% {
        color: #FFD700; /* Ending color (gold/yellow) */
      }
    }
    
    .text-animation {
      display: inline-block; /* Make each word inline block */
      animation: colorChange 2s infinite alternate; /* Animation settings */
    }
  `,
};

const Navbar = () => {
  return (
    <main className='fixed top-0 left-0 right-0 flex justify-between items-center mx-auto px-4 bg-black text-white shadow-xl z-50'>
      <div>
        <style>{styles.animation}</style> {/* Include CSS for animation */}
        <h1 className='text-4xl font-bold uppercase'>
          <span className='text-animation'>Coders</span>
          <span className='uppercase font-normal'>Coffee</span>
        </h1>
      </div>

      <nav>
        <ul className="flex justify-evenly items-center gap-8 p-4 font-bold text-xl">
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
      <div>
        <GiHamburgerMenu className='text-3xl cursor-pointer hover:text-yellow-500 transition-colors duration-300' />
      </div>
    </main>
  );
};

export default Navbar;