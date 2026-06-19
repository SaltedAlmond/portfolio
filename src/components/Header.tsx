"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaCogs,
  FaEnvelope,
  FaFolderOpen,
  FaMoon,
  FaRoad,
  FaSun,
  FaUser,
} from "react-icons/fa";

const sections = [
  { href: "#about", label: "About", icon: FaUser },
  { href: "#capabilities", label: "Capabilities", icon: FaCogs },
  { href: "#journey", label: "Journey", icon: FaRoad },
  { href: "#projects", label: "Projects", icon: FaFolderOpen },
  { href: "#contact", label: "Contact", icon: FaEnvelope },
];

type Theme = "dark" | "light";

export default function Header() {
  const [activeSection, setActiveSection] = useState("about");
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const currentTheme =
      document.documentElement.dataset.theme === "light" ? "light" : "dark";
    setTheme(currentTheme);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.15, 0.4] }
    );

    sections.forEach(({ href }) => {
      const section = document.querySelector(href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("portfolio-theme", nextTheme);
    setTheme(nextTheme);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="site-header sticky top-0 z-50"
    >
      <div className="mx-auto flex h-16 w-full min-w-0 max-w-6xl items-center gap-2 px-4 sm:gap-3 sm:px-6">
        <Link
          href="#about"
          className="text-main mr-auto whitespace-nowrap text-base font-bold sm:text-lg"
          aria-label="Back to top"
        >
          AM<span className="text-accent">.</span>
        </Link>

        <nav aria-label="Portfolio sections" className="min-w-0 flex-1">
          <ul className="flex min-w-0 items-center justify-end sm:gap-2">
            {sections.map(({ href, label, icon: Icon }) => {
              const isActive = activeSection === href.slice(1);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={isActive ? "page" : undefined}
                    className={`block rounded px-1.5 py-2 text-xs font-semibold transition-colors sm:px-3 sm:text-sm ${
                      isActive ? "text-accent" : "text-muted hover:text-main"
                    }`}
                    title={label}
                  >
                    <span className="hidden md:inline">{label}</span>
                    <Icon className="md:hidden" aria-hidden="true" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          className="theme-button"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </motion.header>
  );
}
