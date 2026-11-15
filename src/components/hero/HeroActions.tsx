
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Rocket } from "lucide-react";
import Link from "next/link";

export default function HeroActions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(2px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="mt-8 flex flex-wrap items-center gap-4"
    >
      {/* View Projects */}
      <Link
        href="#projects"
        className="group inline-flex items-center justify-center gap-3 rounded-xl bg-linear-to-r from-violet-500 to-purple-500 px-7 py-3 font-semibold text-white shadow-lg shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/30"
      >
        <Rocket
          size={20}
          className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:-rotate-12"
        />

        <span>View Projects</span>

        <ArrowRight
          size={20}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>

      {/* Contact Me */}
      <Link
        href="#contact"
        className="group inline-flex items-center justify-center gap-3 rounded-xl border border-violet-500 bg-transparent px-7 py-3 font-semibold text-gray-900 transition-all duration-300 hover:-translate-y-1 hover:bg-violet-500/10 dark:text-white dark:hover:bg-violet-500/10"
      >
        <Mail
          size={20}
          className="transition-transform duration-300 group-hover:scale-110"
        />

        <span>Contact Me</span>
      </Link>
    </motion.div>
  );
}
