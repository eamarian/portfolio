"use client";

import Hero from "../components/Hero.tsx";
import Navbar from "../components/Navbar.tsx";
import About from "../components/About.tsx";
import Projects from "../components/Projects.tsx";
import Contact from "../components/Contact.tsx";
import Footer from "@/components/Footer.tsx";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  return (
    <div className={`h-dvh ${canScroll ? "" : "overflow-hidden"}`}>
      <div>
        <Hero setCanScroll={setCanScroll} ref={homeRef} />
        <Navbar
          homeIsVisible={homeIsVisible}
          aboutIsVisible={aboutIsVisible}
          projectsIsVisible={projectsIsVisible}
          contactIsVisible={contactIsVisible}
        />
        <div className="scroll-mt-[24px]">
          <About ref={aboutRef} />
          <Projects ref={projectsRef} />
          <Contact ref={contactRef} />
          <Footer />
        </div>
      </div>
    </div>
  );
}
