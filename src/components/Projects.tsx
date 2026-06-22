"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";

type Project = {
  name: string;
  image: string;
  repo: string;
  description: string;
  live: string | null;
  label: string;
};

const projects: Project[] = [
  {
    name: "ClinWeave",
    image: "/images/clinweave.png",
    repo: "SaltedAlmond/clinweave",
    description:
      "AI-assisted healthcare hackathon project that connects patient history with current notes to support better clinical decisions.",
    live: "https://clinweave.vercel.app/dashboard",
    label: "Healthcare Hackathon Project",
  },
  {
    name: "Worlds Apart",
    image: "/images/game.jpg",
    repo: "SaltedAlmond/WorldsApart",
    description:
      "A work-in-progress 3D adventure RPG built in Unreal Engine and C++, combining gameplay programming with environment and asset development.",
    live: null,
    label: "Game development",
  },
  {
    name: "Ali Monette Portfolio",
    image: "/images/Ali-Portfolio.png",
    repo: "SaltedAlmond/portfolio",
    description:
      "This responsive portfolio, built with Next.js, TypeScript, Tailwind CSS, and Framer Motion to bring my engineering and creative work into one place.",
    live: "#about",
    label: "Web development",
  },
];

type LanguageData = Record<string, number>;
type LanguageMap = Record<string, LanguageData>;

function getTopLanguages(languageData: LanguageData) {
  const total = Object.values(languageData).reduce(
    (sum, value) => sum + value,
    0
  );

  if (!total) return [];

  return Object.entries(languageData)
    .map(([language, bytes]) => ({
      language,
      percentage: (bytes / total) * 100,
    }))
    .sort((a, b) => b.percentage - a.percentage)
    .slice(0, 4);
}

export default function Projects() {
  const [languages, setLanguages] = useState<LanguageMap>({});

  useEffect(() => {
    const controller = new AbortController();

    async function fetchLanguages() {
      const entries = await Promise.all(
        projects.map(async (project) => {
          try {
            const response = await fetch(
              `https://api.github.com/repos/${project.repo}/languages`,
              { signal: controller.signal }
            );
            if (!response.ok) return [project.repo, {}] as const;
            return [project.repo, (await response.json()) as LanguageData] as const;
          } catch {
            return [project.repo, {}] as const;
          }
        })
      );

      if (!controller.signal.aborted) {
        setLanguages(Object.fromEntries(entries));
      }
    }

    fetchLanguages();
    return () => controller.abort();
  }, []);

  return (
    <section id="projects" className="section-band-alt px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="eyebrow mb-3">Selected work</p>
          <h2 className="section-title">Projects with personality.</h2>
          <p className="section-copy mt-4">
            A mix of web development, real-time 3D, game technology, and the
            spaces where those disciplines meet.
          </p>
        </motion.div>

        <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-3">
          {projects.map((project, index) => {
            const projectLanguages = getTopLanguages(
              languages[project.repo] ?? {}
            );

            return (
              <motion.article
                key={project.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="project-card flex h-full flex-col overflow-hidden rounded-[8px]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="project-overlay absolute inset-0" />
                  <p className="absolute bottom-4 left-4 text-xs font-bold uppercase text-white">
                    {project.label}
                  </p>
                </div>

                <div className="flex min-h-[360px] flex-1 flex-col p-6">
                  <h3 className="text-main text-2xl font-bold">{project.name}</h3>
                  <p className="text-muted mt-3 min-h-[112px] leading-7">
                    {project.description}
                  </p>

                  {projectLanguages.length > 0 && (
                    <div className="mt-5 min-h-[34px] flex flex-wrap gap-2">
                      {projectLanguages.map(({ language, percentage }) => (
                        <span
                          key={language}
                          className="skill-chip px-2.5 py-1 text-xs"
                        >
                          {language} {percentage.toFixed(0)}%
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mt-auto flex gap-3 pt-6">
                    <a
                      href={`https://github.com/${project.repo}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="secondary-link flex-1"
                    >
                      <FaGithub aria-hidden="true" />
                      Code
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target={project.live.startsWith("http") ? "_blank" : undefined}
                        rel={
                          project.live.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="primary-link flex-1"
                      >
                        View
                        <FaArrowUpRightFromSquare aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
