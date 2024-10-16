// app/order-success/page.tsx

"use client"; // Marking this component as a Client Component

import React from 'react';

// CSS styles for the animation
const styles = {
  popper: {
    animation: 'pop 0.6s ease-in-out',
    fontSize: '50px', // Adjust emoji size
  },
};

const OrderSuccessPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-yellow-600 mb-6">Order Successful!</h1>
      
      <div style={styles.popper} className="mb-4 animate-bounce">🎉</div> {/* Party popper emoji */}
      
      <p className="text-lg text-gray-600 mb-4">Thank you for your order.</p>
      <p className="text-lg text-gray-600">Your order has been placed successfully!</p>

      <style jsx>{`
        @keyframes pop {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default OrderSuccessPage;
