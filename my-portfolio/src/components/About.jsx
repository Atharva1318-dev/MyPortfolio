import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Code2, Database, Globe, Palette, Trophy, Users } from "lucide-react"

export default function About({ darkMode }) {

    const meRef = useRef(null);

    useGSAP(() => {
        gsap.to(meRef.current, {
            y: -9,
            duration: 2,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut",
        });
    }, []);

    return (
        <div id="about" className={darkMode ? "text-white" : "text-gray-900"}>
            <h2 className="text-green-400 text-center text-2xl md:text-3xl font-bold mb-3">
                About Me
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-green-500 to-indigo-900 mx-auto mb-6"></div>
            <div className="container mx-auto px-6 py-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Profile Image */}
                    <div className="flex justify-center lg:justify-start">
                        <div className="relative">
                            <div
                                className={`w-45 h-45 md:w-85 md:h-85 bg-gradient-to-br ${darkMode
                                    ? "from-gray-700 to-gray-800"
                                    : "from-gray-200 to-gray-300"
                                    } transform rotate-45 rounded-3xl overflow-hidden`}
                                ref={meRef}
                            >
                                <div className="w-full h-full transform -rotate-45 scale-150 translate-y-8">
                                    <img
                                        src="/me.jpeg"
                                        alt="John Dev Profile"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="absolute -bottom-4 -right-4 bg-green-500 p-3 rounded-lg">
                                <div className="text-gray-900 font-mono text-lg">{"</>"}</div>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="self-start">
                        <div className="space-y-3 text-gray-300">
                            <div className={`backdrop-blur-sm rounded-2xl p-4 border transition-colors shadow-[0_3px_6px_rgba(0,0,0,0.1)] ${darkMode
                                ? "bg-gray-800/50 border-gray-700/40 text-gray-300"
                                : "bg-[linear-gradient(-135deg,_rgba(255,255,255,0.8),_rgba(226,232,240,0.8))] border-gray-200/40 text-gray-700"
                                }`}
                            >
                                <p className="text-md leading-relaxed">
                                    Hi, I'm <span className="text-green-400 font-semibold text-lg">Atharva Pramod Jadhav</span>, a second-year
                                    Computer Engineering student at{" "}
                                    <span className="text-blue-400 font-medium text-lg">Thadomal Shahani Engineering College</span>, Bandra,
                                    Mumbai (Class of '27).
                                </p>
                            </div>

                            {/* Skills & Interests */}
                            <div className="grid md:grid-cols-2 gap-3">
                                <div className={`${darkMode ? "bg-slate-800/30 border-slate-700/30" : "bg-[linear-gradient(-135deg,_rgba(255,255,255,0.8),_rgba(226,232,240,0.8))] border-gray-200/40 text-gray-700"} shadow-[0_3px_6px_rgba(0,0,0,0.1)] backdrop-blur-sm rounded-xl p-5 border`}>
                                    <h3 className="text-green-400 font-semibold mb-3 flex items-center gap-2">
                                        <Code2 size={20} />
                                        Technical Skills
                                    </h3>
                                    <p className="text-sm leading-relaxed">
                                        I enjoy building full-stack web applications and writing clean, readable code. I've explored the{" "}
                                        <span className="text-yellow-400 font-medium">MERN stack</span>—from{" "}
                                        <span className="text-blue-400">React</span> frontends to{" "}
                                        <span className="text-green-400">Node.js</span> backends and{" "}
                                        <span className="text-purple-400">MongoDB</span> databases.
                                    </p>
                                </div>

                                <div className={`${darkMode ? "bg-slate-800/30  border-slate-700/30" : "bg-[linear-gradient(-135deg,_rgba(255,255,255,0.8),_rgba(226,232,240,0.8))] border-gray-200/40 text-gray-700"} shadow-[0_3px_6px_rgba(0,0,0,0.1)] backdrop-blur-sm rounded-xl p-5 border`}>
                                    <h3 className="text-blue-400 font-semibold mb-3 flex items-center gap-2">
                                        <Trophy size={20} />
                                        Experience
                                    </h3>
                                    <p className="text-sm leading-relaxed">
                                        I'm always eager to pick up new frameworks and tools. While I haven't done a formal internship yet,
                                        I've honed my teamwork skills through hackathons and group projects.
                                    </p>
                                </div>
                            </div>

                            {/* Personal Interests */}
                            <div className={`${darkMode ? "bg-gradient-to-r from-slate-800/40 to-purple-800/20 border-slate-700/40" : "bg-[linear-gradient(-135deg,_rgba(255,255,255,0.8),_rgba(226,232,240,0.8))] border-gray-200/40 text-gray-700"} backdrop-blur-sm rounded-2xl p-4 border `}>
                                <h3 className="text-purple-400 font-semibold mb-4 flex items-center gap-2">
                                    <Palette size={20} />
                                    Beyond Coding
                                </h3>
                                <p className="leading-relaxed">
                                    Outside of coding, I'm passionate about{" "}
                                    <span className="text-pink-400 font-medium">portrait sketching</span>, love playing{" "}
                                    <span className="text-green-400 font-medium">cricket</span>, and keep active by hitting the gym
                                    as and when time permits.
                                </p>
                            </div>

                            {/* Goals */}
                            <div className={`${darkMode ? "bg-slate-800/50 border-slate-700/50" : "bg-[linear-gradient(-135deg,_rgba(255,255,255,0.8),_rgba(226,232,240,0.8))] border-gray-200/40 text-gray-700"} backdrop-blur-sm rounded-2xl p-4 border`}>
                                <h3 className="text-yellow-400 font-semibold mb-4 flex items-center gap-2">
                                    <Globe size={20} />
                                    My Goal
                                </h3>
                                <p className="leading-relaxed">
                                    My goal is to become a versatile full-stack developer who writes robust, maintainable code—and to
                                    tackle new challenges with <span className="text-green-400 font-medium">curiosity</span> and{" "}
                                    <span className="text-blue-400 font-medium">enthusiasm</span>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
