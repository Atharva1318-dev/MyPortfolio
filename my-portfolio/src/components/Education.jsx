// src/components/EducationTimeline.jsx
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

export default function EducationTimeline() {
    return (
        <section id="education" className="px-2 md:px-8 py-12">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-green-400">
                Education
            </h2>

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
                                background: "linear-gradient(to bottom, #000000, #312e81)",
                                color: "#fff",
                            }}
                            icon={<edu.icon size={20} />}
                            contentStyle={{
                                background: "linear-gradient(-135deg, rgba(0,0,0,0.6), rgba(49,46,129,0.8))",
                                color: "#f0fdf4",
                                boxShadow: "0 3px 6px rgba(0,0,0,0.2)",
                                borderRadius: "22px",
                            }}
                            contentArrowStyle={{
                                borderRight: "7px solid #312e81",
                            }}
                            dateClassName="text-teal-400"
                        >
                            <h3 className="vertical-timeline-element-title text-xl font-semibold">
                                {edu.title}
                            </h3>
                            <h4 className="vertical-timeline-element-subtitle text-sm text-gray-400">
                                {edu.subtitle}
                            </h4>
                        </VerticalTimelineElement>
                    ))}
                </motion.div>
            </VerticalTimeline>
        </section >
    );
}
