
"use client";

import { motion } from "framer-motion";
import {
    ArrowUpRight,
    Code2,
    GraduationCap,
    Layers3,
} from "lucide-react";

const stats = [
    {
        value: "04+",
        label: "Projects",
        icon: Layers3,
        color: "violet",
        border: "hover:border-violet-500/70",
        glow: "hover:shadow-violet-500/20",
        iconColor: "text-violet-400",
    },
    {
        value: "MERN+",
        label: "Tech Stack",
        icon: Code2,
        color: "cyan",
        border: "hover:border-cyan-400/70",
        glow: "hover:shadow-cyan-500/20",
        iconColor: "text-cyan-400",
    },
    {
        value: "MCA",
        label: "Education",
        icon: GraduationCap,
        color: "pink",
        border: "hover:border-pink-500/70",
        glow: "hover:shadow-pink-500/20",
        iconColor: "text-pink-400",
    },
];

export default function StatsCards() {
    return (
        <div className="mt-8 lg:mt-6 grid grid-cols-3 gap-3 sm:gap-4">
            {stats.map((stat, index) => {
                const Icon = stat.icon;

                return (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 25, filter: "blur(2px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{
                            duration: 0.5,
                            delay: 0.5 + index * 0.15,
                        }}
                        // whileHover={{ y: -6, scale: 1.02 }}
                        className={`group relative overflow-hidden rounded-2xl border border-gray-200 bg-white/70 p-3 shadow-md transition-all duration-300 hover:shadow-xl dark:border-white/10 dark:bg-[#171329]/80 sm:p-4 ${stat.border} ${stat.glow}`}
                    >
                        {/* Background glow */}
                        <div
                            className={`pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full blur-3xl opacity-20 transition-opacity group-hover:opacity-30 ${stat.color === "violet"
                                ? "bg-violet-500"
                                : stat.color === "cyan"
                                    ? "bg-cyan-400"
                                    : "bg-pink-500"
                                }`}
                        />

                        {/* Icon and arrow
                        <div className="relative hidden flex items-center justify-between">
                            <Icon
                                size={22}
                                className={stat.iconColor}
                            />

                            <ArrowUpRight
                                size={17}
                                className="text-gray-400 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                            />
                        </div> */}

                        {/* Value */}
                        <h3 className="relative text-xl font-bold tracking-tight text-gray-950 dark:text-white sm:text-2xl flex gap-2 items-center">
                            <Icon
                                size={28}
                                className={stat.iconColor}
                            />
                            <span className="hidden sm:block">{stat.value}</span>
                            <ArrowUpRight
                                size={17}
                                className="text-gray-400 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 absolute right-0"
                            />
                        </h3>
                        {/* Label */}
                        <span className="block sm:hidden font-bold text-gray-950 dark:text-white sm:text-2xl">{stat.value}</span>
                        <p className="relative sm:ml-9 text-xs font-medium text-gray-500 dark:text-gray-400">
                            {stat.label}
                        </p>

                    </motion.div>
                );
            })}
        </div>
    );
}
