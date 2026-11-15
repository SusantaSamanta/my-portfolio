"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";

const technologies = [
  {
    name: "React",
    icon: FaReact,
    color: "text-[#61DAFB]",
    border: "#61DAFB",
    glow: "bg-[#61DAFB]",
    hover: "hover:border-[#61DAFB]/40 hover:bg-[#61DAFB]/5",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "text-gray-900 dark:text-white",
    glow: "bg-gray-400",
    hover: "hover:border-gray-400/50 hover:bg-gray-400/5",
  },
  {
    name: "TypeScript",
    icon: BiLogoTypescript,
    color: "text-[#3178C6]",
    glow: "bg-[#3178C6]",
    hover: "hover:border-[#3178C6]/40 hover:bg-[#3178C6]/5",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "text-[#5FA04E]",
    glow: "bg-[#5FA04E]",
    hover: "hover:border-[#5FA04E]/40 hover:bg-[#5FA04E]/5",
  },
  {
    name: "Mongodb",
    icon: SiMongodb,
    color: "text-green-600",
    glow: "bg-green-600",
    hover: "hover:border-green-600/40 hover:bg-green-600/5",
  },
  {
    name: "PostgreSQL",
    icon: BiLogoPostgresql,
    color: "text-[#4169E1]",
    glow: "bg-[#4169E1]",
    hover: "hover:border-[#4169E1]/40 hover:bg-[#4169E1]/5",
  },
];

export default function TechStack() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="mt-6 flex flex-wrap gap-3"
    >
      {technologies.map((tech, index) => {
        const Icon = tech.icon;

        return (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            className={`group relative isolate inline-flex cursor-default items-center gap-2.5 overflow-hidden rounded-full border border-gray-200 bg-white/70 px-4 py-2.5 shadow-sm transition-all duration-300 dark:border-white/10 dark:bg-[#171329]/70 ${tech.hover}`}
          >
            {/* Background glow */}
            <div
              className={`pointer-events-none absolute -right-4 -top-5 -z-10 h-14 w-14 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-40 ${tech.glow}`}
            />

            <Icon
              size={19}
              className={`shrink-0 ${tech.color}`}
            />

            <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
              {tech.name}
            </span>
          </motion.div>
        );
      })}
    </motion.div>
  );
}