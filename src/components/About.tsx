import Technologies from './Technologies'; // adjust the path as needed
import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      
      {/* Top section: text + image side by side */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl gap-12">
        
        {/* Left: About Me Text */}
        <div className="flex-1 flex flex-col">
          <h1 className="text-4xl font-bold mb-4">Hi, I&apos;m Ali Monette</h1>
          <p className="text-lg">
            Motivated, knowledgeable, and skilled software engineer with 3 years of experience in full-stack development and various programming languages across diverse work environments. Collaborative team player with an ownership mentality and a history of performing at a high level to complete tasks and assist in the growth of an organization.
          </p>
          <div className="self-start mt-8">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300"
            >
              My Resume
            </a>
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex-1 flex justify-center">
         <Image
            src="/path/to/your-image.jpg" // replace with your image path
            alt="Ali Monette"
            className="rounded-lg shadow-lg"
            style={{ maxHeight: "400px" }}
            width={400}  // specify width (px)
            height={400} // specify height (px) or adjust to maintain aspect ratio
            priority      // optional: preloads image for faster LCP
          />
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