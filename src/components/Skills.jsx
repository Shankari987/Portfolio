import React from "react";
import { Code, Database, Wrench } from "lucide-react";

export default function Skills() {
  const skills = {
    frontend: ["HTML", "CSS", "JavaScript", "React.js"],
    backend: ["Node.js", "Express.js", "MySQL"],
    tools: ["Git", "GitHub", "VS Code", "Postman"],
  };

  return (
    <section
      id="skills"
      className="py-16 bg-slate-950 text-center px-6 md:px-16 scroll-mt-20"
    >
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-teal-400 mb-12">
        Skills
      </h2>

      {/* Skills Grid */}
      <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {/* Frontend */}
        <div className="bg-neutral-900 border border-gray-800 hover:border-teal-400 p-8 rounded-2xl shadow-md hover:shadow-teal-500/10 transition duration-300">
          <div className="flex justify-center mb-4">
            <Code className="w-10 h-10 text-teal-400" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-3">Frontend</h3>
          <ul className="text-gray-400 space-y-2 text-sm">
            {skills.frontend.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        {/* Backend */}
        <div className="bg-neutral-900 border border-gray-800 hover:border-teal-400 p-8 rounded-2xl shadow-md hover:shadow-teal-500/10 transition duration-300">
          <div className="flex justify-center mb-4">
            <Database className="w-10 h-10 text-teal-400" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-3">Backend</h3>
          <ul className="text-gray-400 space-y-2 text-sm">
            {skills.backend.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        {/* Tools */}
        <div className="bg-neutral-900 border border-gray-800 hover:border-teal-400 p-8 rounded-2xl shadow-md hover:shadow-teal-500/10 transition duration-300">
          <div className="flex justify-center mb-4">
            <Wrench className="w-10 h-10 text-teal-400" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-3">Tools & Others</h3>
          <ul className="text-gray-400 space-y-2 text-sm">
            {skills.tools.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
