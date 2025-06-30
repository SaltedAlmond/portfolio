import { FaNodeJs, FaJsSquare, FaReact, FaDocker, FaHtml5, FaCss3Alt, FaGithub } from 'react-icons/fa';
import { SiUnrealengine, SiNextdotjs } from 'react-icons/si';
import { DiVisualstudio, DiBackbone } from 'react-icons/di';
import { PiFileCpp } from 'react-icons/pi';

const programmingTech = [
  { icon: <FaHtml5 className="text-[2.75rem]" color="#e34f26" />, label: "HTML5" },
  { icon: <FaCss3Alt className="text-[2.75rem]" color="#1572B6" />, label: "CSS3" },
  { icon: <FaJsSquare className="text-[2.75rem]" color="#f7df1e" />, label: "JavaScript" },
  { icon: <FaReact className="text-[2.75rem]" color="#61DBFB" />, label: "React" },
  { icon: <SiNextdotjs className="text-[2.75rem]" color="#000000" />, label: "Next.js" },
  { icon: <DiBackbone className="text-[3rem]" color="#0071B5" />, label: "Backbone.js" },
  { icon: <FaNodeJs className="text-[2.75rem]" color="#43853d" />, label: "Node.js" },
  { icon: <FaDocker className="text-[2.75rem]" color="#2496ED" />, label: "Docker" },
  { icon: <FaGithub className="text-[2.75rem]" color="#181717" />, label: "GitHub" },
  { icon: <DiVisualstudio className="text-[3rem]" color="#5c2d91" />, label: "Visual Studio" },
  { icon: <PiFileCpp className="text-[2.75rem]" color="#00599C" />, label: "C++" },
  { icon: <SiUnrealengine className="text-[2.75rem]" color="#0E1128" />, label: "Unreal Engine" },
];

export default function Technologies() {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      {/* Programming Section */}
      <h2 className="text-2xl font-semibold mb-4 text-center">My Technologies</h2>
      <div className="flex justify-center gap-6 flex-wrap mb-12">
        {programmingTech.map((tech, i) => (
          <div
            key={i}
            className="flex flex-col items-center group transition-transform transform hover:scale-110 cursor-pointer"
          >
            {tech.icon}
            <span className="mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
              {tech.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
