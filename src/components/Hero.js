"use client";

import { useEffect, useState } from "react";

export default function Hero({ onViewProjectsClick, onViewContactClick, id }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id={id}
      className="relative min-h-[100vh] md:min-h-[110vh] flex flex-col justify-center items-center text-center overflow-hidden px-4 sm:px-6 md:px-12"
    >
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
          Welcome To
        </h1>

        <h1
          className={`font-extrabold text-white transition-all duration-700 z-50 ${
            scrolled
              ? "fixed top-6 left-4 md:left-8 text-xl sm:text-2xl md:text-3xl"
              : "text-4xl sm:text-5xl md:text-7xl"
          }`}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-purple-400 drop-shadow-lg">
            Sorawit Kamboonlue
          </span>
        </h1>

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
          Portfolio
        </h1>

        <p className="mt-4 text-base sm:text-lg md:text-2xl text-purple-200 px-4">
          Back-End Developer | Web & Mobile | AI Enthusiast
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onViewProjectsClick}
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg shadow-lg transition text-white"
          >
            View Projects
          </button>
          <button
            onClick={onViewContactClick}
            className="px-6 py-3 border border-purple-300 text-purple-200 rounded-lg hover:bg-purple-800/50 transition"
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}
