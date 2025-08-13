import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin } from "lucide-react";
import resume from "../assets/Vishal_CV.pdf.pdf";
import certificate from "../assets/Vishal-1.pdf"; // <- apna certificate ka path yaha daalo

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Certificate", href: certificate, external: true }, // external true = open new tab
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md shadow-md z-50 bg-[#f0f1f3] ">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-12 h-[90px] flex items-center justify-between">
        {/* Left: Logo + Nav Links */}
        <div className="flex items-center space-x-8">
          <motion.a
            href="#home"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent cursor-pointer select-none"
          >
            Vishal.
          </motion.a>

          <div className="hidden md:flex space-x-12">
            {navLinks.map((link, i) => (
              link.external ? (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.5 }}
                  className="relative text-lg font-semibold text-gray-700 cursor-pointer select-none group"
                >
                  {link.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 transition-all duration-300 group-hover:w-full rounded"></span>
                </motion.a>
              ) : (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.5 }}
                  className="relative text-lg font-semibold text-gray-700 cursor-pointer select-none group"
                >
                  {link.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 transition-all duration-300 group-hover:w-full rounded"></span>
                </motion.a>
              )
            ))}
          </div>
        </div>

        {/* Right: Social Icons + Download CV */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="https://github.com/vishalk45?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-indigo-600 transition"
            aria-label="GitHub"
          >
            <Github size={26} />
          </a>
          <a
            href="https://www.linkedin.com/in/vishal-pandit-058669297/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-indigo-600 transition"
            aria-label="LinkedIn"
          >
            <Linkedin size={26} />
          </a>
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-md font-semibold transition"
          >
            View CV
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-md shadow-lg"
          >
            <div className="flex flex-col space-y-6 px-6 py-8">
              {navLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-semibold text-gray-800 hover:text-indigo-600 transition"
                  >
                    {link.name}
                  </a>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-semibold text-gray-800 hover:text-indigo-600 transition"
                  >
                    {link.name}
                  </a>
                )
              )}

              <div className="flex space-x-6 pt-4 border-t border-gray-300 mt-4">
                <a
                  href="https://github.com/vishalk45?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-indigo-600 transition"
                  aria-label="GitHub"
                >
                  <Github size={28} />
                </a>
                <a
                  href="https://www.linkedin.com/in/vishal-pandit-058669297/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-indigo-600 transition"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={28} />
                </a>
                <a
                  href={resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-md font-semibold transition"
                >
                  View CV
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
