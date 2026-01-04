import { useRef } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Code2, Globe, Palette, Trophy } from "lucide-react"


export default function About({ darkMode }) {
    const picRef = useRef(null);
    const abtRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        gsap.from(picRef.current, {
            x: -100,
            opacity: 0,
            duration: 2,
            ease: "sine.inOut",
            scrollTrigger: {
                scroller: "body",
                trigger: "#about",
                scrub: true,
                start: "top 70%",
                end: "top 10%"
            }
        });

        gsap.from(abtRef.current, {
            x: 100,
            duration: 2,
            opacity: 0,
            ease: "sine.inOut",
            scrollTrigger: {
                scroller: "body",
                trigger: "#about",
                scrub: true,
                start: "top 70%",
                end: "top 10%"
            }
        });
    }, [])

    return (
        <div id="about" className={darkMode ? "text-white overflow-x-hidden" : "text-gray-900 overflow-x-hidden"}>
            <h1
                className={`text-center text-2xl md:text-4xl font-bold mb-3 ${darkMode ? "text-green-400" : "text-green-600"}`}
            >
                About Me
            </h1>
            <div className="w-24 h-0.5 bg-gradient-to-r from-green-500 to-indigo-900 mx-auto mb-6"></div>
            <div className="container mx-auto px-6 py-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Profile Image */}
                    <div ref={picRef} className="flex justify-center lg:justify-start">
                        <div className="relative">
                            <div
                                className={`w-45 h-45 md:w-85 md:h-85 bg-gradient-to-br ${darkMode ? "from-gray-700 to-gray-800" : "from-blue-50 to-indigo-100"
                                    } transform rotate-45 rounded-3xl overflow-hidden`}
                            >
                                <div className="w-full h-full transform -rotate-45 scale-150 translate-y-8">
                                    <img src="https://res.cloudinary.com/dkpgnq7ym/image/upload/v1752989690/me_xltawb.jpg" alt="John Dev Profile" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div className="absolute -bottom-4 -right-4 bg-green-500 p-3 rounded-lg">
                                <div className="text-gray-900 font-mono text-lg">{"</>"}</div>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div ref={abtRef} className="self-start">
                        <div className="space-y-3">
                            <div
                                className={`backdrop-blur-sm rounded-2xl p-4 border transition-colors shadow-[0_3px_6px_rgba(0,0,0,0.1)] ${darkMode
                                    ? "bg-gray-800/50 border-gray-700/40 text-gray-300"
                                    : "bg-white/70 border-blue-100/60 text-gray-700"
                                    }`}
                            >
                                <p className="text-md leading-relaxed">
                                    Hi, I'm{" "}
                                    <span className={`font-semibold text-lg ${darkMode ? "text-green-400" : "text-green-600"}`}>
                                        Atharva Pramod Jadhav
                                    </span>
                                    , a second-year Computer Engineering student at{" "}
                                    <span className={`font-medium text-lg ${darkMode ? "text-blue-400" : "text-blue-600"}`}>
                                        Thadomal Shahani Engineering College
                                    </span>
                                    , Bandra, Mumbai (Class of '27).
                                </p>
                            </div>

                            {/* Skills & Interests */}
                            <div className="grid md:grid-cols-2 gap-3">
                                <div
                                    className={`${darkMode
                                        ? "bg-slate-800/30 border-slate-700/30 text-gray-300"
                                        : "bg-white/70 border-green-100/60 text-gray-700"
                                        } shadow-[0_3px_6px_rgba(0,0,0,0.1)] backdrop-blur-sm rounded-xl p-5 border`}
                                >
                                    <h3
                                        className={`font-semibold mb-3 flex items-center gap-2 ${darkMode ? "text-green-400" : "text-green-600"}`}
                                    >
                                        <Code2 size={20} />
                                        Technical Skills
                                    </h3>
                                    <p className="text-sm leading-relaxed">
                                        I enjoy building full-stack web applications and writing clean, readable code. I've explored the{" "}
                                        <span className={`font-medium ${darkMode ? "text-yellow-400" : "text-yellow-600"}`}>
                                            MERN stack
                                        </span>
                                        —from <span className={`${darkMode ? "text-blue-400" : "text-blue-600"}`}>React</span> frontends to{" "}
                                        <span className={`${darkMode ? "text-green-400" : "text-green-600"}`}>Node.js</span> backends and{" "}
                                        <span className={`${darkMode ? "text-purple-400" : "text-purple-600"}`}>MongoDB</span> databases.
                                    </p>
                                </div>

                                <div
                                    className={`${darkMode
                                        ? "bg-slate-800/30 border-slate-700/30 text-gray-300"
                                        : "bg-white/70 border-blue-100/60 text-gray-700"
                                        } shadow-[0_3px_6px_rgba(0,0,0,0.1)] backdrop-blur-sm rounded-xl p-5 border`}
                                >
                                    <h3
                                        className={`font-semibold mb-3 flex items-center gap-2 ${darkMode ? "text-blue-400" : "text-blue-600"}`}
                                    >
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
                            <div
                                className={`${darkMode
                                    ? "bg-gradient-to-r from-slate-800/40 to-purple-800/20 border-slate-700/40 text-gray-300"
                                    : "bg-white/70 border-pink-100/60 text-gray-700"
                                    } backdrop-blur-sm rounded-2xl p-4 border`}
                            >
                                <h3
                                    className={`font-semibold mb-4 flex items-center gap-2 ${darkMode ? "text-purple-400" : "text-pink-600"}`}
                                >
                                    <Palette size={20} />
                                    Beyond Coding
                                </h3>
                                <p className="leading-relaxed">
                                    Outside of coding, I'm passionate about{" "}
                                    <span className={`font-medium ${darkMode ? "text-pink-400" : "text-pink-600"}`}>
                                        portrait sketching
                                    </span>
                                    , love playing{" "}
                                    <span className={`font-medium ${darkMode ? "text-green-400" : "text-green-600"}`}>cricket</span>, and
                                    keep active by hitting the gym as and when time permits.
                                </p>
                            </div>

                            {/* Goals */}
                            <div
                                className={`${darkMode
                                    ? "bg-slate-800/50 border-slate-700/50 text-gray-300"
                                    : "bg-white/70 border-yellow-100/60 text-gray-700"
                                    } backdrop-blur-sm rounded-2xl p-4 border`}
                            >
                                <h3
                                    className={`font-semibold mb-4 flex items-center gap-2 ${darkMode ? "text-yellow-400" : "text-yellow-600"}`}
                                >
                                    <Globe size={20} />
                                    My Goal
                                </h3>
                                <p className="leading-relaxed">
                                    My goal is to become a versatile full-stack developer who writes robust, maintainable code—and to
                                    tackle new challenges with{" "}
                                    <span className={`font-medium ${darkMode ? "text-green-400" : "text-green-600"}`}>curiosity</span> and{" "}
                                    <span className={`font-medium ${darkMode ? "text-blue-400" : "text-blue-600"}`}>enthusiasm</span>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}