"use client";

import Header from "../components/Header";
import About from "../components/About";
import Capabilities from "../components/Capabilities";
import Journey from "../components/Journey";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main>
      <Header />
      <About />
      <Capabilities />
      <Journey />
      <Projects />
      <Contact />
    </main>
  );
}
