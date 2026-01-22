import React, { useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { FileText } from "lucide-react";

export default function Hero({ darkMode }) {
    const avatarRef = useRef(null);
    const leftGsap = useRef(null);
    const rightGsap = useRef(null);
    const glowRef = useRef(null);

    useGSAP(() => {
        // Avatar float
        gsap.from(avatarRef.current, {
            scale: 0.95,
            opacity: 0,
            duration: 1.5,
            ease: "power3.out"
        });

        // Continuous floating
        gsap.to(avatarRef.current, {
            y: -10,
            duration: 3,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut",
            delay: 1.5
        });

        // Content Fade Up
        gsap.from(leftGsap.current, {
            y: 40,
            opacity: 0,
            duration: 1.2,
            delay: 0.3,
            ease: "power3.out"
        });

        // Image Fade Up
        gsap.from(rightGsap.current, {
            y: 40,
            opacity: 0,
            duration: 1.2,
            delay: 0.5,
            ease: "power3.out"
        })
    }, []);

    return (
        <div id="home" className="min-h-screen overflow-x-hidden py-12  flex items-center justify-center">
            <div className="container mx-auto px-4 lg:px-5 py-4">
                <div className="grid lg:grid-cols-2 gap-y-10 gap-x-8 lg:gap-x-16 xl:gap-x-24 items-center">
                    {/* Content Section */}
                    <div ref={leftGsap} className="order-2 lg:order-1 space-y-6 pt-6">

                        {/* Name Block */}
                        <div className="flex flex-col leading-none select-none">
                            <h1 className={`text-5xl md:text-6xl lg:text-8xl 2xl:text-9xl font-bold tracking-tight ${darkMode ? "text-white" : "text-gray-900"}`}>
                                ATHARVA
                            </h1>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl 2xl:text-9xl font-bold tracking-tight bg-gradient-to-r from-green-400 via-blue-500 to-indigo-600 text-transparent bg-clip-text pb-2">
                                JADHAV
                            </h1>
                        </div>

                        {/* Typewriter Sub-heading */}
                        <div className={`text-xl sm:text-3xl xl:text-5xl font-semibold flex items-center justify-start lg:justify-start gap-3 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                            <span className={`${darkMode ? "text-green-400" : "text-green-600"}`}>&gt;</span>
                            <span className="min-h-[40px] sm:min-h-[48px]">
                                <Typewriter
                                    words={["Full Stack Dev", "Aspiring Software Engineer", "CSE @ TSEC"]}
                                    loop={Infinity}
                                    cursor
                                    cursorStyle="_"
                                    cursorColor={darkMode ? "#4ade80" : "#16a34a"}
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>
                        </div>

                        {/* Description */}
                        <div className={`text-base sm:text-md md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 ${darkMode ? "text-gray-400" : "text-slate-700"}`}>
                            Building scalable <span className={`font-medium ${darkMode ? "text-blue-400" : "text-blue-600"}`}>full-stack</span> web applications with <span className={`font-medium ${darkMode ? "text-blue-400" : "text-blue-600"}`}>React</span>, <span className={`font-medium ${darkMode ? "text-blue-400" : "text-blue-600"}`}>Next.js</span>, and <span className={`font-medium ${darkMode ? "text-blue-400" : "text-blue-600"}`}>Node.js</span>.
                            <br className="hidden md:block" />
                            Experienced with <span className={`font-medium ${darkMode ? "text-blue-400" : "text-blue-600"}`}>PostgreSQL</span>, <span className={`font-medium ${darkMode ? "text-blue-400" : "text-blue-600"}`}>MongoDB</span>, and integrating <span className={`font-medium ${darkMode ? "text-blue-400" : "text-blue-600"}`}>AI-powered solutions</span><span className={`font-medium ${darkMode ? "text-blue-400" : "text-blue-600"}`}></span> for smarter applications.
                        </div>

                        {/* Buttons */}
                        <div className="text-gray-100 flex flex-row items-center justify-start space-x-4 mt-2 md:mt-0">
                            <button className={`inline-flex flex-row items-center justify-evenly relative h-12 overflow-hidden rounded-xl p-[0.575px] focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 shadow-lg transition-shadow ${darkMode ? "shadow-green-900/20" : "shadow-green-200"}`}>
                                <span className={`absolute inset-[-1000%] animate-[spin_2s_linear_infinite] ${darkMode
                                    ? "bg-[conic-gradient(from_90deg_at_50%_50%,#4ade80_0%,#312e81_50%,#4ade80_100%)]"
                                    : "bg-[conic-gradient(from_90deg_at_50%_50%,#16a34a_0%,#6366f1_50%,#16a34a_100%)]"
                                    }`} />
                                <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl px-5 py-1 text-sm font-medium backdrop-blur-3xl transition-colors ${darkMode
                                    ? "bg-slate-950 text-white"
                                    : "bg-white text-slate-800"
                                    }`}>
                                    <a href="#projects">
                                        View My Work
                                    </a>
                                    <i className={`fa-solid fa-laptop-code ml-2.5 ${darkMode ? "text-green-400" : "text-slate-600"}`}></i>
                                </span>
                            </button>
                            <button type="button" className={`flex flex-row items-center h-12 px-5 py-2 rounded-xl border border-indigo-950/50 ${darkMode
                                ? "bg-slate-950 text-white hover:bg-slate-900"
                                : "bg-white text-slate-800 hover:bg-gray-50 border-gray-200"
                                } backdrop-blur-md transition-colors`}>
                                <a
                                    href="https://drive.google.com/file/d/1tU2n0ga693BwhbwuRAyAWrMLByAWfekX/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Resume
                                </a>
                                <FileText height={18} width={18} className={`ml-2 ${darkMode ? "text-green-400" : "text-slate-600"}`} />
                            </button>
                        </div>
                    </div>

                    {/* Profile Image Section */}
                    <div ref={rightGsap} className="order-1 lg:order-2 flex justify-center lg:justify-center items-center h-full">
                        <div className="relative">
                            <div
                                ref={glowRef}
                                className={`absolute inset-0 blur-[60px] rounded-full -z-10 ${darkMode ? "bg-indigo-600/25" : "bg-green-400/20"
                                    }`}
                            />
                            <div className="w-full h-full p-2" ref={avatarRef}>
                                <div className={`w-full h-full transform scale-112 drop-shadow-sm ${darkMode ? "drop-shadow-indigo-600" : "drop-shadow-sky-300"}`}>
                                    <img
                                        src="https://res.cloudinary.com/dkpgnq7ym/image/upload/v1752415760/Firefly_Modern_flat_vector_illustration_of_a_young_computer_engineering_student_working_on_a_141617-Photoroom_jec7l6.png"
                                        alt="Atharva Jadhav Profile"
                                        className="w-full h-full object-contain"
                                        decoding="async"
                                    />
                                </div>
                            </div>
                            <div className={`absolute bottom-4 right-4 md:bottom-1 md:right-18 p-2 md:p-3 rounded-2xl border backdrop-blur-xl shadow-2xl flex items-center justify-center ${darkMode
                                ? "bg-black/60 border-green-500/30 text-green-400"
                                : "bg-white/80 border-green-200 text-green-600"
                                }`}>
                                <span className="font-mono text-lg xl:text-2xl font-bold tracking-tighter">{"</>"}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}