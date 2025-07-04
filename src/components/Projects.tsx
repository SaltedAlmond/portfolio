'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

type Project = {
  name: string;
  image: string;
  repo: string;
  description: string;
  live: string | null;
};

const projects: Project[] = [
  {
    name: "My Portfolio",
    image: "/images/portfolio.jpg",
    repo: "SaltedAlmond/portfolio",
    description: "A portfolio site built with Next.js and Tailwind CSS",
    live: null,
  },
  {
    name: "Worlds Apart",
    image: "/images/game.jpg",
    repo: "SaltedAlmond/WorldsApart",
    description: "3D Adventure RPG in Unreal Engine with C++",
    live: null,
  },
];

type LanguageData = Record<string, number>;
type LanguageMap = Record<string, LanguageData>;

export default function Projects() {
  const [languages, setLanguages] = useState<LanguageMap>({});

  useEffect(() => {
    async function fetchLanguages() {
      const result: LanguageMap = {};

      for (const project of projects) {
        const res = await fetch(`https://api.github.com/repos/${project.repo}/languages`);
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
      <h2 className="bg-black text-white text-3xl font-bold text-center mb-0 text-gray-900 dark:text-white py-10">
        My Projects
      </h2>

      {projects.map((project, i) => (
        <div key={i} className="relative w-full h-[400px] overflow-hidden">
          {/* Full-width background image */}
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover"
            quality={80}
            priority
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <div className="text-center px-4 max-w-3xl text-white">
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="mb-3 text-sm md:text-base">{project.description}</p>

              {/* Language Percentages */}
              <div className="flex flex-wrap gap-2 justify-center text-sm font-medium mb-3">
                {languages[project.repo] &&
                  getPercentages(languages[project.repo]).map(({ lang, percent }) => (
                    <span
                      key={lang}
                      className="bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm"
                    >
                      {lang} ({percent}%)
                    </span>
                  ))}
              </div>

              {/* Links */}
              <div className="flex justify-center gap-4 text-sm font-semibold">
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
                    className="underline hover:text-blue-400"
                  >
                    Live Demo
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