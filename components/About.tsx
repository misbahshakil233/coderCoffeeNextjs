"use client"
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa'; // Importing check mark icon

const About = () => {
  return (
    <section id="about" className="relative min-h-[100vh] p-24 bg-gray-100 flex flex-col items-center justify-center">
      {/* Attractive Banner */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-b-lg flex items-center justify-center mb-16">
        <h2 className="text-4xl font-bold text-white">Our Passion for Coffee</h2>
      </div>

      <h1 className="text-5xl font-bold mb-16 text-center mt-20">About Us</h1>
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl">
        
        {/* Left Side for Our Story */}
        <div className="flex-1 text-center md:text-left md:pr-10 mb-8 md:mb-0">
          <h2 className="text-3xl font-semibold mb-6">Our Story</h2>
          <p className="text-lg mb-6">
            Our story begins with a passion for coffee and a relentless pursuit of perfection. From handpicking the finest beans to roasting them with care, we’ve worked tirelessly to create a rich, full-bodied experience in every cup.
          </p>
          <ul className="text-lg">
            <li className="flex items-center mb-4">
              <FaCheckCircle className="text-green-500 mr-2" />
              Handpicked, organic beans sourced from sustainable farms.
            </li>
            <li className="flex items-center mb-4">
              <FaCheckCircle className="text-green-500 mr-2" />
              A commitment to fair trade practices and supporting local farmers.
            </li>
            <li className="flex items-center mb-4">
              <FaCheckCircle className="text-green-500 mr-2" />
              Each roast crafted to enhance the natural flavors of the beans.
            </li>
            <li className="flex items-center mb-4">
              <FaCheckCircle className="text-green-500 mr-2" />
              From our humble beginnings to our growing coffee community.
            </li>
          </ul>
        </div>

        {/* Centered Coffee Image */}
        <div className="flex-1 flex justify-center mb-8 md:mb-0 h-96">
          <img
            src="https://www.drinkstuff.com/productimg/92300_large.jpg"
            alt="Coffee"
            className="w-full mr-10 h-96 rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side for Our Journey */}
        <div className="flex-1 text-center md:text-left md:pr-10 mb-8 md:mb-0">
          <h2 className="text-3xl font-semibold mb-6">Our Story</h2>
          <p className="text-lg mb-6">
            Our story begins with a passion for coffee and a relentless pursuit of perfection. From handpicking the finest beans to roasting them with care, we’ve worked tirelessly to create a rich, full-bodied experience in every cup.
          </p>
          <ul className="text-lg">
            <li className="flex items-center mb-4">
              <FaCheckCircle className="text-green-500 mr-2" />
              Handpicked, organic beans sourced from sustainable farms.
            </li>
            <li className="flex items-center mb-4">
              <FaCheckCircle className="text-green-500 mr-2" />
              A commitment to fair trade practices and supporting local farmers.
            </li>
            <li className="flex items-center mb-4">
              <FaCheckCircle className="text-green-500 mr-2" />
              Each roast crafted to enhance the natural flavors of the beans.
            </li>
            <li className="flex items-center mb-4">
              <FaCheckCircle className="text-green-500 mr-2" />
              From our humble beginnings to our growing coffee community.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
