import Technologies from './Technologies';
import Image from 'next/image';

export default function About() {
  return (
      <div className="bg-[#0d121e] min-h-dvh flex flex-col items-center justify-center px-4">      
      {/* Top section: text + image side by side */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl gap-12 py-1 -mt-6 md:-mt-16 mb-8">
        {/* Left: About Me Text */}
        <div className="flex-1 flex flex-col md:pl-20 text-center md:text-left">
          <h1 className="bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 text-transparent bg-clip-text text-4xl font-bold mb-4">Hi, I&apos;m Ali Monette</h1>
          <p className="text-blue-100 text-lg bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 text-transparent bg-clip-text">
            A professor and software developer with a strong interest in building thoughtful, user-friendly applications. I care a lot about clean design, UI/UX, and making tools that are both powerful and easy to use. Whether I’m coding, teaching, or experimenting with new ideas, I love creating things that make a difference. Also, I might be one of the shortest volleyball players you’ll meet — but I still play like I’m 6 feet tall!
          </p>
          <div className="mt-8">
            <div className="inline-block p-[2px] rounded-lg bg-gradient-to-tl from-blue-400 via-blue-900 to-blue-400 group">
              <div className="rounded-lg bg-[#0d121e] transition-all duration-300 group-hover:bg-gradient-to-tl group-hover:from-blue-500 group-hover:via-blue-700 group-hover:to-blue-500">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 rounded-lg font-semibold transition-all duration-300 bg-clip-text text-blue-300 group-hover:text-transparent group-hover:bg-gradient-to-tl group-hover:from-blue-100 group-hover:via-white group-hover:to-blue-100"
                >
                  My Resume
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Profile Image with Circle */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 flex items-center justify-center">
            {/* Blue circle behind */}
            <div className="absolute w-full h-full rounded-full p-1 bg-gradient-to-r from-blue-200 via-blue-400 to-transparent">
              <div className="w-full h-full rounded-full bg-[#0d121e]"></div>
            </div>
            {/* Profile image */}
            <div className="relative w-full h-full z-10">
              <Image
                src="/images/Ali-Chill.png"
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
      <div className="relative w-full text-center my-5">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full h-[3px] bg-gradient-to-r from-transparent via-blue-300 to-transparent"/>
        </div>
        <h2 className="relative inline-block px-4 text-2xl text-blue-300 bg-[#0d121e]">Technologies</h2>
      </div>
      <div className="text-center w-full">
        <Technologies />
      </div>
      <div className="w-full h-[3px] bg-gradient-to-r from-transparent via-blue-300 to-transparent"/>
    </div>
  );
}
