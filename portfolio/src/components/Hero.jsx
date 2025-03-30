import React, { useState } from "react";
import PersonalBotModal from "./PersonalBotModal";

export default function Hero() {
  const [isBotOpen, setBotOpen] = useState(false);

  return (
    <section className="relative flex flex-col justify-center items-start min-h-screen px-6 md:px-24 py-32 md:py-48">
      <p className="text-teal-400 text-sm mb-6">Hi, my name is</p>
      <h1 className="text-5xl md:text-7xl font-bold mb-6">Luke Fischer.</h1>
      <h2 className="text-3xl md:text-5xl font-semibold text-gray-400 mb-8">
        I build full-stack web apps.
      </h2>
      <p className="text-gray-500 text-lg max-w-2xl leading-relaxed mb-12">
      I'm a software engineer passionate about backend architecture, data structures, and turning complex logic into clean, powerful products. I build everything from full-stack apps to algorithm-driven tools.
      </p>

      {/* Trigger Button */}
      <button
        onClick={() => setBotOpen(true)}
        className="bg-teal-500 hover:bg-teal-400 text-black px-4 py-2 rounded font-semibold"
      >
        Open Personal Bot
      </button>

      {/* Modal */}
      <PersonalBotModal isOpen={isBotOpen} onClose={() => setBotOpen(false)} />
    </section>
  );
}
