// app/moreproduct/page.tsx

'use client'; // Ensure this component is a client component
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Use 'next/navigation' for the app directory
import Link from 'next/link';
import Image from 'next/image'; // Import Next.js Image component

interface CoffeeProduct {
  id: number;
  title: string;
  description: string;
  price: number; // Ensure this property is present in the API response
  image: string; // Image URL
}

const MoreProducts = () => {
  const [products, setProducts] = useState<CoffeeProduct[]>([]);
  const router = useRouter(); // Initialize the router for navigation

  useEffect(() => {
    // Fetch coffee products from Coffee API
    fetch("https://api.sampleapis.com/coffee/hot") // Example endpoint
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        console.log("Fetched data:", data); // Log the fetched data to the console
        setProducts(data); // Set the products state with the fetched data
      })
      .catch((error) => console.error("Error fetching data:", error)); // Handle any errors
  }, []);

  const handleOrderNow = (productId: number) => {
    // Redirect to the order page with the product ID
    router.push(`/order/${productId}`);
  };

  return (
    <div className="min-h-screen py-20 px-10 bg-gray-100">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">More Coffee Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {products.map((product) => (
          <div key={product.id} className="relative bg-white p-8 rounded-lg shadow-lg text-center transition-transform duration-300 hover:scale-105">
            <Image
              src={product.image} // Use the image from the product data
              alt={product.title} // Changed to 'title' for alt text
              width={160} // Specify width for optimization
              height={160} // Specify height for optimization
              className="w-40 h-40 rounded-lg mx-auto mb-4"
            />
            <h2 className="text-xl font-bold text-gray-800">{product.title}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-lg font-semibold text-gray-800">
              ${product.price ? product.price.toFixed(2) : 'N/A'} {/* Use optional chaining or a fallback */}
            </p>
            <Link href="/order">
              <button
                onClick={() => handleOrderNow(product.id)} // Call handleOrderNow with the product ID
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
              >
                Order Now
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreProducts;
