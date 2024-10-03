"use client";
import React from 'react';

const ClientReviews = () => {
  const reviews = [
    {
      name: "John Doe",
      feedback: "Absolutely love the coffee! The taste is rich and full of flavor. Highly recommend!",
      rating: 5,
    },
    {
      name: "Jane Smith",
      feedback: "The ambiance is wonderful, and the coffee is always fresh. A perfect spot for coffee lovers!",
      rating: 4,
    },
    {
      name: "Alice Johnson",
      feedback: "Great service and a wide variety of coffee options. I will definitely be coming back!",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 px-10 bg-gray-50" id="reviews">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Left Column: Client Reviews */}
        <div className="flex-1 md:pr-10 mb-10 md:mb-0">
          <h1 className="text-4xl font-bold mb-6 text-center animate-bounce">What Our Clients Say</h1>
          <div className="space-y-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-2">{review.name}</h2>
                <p className="text-gray-700 mb-4">{review.feedback}</p>
                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500">&#9733;</span>
                  ))}
                  {[...Array(5 - review.rating)].map((_, i) => (
                    <span key={i} className="text-gray-300">&#9733;</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Related Image */}
        <div className="flex-1">
          <img
            src="https://verse.io/wp-content/uploads/2019/06/4-Ways-to-Generate-Incredible-Client-Reviews-scaled.jpg"
            alt="Client Reviews"
            className="w-full h-[400px] object-cover rounded-lg shadow-lg animate-pulse"
          />
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
