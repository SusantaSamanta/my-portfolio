'use client';

import Navbar from "@/components/layout/Navbar";
import About from "@/components/sections/About";
import Home from "@/components/sections/Home";
import Skills from "../sections/Skills";
import { useEffect } from "react";

const HomePage = ({ scrollTo }: { scrollTo?: Pages }) => {

    useEffect(() => {
        const scrollToSection = () => {
            const hash = window.location.hash.slice(1);
            const target = hash || scrollTo;

            if (target) {
                const section = document.getElementById(target);
                if (section) {
                    section.scrollIntoView({ behavior: "smooth", block: "start" });
                    return;
                }
            }
            window.scrollTo({ top: 0, behavior: "smooth" });
        };

        scrollToSection();
        window.addEventListener("hashchange", scrollToSection);
        window.addEventListener("popstate", scrollToSection);

        return () => {
            window.removeEventListener("hashchange", scrollToSection);
            window.removeEventListener("popstate", scrollToSection);
        };
    }, [scrollTo]);

    return (
        <>
            <Navbar />

            <main className="min-h-screen bg-[#faf9ff] dark:bg-[#090817]">
                <div id="home" className="h-16.5" />
                <div>
                    <Home />
                </div>

                <div id="about">
                    <About />
                </div>

                <div id="skills">
                    <Skills />
                </div>

            </main>
        </>
    );
}

export default HomePage