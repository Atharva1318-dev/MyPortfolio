import React, { useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "./Hero.css";

export default function Hero({ darkMode }) {
    const avatarRef = useRef(null);
    const leftGsap = useRef(null);
    const rightGsap = useRef(null);

    useGSAP(() => {
        gsap.from(avatarRef.current, {
            y: -9,
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
            delay: 0.15,
            ease: "power3.out"
        })
    }, []);


    return (
        <div id="home" className="min-h-screen overflow-x-hidden">
            <div className="container mx-auto px-3 py-12">
                <div className="grid lg:grid-cols-2 gap-y-10 gap-x-24 items-center">
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
                            <span className={`typewriterCss ${darkMode ? "text-green-400" : "text-green-500"}`}>
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
                            <span className={darkMode ? "text-white" : "text-gray-800"}>Aspiring Software Engg</span>
                            <span className={darkMode ? "text-green-400" : "text-green-600"}>_</span>
                        </h1>
                        <div
                            className={`firaCodeFont text-sm leading-relaxed max-w-xl ${darkMode ? "text-gray-400" : "text-gray-700"
                                }`}
                        >
                            {"<p>"} I enjoy building full‑stack web applications and writing clean, readable code. I’ve explored the{" "}
                            <span className={darkMode ? "text-blue-400" : "text-blue-600"}>MERN</span> stack—from{" "}
                            <span className={darkMode ? "text-blue-400" : "text-blue-600"}>React</span> frontends to{" "}
                            <span className={darkMode ? "text-blue-400" : "text-blue-600"}>Node.js</span> backends and{" "}
                            <span className={darkMode ? "text-blue-400" : "text-blue-600"}>MongoDB</span> databases. I’m always eager to pick up new frameworks and tools, and I’m curious about{" "}
                            <span className={darkMode ? "text-blue-400" : "text-blue-600"}>AI</span>{" "}
                            <span className={darkMode ? "text-blue-400" : "text-blue-600"}>ML</span> and look forward to explore it as well in the future!{"</p>"}
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
                    <div ref={rightGsap} className="order-1 lg:order-2 flex justify-center lg:justify-center py-5">
                        <div className="relative">
                            <div className="w-75 h-75 md:w-full md:h-95 pt-3" ref={avatarRef}>
                                <div className={`w-full h-full transform scale-112 drop-shadow-lg ${darkMode ? "drop-shadow-indigo-600" : "drop-shadow-sky-300"}`}>
                                    <img
                                        src="https://res.cloudinary.com/dkpgnq7ym/image/upload/v1752415760/Firefly_Modern_flat_vector_illustration_of_a_young_computer_engineering_student_working_on_a_141617-Photoroom_jec7l6.png"
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
