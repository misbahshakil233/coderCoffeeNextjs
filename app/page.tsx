import About from "@/components/About";
import ClientReviews from "@/components/ClientReviews";
import CoffeeSlider from "@/components/CoffeeSlider";
import Contact from "@/components/Contact";
import DiscountOffer from "@/components/DiscountOffer";

import Hero from "@/components/Hero";
import InfoBanner from "@/components/InfoBanner";
import Navbar from "@/components/Navbar";
import Product from "@/components/Product";
import Service from "@/components/Service ";
import Image from "next/image";

export default function Home() {
  return (
    <div>
    <Hero />
    <InfoBanner />
    <About />
    <CoffeeSlider />
    <Product />
    <ClientReviews />
    <Service />
    <DiscountOffer />
    <Contact />
    
        </div>
  );
}
