
"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Code2,
  Lightbulb,
  UserRound,
} from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "MCA graduate from Adamas University.",
  },
  {
    icon: Code2,
    title: "Development",
    description: "Building full-stack applications with modern web technologies.",
  },
  {
    icon: Lightbulb,
    title: "Approach",
    description: "Focused on writing clean code and creating useful user experiences.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-24"
    >
      <div className="mx-auto max-w-360 px-5 md:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-violet-500" />
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">
              Get to know me
            </span>
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight text-gray-950 dark:text-white md:text-5xl">
            About <span className="text-violet-500">Me.</span>
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-8 text-gray-600 dark:text-gray-400">
            A developer who enjoys turning ideas into practical digital
            experiences.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-500/20 bg-violet-500/10 text-violet-600 dark:text-violet-400">
              <UserRound size={28} />
            </div>

            <h3 className="mb-5 text-2xl font-bold text-gray-950 dark:text-white">
              Hello! I'm Susanta Samanta
            </h3>

            <div className="space-y-4 text-base leading-8 text-gray-600 dark:text-gray-400">
              <p>
                I'm a Full Stack Developer with an MCA background and a
                passion for building modern web applications. I enjoy
                working across the frontend and backend to turn ideas
                into functional products.
              </p>

              <p>
                My primary stack includes React, Next.js, TypeScript,
                Node.js, and MongoDB. I also have experience working with
                REST APIs, authentication, databases, and deployment
                workflows through personal projects and internship work.
              </p>

              <p>
                I'm continuously learning, improving my problem-solving
                skills, and exploring technologies that help me build
                better applications.
              </p>
            </div>
          </motion.div>

          {/* Highlight Cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="group flex items-start gap-5 rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300  hover:border-violet-500/40 hover:shadow-xl hover:shadow-violet-500/5 dark:border-white/10 dark:bg-white/3 dark:hover:bg-white/5"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-600 transition-colors group-hover:bg-violet-500 group-hover:text-white dark:text-violet-400">
                    <Icon size={23} />
                  </div>

                  <div>
                    <h4 className="mb-2 font-bold text-gray-900 dark:text-white">
                      {item.title}
                    </h4>
                    <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
