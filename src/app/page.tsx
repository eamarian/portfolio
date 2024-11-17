"use client";

import Hero from "../components/Hero.tsx";
import Navbar from "../components/Navbar.tsx";
import About from "../components/About.tsx";
import Projects from "../components/Projects.tsx";
import Contact from "../components/Contact.tsx";
import Footer from "@/components/Footer.tsx";

import { useEffect, useRef, useState } from "react";

export default function Page() {
  //const [canScroll, setCanScroll] = useState<boolean>(false);
  const [canScroll, setCanScroll] = useState<boolean>(true); //always allow scrolling to save time in development

  // Initialize Section Refs
  const homeRef = useRef(null);
  const [homeIsVisible, setHomeIsVisible] = useState<boolean>(false);

  const aboutRef = useRef(null);
  const [aboutIsVisible, setAboutIsVisible] = useState<boolean>(false);

  const projectsRef = useRef(null);
  const [projectsIsVisible, setProjectsIsVisible] = useState<boolean>(false);

  const contactRef = useRef(null);
  const [contactIsVisible, setContactIsVisible] = useState<boolean>(false);

  // Initialize Observation to detect section visibility
  const observedCallback: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      switch (entry.target) {
        case homeRef.current:
          setHomeIsVisible(entry.isIntersecting);
          break;
        case aboutRef.current:
          setAboutIsVisible(entry.isIntersecting);
          break;
        case projectsRef.current:
          setProjectsIsVisible(entry.isIntersecting);
          break;
        case contactRef.current:
          setContactIsVisible(entry.isIntersecting);
          break;
      }
    });
  };

  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer: IntersectionObserver = new IntersectionObserver(
      observedCallback,
      options
    );

    const currentHomeRef = homeRef.current;
    const currentAboutRef = aboutRef.current;
    const currentProjectsRef = projectsRef.current;
    const currentContactRef = contactRef.current;

    if (currentHomeRef) observer.observe(currentHomeRef);
    if (currentAboutRef) observer.observe(currentAboutRef);
    if (currentProjectsRef) observer.observe(currentProjectsRef);
    if (currentContactRef) observer.observe(currentContactRef);

    return () => {
      if (currentHomeRef) observer.unobserve(currentHomeRef);
      if (currentAboutRef) observer.unobserve(currentAboutRef);
      if (currentProjectsRef) observer.unobserve(currentProjectsRef);
      if (currentContactRef) observer.unobserve(currentContactRef);
    };
  }, [aboutRef, projectsRef, contactRef]);

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
