"use client";

import { motion } from "framer-motion";

export default function Introduction() {
  return (
    <div className="flex flex-col items-start">


      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="group relative bottom-2 mb-5 inline-flex rounded-full p-px"
      >
        {/* Gradient border */}
        <span className="absolute inset-0 rounded-full bg-linear-to-r from-blue-600 via-fuchsia-500 to-indigo-500 opacity-80 blur-[1px] transition duration-500 group-hover:opacity-100 group-hover:blur-[3px]" />

        <div className="relative inline-flex items-center gap-3 rounded-full bg-white px-5 py-2.5 dark:bg-[#100d20]">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
            <span className="relative h-2.5 w-2.5 rounded-full bg-blue-500" />
          </span>

          <span className="text-xs font-bold tracking-[0.16em] text-gray-800 dark:text-blue-100 sm:text-sm">
            FULL STACK DEVELOPER
          </span>

          <span className="text-blue-500">✦</span>
        </div>
      </motion.div>


      {/* Main heading */}
      <motion.h1
        initial={{ opacity: 0, y: 25, filter: "blur(2px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="text-[40px] font-extrabold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl xl:text-[75px]"
      >
        <span className="block text-3xl sm:text-5xl text-gray-950 dark:text-white">
          Hi, I am
        </span>

        <span style={{ fontFamily: "Arial, sans-serif" }} className={` mt-1 block text-[100%] bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent`}>
          Susanta Samanta
        </span>
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20, filter: "blur(2px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-4 max-w-2xl font-semibold text-wrap text-base text-gray-600 sm:text-lg dark:text-gray-400"
      >
        I turn ideas into real, scalable and user-friendly
        web applications with modern technologies.
      </motion.p>

    </div>
  );
}
