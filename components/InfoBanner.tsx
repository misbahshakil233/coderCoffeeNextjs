"use client";
import React from 'react';
import CountUp from 'react-countup';
import { FaUsers, FaStoreAlt, FaCalendarAlt, FaMugHot, FaTrophy } from 'react-icons/fa';

const InfoBanner = () => {
  return (
    <section className="relative bg-gradient-to-r from-brown-700 to-brown-900 text-white py-16">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-between px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold tracking-wide">Welcome to Our Coffee Haven!</h2>
          <p className="text-2xl mt-4 text-yellow-400">Quality coffee, passionate team!</p>
        </div>
        
        {/* Cards Section - Displaying 5 Cards in One Row */}
        <div className="flex justify-evenly w-full">
          
          {/* Employee Card */}
          <div className="bg-white text-black rounded-lg shadow-lg p-6 text-center hover:scale-105 transform transition-all duration-300 hover:shadow-2xl hover:bg-yellow-400 w-1/5">
            <div className="flex justify-center mb-4 text-yellow-500">
              <FaUsers className="text-4xl" />
            </div>
            <h3 className="text-4xl font-bold mb-2 text-yellow-700">
              <CountUp start={0} end={150} duration={2.5} />+
            </h3>
            <p className="text-xl font-semibold">Employees</p>
          </div>
          
          {/* Branches Card */}
          <div className="bg-white text-black rounded-lg shadow-lg p-6 text-center hover:scale-105 transform transition-all duration-300 hover:shadow-2xl hover:bg-yellow-400 w-1/5">
            <div className="flex justify-center mb-4 text-yellow-500">
              <FaStoreAlt className="text-4xl" />
            </div>
            <h3 className="text-4xl font-bold mb-2 text-yellow-700">
              <CountUp start={0} end={25} duration={2.5} />+
            </h3>
            <p className="text-xl font-semibold">Branches</p>
          </div>
          
          {/* Year Established Card */}
          <div className="bg-white text-black rounded-lg shadow-lg p-6 text-center hover:scale-105 transform transition-all duration-300 hover:shadow-2xl hover:bg-yellow-400 w-1/5">
            <div className="flex justify-center mb-4 text-yellow-500">
              <FaCalendarAlt className="text-4xl" />
            </div>
            <h3 className="text-4xl font-bold mb-2 text-yellow-700">
              <CountUp start={2010} end={2020} duration={2.5} />
            </h3>
            <p className="text-xl font-semibold">Year Established</p>
          </div>

          {/* Coffee Varieties Card */}
          <div className="bg-white text-black rounded-lg shadow-lg p-6 text-center hover:scale-105 transform transition-all duration-300 hover:shadow-2xl hover:bg-yellow-400 w-1/5">
            <div className="flex justify-center mb-4 text-yellow-500">
              <FaMugHot className="text-4xl" />
            </div>
            <h3 className="text-4xl font-bold mb-2 text-yellow-700">
              <CountUp start={0} end={50} duration={2.5} />+
            </h3>
            <p className="text-xl font-semibold">Coffee Varieties</p>
          </div>
          
          {/* Awards Won Card */}
          <div className="bg-white text-black rounded-lg shadow-lg p-6 text-center hover:scale-105 transform transition-all duration-300 hover:shadow-2xl hover:bg-yellow-400 w-1/5">
            <div className="flex justify-center mb-4 text-yellow-500">
              <FaTrophy className="text-4xl" />
            </div>
            <h3 className="text-4xl font-bold mb-2 text-yellow-700">
              <CountUp start={0} end={10} duration={2.5} />+
            </h3>
            <p className="text-xl font-semibold">Awards Won</p>
          </div>
          
        </div>
        
        {/* CTA Button */}
        <div className="mt-12">
          <a href="#services" className="px-8 py-4 bg-yellow-500 text-black text-xl font-bold rounded-full hover:bg-yellow-600 transition-all duration-300 shadow-md">
            Discover Our Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default InfoBanner;
