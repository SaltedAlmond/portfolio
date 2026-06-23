"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowDown, FaDownload } from "react-icons/fa";

import { RESUME_URL } from "@/constants";

const focusAreas = [
  "Developer platforms",
  "AI-assisted tools",
  "Automation systems",
  "Game technology",
];

export default function About() {
  return (
    <section
      id="about"
      className="section-band relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden px-4 py-16 sm:px-6 lg:py-20"
    >
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-70" />

      <div className="relative mx-auto grid w-full min-w-0 max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="min-w-0 max-w-3xl"
        >
          <p className="eyebrow mb-4">
            Software developer · professor · toolsmith
          </p>
          <h1 className="identity-title text-main text-5xl leading-[1.05] font-bold sm:text-6xl lg:text-7xl">
            Ali Monette
          </h1>
          <p className="text-muted mt-6 max-w-2xl text-lg leading-8 sm:text-xl">
            I build thoughtful software, internal tools, and interactive
            experiences that make complex work easier to understand and use. I
            might be one of the shortest volleyball players you&apos;ll meet,
            but I still play like I&apos;m 6 feet tall, and I make a mean smash
            burger.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {focusAreas.map((area) => (
              <span key={area} className="skill-chip px-3 py-1.5 text-sm">
                {area}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="primary-link">
              View projects
              <FaArrowDown aria-hidden="true" />
            </a>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-link"
            >
              <FaDownload aria-hidden="true" />
              Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.1, ease: "easeOut" }}
          className="mx-auto w-full min-w-0 max-w-full sm:max-w-[420px]"
        >
          <div className="profile-frame aspect-square rounded-[8px] p-[3px]">
            <div className="relative h-full w-full overflow-hidden rounded-[6px] bg-[var(--surface-strong)]">
              <Image
                src="/images/Ali-Chill.png"
                alt="Ali Monette"
                fill
                priority
                sizes="(max-width: 1024px) 420px, 38vw"
                className="object-contain object-bottom"
              />
            </div>
          </div>
          <div className="surface-strong mt-3 flex flex-col gap-2 rounded-[6px] px-4 py-3 text-sm min-[430px]:flex-row min-[430px]:items-center min-[430px]:justify-between">
            <span className="text-muted">Based in Ottawa, Canada</span>
            <span className="flex items-center gap-2 text-accent">
              <span className="h-2 w-2 rounded-full bg-current" />
              Building useful things
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
