import About from "@/components/About";
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
    <Product />
    <DiscountOffer />
    <Service />
    
        </div>
  );
}
