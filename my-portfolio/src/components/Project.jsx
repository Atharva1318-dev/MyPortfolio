import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ProjectCard from "./ProjectCard";

const projectsData = [
    {
        title: "VectorAI",
        date: "Dec 2025",
        category: "Fullstack | AI",
        description: "A comprehensive career coaching platform helping professionals navigate paths using Google's Gemini AI.",
        features: [
            "AI-powered resume & cover letter generation",
            "Automated weekly industry insight updates",
            "Mock interview quizzes & Cashfree payments"
        ],
        tech: ["Next.js", "Gemini AI", "Tailwind", "PostgreSQL"],
        moreTech: 3,
        videoSrc: "https://res.cloudinary.com/dkpgnq7ym/video/upload/v1767244587/VectorAI_Github_2_lnxyvb.mp4",
        liveLink: "https://vector-ai-pi.vercel.app/",
        githubLink: "https://github.com/Atharva1318-dev/Vector-AI",
        playbackRate: 1.45,
        isDisabled: false
    },
    {
        title: "Automated Attendance",
        date: "Sep 2025",
        category: "AI | Vision",
        description: "AI-driven solution for rural schools to simplify daily attendance using group photos.",
        features: [
            "One-shot group photo facial recognition",
            "Offline-first design with auto-sync",
            "Role-based access & SMS alerts"
        ],
        tech: ["Flask", "OpenCV", "PostgreSQL", "Twilio"],
        moreTech: 2,
        videoSrc: "https://res.cloudinary.com/dkpgnq7ym/video/upload/v1764311987/Sih_github_video_qfxrvi.mp4",
        liveLink: "", // Empty or missing link triggers disabled state automatically
        githubLink: "https://github.com/Aarjav05/sih_2025/tree/main",
        playbackRate: 1.05,
        isDisabled: true
    },
    {
        title: "Wanderlust",
        date: "Jan 2025",
        category: "Fullstack | Travel",
        description: "Airbnb-inspired travel booking platform for seamless property management and booking.",
        features: [
            "Comprehensive property listing management",
            "Interactive maps for location search",
            "User-driven review & rating system"
        ],
        tech: ["React", "Express.js", "MongoDB", "Mapbox"],
        moreTech: 4,
        videoSrc: "https://res.cloudinary.com/dkpgnq7ym/video/upload/v1752906607/Screen_Recording_2025-07-19_at_11_pmirwm.mp4",
        liveLink: "https://wanderlust-p701.onrender.com",
        githubLink: "https://github.com/Atharva1318-dev/Wanderlust",
        playbackRate: 1.85,
        isDisabled: false
    },
    {
        title: "EduWorld Platform",
        date: "Apr 2025",
        category: "Fullstack | EdTech",
        description: "Unified digital campus platform streamlining essential services for students and faculty.",
        features: [
            "Digital railway concessions & canteen ordering",
            "Shared e-calendar for event management",
            "Integrated in-browser code editor"
        ],
        tech: ["MERN Stack", "Tailwind", "MUI", "JWT"],
        moreTech: 2,
        videoSrc: "https://res.cloudinary.com/dkpgnq7ym/video/upload/v1752415540/EduWorld_oggqfi.mp4",
        liveLink: "https://eduworld-w2bj.onrender.com",
        githubLink: "https://github.com/Atharva1318-dev/mprSem4",
        playbackRate: 1.85,
        isDisabled: true
    },
    {
        title: "Razer Redesigned",
        date: "Mar 2025",
        category: "Frontend | UX",
        description: "Reimagined landing page for Razer transforming the site into an immersive brand experience.",
        features: [
            "Immersive, high-fidelity gaming aesthetic",
            "Scroll-triggered GSAP animations",
            "Fully responsive modern interface"
        ],
        tech: ["React", "GSAP", "Tailwind", "Vite"],
        moreTech: 1,
        videoSrc: "https://res.cloudinary.com/dkpgnq7ym/video/upload/v1752415538/razer_qs0lod.mp4",
        liveLink: "https://razer-hackathon-frontend.onrender.com",
        githubLink: "https://github.com/Atharva1318-dev/razer-landing-page-redesign",
        playbackRate: 1.85,
        isDisabled: false
    }
];

export default function MyProjects({ darkMode }) {
    const sectionRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        const cards = gsap.utils.toArray(".project-card", sectionRef.current);

        cards.forEach((card, i) => {
            gsap.from(card, {
                y: 30,
                opacity: 0,
                duration: 0.7,
                ease: "power3.out",
                delay: i * 0.06,
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
            });
        });
    }, { scope: sectionRef });


    return (
        <section ref={sectionRef} id="projects" className="min-h-screen py-16 md:py-24 px-4 sm:px-6 lg:px-6 overflow-x-hidden">
            <h1 className={`text-center text-3xl md:text-4xl lg:text-5xl font-semibold mb-2 ${darkMode ? "text-green-400" : "text-green-600"}`}>
                My Projects
            </h1>
            <div className="w-32 md:w-48 h-[0.8px] bg-gradient-to-r from-green-500 to-indigo-900 mx-auto mb-6"></div>
            <p
                className={`${darkMode ? "text-gray-300 text-center" : "text-gray-700 text-center"
                    } text-lg max-w-2xl mx-auto mb-8`}
            >
                A showcase of my hands-on web applications and demos
            </p>


            {/* Projects Grid */}
            <div className="projects-grid max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                {projectsData.map((project, index) => (
                    <ProjectCard
                        key={index}
                        project={project}
                        darkMode={darkMode}
                    />
                ))}
            </div>
        </section>
    );
}