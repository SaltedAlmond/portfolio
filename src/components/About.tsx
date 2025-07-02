import Technologies from './Technologies';
import Image from 'next/image';

export default function About() {
  return (
    <div className="bg-[#303237] min-h-screen flex flex-col items-center justify-center">
      
      {/* Top section: text + image side by side */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl gap-12">
        
        {/* Left: About Me Text */}
        <div className="flex-1 flex flex-col pl-20">
          <h1 className="text-white text-4xl font-bold mb-4">Hi, I&apos;m Ali Monette</h1>
          <p className="text-white text-lg">
            Motivated, knowledgeable, and skilled software engineer with 3 years of experience in full-stack development and various programming languages across diverse work environments. Collaborative team player with an ownership mentality and a history of performing at a high level to complete tasks and assist in the growth of an organization.
          </p>
          <div className="self-start mt-8">
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 border-2 border-white-600 text-white rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-colors duration-300"
            >
              My Resume
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          {/* Outer wrapper to center content */}
          <div className="relative w-64 h-64 flex items-center justify-center">

            {/* Blue circle behind */}
            <div className="absolute w-80 h-80 rounded-full border-4 border-white"></div>

            {/* Image inside a square box (not cropped) */}
            <div className="relative w-80 h-80 z-10">
              <Image
                src="/images/Ali-Chill.png"  // Replace with your image path
                alt="Ali Monette"
                className="object-contain rounded-lg"
                fill
                priority
              />
            </div>

          </div>
        </div>
      </div>

      {/* Technologies Section */}
      <div className="mt-16 text-center">
        <div className="flex justify-center gap-6 flex-wrap">
          <Technologies />
        </div>
      </div>
    </div>
  );
}
