import React from 'react';

const DiscountOffer = () => {
  return (
    <section className="relative min-h-[500px] flex items-center justify-center bg-black text-white py-16">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      {/* Content Container */}
      <div className="flex items-center justify-between w-full max-w-7xl relative z-10 px-6">
        {/* Left Side for Discount Text */}
        <div className="flex-1 text-center md:text-left md:pr-10">
          <h2 className="text-5xl font-bold mb-4">Limited Time Offer!</h2>
          <p className="text-lg mb-6">
            Indulge in the rich flavors of our premium coffee selections with an exclusive discount. Don’t let this opportunity pass you by!
          </p>
          <div className="relative inline-block">
            <span className="absolute -top-6 left-1/2 animate-bounce transform -translate-x-1/2 bg-yellow-400 text-black text-2xl font-bold rounded-full px-5 py-3 shadow-lg">
              30% OFF
            </span>
            <h3 className="text-7xl font-extrabold mt-6">Grab Your Coffee Now!</h3>
          </div>
        </div>

        {/* Right Side for Image */}
        <div className="flex-1 flex justify-center md:pl-10">
          <img 
            src="https://img.freepik.com/premium-photo/coffee-mug-bursting-coffee-beans-flying-ai-generated-background_173031-1032.jpg" 
            alt="Discount Coffee" 
            className="w-3/5 h-auto rounded-lg shadow-2xl transition-transform transform hover:scale-105" 
          />
        </div>
      </div>
    </section>
  );
};

export default DiscountOffer;
