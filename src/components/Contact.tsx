"use client";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { TbFileCv } from "react-icons/tb";
import { motion } from "framer-motion";

const contactIcons = [
  {
    icon: <FaLinkedin className="text-[2.75rem] text-white" />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/alimonette",
  },
  {
    icon: <MdOutlineEmail className="text-[2.75rem] text-white" />,
    label: "Email",
    href: "mailto:amonette55@gmail.com",
  },
  {
    icon: <FaGithub className="text-[2.75rem] text-white" />,
    label: "GitHub",
    href: "https://github.com/SaltedAlmond",
  },
  {
    icon: <TbFileCv className="text-[2.75rem] text-white" />,
    label: "Resume",
    href: "/resume.pdf",
    download: true,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-black to-[#0d121e] min-h-screen flex flex-col items-center justify-center px-4 py-12 text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl text-blue-100 font-bold mb-6">
          Let&apos;s Connect
        </h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="text-white max-w-xl mb-12 px-4">
          Feel free to reach out or connect with me on LinkedIn or GitHub —
          I&apos;m always open to emails! You can also download my resume below.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="flex justify-center gap-6 flex-wrap">
          {contactIcons.map((contact, i) => (
            <a
              key={i}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={
                contact.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              download={contact.download ? true : undefined}
              className="flex flex-col items-center group transition-transform transform hover:scale-110 cursor-pointer"
            >
              {contact.icon}
              <span className="mt-2 text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity">
                {contact.label}
              </span>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
