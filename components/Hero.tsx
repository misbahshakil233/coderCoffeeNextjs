"use client"; // This makes the component a client component

import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import Link from "next/link"
const Hero = () => {
  useEffect(() => {
    const letters = document.querySelectorAll('.animated-letter');
    letters.forEach((letter, index) => {
      letter.style.animationDelay = `${index * 0.1}s`; // Delay each letter animation
    });
  }, []);

  const text = "Delicious Coffee"; // Text you want to animate


  return (
    <section id="home" className='flex items-center justify-between min-h-[750px] bg-black w-full shadow-xl px-4'>
      {/* Left Column for Text and Buttons */}
      <div className='flex flex-col justify-center  text-white w-1/2 pb-40'>
      <h1 className='hero-text text-center text-7xl font-bold mb-4 relative animate-colorCycle'>
          Delicious Coffee
        </h1>
<p className='text-xl text-center max-w-[60ch] mx-auto'>
  Savor the rich aroma and bold flavor of premium coffee, expertly roasted to perfection. At Coders Coffee, every sip is a moment of pure indulgence. Whether you're starting your morning or enjoying a relaxing break, our coffee is crafted for those who appreciate excellence in every cup. <br/><br/>
 </p>



        <div className='flex justify-center space-x-4'>
          <button className='bg-yellow-500 text-black font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 transition'>Order Now</button>
         <Link href="#product"> <button className='bg-transparent border-2 border-yellow-500 text-yellow-500 font-bold py-2 px-4 rounded-lg hover:bg-yellow-500 hover:text-black transition'>Learn More</button></Link>
        </div>
      </div>

      {/* Right Column for Image */}
      <div className='relative w-1/2'>
        <img 
          src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b06381158904485.63942bec3b198.png" 
          alt="Delicious Coffee" 
          className=" right-0 bg-black coffee-image w-3/4 " 
        />
      </div>
    </section>
  );
};

export default Hero;
