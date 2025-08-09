import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="px-6 md:px-24 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-semibold text-teal-400 mb-4">About Me</h3>
        <p className="text-gray-400 max-w-2xl">
          I'm a software engineer who works across the full stack to build real-world software that delivers value. Outside of work, I’m always looking for the next side project or open source contribution that challenges me, sharpens my skills, and creates meaningful user experiences. I continue to grow as a developer by earning certifications and exploring new technologies that push my technical depth.
        </p>
      </motion.div>
    </section>
  );
}
