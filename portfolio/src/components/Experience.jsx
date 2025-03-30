import React from "react";
import SkillList from "./SkillList";
import { motion } from "framer-motion";

export default function Experience() {
  const jobs = [
    {
      company: "Candescent (formerly NCR Voyix)",
      title: "Software Engineer",
      location: "Waterloo, ON",
      date: "Sep 2023 – Present",
      summary: `I work across the full stack to deliver production-ready features that improve reliability and performance across microservices.`,
      bullets: [
        "Contribute to the full software development lifecycle, including feature grooming, sprint planning, implementation, testing, and demoing",
        "Build full-stack features using Java, React, JavaScript, YAML, and Postman within a microservices architecture",
        "Design and integrate REST APIs that interface with both internal services and third-party platforms like CXI",
        "Automate testing and deployments using Jenkins, Docker, and Kubernetes to improve delivery speed and reliability",
        "Collaborate cross-functionally with QA, product, and infrastructure teams in an Agile environment",
        "Participate in code reviews and architectural discussions to maintain code quality and scalability",
        "Create technical documentation and mentor new developers to support team growth and onboarding"
      ],
      skills: [
        "Java", "Spring Boot", "JavaScript", "React.js", "Kubernetes", "Docker",
        "Postman", "Microservices", "REST APIs", "YAML", "Swagger API", "Redis",
        "GitHub", "Jira", "Jenkins", "Agile Environment", "Technical Demonstrations", "SDLC"
      ]
    },
    {
      company: "Adknown Inc",
      title: "IT Support Intern",
      location: "Guelph, ON",
      date: "May 2022 – Sep 2022",
      summary: `Supported cross-platform infrastructure and researched automation tools adopted by leadership.`,
      bullets: [
        "Provided front-line technical support for Windows, macOS, and Linux systems across a fast-paced tech company",
        "Set up and maintained workstations, managed backups, and ensured infrastructure reliability for internal teams",
        "Researched and recommended remote access and monitoring tools, one of which was adopted by company leadership",
        "Wrote internal scripts to streamline repetitive tasks and improve support response time",
        "Worked closely with developers and infrastructure teams, gaining exposure to DevOps workflows and systems thinking"
      ],
      skills: [
        "Technical Support", "Scripting", "Remote Access Tools",
        "Linux", "Windows", "Team Communication", "Troubleshooting"
      ]
    }
  ];

  return (
    <section id="experience" className="px-6 md:px-24 py-20 bg-[#121212]">
      <h3 className="text-2xl font-semibold text-teal-400 mb-12">Work Experience</h3>
      <div className="relative border-l border-gray-700 ml-4 pl-4 space-y-16">
        {jobs.map((job, index) => (
          <div key={index} className="relative">
            {/* Timeline Dot */}
            <div className="absolute left-0 top-[0.75rem] -ml-[23px] w-3.5 h-3.5 bg-teal-400 rounded-full"></div>

            {/* Card with scroll animation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] rounded-xl p-6 border border-gray-700"
            >
              <h4 className="text-white font-semibold text-lg mb-1">{job.title}</h4>
              <p className="text-sm text-gray-400 italic mb-0">{job.company} • {job.location}</p>
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-3">{job.date}</p>

              <p className="text-sm text-gray-400 mb-3">{job.summary}</p>

              <ul className="list-disc list-inside text-gray-400 text-sm space-y-1 mb-4">
                {job.bullets.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <SkillList skills={job.skills} initialCount={6} />
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
