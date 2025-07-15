import { useState, useRef, useEffect } from "react";
import { ExternalLink, Github } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";


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
                duration: 1.2,
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
        <section ref={sectionRef} id="projects" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <h1 className={`text-center text-2xl md:text-3xl font-bold mb-3 ${darkMode ? "text-green-400" : "text-green-600"}`}>
                My Projects
            </h1>
            <div className="w-24 h-0.5 bg-gradient-to-r from-green-500 to-indigo-900 mx-auto mb-6"></div>
            <p
                className={`${darkMode ? "text-gray-300 text-center" : "text-gray-700 text-center"
                    } text-lg max-w-2xl mx-auto mb-8`}
            >
                A showcase of my hands-on web applications and demos
            </p>

            <div className="max-w-7xl mx-auto space-y-20">

                <div className="left grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div
                        className="relative overflow-hidden rounded-2xl aspect-video bg-gradient-to-br from-purple-600/20 to-pink-600/20 group hover:shadow-indigo-900 shadow-md"
                        onMouseEnter={() => setHovered(1)}
                        onMouseLeave={() => setHovered(null)}
                    >
                        <video
                            ref={video1Ref}
                            src="/wanderlust-demo.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div
                            className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${hovered === 1 ? "opacity-100" : "opacity-0"
                                }`}
                        >
                            <div className="flex h-full items-center justify-center space-x-4">
                                <a
                                    href="https://wanderlust-p701.onrender.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 bg-white/90 text-purple-900 rounded-full"
                                >
                                    <ExternalLink />
                                </a>
                                <a
                                    href="https://github.com/Atharva1318-dev/Wanderlust"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 bg-purple-600/90 text-white rounded-full"
                                >
                                    <Github />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="self-start space-y-4 pt-5">
                        <h3 className="text-2xl font-bold text-green-400">Wanderlust</h3>
                        <p className={`${darkMode ? "text-purple-300" : "text-purple-800"} text-sm`}>
                            January 2025
                        </p>
                        <p className={`${darkMode ? "text-gray-300" : "text-gray-800"}`}>
                            Wanderlust is a travel property booking website inspired by Airbnb,
                            designed to offer a seamless platform for users to create, view,
                            update and delete property listings. The project features an intuitive
                            interface, interactive maps and a robust review system.
                        </p>
                    </div>
                </div>

                <hr className="visible md:hidden w-3/4 h-0.5 mx-auto bg-gradient-to-r from-indigo-900 via-green-400 to-indigo-900" />

                {/* Row 2 */}
                <div className="right grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div className="self-start space-y-4 pt-5 lg:order-1 order-2">
                        <h3 className="text-2xl font-bold text-green-400">EasyStock</h3>
                        <p className={`${darkMode ? "text-purple-300" : "text-purple-800"} text-sm`}>
                            December 2024
                        </p>
                        <p className={`${darkMode ? "text-gray-300" : "text-gray-800"}`}>
                            EasyStock is a lightweight stock trading website designed for users
                            to buy and sell stocks seamlessly. It uses MongoDB to store data
                            dynamically, supporting buy/sell orders, stock details, and holdings
                            management.
                        </p>
                    </div>
                    <div
                        className="relative overflow-hidden rounded-2xl aspect-video bg-gradient-to-br from-gray-800 to-gray-900 group lg:order-2 order-1 hover:shadow-indigo-900 shadow-md"
                        onMouseEnter={() => setHovered(2)}
                        onMouseLeave={() => setHovered(null)}
                    >
                        <video
                            ref={video2Ref}
                            src="https://res.cloudinary.com/dkpgnq7ym/video/upload/v1752415554/EasyStock_refoz3.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div
                            className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${hovered === 2 ? "opacity-100" : "opacity-0"
                                }`}
                        >
                            <div className="flex h-full items-center justify-center space-x-4">
                                <a
                                    href="https://easy-stock-frontend.onrender.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 bg-white/90 text-purple-900 rounded-full"
                                >
                                    <ExternalLink />
                                </a>
                                <a
                                    href="https://github.com/Atharva1318-dev/Easy-Stock"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 bg-purple-600/90 text-white rounded-full"
                                >
                                    <Github />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="visible md:hidden w-3/4 h-0.5 mx-auto bg-gradient-to-r from-indigo-900 via-green-400 to-indigo-900" />

                {/* Row 3 */}
                <div className="left grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div
                        className="relative overflow-hidden rounded-2xl aspect-video bg-gradient-to-br from-purple-600/20 to-pink-600/20 group hover:shadow-indigo-900 shadow-md"
                        onMouseEnter={() => setHovered(3)}
                        onMouseLeave={() => setHovered(null)}
                    >
                        <video
                            ref={video3Ref}
                            src="https://res.cloudinary.com/dkpgnq7ym/video/upload/v1752415540/EduWorld_oggqfi.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div
                            className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${hovered === 3 ? "opacity-100" : "opacity-0"
                                }`}
                        >
                            <div className="flex h-full items-center justify-center space-x-4">
                                <a
                                    href="https://eduworld-w2bj.onrender.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 bg-white/90 text-purple-900 rounded-full"
                                >
                                    <ExternalLink />
                                </a>
                                <a
                                    href="https://github.com/Atharva1318-dev/mprSem4"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 bg-purple-600/90 text-white rounded-full"
                                >
                                    <Github />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="self-start pt-5 space-y-4">
                        <h3 className="text-2xl font-bold text-green-400">
                            EduWorld All-in-One Digital Campus Platform
                        </h3>
                        <p className={`${darkMode ? "text-purple-300" : "text-purple-800"} text-sm`}>
                            April 2025
                        </p>
                        <p className={`${darkMode ? "text-gray-300" : "text-gray-800"}`}>
                            EduWorld unifies essential campus services. Built on MERN with Tailwind &
                            Material UI, featuring JWT auth, Cloudinary storage, and Twilio integration.
                        </p>
                    </div>
                </div>

                <hr className="visible md:hidden w-3/4 h-0.5 mx-auto bg-gradient-to-r from-indigo-900 via-green-400 to-indigo-900" />

                {/* Row 4 */}
                <div className="right grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div className="self-start pt-10 space-y-4 lg:order-1 order-2">
                        <h3 className="text-2xl font-bold text-green-400">Razer redesigned</h3>
                        <p className={`${darkMode ? "text-purple-300" : "text-purple-800"} text-sm`}>
                            March 2025
                        </p>
                        <p className={`${darkMode ? "text-gray-300" : "text-gray-800"}`}>
                            Reimagined landing page for Razer – designed as part of the MockUpp 2.0
                            frontend hackathon at my college. The challenge was to transform a landing
                            page into an immersive brand experience.
                        </p>
                    </div>
                    <div
                        className="relative overflow-hidden rounded-2xl aspect-video bg-gradient-to-br from-gray-800 to-gray-900 group lg:order-2 order-1 hover:shadow-indigo-900 shadow-md"
                        onMouseEnter={() => setHovered(4)}
                        onMouseLeave={() => setHovered(null)}
                    >
                        <video
                            ref={video4Ref}
                            src="https://res.cloudinary.com/dkpgnq7ym/video/upload/v1752415538/razer_qs0lod.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div
                            className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${hovered === 4 ? "opacity-100" : "opacity-0"
                                }`}
                        >
                            <div className="flex h-full items-center justify-center space-x-4">
                                <a
                                    href="https://razer-hackathon-frontend.onrender.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 bg-white/90 text-purple-900 rounded-full"
                                >
                                    <ExternalLink />
                                </a>
                                <a
                                    href="https://github.com/Atharva1318-dev/razer-landing-page-redesign"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 bg-purple-600/90 text-white rounded-full"
                                >
                                    <Github />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}