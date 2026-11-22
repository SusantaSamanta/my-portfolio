
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Code2, Download, Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {


  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  useEffect(() => {
    const updateActiveLink = () => {
      setActiveLink(window.location.hash || "#home");
    };
    updateActiveLink();
    window.addEventListener("hashchange", updateActiveLink);
    return () => {
      window.removeEventListener("hashchange", updateActiveLink);
    };
  }, []);



  const [isHidden, setIsHidden] = useState(false);
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let scrollDownDistance = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;

      if (isOpen || isNavigating.current || currentScrollY <= 300) {
        setIsHidden(false);
        scrollDownDistance = 0;
        lastScrollY = currentScrollY;
        return;
      }

      if (delta > 0) {
        scrollDownDistance += delta;

        if (scrollDownDistance >= 300) {
          setIsHidden(true);
        }
      } else if (delta < 0) {
        scrollDownDistance = 0;

        if (delta < -6) {
          setIsHidden(false);
        }
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  const isNavigating = useRef(true);

  setTimeout(() => {
    isNavigating.current = false;
  }, 800);


  return (
    <header className={`fixed w-full top-0 z-50 border-b border-gray-200/80 bg-white/85 backdrop-blur-xl  transition-transform duration-300 dark:border-white/10 dark:bg-[#090817]/65  ${isHidden ? "-translate-y-full" : "translate-y-0"
      }`}>
      <nav className="mx-auto flex h-16 max-w-360 items-center justify-between px-5 md:px-8">

        {/* Logo */}
        <Link
          href="#home"
          onClick={() => { setIsOpen(false); setActiveLink("#home") }}
          className="flex shrink-0 items-center gap-2"
        >
          <Code2
            size={34}
            strokeWidth={2.5}
            className="text-blue-600 dark:text-blue-500"
          />

          <span className="text-xl font-bold tracking-tight text-gray-950 dark:text-white">
            Susanta <span className="text-blue-500">Samanta</span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-2 lg:flex">
          {navLinks.map((link) => {
            const isActive = activeLink === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.href)
                  isNavigating.current = true;
                  setTimeout(() => {
                    isNavigating.current = false;
                  }, 800);
                }}
                className={`rounded-full px-3 py-1.5 text-sm font-medium transition-all duration-300 ${isActive
                  ? "border border-blue-500/10 bg-blue-500/10 text-blue-700 dark:border-blue-400/20 dark:bg-blue-500/15 dark:text-blue-400"
                  : "border border-transparent text-gray-600 hover:bg-gray-400/10 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-white/5 dark:hover:text-blue-400"
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3">

          <ThemeToggle />

          <a
            href="/resume.pdf"
            download
            className="hidden items-center gap-2 rounded-xl bg-linear-to-r from-blue-600 to-purple-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 transition hover:-translate-y-0.5 hover:shadow-purple-500/40 sm:inline-flex"
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
            {navLinks.map((link) => {
              const isActive = activeLink === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActiveLink(link.href);
                    setIsOpen(false);
                  }}
                  className={`rounded-lg px-4 py-3 text-sm font-medium transition-all duration-300 ${isActive
                    ? "border border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400"
                    : "border border-transparent text-gray-700 hover:bg-blue-500/10 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <a
              href="/resume.pdf"
              download
              className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white"
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
