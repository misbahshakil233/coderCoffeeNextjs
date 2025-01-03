"use client"; // This makes the component a client component
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-between min-h-[750px] bg-black w-full shadow-xl px-4"
    >
      {/* Left Column for Text and Buttons */}
      <div className="flex flex-col justify-center text-white w-full md:w-1/2 pb-8 md:pb-40 text-center md:text-left">
        <h1 className="hero-text text-4xl md:text-7xl font-bold mb-4 relative animate-colorCycle">
          Delicious Coffee
        </h1>
        <p className="text-sm md:text-xl max-w-[60ch] mx-auto md:mx-0">
          Savor the rich aroma and bold flavor of premium coffee, expertly
          roasted to perfection. At Coders Coffee, every sip is a moment of pure
          indulgence. Whether youre starting your morning or enjoying a
          relaxing break, our coffee is crafted for those who appreciate
          excellence in every cup. <br />
          <br />
        </p>
        <div className="flex justify-center md:justify-start space-x-4 mt-4">
          <Link href="/order">
            <button className="bg-yellow-500 text-black font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 transition">
              Order Now
            </button>
          </Link>
          <Link href="#product">
            <button className="bg-transparent border-2 border-yellow-500 text-yellow-500 font-bold py-2 px-4 rounded-lg hover:bg-yellow-500 hover:text-black transition">
              Learn More
            </button>
          </Link>
        </div>
      </div>

      {/* Right Column for Image */}
      <div className="relative w-full md:w-1/2">
        <Image
          width={300}
          height={300}
          src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b06381158904485.63942bec3b198.png"
          alt="Delicious Coffee"
          className="bg-black coffee-image mx-auto md:mx-0 w-3/4"
        />
      </div>
    </section>
  );
};

export default Hero;
