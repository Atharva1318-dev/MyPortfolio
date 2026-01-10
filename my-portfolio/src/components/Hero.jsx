import React, { useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";


export default function Hero({ darkMode }) {
    const avatarRef = useRef(null);
    const leftGsap = useRef(null);
    const rightGsap = useRef(null);

    useGSAP(() => {
        gsap.from(avatarRef.current, {
            scale: 1.02,
            y: -3,
            duration: 2,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut",
        });

        gsap.from(leftGsap.current, {
            x: -786,
            duration: 1.5,
            delay: 0.2,
            ease: "power3.out"
        });

        gsap.from(rightGsap.current, {
            x: 760,
            duration: 1.5,
            delay: 0.35,
            ease: "power3.out"
        })
    }, []);


    return (
        <div id="home" className="min-h-screen overflow-x-hidden pt-8 lg:pt-3">
            <div className="container mx-auto px-2 lg:px-1 py-10">
                <div className="grid lg:grid-cols-2 gap-y-9 gap-x-24 items-center">
                    {/* Content */}
                    <div ref={leftGsap} className="order-2 lg:order-1 space-y-6 pt-6">
                        <div className={`font-mono firaCodeFont ${darkMode ? "text-gray-400" : "text-gray-700"}`}>
                            {"<span>"}Hey, I'm Atharva Jadhav{"</span>"}
                        </div>
                        <h1
                            className={`text-4xl lg:text-5xl font-semibold leading-tight ${darkMode ? "text-white" : "text-gray-900"
                                }`}
                        >
                            <span className={`${darkMode ? "text-green-400" : "text-green-500"} font-mono`}>
                                {"{"}
                            </span>
                            <span className={`heading ${darkMode ? "text-green-400" : "text-green-500"}`}>
                                <Typewriter
                                    words={["Full Stack Dev", "CSE @TSEC"]}
                                    cursorColor="green"
                                    loop={Infinity}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>
                            <span className={`${darkMode ? "text-green-400" : "text-green-500"} font-mono`}>
                                {"}"}
                            </span>
                            <br />
                            <span className={darkMode ? "text-white heading" : "text-gray-800 heading"}>Aspiring Software Engg</span>
                            <span className={darkMode ? "text-green-400 heading" : "text-green-600 heading"}>_</span>
                        </h1>
                        <div
                            className={`firaCodeFont text-sm lg:text-md leading-relaxed max-w-xl ${darkMode ? "text-gray-400" : "text-gray-800"
                                }`}
                        >
                            {"<p>"}I enjoy building{" "}
                            <span className={darkMode ? "text-blue-400" : "text-blue-600"}>full-stack</span>{" "}
                            web applications. I have worked with{" "}
                            <span className={darkMode ? "text-blue-400" : "text-blue-600"}>React</span>,{" "}
                            <span className={darkMode ? "text-blue-400" : "text-blue-600"}>Next.js</span>, and{" "}
                            <span className={darkMode ? "text-blue-400" : "text-blue-600"}>Node.js</span>, using databases like{" "}
                            <span className={darkMode ? "text-blue-400" : "text-blue-600"}>PostgreSQL</span>{" "}
                            and{" "}
                            <span className={darkMode ? "text-blue-400" : "text-blue-600"}>MongoDB</span>. I’ve built{" "}
                            <span className={darkMode ? "text-blue-400" : "text-blue-600"}>AI-powered</span>{" "}
                            products using tools like{" "}
                            <span className={darkMode ? "text-blue-400" : "text-blue-600"}>Google Gemini</span>. I’m also curious about{" "}
                            AI/ML{" "}
                            and love learning new technologies through hands-on projects.{"</p>"}
                        </div>
                        <div className="text-gray-100">
                            <button className={`inline-flex flex-row items-center justify-evenly relative h-12 overflow-hidden rounded-2xl p-[0.8px] focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 shadow-lg transition-shadow ${darkMode ? "shadow-green-900/20" : "shadow-green-200"}`}>
                                <span className={`absolute inset-[-1000%] animate-[spin_2s_linear_infinite] ${darkMode
                                    ? "bg-[conic-gradient(from_90deg_at_50%_50%,#4ade80_0%,#312e81_50%,#4ade80_100%)]"
                                    : "bg-[conic-gradient(from_90deg_at_50%_50%,#16a34a_0%,#6366f1_50%,#16a34a_100%)]"
                                    }`} />
                                <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-2xl px-5 py-1 text-sm font-semibold backdrop-blur-3xl transition-colors ${darkMode
                                    ? "bg-slate-950 text-white"
                                    : "bg-white text-slate-800"
                                    }`}>
                                    <a href="#projects">
                                        View My Work
                                    </a>
                                    <ArrowRight height={18} width={17} className={`ml-2 ${darkMode ? "text-green-400" : "text-green-600"}`} />
                                </span>
                            </button>
                        </div>
                    </div>
                    {/* Profile Image */}
                    <div ref={rightGsap} className="order-1 lg:order-2 flex justify-center lg:justify-center py-5">
                        <div className="relative">
                            <div className="w-85 h-75 md:w-full md:h-full p-2" ref={avatarRef}>
                                <div className={`w-full h-full transform scale-112 drop-shadow-sm ${darkMode ? "drop-shadow-indigo-600" : "drop-shadow-sky-300"}`}>
                                    <img
                                        src="https://res.cloudinary.com/dkpgnq7ym/image/upload/v1752415760/Firefly_Modern_flat_vector_illustration_of_a_young_computer_engineering_student_working_on_a_141617-Photoroom_jec7l6.png"
                                        alt="Atharva Jadhav Profile"
                                        className="w-full h-full object-contain"
                                    />
                                    {/* <img
                                        src="Hero4.png"
                                        alt="Atharva Jadhav Profile"
                                        className="w-full h-full object-contain"
                                    /> */}
                                </div>
                            </div>
                            <div className="absolute -bottom-1 right-0 bg-green-500 p-2 rounded-lg">
                                <div className="text-gray-900 font-mono text-lg">{"</>"}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}