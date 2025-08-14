import React from "react";

export default function ProjectCard({ name, image, link }) {
  return (
    <div id="project-card"
      className="rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-white hover:shadow-2xl transition-all duration-500"
      style={{ width: "100%", maxWidth: "520px", margin: "auto" }}
    >
      {/* Project Image */}
      <div id="portfolio-img" className="relative overflow-hidden ">
        <img
          src={image}
          alt={name}
          className="w-full h-96 object-cover transform hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Project Info */}
      <div id="project-cont" className="p-6 flex flex-col items-center">
        <h3 className="text-2xl font-semibold text-gray-800 mb-5">{name}</h3>
        <a id="livebtn"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 rounded-full text-lg font-medium text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg hover:shadow-pink-500/50 hover:-translate-y-1 transform transition-all duration-300"
        >
          🌐 Live Preview
        </a>
      </div>
    </div>
  );
}
