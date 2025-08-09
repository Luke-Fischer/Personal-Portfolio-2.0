import React from "react";
import SkillList from "./SkillList";
import guelphLogo from "../assets/icons/University_of_Guelph_Logo.jpg";
import { motion } from "framer-motion";

export default function Education() {
    return (
      <section id="education" className="px-6 md:px-24 py-20 bg-[#121212]">
        <h3 className="text-2xl font-semibold text-teal-400 mb-10">Education</h3>
  
        {/* University Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-1">
            <div className="bg-white rounded p-[2px]">
              <img src={guelphLogo} alt="University of Guelph logo" className="w-4 h-4" />
            </div>
            <h4 className="text-white font-medium text-lg">University of Guelph</h4>
          </div>
  
          <p className="text-sm text-gray-400 italic">
            Honours B.Sc. in Computer Science, Minor in Business
          </p>
          <p className="text-xs text-gray-500 uppercase tracking-wide mt-1">
            Sep 2018 – Dec 2022 • Major GPA: 84%
          </p>
  
          <SkillList
            skills={[
              "C",
              "Java",
              "Python",
              "SQL",
              "Data Structures",
              "Algorithms",
              "Object-Oriented Programming",
              "Operating Systems",
              "Compilers",
              "Database Design",
              "Software Testing",
              "Parallel Programming",
              "Systems Programming",
              "Shell Scripting",
              "Linux",
              "Team Collaboration",
              "Time Management",
            ]}
          />
        </motion.div>
  
        {/* Independent Research Project */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="flex items-stretch gap-4"
        >
          {/* Animated Vertical Line */}
          <div className="w-[2px] bg-teal-400 mt-1 rounded-sm" />
  
          {/* Content */}
          <div>
            <span className="inline-block text-xs text-teal-400 border border-teal-400 px-2 py-[2px] rounded-full mb-2">
              Faculty-Selected Research
            </span>
  
            <h5 className="text-white font-medium text-md mb-1">
              Independent Study on De Bruijn Sequences
            </h5>
  
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Selected by Dr. Sawada to conduct an independent study on De Bruijn sequences and their constructions. Implemented algorithms in C based on academic research, authored a 16-page paper, and presented findings to the department's faculty.
            </p>
  
            <SkillList
              skills={[
                "C",
                "Discrete Mathematics",
                "Algorithm Implementation",
                "Technical Writing",
                "LaTeX",
                "Research Analysis",
                "Literature Review",
                "Mathematical Reasoning",
                "Presentation Skills",
                "Academic Communication",
                "Independent Study",
              ]}
            />
  
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="/deBruijn_Paper.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-teal-400 text-teal-400 px-4 py-2 rounded hover:bg-teal-400 hover:text-black transition text-sm font-medium"
              >
                View Paper
              </a>
              <a
                href="/deBruijn_Paper.pdf"
                download
                className="border border-gray-600 text-gray-300 px-4 py-2 rounded hover:bg-gray-600 hover:text-white transition text-sm font-medium"
              >
                Download PDF
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    );
  }

