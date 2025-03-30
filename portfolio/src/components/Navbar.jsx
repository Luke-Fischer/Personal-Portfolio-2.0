import React, { useEffect, useState } from "react";
import { Github, Linkedin, Mail, FileText, Bot, Menu, X } from "lucide-react";

export default function Navbar({ onBotClick }) {
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

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
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#certificates", label: "Certifications" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f0f]/80 backdrop-blur-md border-b border-gray-800 px-6 py-4 flex justify-between items-center text-base shadow-sm">
      
      {/* Social Icons */}
      <div className="flex space-x-4">
        <a href="https://github.com/Luke-Fischer" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition">
          <Github size={18} />
        </a>
        <a href="https://www.linkedin.com/in/luke-fischer-/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition">
          <Linkedin size={18} />
        </a>
        <a href="mailto:lukefischer.dev@gmail.com" className="text-gray-400 hover:text-teal-400 transition">
          <Mail size={18} />
        </a>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex space-x-6 font-medium tracking-tight items-center">
        {navItems.map(({ href, label }) => {
          const id = href.replace("#", "");
          const isActive = activeSection === id;

          return (
            <a
              key={id}
              href={href}
              className={`relative text-gray-300 hover:text-teal-400 transition ${isActive ? "text-teal-400" : ""}`}
            >
              {label}
              {isActive && <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-teal-400 rounded" />}
            </a>
          );
        })}

        <div className="h-6 w-[2px] bg-gray-600 mx-3 rounded-sm" />

        <a href="/Luke_Fischer_Resume.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-teal-400 transition flex items-center gap-1">
          <FileText size={16} />
          <span>Resume</span>
        </a>

        <button onClick={onBotClick} className="text-gray-300 hover:text-teal-400 transition flex items-center gap-1 focus:outline-none">
          <Bot size={16} />
          <span>LukeBot</span>
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setMobileOpen(!mobileOpen)} className="text-gray-300 hover:text-teal-400 focus:outline-none">
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#0f0f0f] border-t border-gray-800 py-4 px-6 md:hidden flex flex-col space-y-4 z-50">
          {navItems.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-gray-300 hover:text-teal-400 transition"
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </a>
          ))}

          <div className="border-t border-gray-700 my-2" />

          <a href="/Luke_Fischer_Resume.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-teal-400 transition flex items-center gap-1">
            <FileText size={16} />
            Resume
          </a>

          <button onClick={() => { onBotClick(); setMobileOpen(false); }} className="text-gray-300 hover:text-teal-400 transition flex items-center gap-1">
            <Bot size={16} />
              LukeBot
          </button>
        </div>
      )}
    </nav>
  );
}

