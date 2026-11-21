
"use client";

import { motion } from "framer-motion";

const values = [
  {
    label: "(a)",
    title: "Understand before building.",
    description:
      "I prefer understanding the requirements and existing code before jumping into implementation. A good solution starts with understanding the actual problem.",
  },
  {
    label: "(b)",
    title: "Keep things practical.",
    description:
      "I believe good code doesn't need unnecessary complexity. I value solutions that are simple, readable, and easy to maintain.",
  },
  {
    label: "(c)",
    title: "Think beyond the implementation.",
    description:
      "Making a feature work is only one part of development. I also care about performance, usability, edge cases, and the overall application.",
  },
  {
    label: "(d)",
    title: "Take ownership of the details.",
    description:
      "I believe in investigating issues properly, communicating clearly, and following a task through instead of stopping when the code simply works.",
  },
];

export default function AboutB() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-y border-gray-200 bg-[#f8faff] py-16 dark:border-white/10 dark:bg-[#090909] md:py-20"
    >
      {/* Subtle dotted background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.045] dark:opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(#64748b 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative mx-auto max-w-360 px-5 md:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            <span className="mr-3">—</span> About
          </p>

          <h2 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-gray-950 dark:text-white md:text-6xl">
            Hi, I'm Susanta.{" "}
            <span className="text-gray-400 dark:text-gray-600">
              I like understanding how things work.
            </span>
          </h2>
        </motion.div>

        {/* Story and Experience */}
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-lg"
          >
            <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              <span className="mr-2">01</span> Story
            </p>

            <div className="space-y-4 text-sm leading-7 text-gray-600 dark:text-gray-400">
              <p>
                I'm a developer who enjoys exploring problems,
                understanding how different parts of an application
                connect, and figuring out how to make things work better.
              </p>

              <p>
                I don't believe development is just about writing code
                or adding new features. It's also about understanding
                the existing system, making thoughtful decisions, and
                building things that remain useful beyond the first release.
              </p>

              <p>
                I enjoy getting into the details, learning from
                challenges, and finding practical ways to turn ideas
                into working solutions.
              </p>
            </div>

            <p className="mt-7 text-sm font-medium italic text-blue-600 dark:text-blue-400">
              — Always curious, always improving.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              <span className="mr-2">02</span> Experience
            </p>

            <div className="border-l border-blue-300 pl-6 dark:border-blue-500/40">
              <div className="relative">
                <span className="absolute -left-7.25 top-1.5 h-2.5 w-2.5 rounded-full border-2 border-blue-500 bg-[#f8faff] dark:bg-[#090909]" />

                <p className="mb-3 text-xs font-medium uppercase tracking-wider text-gray-500">
                  2026 · Remote
                </p>

                <h3 className="text-xl font-semibold text-gray-950 dark:text-white">
                  Web Developer Intern at{" "}
                  <span className="text-blue-600 dark:text-blue-400">
                    TheCodersHub
                  </span>
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400">
                  My internship gave me the opportunity to work with
                  real development workflows, collaborate with other
                  developers, and understand how an existing application
                  is structured.
                </p>

                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400">
                  A significant part of my learning has been understanding
                  codebases, exploring how features communicate, working
                  on assigned tasks, and improving functionality without
                  unnecessarily changing existing code.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* What I Care About */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            <span className="mr-2">03</span> What I Care About
          </p>

          <div className="grid overflow-hidden rounded-xl border border-gray-200 bg-white/50 dark:border-white/10 dark:bg-white/2 sm:grid-cols-2">
            {values.map((item, index) => (
              <div
                key={item.label}
                className={`p-6 md:p-8 ${
                  index < 2 ? "border-b border-gray-200 dark:border-white/10" : ""
                } ${
                  index % 2 === 0
                    ? "sm:border-r sm:border-gray-200 dark:sm:border-white/10"
                    : ""
                }`}
              >
                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                  {item.label}
                </span>

                <h3 className="mt-4 text-lg font-semibold text-gray-950 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
