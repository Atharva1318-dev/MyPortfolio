import { useState, useRef, useEffect } from "react";
import { ExternalLink, Github } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ProjectTextCard from "./ProjectTextCard";
import ProjectVideoCard from "./ProjectVideoCard";



export default function MyProjects({ darkMode }) {
    const [hovered, setHovered] = useState(null);
    const sectionRef = useRef(null);


    const video1Ref = useRef(null);
    const video2Ref = useRef(null);
    const video3Ref = useRef(null);
    const video4Ref = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {

        // this will combine all the elements having .left class into an array and then apply gsap for each of them
        gsap.utils.toArray(".left").forEach((elem) => {
            gsap.from(elem, {
                x: -200,
                opacity: 0,
                duration: 1.6,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: elem,
                    start: "top 60%",
                    end: "bottom 50%",
                    scrub: true,
                    toggleActions: "play none none reverse",
                },
            });
        });

        // this will combine all the elements having .right class into an array and then apply gsap for each of them
        gsap.utils.toArray(".right").forEach((elem) => {
            gsap.from(elem, {
                x: 200,
                opacity: 0,
                duration: 1.3,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: elem,
                    start: "top 80%",
                    end: "bottom 70%",
                    scrub: true,
                    toggleActions: "play none none reverse",
                },
            });
        });
    }, []);

    useEffect(() => {
        [video1Ref, video2Ref, video3Ref, video4Ref].forEach((ref) => {
            if (ref.current) ref.current.playbackRate = 1.85;
        });
    }, []);

    return (
        <section ref={sectionRef} id="projects" className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
            <h1 className={`text-center text-2xl md:text-4xl font-bold mb-2 ${darkMode ? "text-green-400" : "text-green-600"}`}>
                My Projects
            </h1>
            <div className="w-32 md:w-40 h-[0.8px] bg-gradient-to-r from-green-500 to-indigo-900 mx-auto mb-6"></div>
            <p
                className={`${darkMode ? "text-gray-300 text-center" : "text-gray-700 text-center"
                    } text-lg max-w-2xl mx-auto mb-8`}
            >
                A showcase of my hands-on web applications and demos
            </p>

            <div className="max-w-7xl mx-auto space-y-20">

                {/* Row 1 */}
                <div className="left grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <ProjectVideoCard
                        videoSrc="https://res.cloudinary.com/dkpgnq7ym/video/upload/v1767244587/VectorAI_Github_2_lnxyvb.mp4"
                        liveLink="https://vector-ai-pi.vercel.app/"
                        githubLink="https://github.com/Atharva1318-dev/Vector-AI"
                        isHovered={hovered === 1}
                        setHovered={setHovered}
                        index={1}
                        playbackRate={1.45}
                        orderNum={1}
                    />
                    <ProjectTextCard darkMode={darkMode} Title="VectorAI" Date="December 2025" Description="
                            VectorAI is a comprehensive career coaching platform designed to help students and professionals navigate their career paths. It leverages the power of Google's Gemini AI to provide personalized resume feedback, technical revision quizzes, and cover letter generation."></ProjectTextCard>
                </div>

                <hr className={`visible md:hidden w-3/4 h-0.5 mx-auto ${darkMode ? "bg-gradient-to-r from-indigo-900 via-green-400 to-indigo-900" : "bg-gradient-to-r from-sky-50 via-sky-100 to-sky-50"}`} />

                <div className="right grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <ProjectTextCard darkMode={darkMode} Title="Automated Attendance System (SIH 2025)" Date="September 2025" Description="The Automated Attendance System is an AI-driven solution built for rural schools to simplify daily attendance.
It uses facial recognition to mark students present from a single group photo, reducing manual effort and errors.
Teachers can review and verify detected faces before final submission for improved accuracy.
The platform includes role-based dashboards for teachers, principals, and district officers.
Built using Flask, OpenCV, Dlib, PostgreSQL, and Twilio, it ensures secure, fast, and reliable attendance management."></ProjectTextCard>
                    <ProjectVideoCard
                        videoSrc="https://res.cloudinary.com/dkpgnq7ym/video/upload/v1764311987/Sih_github_video_qfxrvi.mp4"
                        liveLink="https://myportfolio-n5v7.onrender.com/"
                        githubLink="https://github.com/Aarjav05/sih_2025/tree/main"
                        isHovered={hovered === 2}
                        setHovered={setHovered}
                        index={2}
                        playbackRate={1.05}
                        orderNum={2}
                    />
                </div>
                <div className="left grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <ProjectVideoCard
                        videoSrc="https://res.cloudinary.com/dkpgnq7ym/video/upload/v1752906607/Screen_Recording_2025-07-19_at_11_pmirwm.mp4"
                        liveLink="https://wanderlust-p701.onrender.com"
                        githubLink="https://github.com/Atharva1318-dev/Wanderlust"
                        isHovered={hovered === 1}
                        setHovered={setHovered}
                        index={1}
                        playbackRate={1.85}
                        orderNum={1}
                    />
                    <ProjectTextCard darkMode={darkMode} Title="Wanderlust" Date="January 2025" Description="                            Wanderlust is a travel property booking website inspired by Airbnb,
                            designed to offer a seamless platform for users to create, view,
                            update and delete property listings. The project features an intuitive
                            interface, interactive maps and a robust review system."></ProjectTextCard>
                </div>

                <hr className={`visible md:hidden w-3/4 h-0.5 mx-auto ${darkMode ? "bg-gradient-to-r from-indigo-900 via-green-400 to-indigo-900" : "bg-gradient-to-r from-sky-50 via-sky-100 to-sky-50"}`} />

                {/* Row 3 */}
                <div className="right grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <ProjectTextCard darkMode={darkMode} Title="EduWorld All-in-One Digital Campus Platform" Date="April 2025" Description="
                                                        EduWorld unifies essential campus services. Built on MERN with Tailwind &
                            Material UI, featuring JWT auth, Cloudinary storage, and Twilio integration."></ProjectTextCard>
                    <ProjectVideoCard
                        videoSrc="https://res.cloudinary.com/dkpgnq7ym/video/upload/v1752415540/EduWorld_oggqfi.mp4"
                        liveLink="https://eduworld-w2bj.onrender.com"
                        githubLink="https://github.com/Atharva1318-dev/mprSem4"
                        isHovered={hovered === 3}
                        setHovered={setHovered}
                        index={3}
                        playbackRate={1.85}
                        orderNum={1}
                    />
                </div>

                <hr className={`visible md:hidden w-3/4 h-0.5 mx-auto ${darkMode ? "bg-gradient-to-r from-indigo-900 via-green-400 to-indigo-900" : "bg-gradient-to-r from-sky-50 via-sky-100 to-sky-50"}`} />

                {/* Row 4 */}
                <div className="left grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <ProjectVideoCard
                        videoSrc="https://res.cloudinary.com/dkpgnq7ym/video/upload/v1752415538/razer_qs0lod.mp4"
                        liveLink="https://razer-hackathon-frontend.onrender.com"
                        githubLink="https://github.com/Atharva1318-dev/razer-landing-page-redesign"
                        isHovered={hovered === 4}
                        setHovered={setHovered}
                        index={4}
                        playbackRate={1.85}
                        orderNum={1}
                    />
                    <ProjectTextCard darkMode={darkMode} Title="Razer redesigned" Date="March 2025" Description="Reimagined landing page for Razer – designed as part of the MockUpp 2.0
                            frontend hackathon at my college. The challenge was to transform a landing
                            page into an immersive brand experience."></ProjectTextCard>
                </div>
            </div>
        </section>
    );
}