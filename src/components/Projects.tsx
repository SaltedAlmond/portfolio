"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Project = {
  name: string;
  image: string;
  repo: string;
  description: string;
  live: string | null;
};

const projects: Project[] = [
  {
    name: "My Portfolio (a.k.a. This Website)",
    image: "/images/portfolio.jpg",
    repo: "SaltedAlmond/portfolio",
    description:
      "Built with Next.js and Tailwind CSS. You’re literally inside it right now.",
    live: "/",
  },
  {
    name: "Worlds Apart",
    image: "/images/game.jpg",
    repo: "SaltedAlmond/WorldsApart",
    description:
      "3D Adventure RPG in Unreal Engine with C++. Still a work in progress — stay tuned!",
    live: null,
  },
  {
    name: "Portfolio 3D",
    image: "/images/3dportfolio.png",
    repo: "SaltedAlmond/Portfolio-3D",
    description:
      "Explore my custom-built 3D portfolio — a fully interactive scene showcasing my work in real-time 3D. All models and textures were created by me using 3ds Max, ZBrush, and Substance Painter, and the experience was programmed with Three.js and Vite. This is a work in progress — stay tuned for more updates!",
    live: "https://amonette-3d.vercel.app",
  },
];

type LanguageData = Record<string, number>;
type LanguageMap = Record<string, LanguageData>;

export default function Projects() {
  const [languages, setLanguages] = useState<LanguageMap>({});
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    async function fetchLanguages() {
      const result: LanguageMap = {};
      for (const project of projects) {
        const res = await fetch(
          `https://api.github.com/repos/${project.repo}/languages`
        );
        const data = await res.json();
        result[project.repo] = data;
      }
      setLanguages(result);
    }
    fetchLanguages();
  }, []);

  const getPercentages = (langData: LanguageData) => {
    const total = Object.values(langData).reduce((sum, val) => sum + val, 0);
    return Object.entries(langData).map(([lang, bytes]) => ({
      lang,
      percent: ((bytes / total) * 100).toFixed(1),
    }));
  };

  return (
    <section id="projects" className="w-full">
      <div className="bg-gradient-to-b from- bg-[#161d2f] to-black">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-white text-3xl font-bold text-center mb-0 py-10">
            My Projects
          </h2>
        </motion.div>
      </div>

      {projects.map((project, i) => (
        <div key={i} className="relative w-full h-[400px] overflow-hidden">
          {/* Background image */}
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover"
            quality={80}
            priority
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/30 to-black flex items-center justify-center">
            <div className="text-center px-4 max-w-3xl text-white">
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="mb-3 text-sm md:text-base">{project.description}</p>

              {/* Language Percentages */}
              <div className="flex flex-wrap gap-2 justify-center text-sm font-medium mb-3">
                {languages[project.repo] &&
                  getPercentages(languages[project.repo]).map(
                    ({ lang, percent }) => (
                      <span
                        key={lang}
                        className="bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm"
                      >
                        {lang} ({percent}%)
                      </span>
                    )
                  )}
              </div>

              {/* Links */}
              <div className="relative flex justify-center gap-4 text-sm font-semibold">
                <a
                  href={`https://github.com/${project.repo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-blue-400"
                >
                  GitHub
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative underline hover:text-blue-400"
                    onClick={(e) => {
                      if (
                        project.name === "My Portfolio (a.k.a. This Website)"
                      ) {
                        e.preventDefault();
                        setShowTooltip(true);
                        setTimeout(() => setShowTooltip(false), 2500);
                      }
                    }}
                  >
                    {project.name === "Portfolio 3D" ? "Demo" : "Live"}
                    {showTooltip &&
                      project.name === "My Portfolio (a.k.a. This Website)" && (
                        <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-white text-black text-xs rounded-md px-3 py-1 shadow-md z-10">
                          Inception! You’re already here.
                        </span>
                      )}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
