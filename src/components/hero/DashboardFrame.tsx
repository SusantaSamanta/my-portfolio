
"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import CodeEditor from "./CodeEditor";
import StatsCards from "./StatsCards";
import CurrentlyExploring from "./CurrentlyExploring";

export default function DashboardFrame({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="">
            <div className="relative mx-auto w-full max-w-162.5">

                {/* Background panels */}
                <motion.div
                    initial={{ opacity: 0, rotate: -8, scale: 0.9, filter: "blur(2px)" }}
                    animate={{ opacity: 1, rotate: -8, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-5 rounded-4xl border border-violet-500/60 bg-linear-to-br from-violet-600/20 to-purple-900/10 shadow-[0_0_50px_rgba(139,92,246,0.15)]"
                />

                <motion.div
                    initial={{ opacity: 0, rotate: 7, scale: 0.9, filter: "blur(2px)" }}
                    animate={{ opacity: 1, rotate: 7, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                    className="absolute inset-5 rounded-4xl border border-purple-500/40 bg-purple-500/5"
                />

                {/* Dashboard content */}
                <div className="relative z-10">

                    {/* Availability badge */}
                    <motion.div
                        initial={{ opacity: 0, x: 20, filter: "blur(2px)" }}
                        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                        className="absolute -right-2 -top-6 z-20 flex items-center gap-3 rounded-2xl border border-violet-400/40 bg-white/90 px-4 py-3 shadow-[0_0_25px_rgba(139,92,246,0.15)] backdrop-blur-xl dark:bg-[#171329]/95 sm:-right-5 sm:-top-5"
                    >
                        <span className="relative flex h-3 w-3">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
                            <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
                        </span>

                        <div>
                            <p className="text-xs font-semibold text-gray-900 dark:text-white">
                                Available for
                            </p>
                            <p className="text-xs font-semibold text-gray-900 dark:text-white">
                                Opportunities
                            </p>
                        </div>
                    </motion.div>

                    {/* Child components will go here */}
                    <div className="relative z-10">
                        <CodeEditor />
                    </div>
                </div>
            </div>
            <StatsCards />
            <CurrentlyExploring />

        </div>
    );
}
