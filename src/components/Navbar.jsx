"use client";
import { Home, FolderKanban, Star, User, Mail } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 768);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  return (
    <nav
      className={`
        fixed z-50
        ${
          isMobile
            ? "bottom-0 left-0 w-full rounded-none"
            : "top-6 right-6 rounded-full"
        }
        bg-purple-800/80 backdrop-blur-md shadow-lg
        px-4 md:px-6 py-3
        flex justify-around md:justify-center items-center gap-2 md:gap-4
        text-gray-100
        transition-all duration-300
      `}
    >
      <button
        onClick={() => scrollTo("hero")}
        className="flex items-center gap-2 hover:text-teal-300 transition"
      >
        <Home className="w-5 h-5" />
        <span className="hidden md:inline">Home</span>
      </button>

      <button
        onClick={() => scrollTo("about")}
        className="flex items-center gap-2 hover:text-teal-300 transition"
      >
        <User className="w-5 h-5" />
        <span className="hidden md:inline">About</span>
      </button>

      <button
        onClick={() => scrollTo("skill")}
        className="flex items-center gap-2 hover:text-teal-300 transition"
      >
        <Star className="w-5 h-5" />
        <span className="hidden md:inline">Skill</span>
      </button>

      <button
        onClick={() => scrollTo("projects")}
        className="flex items-center gap-2 hover:text-teal-300 transition"
      >
        <FolderKanban className="w-5 h-5" />
        <span className="hidden md:inline">Projects</span>
      </button>

      <button
        onClick={() => scrollTo("contact")}
        className="flex items-center gap-2 hover:text-teal-300 transition"
      >
        <Mail className="w-5 h-5" />
        <span className="hidden md:inline">Contact</span>
      </button>
    </nav>
  );
}
