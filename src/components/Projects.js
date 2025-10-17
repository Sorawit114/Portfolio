"use client";
import React, { forwardRef } from "react";

const allProjects = [
  {
    title: "Web Backend System",
    desc: "A web-based system built with Docker, PHP, and MySQL for a software engineering project.",
    link: "https://github.com/Sorawit114/Soft-Eng-Proj.git",
    skills: ["Docker", "PHP", "MySQL"],
  },
  {
    title: "Mobile App Development",
    desc: "A collection of mobile applications developed with Flutter for various projects.",
    link: "https://github.com/Sorawit114/Mobile_App_Projects.git",
    skills: ["Flutter"],
  },
  {
    title: "Git Workflow Practice",
    desc: "A repository to practice Git commands and GitHub Desktop workflow.",
    link: "https://github.com/Sorawit114/github-desktop-project.git",
    skills: ["GitHub", "VS Code"],
  },
  {
    title: "Stock Pattern Detector",
    desc: "A Python-based tool for detecting candlestick patterns in stock data.",
    link: "https://github.com/Sorawit114/Project.git",
    skills: ["Python"],
  },
  {
    title: "PHP Web App with Auth",
    desc: "A simple PHP web application featuring a user login and registration system.",
    link: "https://github.com/Sorawit114/web_app.git",
    skills: ["PHP", "MySQL"],
  },
  {
    title: "Basic Flutter App",
    desc: "An initial project to explore basic Flutter functionalities and UI components.",
    link: "https://github.com/Sorawit114/app1.git",
    skills: ["Flutter"],
  },
  {
    title: "Mobile UI/UX Demo",
    desc: "A mobile app focusing on implementing layouts and navigation patterns with Flutter.",
    link: "https://github.com/Sorawit114/Mobile_App.git",
    skills: ["Flutter"],
  },
  {
    title: "Git Desktop Practice",
    desc: "A project for learning and practicing the use of GitHub Desktop.",
    link: "https://github.com/Sorawit114/github-destop-pro.git",
    skills: ["GitHub", "VS Code"],
  },
  {
    title: "Portfolio Website",
    desc: "A personal portfolio website built with Next.js, React, and Tailwind CSS. Fully responsive and deployed on Vercel.",
    link: "https://github.com/Sorawit114/portfolio",
    skills: ["Next js", "React", "Tailwind CSS", "VS Code", "GitHub"],
  },
];

const Projects = forwardRef(({ selectedSkill, id }, ref) => {
  const filteredProjects = selectedSkill
    ? allProjects.filter((p) => p.skills.includes(selectedSkill))
    : allProjects;

  return (
    <section id={id} ref={ref} className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-10 text-purple-400">
        Projects
      </h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-2 sm:px-4">
        {filteredProjects.map((p) => (
          <div
            key={p.title}
            className="p-6 bg-gray-900 rounded-2xl shadow hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold text-white">{p.title}</h3>
            <p className="mt-2 text-gray-300">{p.desc}</p>

            <div className="flex flex-wrap gap-2 mt-3 mb-4">
              {p.skills.map((s, i) => (
                <span
                  key={i}
                  className="text-sm bg-purple-700/50 px-3 py-1 rounded-full"
                >
                  {s}
                </span>
              ))}
            </div>

            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
});

Projects.displayName = "Projects";

export default Projects;
