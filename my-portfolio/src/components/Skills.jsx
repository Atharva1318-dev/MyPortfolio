import { useState, useRef } from "react";
import { Code, Palette, Server, Wrench, ChevronDown } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useContext } from "react";
import { darkModeContext } from "../context/ThemeContext";

const skillsData = {
    Languages: {
        icon: Code,
        color: "from-emerald-500 to-teal-600",
        lightModeBg: "bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200",
        skills: [
            { name: "Java", level: 80 },
            { name: "Python", level: 75 },
            { name: "C", level: 70 },
        ],
    },
    Frontend: {
        icon: Palette,
        color: "from-blue-500 to-cyan-600",
        lightModeBg: "bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200",
        skills: [
            { name: "HTML5 & CSS3", level: 90 },
            { name: "JavaScript", level: 80 },
            { name: "React.js", level: 80 },
            { name: "Next.js", level: 65 },
        ],
    },
    Backend: {
        icon: Server,
        color: "from-purple-500 to-violet-600",
        lightModeBg: "bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200",
        skills: [
            { name: "Node.js", level: 75 },
            { name: "Express.js", level: 75 },
            { name: "MongoDB", level: 80 },
            { name: "PostgreSQL", level: 70 },
            { name: "MySQL", level: 70 },
            { name: "Prisma", level: 60 },
        ],
    },
    "Other Tools": {
        icon: Wrench,
        color: "from-orange-500 to-red-600",
        lightModeBg: "bg-gradient-to-br from-orange-50 to-red-50 border-orange-200",
        skills: [
            { name: "Git", level: 85 },
            { name: "GitHub", level: 85 },
        ],
    },
};

export default function SkillsSection() {
    const { darkMode, setDarkMode } = useContext(darkModeContext);
    const [expandedCards, setExpandedCards] = useState([]);
    const containerRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        const cards = gsap.utils.toArray(".fadeIn", containerRef.current);

        cards.forEach((card, i) => {
            gsap.from(card, {
                y: 24,              // smaller movement = smoother
                opacity: 0,
                duration: 0.6,
                ease: "power3.out",
                delay: i * 0.08,    // natural stagger without GSAP stagger
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    end: "top 65%",
                    scrub: 0.4,       // 👈 very light scrub
                },
            });
        });
    }, { scope: containerRef });


    const toggleCard = (category) => {
        setExpandedCards((prev) =>
            prev.includes(category)
                ? prev.filter((c) => c !== category)
                : [...prev, category]
        );
    };

    const skillCategories = Object.entries(skillsData);

    return (
        <section
            ref={containerRef}
            id="skills"
            className="min-h-screen py-12 px-6 md:px-12 relative overflow-x-hidden"
        >
            <div className="max-w-7xl mx-auto relative">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className={`text-center text-3xl md:text-4xl lg:text-5xl font-semibold mb-2 ${darkMode ? "text-green-400" : "text-green-600"}`}>
                        My Skills
                    </h1>
                    <div className="w-26 md:w-36 h-[0.8px] bg-gradient-to-r from-green-500 to-indigo-900 mx-auto mb-6"></div>
                    <p
                        className={`${darkMode ? "text-gray-300" : "text-gray-700"
                            } text-lg max-w-2xl mx-auto`}
                    >
                        An overview of my technical skills and proficiency levels across
                        different domains
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {skillCategories.map(([category, data]) => {
                        const IconComponent = data.icon;
                        const isExpanded = expandedCards.includes(category);

                        return (
                            <div
                                key={category}
                                className={`fadeIn  border ${darkMode
                                    ? "bg-white/5 border-white/10 hover:border-white/20"
                                    : data.lightModeBg
                                    } backdrop-blur-lg rounded-2xl transition-all duration-300 hover:scale-105 shadow-md group cursor-pointer`}
                                onClick={() => toggleCard(category)}
                            >
                                <div className="p-4">
                                    {/* Card Header */}
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center gap-3">
                                            <div
                                                className={`p-3 rounded-lg bg-gradient-to-r ${data.color} shadow-lg`}
                                            >
                                                <IconComponent className="w-6 h-6 text-white" />
                                            </div>
                                            <h3
                                                className={`text-2xl font-semibold ${darkMode ? "text-white" : "text-gray-800"
                                                    }`}
                                            >
                                                {category}
                                            </h3>
                                        </div>
                                        <ChevronDown
                                            className={`w-5 h-5 ${darkMode ? "text-gray-400" : "text-gray-600"
                                                } transition-transform duration-300 ${isExpanded ? "rotate-180" : ""
                                                }`}
                                        />
                                    </div>

                                    {/* Skills List */}
                                    <div
                                        className={`space-y-4 transition-all duration-300 ${isExpanded ? "max-h-96 opacity-100" : "max-h-32 opacity-70"
                                            } overflow-hidden`}
                                    >
                                        {data.skills.map((skill, index) => (
                                            <div key={skill.name} className="space-y-2">
                                                <div className="flex items-center justify-between">
                                                    <span
                                                        className={`font-medium ${darkMode ? "text-gray-200" : "text-gray-800"
                                                            }`}
                                                    >
                                                        {skill.name}
                                                    </span>
                                                    <span
                                                        className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"
                                                            }`}
                                                    >
                                                        {skill.level}%
                                                    </span>
                                                </div>
                                                <div
                                                    className={`w-full ${darkMode
                                                        ? "bg-gray-700/50"
                                                        : "bg-gray-300/70"
                                                        } rounded-full h-2 overflow-hidden`}
                                                >
                                                    <div
                                                        className={`h-full bg-gradient-to-r ${data.color} rounded-full transition-all duration-1000 ease-out`}
                                                        style={{
                                                            width: isExpanded ? `${skill.level}%` : "0%",
                                                            transitionDelay: `${index * 100}ms`,
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {!isExpanded && (
                                        <div className="mt-4 text-center">
                                            <span
                                                className={`text-sm ${darkMode ? "text-gray-500" : "text-gray-500"
                                                    }`}
                                            >
                                                Click to expand and see skill levels
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}