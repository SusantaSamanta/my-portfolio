
"use client";

import { motion } from "framer-motion";
import { Lightbulb, Code2, BriefcaseBusiness } from "lucide-react";

const strengths = [
    {
        title: "Problem Solving",
        icon: Lightbulb,
    },
    {
        title: "Clean Code",
        icon: Code2,
    },
    {
        title: "Internship Experience",
        icon: BriefcaseBusiness,
    },
];

export default function DevelopmentStrengths() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15, filter: "blur(2px)"}}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-5 flex flex-wrap items-center gap-2"
        >
            {strengths.map((item, index) => {
                const Icon = item.icon;

                return (
                    <div key={item.title} className="flex items-center gap-2">
                        {/* Strength pill */}
                        <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-500/5 px-4 py-2.5 transition-all shadow-sm duration-300 hover:border-blue-300 hover:bg-blue-500/10 dark:border-blue-400/10 dark:bg-blue-500/10 dark:hover:border-blue-400/30">
                            <Icon
                                size={17}
                                className="text-blue-600 dark:text-blue-400"
                            />

                            <span className="whitespace-nowrap text-xs font-semibold text-gray-800 dark:text-gray-200 sm:text-sm">
                                {item.title}
                            </span>
                        </div>

                        {/* Separator */}
                        {index !== strengths.length - 1 && (
                            <div className="mx-1 hidden h-5 w-px bg-blue-300/70 dark:bg-white/20 sm:block" />
                        )}
                    </div>
                );
            })}
        </motion.div>
    );
}
