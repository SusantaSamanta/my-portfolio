
"use client";

import { motion } from "framer-motion";
import {
    Code2,
    Folder,
    GitBranch,
    Terminal,
    X,
    Plus,
} from "lucide-react";



const codeLines = [
    <>
        <span className="text-purple-400">const</span>{" "}
        <span className="text-cyan-300">developer</span>{" "}
        <span className="text-gray-300">= {"{"}</span>
    </>,
    <>
        <span className="text-sky-300 ml-4">name</span>
        <span className="text-gray-400">:</span>{" "}
        <span className="text-yellow-300">"Susanta Samanta"</span>
        <span className="text-gray-300">,</span>
    </>,
    <>
        <span className="text-sky-300 ml-4">role</span>
        <span className="text-gray-400">:</span>{" "}
        <span className="text-yellow-300">"Full Stack Developer"</span>
        <span className="text-gray-300">,</span>
    </>,
    <>
        <span className="text-sky-300 ml-4">tech</span>
        <span className="text-gray-400">:</span>{" "}
        <span className="text-gray-300">[</span>
        <span className="text-green-300">"React"</span><span className="text-gray-300">,</span>{" "}
        <span className="text-green-300">"Next.js"</span><span className="text-gray-300">,</span>{" "}
        <span className="text-green-300">"Node.js"</span><span className="text-gray-300">,</span>{" "}
        <span className="text-green-300 hidden sm:inline">"TypeScript"</span>
        <span className="text-gray-300">],</span>
    </>,
    <>
        <span className="text-sky-300 ml-4">focus</span>
        <span className="text-gray-400">:</span>{" "}
        <span className="text-yellow-300">
            "Building useful products"
        </span><span className="text-gray-300">,</span>
    </>,
    <>
        <span className="text-sky-300 ml-4">learning</span>
        <span className="text-gray-400">:</span>{" "}
        <span className="text-gray-300">[</span>
        <span className="text-green-300">"Docker"</span><span className="text-gray-300">,</span>{" "}
        <span className="text-green-300">"AI"</span><span className="text-gray-300">,</span>{" "}
        <span className="text-green-300">"System Design"</span>
        <span className="text-gray-300">],</span>
    </>,
    <>
        <span className="text-sky-300 ml-4">available</span>
        <span className="text-gray-400">:</span>{" "}
        <span className="text-pink-400">true</span><span className="text-gray-300">,</span>
    </>,
    <span className="text-gray-300">{"};"}</span>,
];

export default function CodeEditor() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.95, filter: "blur(1px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)"  }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 lg:mt-0 relative overflow-hidden rounded-2xl border border-violet-400/50 bg-[#100e20]/95 shadow-[0_0_35px_rgba(139,92,246,0.18)] backdrop-blur-xl"
        >
            {/* Window header */}
            <div className="flex h-11 pt-2 items-center border-b border-white/10 bg-white/3 px-4">

                {/* Window controls */}
                <div className="flex items-center gap-2 mb-2">
                    <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                    <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                    <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                </div>

                {/* Active tab */}
                <div className="flex h-8 items-center gap-2 rounded-t-xl bg-[#27233f] px-3 ml-4">
                    <span className="rounded bg-violet-500 px-1 py-0.5 text-[10px] font-bold text-white">TS</span>
                    <span className="text-xs font-medium text-gray-200 sm:text-sm">profile.ts</span>
                    <X size={14} className="ml-3 text-gray-400" />
                </div>

                <Plus size={16} className="ml-2 text-gray-400" />
            </div>

            <div className="flex min-h-54 w-full">

                {/* Editor sidebar */}
                <div className="flex w-12 shrink-0 flex-col items-center gap-6 border-r border-white/10 bg-white/2 py-5">
                    <Code2 size={28} className="text-violet-400 bg-gray-100/10 px-1 rounded-sm" />
                    <Folder size={20} className="text-gray-500" />
                    <GitBranch size={20} className="text-gray-500" />
                    <Terminal size={20} className="text-gray-500" />
                </div>

                {/* Code area */}
                <div className="w-full flex-1 px-2 py-3 sm:px-3">
                    <pre className="overflow-x-auto font-mono text-[11px] leading-5.5 sm:text-[13px]">
                        {codeLines.map((line, index) => (
                            <div
                                key={index}
                                className={`w-full flex items-center gap-2 sm:gap-5 px-2 ${index === 7
                                        ? "rounded bg-violet-500/10"
                                        : ""
                                    }`}
                            >
                                <span className="w-2 sm:w-4 select-none text-right text-gray-600">
                                    {index + 1}
                                </span>

                                <span>{line}</span> 

                                {index === 7 && (
                                    <motion.span
                                        animate={{ opacity: [1, 0, 1] }}
                                        transition={{
                                            duration: 1,
                                            repeat: Infinity,
                                        }}
                                        className="h-4 w-0.5 bg-violet-400"
                                    />
                                )}
                            </div>
                        ))}
                    </pre>
                </div>
            </div>

            {/* Bottom status bar */}
            <div className="flex items-center justify-between border-t border-white/10 bg-violet-500/6 px-4 py-2 text-[10px] text-gray-400 sm:text-xs">
                <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                        <GitBranch size={12} />
                        main
                    </span>
                    <span>TypeScript</span>
                </div>

                <span>UTF-8 · LF</span>
            </div>
        </motion.div>
    );
}
