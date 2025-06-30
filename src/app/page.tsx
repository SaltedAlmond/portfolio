'use client';

import Header from "../components/Header";
import About from "../components/About";
import Journey from "../components/Journey";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="font-sans">
      <Header />
      <section id="about" className="scroll-mt-20">
        <About />
      </section>
      <section id="journey" className="scroll-mt-18">
        <Journey />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
