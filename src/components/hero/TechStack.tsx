
"use client";

import { motion } from "framer-motion";
import { Code2, Database, FileCode2, Server } from "lucide-react";

const technologies = [
  {
    name: "React",
    icon: Code2,
  },
  {
    name: "Next.js",
    icon: Code2,
  },
  {
    name: "TypeScript",
    icon: FileCode2,
  },
  {
    name: "Node.js",
    icon: Server,
  },
];

export default function TechStack() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="mt-8 flex flex-wrap gap-3"
    >
      {technologies.map((tech, index) => {
        const Icon = tech.icon;

        return (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            whileHover={{ y: -4 }}
            className="inline-flex cursor-default items-center gap-2.5 rounded-full border border-gray-200 bg-white/70 px-4 py-3 shadow-sm transition-colors hover:border-violet-400 hover:bg-violet-50 dark:border-white/10 dark:bg-white/[0.05] dark:hover:border-violet-500/50 dark:hover:bg-violet-500/10"
          >
            <Icon
              size={19}
              className="text-violet-600 dark:text-violet-400"
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
