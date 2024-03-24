"use client";
import Image from "next/image";
import NavBar from "../components/navBar";
import Carousel from "@/components/carousel";
import HeroSection from "@/components/herosection";
import Slider from "@/components/section4";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar />
      <HeroSection />
      <Carousel />

      <Slider />
      <div className="flex items-center justify-center w-full h-96 bg-fixed bg-cover">
        <h1>Hello</h1>
      </div>
      <div className="flex items-center justify-center w-full h-96 bg-fixed bg-cover">
        <h1>Hello</h1>
      </div>
      <div className="flex items-center justify-center w-full h-96 bg-fixed bg-cover">
        <h1>Hello</h1>
      </div>
    </main>
  );
}
