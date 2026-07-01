"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  FaArrowUpRightFromSquare,
  FaChevronLeft,
  FaChevronRight,
  FaGithub,
  FaImages,
  FaXmark,
} from "react-icons/fa6";

type Project = {
  name: string;
  image: string;
  repo?: string;
  description: string;
  live?: string | null;
  label: string;
  screenshots?: string[];
  techStack?: string[];
  privateProject?: boolean;
  showScreenshotsOnly?: boolean;
};

const projects: Project[] = [
  {
    name: "HabitTracker",
    image: "/images/habittracker-card.png",
    description:
      "A work-in-progress iOS habit-tracking app built with Expo and React Native. It helps users track daily goals, compare this week against last week, earn growth-based achievements, and discover new activities through consistent habits.",
    label: "Mobile App · Work in Progress",
    screenshots: [
      "/images/habittracker-1.jpeg",
      "/images/habittracker-2.jpeg",
      "/images/habittracker-3.jpeg",
      "/images/habittracker-4.jpeg",
    ],
    techStack: ["Expo", "React Native", "TypeScript", "Local-first storage"],
    privateProject: true,
    showScreenshotsOnly: true,
  },
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
    name: "Ali Monette Portfolio",
    image: "/images/Ali-Portfolio.png",
    repo: "SaltedAlmond/portfolio",
    description:
      "This responsive portfolio, built with Next.js, TypeScript, Tailwind CSS, and Framer Motion to bring my engineering and creative work into one place.",
    live: "#about",
    label: "Web development",
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
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeScreenshotIndex, setActiveScreenshotIndex] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchLanguages() {
      const projectsWithRepos = projects.filter((project) => project.repo);
      const entries = await Promise.all(
        projectsWithRepos.map(async (project) => {
          const repo = project.repo as string;
          try {
            const response = await fetch(
              `https://api.github.com/repos/${repo}/languages`,
              { signal: controller.signal }
            );
            if (!response.ok) return [repo, {}] as const;
            return [repo, (await response.json()) as LanguageData] as const;
          } catch {
            return [repo, {}] as const;
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

  useEffect(() => {
    const screenshotUrls = projects.flatMap((project) => project.screenshots ?? []);

    screenshotUrls.forEach((url) => {
      const image = new window.Image();
      image.src = url;
    });
  }, []);

  useEffect(() => {
    if (!activeProject) return;
    const screenshotCount = activeProject.screenshots?.length ?? 0;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveProject(null);
      }

      if (event.key === "ArrowLeft") {
        setActiveScreenshotIndex((current) =>
          getPreviousScreenshotIndex(current, screenshotCount)
        );
      }

      if (event.key === "ArrowRight") {
        setActiveScreenshotIndex((current) =>
          getNextScreenshotIndex(current, screenshotCount)
        );
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeProject]);

  const openScreenshots = (project: Project) => {
    setActiveProject(project);
    setActiveScreenshotIndex(0);
  };

  const activeScreenshots = activeProject?.screenshots ?? [];
  const activeScreenshot = activeScreenshots[activeScreenshotIndex];

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

        <div className="mt-10 grid items-stretch gap-6 md:grid-cols-2">
          {projects.map((project, index) => {
            const projectLanguages = getTopLanguages(
              project.repo ? languages[project.repo] ?? {} : {}
            );
            const visibleTech = projectLanguages.length
              ? projectLanguages.map(({ language, percentage }) => ({
                  label: `${language} ${percentage.toFixed(0)}%`,
                }))
              : project.techStack?.map((technology) => ({ label: technology })) ?? [];

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

                  {visibleTech.length > 0 && (
                    <div className="mt-5 min-h-[34px] flex flex-wrap gap-2">
                      {visibleTech.map(({ label }) => (
                        <span
                          key={label}
                          className="skill-chip px-2.5 py-1 text-xs"
                        >
                          {label}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mt-auto flex gap-3 pt-6">
                    {project.showScreenshotsOnly && project.screenshots ? (
                      <button
                        type="button"
                        onClick={() => openScreenshots(project)}
                        className="primary-link flex-1"
                      >
                        <FaImages aria-hidden="true" />
                        View Screenshots
                      </button>
                    ) : (
                      <>
                        {project.repo && (
                          <a
                            href={`https://github.com/${project.repo}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="secondary-link flex-1"
                          >
                            <FaGithub aria-hidden="true" />
                            Code
                          </a>
                        )}
                        {project.live && (
                          <a
                            href={project.live}
                            target={
                              project.live.startsWith("http")
                                ? "_blank"
                                : undefined
                            }
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
                      </>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {activeProject && activeScreenshot && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4 py-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeProject.name} screenshots`}
          onClick={() => setActiveProject(null)}
        >
          <button
            type="button"
            aria-label="Close screenshots"
            onClick={() => setActiveProject(null)}
            className="icon-button absolute right-4 top-4 z-20 border-white/20 bg-black/45 text-white hover:bg-white/10 sm:right-6 sm:top-6"
          >
            <FaXmark aria-hidden="true" />
          </button>

          {activeScreenshots.length > 1 && (
            <button
              type="button"
              aria-label="Previous screenshot"
              onClick={(event) => {
                event.stopPropagation();
                setActiveScreenshotIndex((current) =>
                  getPreviousScreenshotIndex(current, activeScreenshots.length)
                );
              }}
              className="icon-button absolute left-3 top-1/2 z-20 -translate-y-1/2 border-white/20 bg-black/45 text-white hover:bg-white/10 sm:left-6"
            >
              <FaChevronLeft aria-hidden="true" />
            </button>
          )}

          <Image
            src={activeScreenshot}
            alt={`${activeProject.name} screenshot ${activeScreenshotIndex + 1}`}
            width={1206}
            height={2420}
            priority
            unoptimized
            className="h-auto max-h-[86vh] w-auto max-w-[min(86vw,430px)] rounded-[24px] object-contain shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          />

          {activeScreenshots.length > 1 && (
            <button
              type="button"
              aria-label="Next screenshot"
              onClick={(event) => {
                event.stopPropagation();
                setActiveScreenshotIndex((current) =>
                  getNextScreenshotIndex(current, activeScreenshots.length)
                );
              }}
              className="icon-button absolute right-3 top-1/2 z-20 -translate-y-1/2 border-white/20 bg-black/45 text-white hover:bg-white/10 sm:right-6"
            >
              <FaChevronRight aria-hidden="true" />
            </button>
          )}

          {activeScreenshots.length > 1 && (
            <div
              className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 justify-center gap-2 sm:bottom-6"
              onClick={(event) => event.stopPropagation()}
            >
              {activeScreenshots.map((screenshot, index) => (
                <button
                  type="button"
                  key={screenshot}
                  aria-label={`Show screenshot ${index + 1}`}
                  aria-current={index === activeScreenshotIndex}
                  onClick={() => setActiveScreenshotIndex(index)}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    index === activeScreenshotIndex
                      ? "bg-white"
                      : "bg-white/35 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
            )}
        </div>
      )}
    </section>
  );
}

function getPreviousScreenshotIndex(current: number, total: number) {
  if (total <= 1) return current;
  return current === 0 ? total - 1 : current - 1;
}

function getNextScreenshotIndex(current: number, total: number) {
  if (total <= 1) return current;
  return current === total - 1 ? 0 : current + 1;
}
