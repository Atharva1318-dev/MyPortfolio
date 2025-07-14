import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";
import { motion } from "framer-motion";

import { GraduationCap, University, School } from "lucide-react";

const educationData = [
    {
        date: "2023 – 2027",
        title: "Thadomal Shahani Engineering College",
        subtitle: "B.E. in Computer Engineering — CGPA 9.58",
        icon: GraduationCap,
    },
    {
        date: "2021 – 2023",
        title: "R.P. Vagh School Junior College",
        subtitle: "Higher Secondary Certificate — Grade 86%",
        icon: University,
    },
    {
        date: "2008 – 2021",
        title: "National English School",
        subtitle: "ICSE — Grade 96%",
        icon: School,
    },
];

export default function EducationTimeline({ darkMode }) {
    return (
        <section id="education" className="px-2 md:px-8 py-12">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-3 text-green-400">
                Education
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-green-500 to-indigo-900 mx-auto mb-6"></div>
            <p
                className={`${darkMode ? "text-gray-300 text-center" : "text-gray-700 text-center"
                    } text-lg max-w-2xl mx-auto mb-8`}
            >
                A timeline of my academic journey
            </p>

            <VerticalTimeline>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    {educationData.map((edu, idx) => (
                        <VerticalTimelineElement
                            key={idx}
                            date={edu.date}
                            iconStyle={{
                                background: darkMode
                                    ? "linear-gradient(to bottom, #000000, #312e81)"
                                    : idx === 0
                                        ? "linear-gradient(135deg, #3b82f6, #1d4ed8)" // Blue for current education
                                        : idx === 1
                                            ? "linear-gradient(135deg, #8b5cf6, #7c3aed)" // Purple for recent education
                                            : "linear-gradient(135deg, #10b981, #059669)", // Emerald for foundational education
                                color: "#fff",
                                boxShadow: darkMode ? "0 4px 12px rgba(0, 0, 0, 0.3)" : "0 8px 24px rgba(0, 0, 0, 0.15)",
                                border: darkMode ? "none" : "3px solid rgba(255, 255, 255, 0.8)",
                            }}
                            icon={<edu.icon size={20} />}
                            contentStyle={{
                                background: darkMode
                                    ? "linear-gradient(-135deg, rgba(0,0,0,0.6), rgba(49,46,129,0.8))"
                                    : idx === 0
                                        ? "linear-gradient(135deg, rgba(59, 130, 246, 0.08), rgba(147, 197, 253, 0.15))" // Blue tint
                                        : idx === 1
                                            ? "linear-gradient(135deg, rgba(139, 92, 246, 0.08), rgba(196, 181, 253, 0.15))" // Purple tint
                                            : "linear-gradient(135deg, rgba(16, 185, 129, 0.08), rgba(167, 243, 208, 0.15))", // Emerald tint
                                color: darkMode ? "#f0fdf4" : "#1e293b",
                                boxShadow: darkMode ? "0 3px 6px rgba(0,0,0,0.1)" : "0 10px 30px rgba(0, 0, 0, 0.1)",
                                borderRadius: "22px",
                                border: darkMode ? "none" : "2px solid rgba(255, 255, 255, 0.6)",
                                backdropFilter: darkMode ? "none" : "blur(10px)",
                            }}
                            contentArrowStyle={{
                                borderRight: darkMode
                                    ? "7px solid #312e81"
                                    : idx === 0
                                        ? "7px solid #3b82f6" // Blue arrow
                                        : idx === 1
                                            ? "7px solid #8b5cf6" // Purple arrow
                                            : "7px solid #10b981", // Emerald arrow
                            }}
                            dateClassName={darkMode ? "text-teal-400" : "text-blue-500"}
                        >
                            <h3
                                className={`vertical-timeline-element-title text-xl font-semibold ${darkMode ? "text-white" : "text-slate-800"
                                    }`}
                            >
                                {edu.title}
                            </h3>
                            <h4
                                className={`vertical-timeline-element-subtitle text-sm ${darkMode ? "text-gray-400" : "text-slate-600 font-medium"
                                    }`}
                            >
                                {edu.subtitle}
                            </h4>

                        </VerticalTimelineElement>
                    ))}
                </motion.div>
            </VerticalTimeline>
        </section>
    );
}