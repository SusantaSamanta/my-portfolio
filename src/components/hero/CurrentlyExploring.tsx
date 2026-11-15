
"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Container,
  Network,
  Server,
  Sparkles,
} from "lucide-react";
import { FaDocker } from "react-icons/fa6";

const learningTopics = [
  {
    name: "Docker",
    icon: FaDocker,
    color: "text-sky-400",
    bg: "bg-sky-400/10",
  },
  {
    name: "System Design",
    icon: Network,
    color: "text-violet-400",
    bg: "bg-violet-400/10",
  },
  {
    name: "AI / ML",
    icon: BrainCircuit,
    color: "text-pink-400",
    bg: "bg-pink-400/10",
  },
//   {
//     name: "Kubernetes",
//     icon: Server,
//     color: "text-violet-400",
//     bg: "bg-violet-400/10",
//   },
];

export default function CurrentlyExploring() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(2px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)"  }}
      transition={{ duration: 0.7, delay: 0.8 }}
      className="relative overflow-hidden rounded-2xl border border-violet-500/30 bg-white/70 mt-6 p-4 shadow-lg dark:bg-[#171329]/80"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-violet-500/10 blur-3xl" />

      {/* Header */}
      <div className="relative mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <Sparkles
            size={20}
            className="text-violet-500"
          />

          <h3 className="font-semibold text-gray-900 dark:text-white">
            Currently Exploring
          </h3>
        </div>

        <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-600 dark:text-violet-400">
          Learning
        </span>
      </div>

      {/* Learning topics */}
      <div className="relative flex flex-wrap gap-3">
        {learningTopics.map((topic, index) => {
          const Icon = topic.icon;

          return (
            <motion.div
              key={topic.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + index * 0.1 }}
              whileHover={{ y: -3 }}
              className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white/70 p-2 transition-colors hover:border-violet-400 dark:border-white/10 dark:bg-white/4 dark:hover:border-violet-500/50"
            >
              <span className={`rounded-lg p-1.5 ${topic.bg}`}>
                <Icon size={17} className={topic.color} />
              </span>

              <span className="text-xs font-medium text-gray-700 dark:text-gray-300 sm:text-sm">
                {topic.name}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="relative mt- flex items-center gap-2 border-0 border-gray-200 pt-3 dark:border-white/10">
        <span className="h-2 w-2 rounded-full bg-green-500" />

        <p className="text-xs text-gray-500 dark:text-gray-400">
          Always learning, always building.
        </p>
      </div>
    </motion.div>
  );
}
