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
                                    : "linear-gradient(to bottom, #e0f2fe, #c7d2fe)",
                                color: darkMode ? "#fff" : "#000",
                            }}
                            icon={<edu.icon size={20} />}
                            contentStyle={{
                                background: darkMode
                                    ? "linear-gradient(-135deg, rgba(0,0,0,0.6), rgba(49,46,129,0.8))"
                                    : "linear-gradient(-135deg, rgba(255,255,255,0.8), rgba(226,232,240,0.8))",
                                color: darkMode ? "#f0fdf4" : "#1e293b",
                                boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
                                borderRadius: "22px",
                            }}
                            contentArrowStyle={{
                                borderRight: darkMode
                                    ? "7px solid #312e81"
                                    : "7px solid #c7d2fe",
                            }}
                            dateClassName={darkMode ? "text-teal-400" : "text-blue-500"}
                        >
                            <h3 className="vertical-timeline-element-title text-xl font-semibold">
                                {edu.title}
                            </h3>
                            <h4
                                className={`vertical-timeline-element-subtitle text-sm ${darkMode ? "text-gray-400" : "text-gray-700"
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
