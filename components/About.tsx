"use client";
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa'; // Importing check mark icon

const About = () => {
  return (
    <section id="about" className="relative min-h-screen p-8 bg-gray-100 flex flex-col items-center justify-center">
      {/* Attractive Banner */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-b-lg flex items-center justify-center mb-8">
        <h2 className="text-4xl font-bold text-yellow-600">Our Passion for Coffee</h2>
      </div>

      <h1 className="text-5xl font-bold mb-10 text-center">About Us</h1>
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl">
        
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
        <div className="flex-1 flex justify-center mb-8 md:mb-0">
          <img
            src="https://assets-global.website-files.com/62d42d2f755658e8a8e4eb8a/6369abe095be04cb91e1c3d6_634a457e6668dd3d5578bc7a_Pango-Cafe%2526Restaurant-Newport-3.jpeg"
            alt="Coffee"
            className="w-full h-auto max-w-xs rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side for Our Journey */}
        <div className="flex-1 text-center md:text-left md:pl-10 mb-8 md:mb-0">
          <h2 className="text-3xl font-semibold mb-6">Our Journey</h2>
          <p className="text-lg mb-6">
            Our journey has been marked by a deep commitment to quality and sustainability. We believe that every cup of coffee tells a story, and we are dedicated to sharing our passion with you.
          </p>
          <ul className="text-lg">
            <li className="flex items-center mb-4">
              <FaCheckCircle className="text-green-500 mr-2" />
              Sourcing beans from around the world for unique flavors.
            </li>
            <li className="flex items-center mb-4">
              <FaCheckCircle className="text-green-500 mr-2" />
              Crafting a community of coffee lovers and connoisseurs.
            </li>
            <li className="flex items-center mb-4">
              <FaCheckCircle className="text-green-500 mr-2" />
              Innovating brewing techniques to elevate your coffee experience.
            </li>
            <li className="flex items-center mb-4">
              <FaCheckCircle className="text-green-500 mr-2" />
              Hosting events to celebrate our love for coffee and connection.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
