import React, { useEffect, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Navbar({ onBotClick }) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
        const sections = [
          "about",
          "projects",
          "experience",
          "certificates",
          "education",
          "contact",
        ];
      
        const scrollPosition = window.scrollY + window.innerHeight;
        const pageHeight = document.body.scrollHeight;
      
        // If you're at the bottom, force 'contact' as active
        if (scrollPosition >= pageHeight - 5) {
          setActiveSection("contact");
          return;
        }
      
        let current = "";
      
        for (const id of sections) {
          const el = document.getElementById(id);
          if (el) {
            const rect = el.getBoundingClientRect();
            const threshold = window.innerHeight * 0.3;
            if (rect.top <= threshold && rect.bottom >= 0) {
              current = id;
            }
          }
        }
      
        setActiveSection(current);
      };
      
      

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f0f]/80 backdrop-blur-md border-b border-gray-800 px-6 py-4 flex justify-between items-center text-base shadow-sm">
      
      {/* Social Icons */}
      <div className="flex space-x-4">
        <a
          href="https://github.com/Luke-Fischer"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-teal-400 transition"
        >
          <Github size={18} />
        </a>
        <a
          href="https://www.linkedin.com/in/luke-fischer-/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-teal-400 transition"
        >
          <Linkedin size={18} />
        </a>
        <a
          href="mailto:lukefischer.dev@gmail.com"
          className="text-gray-400 hover:text-teal-400 transition"
        >
          <Mail size={18} />
        </a>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-6 font-medium tracking-tight">
        {[
          { href: "#about", label: "About" },
          { href: "#projects", label: "Projects" },
          { href: "#experience", label: "Experience" },
          { href: "#certificates", label: "Certifications" },
          { href: "#education", label: "Education" },
          { href: "#contact", label: "Contact" },
        ].map(({ href, label }) => {
          const id = href.replace("#", "");
          const isActive = activeSection === id;

          return (
            <a
              key={id}
              href={href}
              className={`relative text-gray-300 hover:text-teal-400 transition ${
                isActive ? "text-teal-400" : ""
              }`}
            >
              {label}
              {isActive && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-teal-400 rounded" />
              )}
            </a>
          );
        })}

        <button
          onClick={onBotClick}
          className="text-gray-300 hover:text-teal-400 transition focus:outline-none"
        >
          Personal Bot
        </button>
      </div>
    </nav>
  );
}



