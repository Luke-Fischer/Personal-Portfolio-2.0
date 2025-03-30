import React from "react";

export default function PersonalBotModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end items-start bg-black bg-opacity-40 backdrop-blur-sm">
      <div className="bg-[#1a1a1a] w-full max-w-md h-screen shadow-lg p-6 rounded-l-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-teal-400 text-lg font-semibold">Personal Bot 🤖</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition text-2xl"
          >
            ×
          </button>
        </div>
        <p className="text-gray-400 text-sm mb-4">
          Ask me anything about Luke’s work, tech stack, or experience.
        </p>
        <textarea
          placeholder="What's Luke's favorite project?"
          className="w-full h-32 p-2 bg-[#121212] text-white rounded resize-none outline-none border border-gray-700"
        />
        <button className="mt-4 bg-teal-500 hover:bg-teal-400 text-black px-4 py-2 rounded font-semibold">
          Send
        </button>
      </div>
    </div>
  );
}
