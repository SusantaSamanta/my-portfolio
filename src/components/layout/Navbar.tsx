
"use client";

import { useState } from "react";
import Link from "next/link";
import { Code2, Download, Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/85 backdrop-blur-xl dark:border-white/10 dark:bg-[#090817]/65">
      <nav className="mx-auto flex h-16 max-w-360 items-center justify-between px-5 md:px-8">

        {/* Logo */}
        <Link
          href="#home"
          onClick={() => setIsOpen(false)}
          className="flex shrink-0 items-center gap-2"
        >
          <Code2
            size={34}
            strokeWidth={2.5}
            className="text-violet-600 dark:text-violet-500"
          />

          <span className="text-xl font-bold tracking-tight text-gray-950 dark:text-white">
            Susanta <span className="text-violet-500">Samanta</span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative py- text-sm font-medium transition-colors
                ${
                  link.name === "Home"
                    ? "text-violet-600 dark:text-violet-400"
                    : "text-gray-600 hover:text-violet-600 dark:text-gray-300 dark:hover:text-violet-400"
                }
              `}
            >
              {link.name}

              {link.name === "Home" && (
                <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-violet-500" />
              )}
            </Link>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3">

          <ThemeToggle />

          <a
            href="/resume.pdf"
            download
            className="hidden items-center gap-2 rounded-xl bg-linear-to-r from-violet-600 to-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 transition hover:-translate-y-0.5 hover:shadow-purple-500/40 sm:inline-flex"
          >
            <Download size={17} />
            Resume
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-800 dark:border-white/10 dark:text-white lg:hidden"
          >
            {isOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </nav>

      {/* Mobile navigation */}
      {isOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-[#090817] lg:hidden"
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-violet-500/10 hover:text-violet-600 dark:text-gray-300 dark:hover:text-violet-400"
              >
                {link.name}
              </Link>
            ))}

            <a
              href="/resume.pdf"
              download
              className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-violet-600 px-4 py-3 font-semibold text-white"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
