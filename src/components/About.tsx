import Technologies from './Technologies';
import Image from 'next/image';

export default function About() {
  return (
    <div className="bg-[#303237] min-h-screen flex flex-col items-center justify-center px-4">
      
      {/* Top section: text + image side by side */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl gap-12 py-1">

        {/* Left: About Me Text */}
        <div className="flex-1 flex flex-col md:pl-20 text-center md:text-left">
          <h1 className="text-blue-300 text-4xl font-bold mb-4">Hi, I&apos;m Ali</h1>
          <p className="text-blue-100 text-lg">
            A professor and software developer with a strong interest in building thoughtful, user-friendly applications. I care a lot about clean design, UI/UX, and making tools that are both powerful and easy to use. Whether I’m coding, teaching, or experimenting with new ideas, I love creating things that make a difference. Also, I might be one of the shortest volleyball players you’ll meet — but I still play like I’m 6 feet tall!
          </p>
          <div className="mt-8">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 border-2 border-blue-300 text-blue-300 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-colors duration-300"
            >
              My Resume
            </a>
          </div>
        </div>

        {/* Right: Profile Image with Circle */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 flex items-center justify-center">
            {/* Blue circle behind */}
            <div className="absolute w-full h-full rounded-full border-4 border-blue-400 bg-blue-100"></div>

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
      <div className="mt-16 text-center w-full px-4">
        <div className="flex justify-center gap-6 flex-wrap">
          <Technologies />
        </div>
      </div>
    </div>
  );
}
