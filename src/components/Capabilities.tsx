"use client";

import { motion } from "framer-motion";
import {
  FaChalkboardTeacher,
  FaCode,
  FaCogs,
  FaGamepad,
} from "react-icons/fa";
import Technologies from "./Technologies";

const capabilities = [
  {
    icon: FaCogs,
    title: "Developer tooling",
    description:
      "Internal platforms, automation frameworks, integrations, and workflows that help teams move with confidence.",
  },
  {
    icon: FaCode,
    title: "Full-stack systems",
    description:
      "User-focused applications backed by maintainable services, APIs, infrastructure, and delivery pipelines.",
  },
  {
    icon: FaGamepad,
    title: "Interactive technology",
    description:
      "Game systems, real-time 3D experiences, and technical art built with both creative and engineering discipline.",
  },
  {
    icon: FaChalkboardTeacher,
    title: "Technical education",
    description:
      "Practical teaching across programming, math, game development, art pipelines, and collaborative workflows.",
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="section-band-alt px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="eyebrow mb-3">What I build</p>
          <h2 className="section-title">Systems that support real work.</h2>
          <p className="section-copy mt-4">
            My work sits where software engineering, developer experience,
            teaching, and interactive technology overlap.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-px overflow-hidden rounded-[8px] border border-theme bg-[var(--line)] sm:grid-cols-2">
          {capabilities.map(({ icon: Icon, title, description }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="bg-[var(--surface)] p-6 sm:p-8"
            >
              <div className="accent-soft flex h-11 w-11 items-center justify-center rounded-[6px] text-xl">
                <Icon aria-hidden="true" />
              </div>
              <h3 className="text-main mt-5 text-xl font-bold">{title}</h3>
              <p className="text-muted mt-3 leading-7">{description}</p>
            </motion.article>
          ))}
        </div>

        <Technologies />
      </div>
    </section>
  );
}
