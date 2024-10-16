"use client"; // Marking this component as a Client Component

import React from 'react';
import Link from 'next/link'; // useRouter import hata diya

const OrderPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Order Page</h1>

      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Order</h2>
        <p className="text-lg text-gray-600 mb-2"><strong>Product:</strong> Coffee</p>
        <p className="text-lg text-gray-600 mb-2"><strong>Description:</strong> Som den mest populära kaffedrycken där ute består latte av en skvätt espresso och ångad mjölk med bara en gnutta skum. Den kan beställas utan smak eller med smak av allt från vanilj till pumpa kryddor. </p>
        <p className="text-lg font-bold text-gray-800 mb-4"><strong>Price:</strong> 23$ </p>
        <Link href="/sucess"> {/* Spelling mistake fix */}
          <button
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Confirm Order
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OrderPage;
