"use client";
import React, { useState, useEffect } from 'react';

// List of coffee-related images for the slider
const coffeeImages = [
  'https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  'https://th.bing.com/th/id/R.0667cbae566ee27fd7076b9425172abe?rik=NgPUC2HHIq%2bavg&riu=http%3a%2f%2fhdwpro.com%2fwp-content%2fuploads%2f2020%2f02%2fAnimated-Coffee-Art.jpeg&ehk=9BAxknTdU5Pz1SmJl1Uy7Ak75hW2L88zVUw76UYtm3c%3d&risl=&pid=ImgRaw&r=0',
  'https://th.bing.com/th/id/R.25f90fbfc2acabd09c16db299baf9e2b?rik=rlaLVzabBprKiQ&riu=http%3a%2f%2fwallsdesk.com%2fwp-content%2fuploads%2f2016%2f10%2fCoffee-High-Definition-Wallpapers.jpg&ehk=AuVANTOLRhSeWfH7qpKGH0PrFfJgGKD2R8sf6ey%2b6vg%3d&risl=&pid=ImgRaw&r=0',
  'https://images.unsplash.com/photo-1498804103079-a6351b050096?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
];

const CoffeeSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === coffeeImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Slides every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-auto bg-gray-100 py-10">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Our Coffee Moments</h2>
      
      <div className="overflow-hidden relative w-full h-80">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {coffeeImages.map((image, index) => (
            <div
              key={index}
              className="min-w-full h-80 flex-shrink-0"
            >
              <img
                src={image}
                alt={`Coffee ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dots for slider navigation */}
      <div className="flex justify-center mt-4 space-x-2">
        {coffeeImages.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-yellow-500' : 'bg-gray-400'}`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default CoffeeSlider;
