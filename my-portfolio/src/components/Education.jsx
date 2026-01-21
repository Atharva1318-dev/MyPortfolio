import React, { useRef, useEffect } from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";

import { GraduationCap, University, School } from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const educationData = [
    {
        date: "2023 – 2027",
        title: "Thadomal Shahani Engineering College",
        subtitle: "B.E. in Computer Engineering — CGPA 9.53",
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
    const timelineRef = useRef(null);

    useGSAP(() => {
        gsap.from(".timeline-entry", {
            y: 30, // Reduced from 50
            opacity: 0,
            duration: 1,
            ease: "power2.out", // Smoother ease
            stagger: 0.3, // Slightly slower stagger
            scrollTrigger: {
                trigger: timelineRef.current,
                start: "top 75%",
                toggleActions: "play none none reverse"
            },
        });

        gsap.utils.toArray(".timeline-entry").forEach((el) => {
            el.addEventListener("mouseenter", () => {
                gsap.to(el, { scale: 1.01, duration: 0.3, ease: "power2.out" }); // Less subtle scale
            });
            el.addEventListener("mouseleave", () => {
                gsap.to(el, { scale: 1, duration: 0.3, ease: "power2.out" });
            });
        });
    }, []);

    return (
        <section id="education" className="px-2 md:px-8 py-12">
            <h1 className={`text-center text-2xl md:text-4xl font-bold mb-2 ${darkMode ? "text-green-400" : "text-green-600"}`}>
                Education
            </h1>
            <div className="w-26 md:w-36 h-[0.8px] bg-gradient-to-r from-green-500 to-indigo-900 mx-auto mb-6"></div>
            <p
                className={`${darkMode ? "text-gray-300 text-center" : "text-gray-700 text-center"} text-lg max-w-2xl mx-auto mb-8`}
            >
                A timeline of my academic journey
            </p>

            <VerticalTimeline ref={timelineRef}>
                {educationData.map((edu, idx) => (
                    <VerticalTimelineElement
                        key={idx}
                        className="timeline-entry"
                        date={edu.date}
                        iconStyle={{
                            background: darkMode
                                ? "linear-gradient(to bottom, #000000, #312e81)"
                                : idx === 0
                                    ? "linear-gradient(135deg, #3b82f6, #1d4ed8)"
                                    : idx === 1
                                        ? "linear-gradient(135deg, #8b5cf6, #7c3aed)"
                                        : "linear-gradient(135deg, #10b981, #059669)",
                            color: "#fff",
                            boxShadow: darkMode ? "0 4px 12px rgba(0, 0, 0, 0.3)" : "0 8px 24px rgba(0, 0, 0, 0.15)",
                            border: darkMode ? "none" : "3px solid rgba(255, 255, 255, 0.8)",
                        }}
                        icon={<edu.icon size={20} />}
                        contentStyle={{
                            background: darkMode
                                ? "linear-gradient(-135deg, rgba(0,0,0,0.6), rgba(49,46,129,0.8))"
                                : idx === 0
                                    ? "linear-gradient(135deg, rgba(59, 130, 246, 0.08), rgba(147, 197, 253, 0.15))"
                                    : idx === 1
                                        ? "linear-gradient(135deg, rgba(139, 92, 246, 0.08), rgba(196, 181, 253, 0.15))"
                                        : "linear-gradient(135deg, rgba(16, 185, 129, 0.08), rgba(167, 243, 208, 0.15))",
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
                                    ? "7px solid #3b82f6"
                                    : idx === 1
                                        ? "7px solid #8b5cf6"
                                        : "7px solid #10b981",
                        }}
                        dateClassName={darkMode ? "text-teal-400" : "text-blue-500"}
                    >
                        <h3 className={`vertical-timeline-element-title text-xl font-semibold ${darkMode ? "text-white" : "text-slate-800"}`}>
                            {edu.title}
                        </h3>
                        <h4 className={`vertical-timeline-element-subtitle text-sm ${darkMode ? "text-gray-400" : "text-slate-600 font-medium"}`}>
                            {edu.subtitle}
                        </h4>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </section>
    );
}