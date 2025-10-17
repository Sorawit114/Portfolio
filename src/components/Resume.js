"use client";

export default function Resume({ id }) {
  return (
    <section
      id={id}
      className="py-16 sm:py-20 px-4 sm:px-6 text-center text-white"
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-purple-400">
        About Me
      </h2>

      <div className="max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed text-gray-300 mb-10">
        <p>
          I am a Computer Engineering student with hands-on experience in
          developing web and mobile applications using technologies such as{" "}
          <span className="text-purple-400 font-semibold">Flutter</span>,{" "}
          <span className="text-purple-400 font-semibold">Firebase</span>, and{" "}
          <span className="text-purple-400 font-semibold">Python</span>. I have
          a strong interest in{" "}
          <span className="text-purple-400 font-semibold">
            Back-End Development
          </span>{" "}
          and{" "}
          <span className="text-purple-400 font-semibold">Cybersecurity</span>.
        </p>
        <p className="mt-4">
          I’m passionate about continuous learning and self-improvement, and I
          enjoy collaborating with others to build practical, real-world
          projects that make a positive impact.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
        <a
          href="/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition"
        >
          View Resume
        </a>

        <a
          href="/Transcript.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition"
        >
          View Transcript
        </a>
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold mt-16 mb-10 text-purple-400">
        Experience
      </h2>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 px-2 sm:px-0">
        <div className="p-4 bg-gray-900 rounded-2xl shadow hover:scale-105 transition">
          <div className="w-full aspect-[16/9] overflow-hidden rounded-lg mb-4">
            <img
              src="/CDG.png"
              alt="CDG Hackathon"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl font-semibold text-white">CDG Hackathon</h3>
          <p className="mt-2 text-gray-300">
            Participated in team projects solving real-world challenges.
          </p>
        </div>

        <div className="p-4 bg-gray-900 rounded-2xl shadow hover:scale-105 transition">
          <div className="w-full aspect-[16/9] overflow-hidden rounded-lg mb-4">
            <img
              src="/Tokiomarine.JPEG"
              alt="Tokio Marine Hackathon"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl font-semibold text-white">
            Tokio Marine Hackathon
          </h3>
          <p className="mt-2 text-gray-300">
            Worked collaboratively to develop innovative solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
