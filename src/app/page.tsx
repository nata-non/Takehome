"use client";
import Image from "next/image";
import NavBar from "../components/navBar";
import Carousel from "@/components/carousel";
import HeroSection from "@/components/herosection";
import Slider from "@/components/section4";
import BackToTopButton from "@/components/toTopButton";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar />
      <HeroSection />
      <Carousel />
      <Slider />
      <BackToTopButton />
      <Contact />
    </main>
  );
}
