"use client";
import { Loader } from "@/components/ui/Loader";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { GoToTop } from "@/components/ui/GoToTop";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { TechStack } from "@/components/sections/TechStack";
import { Skills } from "@/components/sections/Skills";
import { Education } from "@/components/sections/Education";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Loader />
      <CustomCursor />
      <SmoothScroll />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <GoToTop />
    </>
  );
}
