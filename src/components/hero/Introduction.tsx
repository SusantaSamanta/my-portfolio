
"use client";

import { motion } from "framer-motion";

export default function Introduction() {
  return (
    <div className="flex flex-col items-start">

      {/* Developer badge */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 inline-flex items-center gap-3 rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2.5"
      >
        <span className="h-2.5 w-2.5 rounded-full bg-violet-500 shadow-[0_0_10px_#8b5cf6]" />

        <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
          Full Stack Developer
        </span>
      </motion.div>

      {/* Main heading */}
      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="text-5xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl xl:text-[76px]"
      >
        <span className="block text-gray-950 dark:text-white">
          Hi, I’m
        </span>

        <span className="mt-1 block bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Susanta Samanta
        </span>
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-7 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg dark:text-gray-400"
      >
        I turn ideas into real, scalable and user-friendly
        web applications with modern technologies.
      </motion.p>

    </div>
  );
}
