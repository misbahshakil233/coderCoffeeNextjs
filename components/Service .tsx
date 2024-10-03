"use client";
import React, { useState } from 'react';

const Service = () => {
  // State to manage the selected coffee image
  const [selectedImage, setSelectedImage] = useState(
    "https://images.unsplash.com/photo-1511920170033-f8396924c348?crop=entropy&fit=crop&w=500&q=60" // Default image
  );

  const images = [
    {
      src: "https://images.unsplash.com/photo-1511920170033-f8396924c348?crop=entropy&fit=crop&w=500&q=60",
      alt: "Coffee 1"
    },
    {
      src: "https://th.bing.com/th/id/OIP.k2aR4k0xHwlAWvzcf1jgBQHaEJ?w=960&h=538&rs=1&pid=ImgDetMain",
      alt: "Coffee 2"
    },
    {
      src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?crop=entropy&fit=crop&w=500&q=60",
      alt: "Coffee 3"
    },
  ];

  return (
    <section className="py-20 px-10 bg-gray-100" id="service">
      <div className="flex flex-col md:flex-row items-center justify-between mb-20">
        {/* Text Column */}
        <div className="flex-1 md:pr-10 mb-10 md:mb-0">
          <h1 className="text-4xl font-bold mb-4 animate-bounce">Our Coffee Services</h1>
          <p className="text-lg text-gray-700">
            Discover the art of coffee making with our expert services. We offer a variety of coffee blends, brewing methods, and workshops to help you master your coffee experience. Join us to explore the rich flavors and aromas of our carefully selected coffee beans.
            Discover the art of coffee making with our expert services. We offer a variety of coffee blends, brewing methods, and workshops to help you master your coffee experience. Join us to explore the rich flavors and aromas of our carefully selected coffee beans.
        
          </p>
        </div>

        {/* Image Column */}
        <div className="flex-1">
          <img
            src={selectedImage}
            alt="Coffee Selection"
            className="w-full h-[400px] object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex justify-center gap-5 mt-10">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(image.src)} // Update selected image on click
            className="cursor-pointer"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-48 h-40 rounded-lg border-2 border-transparent hover:border-yellow-500 transition"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
