import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
   <section
      id="home"
      className="w-full bg-gradient-to-tr from-[#f9f9f9] via-[#f3f3f3] to-[#e8e8e8] pt-40 pb-20"
    >
      <div id="about-me" className="max-w-8xl md:pl-65 mx-auto">
        {/* Full Stack Developer */}
        <div id="intro">
          <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-indigo-600 font-semibold text-sm md:text-base uppercase tracking-widest mb-6"
        >
          Full Stack Developer
        </motion.p>

        {/* Hello, I’m */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl md:text-7xl font-bold text-gray-900 mb-1"
        >
          Hello, I’m  Vishal Kumar
        </motion.h2>

        {/* Vishal Kumar */}
        {/* <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-8 leading-tight"
        >
          Vishal Kumar
        </motion.h1> */}

        {/* Welcome to my */}
        <motion.p id="welcome"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-3xl md:text-7xl mt-6 font-bold text-gray-700 mb-1"
        >
          Welcome to my
        </motion.p>

        {/* digital world */}
        <motion.p id="digital-world"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-3xl md:text-5xl mt-8 font-extrabold text-indigo-600 mb-5 tracking-wide"
        >
          digital world
        </motion.p>

        {/* Final line */}
        <motion.p id="final-line"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-gray-600 text-sm md:text-[25px] max-w-xl leading-relaxed"
        >
          where creativity meets code. Let's build amazing web experiences together.
        </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Home;
