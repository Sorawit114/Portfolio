"use client";
import { useState, useEffect } from "react";

const skills = [
  { name: "Python", icon: "/icons/python-logo.png", type: "Language" },
  { name: "Flutter", icon: "devicon-flutter-plain colored", type: "Language" },
  { name: "React", icon: "devicon-react-original colored", type: "Language" },
  { name: "PHP", icon: "devicon-php-plain colored", type: "Language" },
  { name: "Next js", icon: "/icons/next-logo.png", type: "Language" },
  { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored", type: "Tool"},
  { name: "Docker", icon: "devicon-docker-plain colored", type: "Tool" },
  { name: "MySQL", icon: "devicon-mysql-plain colored", type: "Tool" },
  { name: "GitHub", icon: "/icons/git-logo.png", type: "Tool" },
  { name: "VS Code", icon: "devicon-vscode-plain colored", type: "Tool" },
];

export default function Skills({ onSkillClick, selectedSkill, id }) {
  const [filter, setFilter] = useState("All");
  const [filteredSkills, setFilteredSkills] = useState(skills);

  useEffect(() => {
    setFilteredSkills(
      filter === "All" ? skills : skills.filter((s) => s.type === filter)
    );
  }, [filter]);

  return (
    <section id={id} className="py-16 px-6 max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8 text-purple-400">Skills</h2>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {["All", "Language", "Tool"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 rounded-full border transition font-medium ${
              filter === cat
                ? "bg-purple-600 text-white border-purple-600"
                : "border-purple-400 text-purple-300 hover:bg-purple-800/40"
            }`}
          >
            {cat === "Language" ? "Languages" : cat + "s"}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
        {filteredSkills.map((skill) => (
          <div
            key={skill.name}
            onClick={() => onSkillClick(skill.name)}
            className={`p-6 rounded-2xl shadow-lg hover:shadow-xl transition cursor-pointer ${
              selectedSkill === skill.name
                ? "bg-purple-600 text-white"
                : "bg-gray-900 text-white"
            }`}
          >
            {skill.icon.startsWith("/icons/") ? (
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-20 h-20 mx-auto mb-3"
              />
            ) : (
              <i className={`${skill.icon} text-6xl mb-3`}></i>
            )}
            <p className="mt-2 font-semibold text-lg">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
