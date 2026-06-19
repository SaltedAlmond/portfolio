"use client";

import { motion } from "framer-motion";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const contactLinks = [
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/alimonette",
  },
  {
    icon: MdOutlineEmail,
    label: "Email",
    href: "mailto:amonette55@gmail.com",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/SaltedAlmond",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-band px-4 py-20 sm:px-6 lg:py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55 }}
        className="mx-auto max-w-6xl border-y border-theme py-14"
      >
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
          <div className="max-w-2xl">
            <p className="eyebrow mb-3">Let&apos;s connect</p>
            <h2 className="section-title">Have an interesting problem?</h2>
            <p className="section-copy mt-4">
              I&apos;m always happy to talk about software, developer tools,
              teaching, game technology, or a project that needs a thoughtful
              technical perspective.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {contactLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="secondary-link"
              >
                <Icon aria-hidden="true" />
                {label}
              </a>
            ))}
            <a href="/resume.pdf" download className="primary-link">
              <FaDownload aria-hidden="true" />
              Resume
            </a>
          </div>
        </div>
      </motion.div>

      <footer className="text-muted mx-auto flex max-w-6xl flex-col gap-2 pt-8 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>Ali Monette · Ottawa, Canada</p>
        <p>Built with Next.js and curiosity.</p>
      </footer>
    </section>
  );
}
