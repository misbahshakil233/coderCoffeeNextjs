"use client";
import Link from 'next/link';
import React from 'react';

const Product = () => {
  return (
    <div>
      <section id="product" className="min-h-screen py-20 px-10 bg-gray-100">
        <h1 className="text-4xl font-bold text-center animate-bounce text-gray-800 mb-28">
          Our Products
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div
            className="relative bg-cover bg-center bg-no-repeat p-8 rounded-lg shadow-lg text-center h-[500px] transition-transform duration-300 hover:scale-105"
            style={{
              backgroundImage:
                "url('https://th.bing.com/th/id/OIP.Ecc0_hceEHfRSPGl882V1AHaEO?w=1024&h=585&rs=1&pid=ImgDetMain')",
              
            }}
          >
            <div className="bg-black bg-opacity-50 rounded-lg p-6 h-full flex flex-col justify-center">
              <h2 className="text-3xl font-semibold text-white mb-2">Product 1</h2>
              <p className="text-white font-normal text-lg px-4">
                Enjoy a rich, bold, full-bodied coffee experience with our top-quality beans.
                A perfect balance of flavor and aroma for coffee enthusiasts.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="relative bg-cover bg-center bg-no-repeat p-8 rounded-lg shadow-lg text-center h-[500px] transition-transform duration-300 hover:scale-105"
            style={{
              backgroundImage:
                "url('https://th.bing.com/th/id/OIP.bX52vTMUaO4fSjm9EBhFlgHaHa?rs=1&pid=ImgDetMain')",
             
            }}
          >
            <div className="bg-black bg-opacity-50 rounded-lg p-6 h-full flex flex-col justify-center">
              <h2 className="text-3xl font-semibold text-white mb-2">Product 2</h2>
              <p className="text-white font-normal text-lg px-4">
                A creamy, smooth, and delightful coffee with subtle hints of chocolate and caramel.
                Perfect for an afternoon pick-me-up.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="relative bg-cover bg-center bg-no-repeat p-8 rounded-lg shadow-lg text-center h-[500px] transition-transform duration-300 hover:scale-105"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?crop=entropy&fit=crop&w=500&q=60')",
             
            }}
          >
            <div className="bg-black bg-opacity-50 rounded-lg p-6 h-full flex flex-col justify-center">
              <h2 className="text-3xl font-semibold text-white mb-2">Product 3</h2>
              <p className="text-white font-normal text-lg px-4">
                A bold, intense roast for true coffee lovers.
                Packed with a strong and robust flavor, ideal for those who enjoy a powerful brew.
              </p>
            </div>
          </div>
        </div>

        {/* Button for more products */}
        <div className="text-center mt-10">
          <Link href="/moreproduct">
            <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-yellow-600 transition">
              Go to More Products Page
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Product;
