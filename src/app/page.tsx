"use client";
import NavBar from "../components/navBar";
import Section3 from "@/components/section3";
import HeroSection from "@/components/herosection";
import Section4 from "@/components/section4";
import BackToTopButton from "@/components/toTopButton";
import Contact from "@/components/contact";
import Section2 from "@/components/section2";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar />
      <HeroSection />
      <Section2 />
      <Section3 />
      <Section4 />
      <BackToTopButton />
      <Contact />
      <Footer />
    </main>
  );
}
