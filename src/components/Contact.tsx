'use client';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { TbFileCv } from "react-icons/tb";

const contactIcons = [
  {
    icon: <FaLinkedin className="text-[2.75rem] text-[#0077B5]" />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/alimonette",
  },
  {
    icon: <MdOutlineEmail className="text-[2.75rem] text-[#D44638]" />,
    label: "Email",
    href: "mailto:amonette55@gmail.com",
  },
  {
    icon: <FaGithub className="text-[2.75rem] text-[#181717]" />,
    label: "GitHub",
    href: "https://github.com/SaltedAlmond",
  },
  {
    icon: <TbFileCv className="text-[2.75rem] text-[#4A90E2]" />,
    label: "Resume",
    href: "/Resume.pdf",
    download: true,
  },
];

export default function Contact() {
  return (
    <div className="bg-gray-100">
      <div className="p-8 max-w-6xl mx-auto">
        <div className="flex justify-center gap-6 flex-wrap mb-12">
          {contactIcons.map((contact, i) => (
            <a
              key={i}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
              download={contact.download ? true : undefined}
              className="flex flex-col items-center group transition-transform transform hover:scale-110 cursor-pointer"
            >
              {contact.icon}
              <span className="mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                {contact.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
