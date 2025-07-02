'use client';

import { JSX } from 'react';
import { FaNodeJs, FaJsSquare, FaReact, FaDocker, FaHtml5, FaCss3Alt, FaGithub } from 'react-icons/fa';
import { SiUnrealengine, SiNextdotjs, SiTypescript } from 'react-icons/si';
import { DiVisualstudio, DiBackbone } from 'react-icons/di';
import { PiFileCpp } from 'react-icons/pi';
import { ReactElement } from 'react';

type TechItem = {
  icon: ReactElement;
  label: string;
};

const programmingTech: TechItem[] = [
  { icon: <FaHtml5 className="text-[2.75rem]" color="#e34f26" />, label: "HTML5" },
  { icon: <FaCss3Alt className="text-[2.75rem]" color="#1572B6" />, label: "CSS3" },
  { icon: <FaJsSquare className="text-[2.75rem]" color="#f7df1e" />, label: "JavaScript" },
  { icon: <SiTypescript className="text-[2.75rem]" color="#3178c6" />, label: "TypeScript" },
  { icon: <FaReact className="text-[2.75rem]" color="#61DBFB" />, label: "React" },
  { icon: <SiNextdotjs className="text-[2.75rem]" color="white" />, label: "Next.js" },
  { icon: <DiBackbone className="text-[3rem]" color="#0071B5" />, label: "Backbone.js" },
  { icon: <FaNodeJs className="text-[2.75rem]" color="#43853d" />, label: "Node.js" },
  { icon: <FaDocker className="text-[2.75rem]" color="#2496ED" />, label: "Docker" },
  { icon: <FaGithub className="text-[2.75rem]" color="white" />, label: "GitHub" },
  { icon: <DiVisualstudio className="text-[3rem]" color="#5c2d91" />, label: "Visual Studio" },
  { icon: <PiFileCpp className="text-[2.75rem]" color="#00599C" />, label: "C++" },
  { icon: <SiUnrealengine className="text-[2.75rem]" color="white" />, label: "Unreal Engine" },
];

export default function Technologies(): JSX.Element {
  const repeatedTech = [...programmingTech, ...programmingTech]; // duplicate

  return (
    <div className="p-8 max-w-6xl mx-auto overflow-hidden">
      <div className="relative flex flex-col items-center border-2 border-white rounded-2xl py-6 px-6">
        <h2 className="absolute -top-4 px-4 text-white text-2xl font-semibold bg-[#303237]">
          My Technologies
        </h2>

        <div className="w-full mt-8 overflow-hidden">
          <div className="marquee-track">
            <div className="marquee-content">
              {repeatedTech.map((tech, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center min-w-[80px] mx-6 group cursor-pointer"
                >
                  {tech.icon}
                  <span className="text-white mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    {tech.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee-track {
          position: relative;
          width: 100%;
          overflow: hidden;
        }

        .marquee-content {
          display: flex;
          width: fit-content;
          animation: scroll 25s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
