import React, { useState } from "react";
import PersonalBotModal from "./PersonalBotModal";

export default function Hero() {
  const [isBotOpen, setBotOpen] = useState(false);

  return (
    <section className="relative flex flex-col justify-center items-start min-h-screen px-6 md:px-24 py-32 md:py-48">
      <span className="text-sm text-gray-500 uppercase tracking-widest mb-4">
        Developer. Builder. Problem solver.
      </span>
      <h1 className="text-5xl md:text-7xl font-bold mb-4">Luke Fischer</h1>
      <h2 className="text-2xl md:text-4xl font-medium text-gray-400 mb-6">
        I enjoy working where logic meets real-world challenges.
      </h2>
      <p className="text-gray-500 text-lg max-w-2xl leading-relaxed mb-12">
      I focus on writing clean code, designing thoughtful systems, and building technology that solves real problems. Whether it's backend architecture or interface behavior, I care about structure, clarity, and usability.
      </p>

      {/* Trigger Button */}
      <button
        onClick={() => setBotOpen(true)}
        className="bg-teal-500 hover:bg-teal-400 text-black px-4 py-2 rounded font-semibold"
      >
        Chat with LukeBot
      </button>

      {/* Modal */}
      <PersonalBotModal isOpen={isBotOpen} onClose={() => setBotOpen(false)} />
    </section>
  );
}
