"use client"

import Introduction from "@/components/hero/Introduction";
import TechStack from "@/components/hero/TechStack";
import HeroActions from "@/components/hero/HeroActions";
import SocialLinks from "@/components/hero/SocialLinks";
import DashboardFrame from "@/components/hero/DashboardFrame";
import DevelopmentStrengths from "@/components/hero/DevelopmentStrengths";
import { motion } from "framer-motion";
import { Mouse } from "lucide-react";

const HomePage = () => {
    return (
        <>
            <section
                id="home"
                className="mx-auto grid min-h-[calc(100svh-76px)] max-w-360 items-center gap-10 px-4 py-12 lg:grid-cols-[5fr_4fr] lg:px-8" // lg:grid-cols-2
            >
                {/* Left side */}
                <div className="w-full lg:pb- relative">
                    <div className="absolute left-1 top-1/6 h-40 w-40 rounded-full bg-purple-500/40 blur-[110px] dark:bg-purple-600/30" />
                    <div className="absolute top-40 -right-8 md:-right-1 lg:-right-8 h-40 w-40 rounded-full bg-pink-500/30 blur-[110px] dark:bg-pink-600/25" />

                    <Introduction />
                    <DevelopmentStrengths />
                    <TechStack />
                    <HeroActions />
                    <SocialLinks />
                </div>

                {/* Right side */}
                <DashboardFrame>
                    <div className="min-h-87.5 rounded-2xl border border-blue-500/40 bg-white/80 shadow-2xl backdrop-blur-xl dark:bg-[#100d22]/90 sm:min-h-105" />
                </DashboardFrame>
            </section>


            {/* Scroll indicator */}
            <motion.a
                href="#about"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-gray-500 dark:text-gray-500"
                aria-label="Scroll to About section"
            >
                <Mouse size={25} strokeWidth={1.3} />
                <span className="text-xs tracking-[0.25em]">
                    SCROLL
                </span>
            </motion.a>

        </>
    )
}

export default HomePage