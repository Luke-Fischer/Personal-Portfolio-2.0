import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="px-6 md:px-24 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto text-center"
      >
        <h3 className="text-2xl font-semibold text-teal-400 mb-4">Get in Touch</h3>
        <p className="text-gray-400 mb-6">
          I’m always open to discussing new opportunities, side projects, or anything tech related. Feel free to drop me a line. I’d love to hear from you.
        </p>
        <a
          href="mailto:lukefischer.dev@gmail.com"
          className="inline-block border border-teal-400 text-teal-400 px-6 py-2 rounded hover:bg-teal-400 hover:text-black transition text-sm font-medium mb-4"
        >
          Say Hello
        </a>

        {/* Resume Buttons */}
        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <a
            href="/Luke_Fischer_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-teal-400 text-teal-400 px-4 py-2 rounded hover:bg-teal-400 hover:text-black transition text-sm font-medium"
          >
            View Resume
          </a>
          <a
            href="/Luke_Fischer_Resume.pdf"
            download
            className="border border-gray-600 text-gray-300 px-4 py-2 rounded hover:bg-gray-600 hover:text-white transition text-sm font-medium"
          >
            Download PDF
          </a>
        </div>
      </motion.div>
    </section>
  );
}


