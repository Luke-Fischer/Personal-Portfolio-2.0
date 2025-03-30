import React from "react";
import SkillList from "./SkillList";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="px-6 md:px-24 py-20 bg-[#121212]">
      <h3 className="text-2xl font-semibold text-teal-400 mb-10">Projects</h3>

      <div className="grid md:grid-cols-2 gap-8">
        {/* FanQuarters Project */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0 }}
          viewport={{ once: true }}
          className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-800 hover:shadow-lg hover:shadow-teal-500/20 transition"
        >
          <h4 className="text-white font-semibold text-xl mb-1">FanQuarters</h4>

          <h5 className="text-teal-400 font-semibold text-sm mt-2">What I Built</h5>
          <p className="text-gray-400 text-sm mb-2">
            A fully dynamic fantasy football dashboard built with React, Spring Boot, and MongoDB, integrating real-time data from the Sleeper API alongside intelligent assistant features powered by OpenAI. The interface is modular and highly customizable, enabling users to drag, resize, and arrange components into personalized layouts. Designed for flexibility and performance, the system supports any dashboard configuration and delivers live updates on matchups, player stats, and league trends.
          </p>

          <h5 className="text-teal-400 font-semibold text-sm mt-2">What I Learned</h5>
          <p className="text-gray-400 text-sm mb-4">
            Gained hands-on experience architecting scalable full-stack systems capable of ingesting and rendering real-time data across distributed services. Learned to integrate advanced AI functionality using OpenAI’s API, manage complex application state within a modular React codebase, and deploy cloud-ready applications with Heroku. The project sharpened my ability to design maintainable backends, deliver intelligent user experiences, and ensure reliable performance in a dynamic, data-rich environment.
          </p>

          <div className="flex flex-wrap gap-4 mb-4">
            <a
              href="https://www.fanquarters.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-teal-400 text-teal-400 px-4 py-2 rounded hover:bg-teal-400 hover:text-black transition text-sm"
            >
              Visit Website
            </a>
            <a
              href="https://www.youtube.com/watch?v=9KHVDoowlio"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-600 text-gray-300 px-4 py-2 rounded hover:bg-gray-600 hover:text-white transition text-sm"
            >
              Watch Demo
            </a>
          </div>

          <SkillList
            skills={[
              "Java",
              "JavaScript",
              "React.js",
              "MongoDB",
              "Spring Boot",
              "Postman",
              "axios",
              "HTML5",
              "Cascading Style Sheets (CSS)",
              "Heroku",
              "REST APIs",
              "OpenAI API",
              "Sleeper API",
              "GitHub",
              "Version Control",
            ]}
          />
        </motion.div>

        {/* STC Pick’ems Project */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-800 hover:shadow-lg hover:shadow-teal-500/20 transition"
        >
          <h4 className="text-white font-semibold text-xl mb-1">STC Pick’ems</h4>

          <h5 className="text-teal-400 font-semibold text-sm mt-2">What I Built</h5>
          <p className="text-gray-400 text-sm mb-2">
            A full-stack web app built for the Stratford Tennis Club that allows members to submit Grand Slam bracket predictions. Built with .NET MVC, C#, and Microsoft SQL Server, and hosted on Azure. The app is used by over 30 members and counting for every major tournament.
          </p>

          <h5 className="text-teal-400 font-semibold text-sm mt-2">What I Learned</h5>
          <p className="text-gray-400 text-sm mb-4">
            Gained experience with .NET MVC architecture, backend routing, database design, and Azure deployment. Improved frontend layout skills using Bootstrap and enhanced form handling with server-side validation.
          </p>

          <div className="flex flex-wrap gap-4 mb-4">
            <a
              href="https://stcpickems.azurewebsites.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-teal-400 text-teal-400 px-4 py-2 rounded hover:bg-teal-400 hover:text-black transition text-sm"
            >
              Visit Website
            </a>
          </div>

          <SkillList
            skills={[
              ".NET Framework",
              "ASP.NET MVC",
              "C#",
              "Microsoft SQL Server",
              "Microsoft Azure",
              "HTML5",
              "Cascading Style Sheets (CSS)",
              "Bootstrap",
              "Visual Studio",
              "Version Control",
              "GitHub",
              "Test Management",
              "Volunteering",
            ]}
          />
        </motion.div>
      </div>
    </section>
  );
}
