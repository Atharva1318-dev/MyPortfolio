import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

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
            <h2 className="text-green-400 text-center text-2xl md:text-3xl font-bold mb-8">
                About Me
            </h2>
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
                        <div
                            className={`font-mono ${darkMode ? "text-gray-400" : "text-gray-600"
                                }`}
                        >
                            {"<span>"} Hey, I'm John {"</span>"}
                        </div>

                        <div
                            className={`font-mono text-sm leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-700"
                                }`}
                        >
                            {"<p>"} With expertise in cutting-edge technologies such as{" "}
                            <span className="text-blue-400">NodeJS</span>,{" "}
                            <span className="text-blue-400">React</span>,{" "}
                            <span className="text-blue-400">Angular</span>, and{" "}
                            <span className="text-blue-400">Laravel</span>... I deliver web
                            solutions that are both innovative and robust. {"</p>"}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
