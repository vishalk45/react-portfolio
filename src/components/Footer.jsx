import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative text-gray-300">
      {/* Wave Shape Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-full h-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#111827"
            fillOpacity="1"
            d="M0,160L40,144C80,128,160,96,240,85.3C320,75,400,85,480,112C560,139,640,181,720,181.3C800,181,880,139,960,133.3C1040,128,1120,160,1200,181.3C1280,203,1360,213,1400,218.7L1440,224V320H0Z"
          ></path>
        </svg>
      </div>

      {/* Footer Main */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-16 relative z-10">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          
          {/* Column 1: Brand / Intro */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">Vishal Kumar</h2>
            <p className="text-sm leading-relaxed">
              Frontend Developer skilled in HTML, CSS, JavaScript, React.js, Tailwind CSS,
              and building responsive, user-friendly websites.  
              Let’s create something amazing together!
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-pink-500 transition">About Me</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-pink-500 transition">Projects</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-pink-500 transition">Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Connect With Me</h3>
            <div className="flex space-x-4 text-lg">
              <a
                href="mailto:vp0254743@gmail.com"
                className="hover:text-pink-500 transition"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://www.linkedin.com/in/vishal-pandit-058669297/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/vishalk45?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Vishal Kumar. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
