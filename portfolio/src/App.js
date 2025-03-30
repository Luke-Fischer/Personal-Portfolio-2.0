import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import PersonalBotModal from "./components/PersonalBotModal";
import Education from "./components/Education";
import Experience from "./components/Experience";

function App() {
  const [isBotOpen, setBotOpen] = useState(false);

  return (
    <div className="bg-[#0f0f0f] text-white font-sans min-h-screen scroll-smooth">
      <Navbar onBotClick={() => setBotOpen(true)} />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Certificates />
      <Education />  
      <Contact />
      <PersonalBotModal isOpen={isBotOpen} onClose={() => setBotOpen(false)} />
    </div>
  );
}

export default App;
