import { useState } from "react";
import { Code, Palette, Server, Wrench, ChevronDown } from "lucide-react";

const skillsData = {
    Languages: {
        icon: Code,
        color: "from-emerald-500 to-teal-600",
        skills: [
            { name: "Python", level: 50 },
            { name: "JavaScript", level: 65 },
            { name: "Java", level: 75 },
            { name: "C", level: 75 },
        ],
    },
    Frontend: {
        icon: Palette,
        color: "from-blue-500 to-cyan-600",
        skills: [
            { name: "React.js", level: 75 },
            { name: "HTML5", level: 85 },
            { name: "CSS3", level: 80 },
            { name: "Tailwind CSS", level: 85 },
        ],
    },
    Backend: {
        icon: Server,
        color: "from-purple-500 to-pink-600",
        skills: [
            { name: "Node.js", level: 75 },
            { name: "Express.js", level: 75 },
            { name: "MongoDB", level: 85 },
            { name: "MySQL", level: 85 },
        ],
    },
    "Other Tools": {
        icon: Wrench,
        color: "from-orange-500 to-red-600",
        skills: [
            { name: "Git & GitHub", level: 85 },
            { name: "GSAP", level: 70 },
        ],
    },
};

export default function SkillsSection() {
    const [expandedCards, setExpandedCards] = useState([]);

    const toggleCard = (category) => {
        setExpandedCards((prev) =>
            prev.includes(category)
                ? prev.filter((c) => c !== category)
                : [...prev, category]
        );
    };

    // **Step 1: Convert to array of [category, data] pairs**
    const skillCategories = Object.entries(skillsData);
    // skillCategories is now:
    // [
    //   ["Languages", { icon: Code, color: "...", skills: [...] }],
    //   ["Frontend", {...}],
    //   ...
    // ]

    return (
        <section id="skills" className="min-h-screen py-14 px-6 md:px-12 relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-2xl md:text-4xl font-bold text-green-400 mb-4">
                        My Skills
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        An overview of my technical skills and proficiency levels across different domains
                    </p>
                </div>

                {/* Step 2: Map over the saved array */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {skillCategories.map(([category, data]) => {
                        const IconComponent = data.icon;
                        const isExpanded = expandedCards.includes(category);

                        return (
                            <div
                                key={category}
                                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300 hover:scale-105 hover:hover:shadow-indigo-900 shadow-md group cursor-pointer"
                                onClick={() => toggleCard(category)}
                            >
                                <div className="p-6">
                                    {/* Card Header */}
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center gap-3">
                                            <div className={`p-3 rounded-lg bg-gradient-to-r ${data.color} shadow-lg`}>
                                                <IconComponent className="w-6 h-6 text-white" />
                                            </div>
                                            <h3 className="text-2xl font-bold text-white">{category}</h3>
                                        </div>
                                        <ChevronDown
                                            className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""
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
                                                    <span className="text-gray-200 font-medium">{skill.name}</span>
                                                    <span className="text-gray-400 text-sm">{skill.level}%</span>
                                                </div>
                                                <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
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
                                            <span className="text-gray-500 text-sm">
                                                Click to expand and see skill levels
                                            </span>
                                        </div>
                                    )}
                                </div>
                                <hr className="visible md:hidden w-3/4 h-0.5 mx-auto bg-gradient-to-r from-indigo-900  via-green-400 to-indigo-900" />

                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}