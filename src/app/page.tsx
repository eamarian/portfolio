"use client";

import Hero from "../components/Hero.tsx";
import Navbar from "../components/Navbar.tsx";

import { useEffect, useRef, useState } from "react";

export default function Page() {
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
    <div>
      <Hero ref={homeRef} />
      <Navbar
        homeIsVisible={homeIsVisible}
        aboutIsVisible={aboutIsVisible}
        projectsIsVisible={projectsIsVisible}
        contactIsVisible={contactIsVisible}
      />
      <section id="about" className="h-dvh" ref={aboutRef}>
        <h1>About Me</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
      <section id="projects" className="h-dvh" ref={projectsRef}>
        <h1>Projects</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
      <section id="contact" className="h-dvh" ref={contactRef}>
        <h1>Contact Me</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
    </div>
  );
}
