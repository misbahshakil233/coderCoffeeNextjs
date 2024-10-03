"use client";
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa'; // Check mark icon

const About = () => {
  return (
    <section id="about" className="relative min-h-screen p-12 text-gray-800 flex flex-col items-center justify-center">
      {/* Decorative Banner */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-r from-brown-600 to-brown-400 rounded-b-xl shadow-lg flex items-center justify-center">
        <h2 className="text-4xl font-bold text-white tracking-wide">Our Passion for Coffee</h2>
      </div>

      {/* Main Content */}
      <div className="mt-44 text-center w-full max-w-5xl">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-10 tracking-tight">About Us</h1>
        <p className="text-xl mb-12 max-w-4xl mx-auto text-gray-600">
          Coffee isn’t just a beverage for us — it’s a way of life. Our journey started with a passion for crafting the perfect cup, and we’re here to share that joy with you. Whether you’re savoring our finest brews or learning the story behind every bean, we invite you to be part of our coffee family.
        </p>

        {/* Split Content */}
        <div className="grid md:grid-cols-3 gap-10 text-left">

          {/* Story Section */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
            <p className="text-lg mb-6 text-gray-700">
              From handpicking the finest beans to roasting them with care, we’ve created a rich, full-bodied experience in every cup.
            </p>
            <ul>
              <li className="flex items-center mb-3">
                <FaCheckCircle className="text-green-600 mr-2" />
                Organic beans from sustainable farms.
              </li>
              <li className="flex items-center mb-3">
                <FaCheckCircle className="text-green-600 mr-2" />
                Fair trade practices supporting local farmers.
              </li>
              <li className="flex items-center mb-3">
                <FaCheckCircle className="text-green-600 mr-2" />
                Roasts crafted to enhance natural flavors.
              </li>
            </ul>
          </div>

          {/* Center Image */}
          <div className="flex justify-center items-center">
            <img
              src="https://assets-global.website-files.com/62d42d2f755658e8a8e4eb8a/6369abe095be04cb91e1c3d6_634a457e6668dd3d5578bc7a_Pango-Cafe%2526Restaurant-Newport-3.jpeg"
              alt="Coffee"
              className="w-full h-auto max-w-sm rounded-lg shadow-lg border-4 border-yellow-500 transform transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Journey Section */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <h2 className="text-3xl font-semibold mb-4">Our Journey</h2>
            <p className="text-lg mb-6 text-gray-700">
              Every cup tells a story. We’re dedicated to sharing our love of coffee with a growing community of connoisseurs.
            </p>
            <ul>
              <li className="flex items-center mb-3">
                <FaCheckCircle className="text-green-600 mr-2" />
                Unique flavors from around the world.
              </li>
              <li className="flex items-center mb-3">
                <FaCheckCircle className="text-green-600 mr-2" />
                Innovating brewing techniques for your experience.
              </li>
              <li className="flex items-center mb-3">
                <FaCheckCircle className="text-green-600 mr-2" />
                Celebrating coffee through community events.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
