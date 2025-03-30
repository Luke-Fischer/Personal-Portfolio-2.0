import React from "react";
import SkillList from "./SkillList";
import harvardLogo from "../assets/icons/harvard-university.svg";
import awsLogo from "../assets/icons/aws-2.svg";
import { motion } from "framer-motion";

export default function Certificates() {
  return (
    <section id="certificates" className="px-6 md:px-24 py-20 bg-[#0f0f0f]">
      <h3 className="text-2xl font-semibold text-teal-400 mb-10">Certifications</h3>

      {/* Harvard AI Certificate */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0 }}
        viewport={{ once: true }}
        className="mb-14"
      >
        <div className="flex items-center gap-3 mb-1">
          <div className="bg-white rounded p-[2px]">
            <img src={harvardLogo} alt="Harvard logo" className="w-4 h-4" />
          </div>
          <h4 className="text-white text-lg font-semibold">Introduction to AI with Python</h4>
        </div>

        <p className="text-sm text-gray-400 mb-2">
          Issued by Harvard University – December 2024
        </p>

        <h5 className="text-teal-400 font-semibold text-sm mt-4">What I Learned</h5>
        <p className="text-sm text-gray-400 mb-4">
          Completed a project-based course covering core topics in artificial intelligence, such as search, knowledge representation, machine learning, and natural language processing. Developed a deeper understanding of how to apply AI techniques using Python.
        </p>

        <SkillList
          skills={[
            "Python",
            "Artificial Intelligence",
            "Search Algorithms",
            "Minimax & Game Trees",
            "Constraint Satisfaction Problems",
            "Machine Learning Fundamentals",
            "Knowledge Representation",
            "Natural Language Processing",
            "Project-Based Learning",
          ]}
        />

        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href="https://courses.edx.org/certificates/b9b79b5cfe354b7b877660d8f0d47f2e"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-teal-400 text-teal-400 px-4 py-2 rounded hover:bg-teal-400 hover:text-black transition text-sm font-medium"
          >
            View Credential
          </a>
        </div>
      </motion.div>

      {/* AWS Cloud Practitioner Certificate */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true }}
        className="mb-14"
      >
        <div className="flex items-center gap-3 mb-1">
          <div className="bg-white rounded p-[2px]">
            <img src={awsLogo} alt="AWS logo" className="w-4 h-4" />
          </div>
          <h4 className="text-white text-lg font-semibold">AWS Certified Cloud Practitioner</h4>
        </div>

        <p className="text-sm text-gray-400 mb-2">
          Issued by Amazon Web Services – May 2023
        </p>

        <h5 className="text-teal-400 font-semibold text-sm mt-4">What I Learned</h5>
        <p className="text-sm text-gray-400 mb-4">
          Gained foundational knowledge of AWS services, security best practices, IAM, cloud deployment models, and architectural principles. Developed a strong understanding of how to evaluate cloud solutions from both a technical and business perspective.
        </p>

        <SkillList
          skills={[
            "AWS Cloud Fundamentals",
            "IAM (Identity & Access Management)",
            "EC2 & S3",
            "Cloud Computing Models",
            "Security & Compliance",
            "Cloud Architecture Best Practices",
            "Billing & Pricing Models",
            "Deployment Models",
            "Global Infrastructure Awareness",
          ]}
        />

        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href="https://www.credly.com/badges/bb0b85cc-b4dc-4cfe-9cec-9ff2ec175e8c/public_url"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-teal-400 text-teal-400 px-4 py-2 rounded hover:bg-teal-400 hover:text-black transition text-sm font-medium"
          >
            View Credential
          </a>
        </div>
      </motion.div>
    </section>
  );
}
