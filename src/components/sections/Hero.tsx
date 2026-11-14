
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mouse } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";

export default function Hero() {
  const particles = useMemo(
    () =>
      Array.from({ length: 90 }, (_, i) => ({
        id: i,
        left: `${(i * 73.79) % 100}%`,
        top: `${(i * 47.31) % 100}%`,
        size: 1 + ((i * 13) % 4),
        duration: 3 + (i % 5),
        delay: (i % 10) * 0.4,
        color: ["#8b5cf6", "#ec4899", "#3b82f6"][
          i % 3
        ],
      })),
    []
  );

  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100svh-72px)] items-center justify-center overflow-hidden bg-[#faf9ff] px-5 py-24 text-center dark:bg-[#090817]"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-purple-500/10 blur-[110px] dark:bg-purple-600/20" />
        <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-pink-500/10 blur-[110px] dark:bg-pink-600/15" />

        {/* Animated particles */}
        {particles.map((particle) => (
          <motion.span
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              boxShadow: `0 0 8px ${particle.color}`,
            }}
            animate={{
              opacity: [0.15, 0.8, 0.15],
              y: [0, -18, 0],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-purple-600 dark:text-purple-400"
        >
          Full Stack Developer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl font-extrabold leading-[1.1] tracking-tight text-gray-950 sm:text-5xl lg:text-7xl dark:text-white"
        >
          Building Digital
          <br />
          <span className="bg-linear-to-r from-violet-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
            Experiences
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-gray-600 sm:text-xl dark:text-gray-400"
        >
          Hi, I&apos;m 
          <span className="text-violet-500 dark:text-violet-200 font-medium"> Susanta Samanta</span>
          . I build modern,
          responsive, and scalable web applications using
          React, Next.js, TypeScript, and Node.js.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-violet-600 to-purple-600 px-8 py-4 font-semibold text-white shadow-lg shadow-purple-500/25 transition hover:-translate-y-1 hover:shadow-purple-500/40"
          >
            ✦ View Projects
            <ArrowUpRight size={18} />
          </Link>

          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white/60 px-8 py-4 font-semibold text-gray-900 backdrop-blur-sm transition hover:-translate-y-1 hover:bg-gray-100 dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
          >
            Contact Me
            <ArrowUpRight size={18} />
          </Link>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-9 flex justify-center gap-6"
        >
          <a
            href="https://github.com/SusantaSamanta"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-500 transition hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
          >
            {/* <Github size={22} /> */}gfh
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-500 transition hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
          >
            {/* <Linkedin size={22} /> */} in
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-gray-500 dark:text-gray-500"
        aria-label="Scroll to About section"
      >
        <Mouse size={30} strokeWidth={1.3} />
        <span className="text-xs tracking-[0.25em]">
          SCROLL
        </span>
      </motion.a>
    </section>
  );
}
