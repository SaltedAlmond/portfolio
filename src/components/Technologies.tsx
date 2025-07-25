"use client";

import { JSX } from "react";
import {
  FaNodeJs,
  FaJsSquare,
  FaReact,
  FaDocker,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
} from "react-icons/fa";
import { SiUnrealengine, SiNextdotjs, SiTypescript } from "react-icons/si";
import { DiVisualstudio, DiBackbone } from "react-icons/di";
import { PiFileCpp } from "react-icons/pi";
import { ReactElement } from "react";

type TechItem = {
  icon: ReactElement;
  label: string;
};

const programmingTech: TechItem[] = [
  { icon: <FaHtml5 className="text-[2.75rem] text-red-400" />, label: "HTML5" },
  {
    icon: <FaCss3Alt className="text-[2.75rem] text-blue-400" />,
    label: "CSS3",
  },
  {
    icon: <FaJsSquare className="text-[2.75rem] text-yellow-400" />,
    label: "JavaScript",
  },
  {
    icon: <SiTypescript className="text-[2.75rem] text-sky-400" />,
    label: "TypeScript",
  },
  {
    icon: <FaReact className="text-[2.75rem] text-cyan-300" />,
    label: "React",
  },
  {
    icon: <SiNextdotjs className="text-[2.75rem] text-neutral-300" />,
    label: "Next.js",
  },
  {
    icon: <DiBackbone className="text-[3rem] text-indigo-400" />,
    label: "Backbone.js",
  },
  {
    icon: <FaNodeJs className="text-[2.75rem] text-green-400" />,
    label: "Node.js",
  },
  {
    icon: <FaDocker className="text-[2.75rem] text-blue-400" />,
    label: "Docker",
  },
  {
    icon: <FaGithub className="text-[2.75rem] text-zinc-300" />,
    label: "GitHub",
  },
  {
    icon: <DiVisualstudio className="text-[3rem] text-purple-400" />,
    label: "Visual Studio",
  },
  {
    icon: <PiFileCpp className="text-[2.75rem] text-blue-500" />,
    label: "C++",
  },
  {
    icon: <SiUnrealengine className="text-[2.75rem] text-white" />,
    label: "Unreal Engine",
  },
];

export default function Technologies(): JSX.Element {
  // Merge: Repeat technologies to have a seamless loop
  const repeatedTech = [
    ...programmingTech,
    ...programmingTech,
    ...programmingTech,
  ];

  return (
    <div className="marquee-track">
      <div className="marquee-content flex flex-row whitespace-nowrap">
        {repeatedTech.map((tech, i) => (
          <div
            key={i}
            className="flex flex-col items-center min-w-[80px] mx-6 group cursor-pointer"
          >
            {tech.icon}
            <span className="text-blue-100 mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
              {tech.label}
            </span>
          </div>
        ))}
      </div>

      <style jsx>{`
        .marquee-track {
          position: relative;
          width: 100%;
          overflow: hidden;
          margin-left: -1rem;
          margin-right: -1rem;
          width: calc(100% + 2rem);
        }

        .marquee-content {
          display: flex;
          width: max-content;
          animation: scroll 40s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
      `}</style>
    </div>
  );
}
