import { useRef } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Code2, Globe, Palette, Trophy, Users } from "lucide-react"
import { GlowingEffect } from './ui/glowing-effect';


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
    }, []);

    return (
        <div id="about" className={darkMode ? "text-white overflow-x-hidden" : "text-gray-900 overflow-x-hidden"}>
            <h1
                className={`text-center text-3xl md:text-4xl lg:text-5xl font-semibold mb-2 ${darkMode ? "text-green-400" : "text-green-600"}`}
            >
                About Me
            </h1>
            <div className="w-26 md:w-38 h-[0.8px] bg-gradient-to-r from-green-500 to-indigo-900 mx-auto mb-6"></div>
            <div className="container mx-auto px-5 py-12">
                <div className="grid lg:grid-cols-2 gap-6 md:gap-3.5 items-center">

                    <div ref={picRef} className="flex justify-center items-center relative group">
                        {/* Abstract Background Decoration */}
                        <div className={`absolute inset-0 rounded-3xl blur-[40px] opacity-40 group-hover:opacity-50 transition-opacity duration-500 ${darkMode ? "bg-indigo-900" : "bg-blue-400"
                            }`}></div>

                        {/* Main Image Container */}
                        <div className={`relative z-10 w-64 h-60 md:w-80 md:h-80 rounded-2xl overflow-hidden border-[3px] shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] group-hover:rotate-[0.4deg] ${darkMode
                            ? "border-gray-700 bg-gray-800"
                            : "border-white bg-white"
                            }`}>
                            <img
                                src="https://res.cloudinary.com/dkpgnq7ym/image/upload/v1752989690/me_xltawb.jpg"
                                alt="Atharva Jadhav"
                                className="w-full h-full object-cover"
                            />

                            {/* Overlay Gradient for depth */}
                            <div className={`absolute inset-0 bg-gradient-to-t ${darkMode ? "from-black/60 via-transparent" : "from-blue-900/30 via-transparent"
                                } to-transparent opacity-60`}></div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div ref={abtRef} className="self-start space-y-6">

                        {/* 1. Main Intro - Clean Text (No Box) for better readability */}
                        <div className="pl-2 border-l-4 border-green-500">
                            <h3 className={`text-2xl font-bold mb-2 ${darkMode ? "text-white" : "text-gray-900"}`}>
                                Hello, I'm <span className="text-green-500">Atharva.</span>
                            </h3>
                            <p className={`text-lg leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                                A third-year Computer Engineering student at <span className="font-semibold text-blue-500">TSEC Mumbai</span>.
                            </p>
                        </div>

                        {/* 2. Attributes Grid - The "Bento" Style */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                            <div className={`p-5 rounded-2xl border transition-all hover:-translate-y-1 ${darkMode ? "bg-white/5 border-white/10 hover:border-green-500/50" : "bg-white border-gray-200 shadow-sm"
                                }`}>
                                <Code2 className="mb-3 text-green-500" size={24} />
                                <h4 className={`font-bold mb-1 ${darkMode ? "text-white" : "text-gray-900"}`}>Full Stack</h4>
                                <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                                    Evolved from MERN stack to building scalable apps with Next.js, PostgreSQL & Prisma, actively exploring AI integrations in my projects.
                                </p>
                            </div>

                            <div className={`p-5 rounded-2xl border transition-all hover:-translate-y-1 ${darkMode ? "bg-white/5 border-white/10 hover:border-blue-500/50" : "bg-white border-gray-200 shadow-sm"
                                }`}>
                                <Users className="mb-3 text-blue-500" size={24} />
                                <h4 className={`font-bold mb-1 ${darkMode ? "text-white" : "text-gray-900"}`}>Team Work</h4>
                                <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                                    While I haven't done a formal internship yet and is currently seeking one, I've honed collaboration skills by participating in hackathons.
                                </p>
                            </div>

                            <div className={`p-5 rounded-2xl border transition-all hover:-translate-y-1 ${darkMode ? "bg-white/5 border-white/10 hover:border-pink-500/50" : "bg-white border-gray-200 shadow-sm"
                                }`}>
                                <Palette className="mb-3 text-pink-500" size={24} />
                                <h4 className={`font-bold mb-1 ${darkMode ? "text-white" : "text-gray-900"}`}>Beyond Code</h4>
                                <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                                    Passionate about portrait sketching,love playing cricket.
                                </p>
                            </div>

                            <div className={`p-5 rounded-2xl border transition-all hover:-translate-y-1 ${darkMode ? "bg-white/5 border-white/10 hover:border-yellow-500/50" : "bg-white border-gray-200 shadow-sm"
                                }`}>
                                <Trophy className="mb-3 text-yellow-500" size={24} />
                                <h4 className={`font-bold mb-1 ${darkMode ? "text-white" : "text-gray-900"}`}>The Goal</h4>
                                <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                                    Building robust, user-centric software that solves real-world problems.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}