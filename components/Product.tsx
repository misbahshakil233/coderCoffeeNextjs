"use client";
import Link from 'next/link';
import React from 'react';

const Product = () => {
  return (
    <div>
      <section id="product" className="min-h-screen py-20 px-10 bg-gray-100">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-28">
          Our Products
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="relative bg-white p-8 rounded-lg shadow-lg text-center h-[500px]">
            {/* Image that pops out */}
            <div className="absolute -top-20 left-1/2 transform -translate-x-1/2">
              <img
                src="https://images.unsplash.com/photo-1511920170033-f8396924c348?crop=entropy&fit=crop&w=500&q=60"
                alt="Coffee 1"
                className="w-40 h-40 rounded-full border-4 border-white shadow-lg"
              />
            </div>
            {/* Content below the image */}
            <h2 className="text-3xl font-semibold mt-24">Product 1</h2>
            <p className="text-gray-600 mt-4 text-lg">
              Enjoy a rich, bold, full-bodied coffee experience with our top-quality beans. A perfect balance of flavor and aroma for coffee enthusiasts.
              Enjoy a rich, bold, full-bodied coffee experience with our top-quality beans. A perfect balance of flavor and aroma for coffee enthusiasts.
              Enjoy a rich, bold, full-bodied coffee experience with our top-quality beans. A perfect balance of flavor and aroma for coffee enthusiasts.
              
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative bg-white p-8 rounded-lg shadow-lg text-center h-[500px]">
            {/* Image that pops out */}
            <div className="absolute -top-20 left-1/2 transform -translate-x-1/2">
              <img
               
                alt="Coffee 2"
                className="w-40 h-40 rounded-full border-4 border-white shadow-lg"
              />
            </div>
            {/* Content below the image */}
            <h2 className="text-3xl font-semibold mt-24">Product 2</h2>
            <p className="text-gray-600 mt-4 text-lg">
              A creamy, smooth, and delightful coffee with subtle hints of chocolate and caramel. Perfect for an afternoon pick-me-up.
              Enjoy a rich, bold, full-bodied coffee experience with our top-quality beans. A perfect balance of flavor and aroma for coffee enthusiasts.
              Enjoy a rich, bold, full-bodied coffee experience with our top-quality beans. A perfect balance of flavor and aroma for coffee enthusiasts.
              
            
            </p>
          </div>

          {/* Card 3 */}
          <div className="relative bg-white p-8 rounded-lg shadow-lg text-center h-[500px]">
            {/* Image that pops out */}
            <div className="absolute -top-20 left-1/2 transform -translate-x-1/2">
              <img
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?crop=entropy&fit=crop&w=500&q=60"
                alt="Coffee 3"
                className="w-40 h-40 rounded-full border-4 border-white shadow-lg"
              />
            </div>
            {/* Content below the image */}
            <h2 className="text-3xl font-semibold mt-24">Product 3</h2>
            <p className="text-gray-600 mt-4 text-lg">
              A bold, intense roast for true coffee lovers. Packed with a strong and robust flavor, ideal for those who enjoy a powerful brew.
              Enjoy a rich, bold, full-bodied coffee experience with our top-quality beans. A perfect balance of flavor and aroma for coffee enthusiasts.
              Enjoy a rich, bold, full-bodied coffee experience with our top-quality beans. A perfect balance of flavor and aroma for coffee enthusiasts.
                      
            </p>
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
