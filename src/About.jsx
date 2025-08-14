import React, { useState } from "react";
// import image from "./assets/img2.jpg"; // Make sure your image path is correct

const About = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const skillsData = {
    frontend: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"],
    backend: ["Node.js", "Express.js", "PHP", "Laravel"],
    database: ["MongoDB", "MySQL"],
    versionControl: ["Git", "GitHub"],
  };

  return (
    <section
      id="about"
      className="relative py-16 px-6 md:px-16 bg-gradient-to-br from-blue-50 via-white to-purple-50"
    >
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-10 right-10 w-52 h-52 bg-purple-300 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-20 relative z-10">
        {/* Left Side - Photo */}
        <div className="w-full md:w-[800px] flex justify-center">
          <img
            src="/assets/img2.jpg"
            alt="Vishal Kumar"
            className="rounded-2xl shadow-2xl object-cover w-full max-w-[100%] h-auto md:h-[600px] border-4 border-white"
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-2/3">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-gray-700 leading-relaxed mb-8 text-lg">
            I’m <span className="font-semibold">Vishal Kumar</span>, a
            passionate{" "}
            <span className="font-semibold">Full Stack Developer</span> who
            loves merging{" "}
            <span className="text-blue-600 font-semibold">creative design</span>{" "}
            with{" "}
            <span className="text-purple-600 font-semibold">
              efficient code
            </span>
            . I focus on building high-performance, scalable, and visually
            appealing web applications. 
          </p>

          {/* Tabs */}
          <div className="flex border-b border-gray-200 mb-6 overflow-x-auto">
            {[
              { id: "skills", label: "Main Skills" },
              { id: "education", label: "Education" },
              { id: "experience", label: "Experience" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 font-medium whitespace-nowrap transition-colors duration-200 ${
                  activeTab === tab.id
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div>
            {activeTab === "skills" && (
              <div className="space-y-5">
                {Object.entries(skillsData).map(([category, skills]) => (
                  <div key={category}>
                    <h3 className="text-lg font-semibold text-gray-800 capitalize mb-[6px]">
                      {category.replace(/([A-Z])/g, " $1")}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {skills.map((skill) => (
                        <span
                          key={skill}
                          className="bg-gray-200 px-4 py-[6px] rounded-full text-sm text-gray-700 font-medium hover:bg-gray-300 transition"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "education" && (
              <ul className="space-y-3 text-gray-700">
                <li>
                  🎓 Secondary Education(10th) – Royal Orchid International
                  School (2022-23)
                </li>
                <li>
                  🎓 Higher Secondary Education(12th) – Barhi Inter College
                  (2023–2025)
                </li>
                <li>
                  📜 Web Development – Arena Animation Hazaribag (6 Months)
                </li>
                <li>
                  🎓 <strong>Bachelor of Arts</strong> – Vinoba Bhave University
                  Hazaribagh (2025–2028)
                </li>
              </ul>
            )}

            {activeTab === "experience" && (
              <ul className="space-y-3 text-gray-700">
                <li>
                  💼 Freelance Web Developer – Built responsive, dynamic
                  websites
                </li>
                <li>
                  💼 I developed hands-on experience in making websites through
                  projects and live project.
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
