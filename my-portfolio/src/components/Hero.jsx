// src/components/HeroWithStats.jsx
import React, { useState, useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero({ darkMode }) {
    const avatarRef = useRef(null);

    useGSAP(() => {
        gsap.to(avatarRef.current, {
            y: -9,
            duration: 2,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut",
        });
    }, []);

    return (
        <div id="home" className="min-h-screen">
            <div className="container mx-auto px-4 py-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="order-2 lg:order-1 space-y-6">
                        <div className={`font-mono nameSpan ${darkMode ? "text-gray-400" : "text-gray-700"}`}>
                            {"<span>"}Hey, I'm Atharva Jadhav{"</span>"}
                        </div>

                        <h1
                            className={`text-4xl lg:text-5xl font-semibold leading-tight ${darkMode ? "text-white" : "text-gray-900"
                                }`}
                        >
                            <span className={`${darkMode ? "text-green-400" : "text-green-600"} font-mono`}>
                                {"{"}
                            </span>
                            <Typewriter
                                words={["Full Stack Dev", "CSE @TSEC"]}
                                loop={Infinity}
                                cursor
                                cursorStyle="|"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                            <span className={`${darkMode ? "text-green-400" : "text-green-600"} font-mono`}>
                                {"}"}
                            </span>
                            <br />
                            <span className={darkMode ? "text-white" : "text-gray-800"}>Aspiring Software Engg</span>
                            <span className={darkMode ? "text-green-400" : "text-green-600"}>_</span>
                        </h1>
                        <div
                            className={`font-mono text-sm leading-relaxed max-w-xl ${darkMode ? "text-gray-400" : "text-gray-700"
                                }`}
                        >
                            {"<p>"} I enjoy building full‑stack MERN projects—from{" "}
                            <span className={darkMode ? "text-blue-400" : "text-blue-600"}>React</span> frontends to{" "}
                            <span className={darkMode ? "text-blue-400" : "text-blue-600"}>Node.js</span> and{" "}
                            <span className={darkMode ? "text-blue-400" : "text-blue-600"}>MongoDB</span> backends. I’m sharpening my DSA skills and love digging into how things work under the hood. Lately, I’ve been curious about{" "}
                            <span className={darkMode ? "text-blue-400" : "text-blue-600"}>AI</span> and{" "}
                            <span className={darkMode ? "text-blue-400" : "text-blue-600"}>ML</span>, and I can’t wait to explore them more! {"</p>"}
                        </div>


                        <div className="flex items-center space-x-4 text-gray-100">
                            <div
                                className="w-6 h-6 rounded text-center text-white"
                                style={{ backgroundColor: "#082535" }}
                            >
                                M
                            </div>
                            <div
                                className="w-6 h-6 rounded text-center text-black"
                                style={{ backgroundColor: "#F7E029" }}
                            >
                                E
                            </div>
                            <div
                                className="w-6 h-6 rounded text-center text-black"
                                style={{ backgroundColor: "#67DBFB" }}
                            >
                                R
                            </div>
                            <div
                                className="w-6 h-6 rounded text-center text-white"
                                style={{ backgroundColor: "#6DA368" }}
                            >
                                N
                            </div>
                        </div>
                    </div>

                    {/* Profile Image */}
                    <div className="order-1 lg:order-2 flex justify-center lg:justify-center py-5">
                        <div className="relative">
                            <div className="w-65 h-65 md:w-full md:h-95 pt-3" ref={avatarRef}>
                                <div className="w-full h-full transform scale-112">
                                    <img
                                        src="/Firefly_Modern flat vector illustration of a young computer engineering student working on a  141617-Photoroom.png"
                                        alt="Atharva Jadhav Profile"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="absolute -bottom-4 -right-4 bg-green-500 p-3 rounded-lg">
                                <div className="text-gray-900 font-mono text-lg">{"</>"}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
