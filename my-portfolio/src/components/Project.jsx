import { useState, useRef, useEffect } from "react";
import { ExternalLink, Github } from "lucide-react";

export default function MyProjects() {
    const [hovered, setHovered] = useState(null);

    // create refs for each video
    const video1Ref = useRef(null);
    const video2Ref = useRef(null);
    const video3Ref = useRef(null);
    const video4Ref = useRef(null);

    // set playback speed once videos mount
    useEffect(() => {
        [video1Ref, video2Ref, video3Ref, video4Ref].forEach((ref) => {
            if (ref.current) ref.current.playbackRate = 1.85;
        });
    }, []);

    return (
        <section id="projects" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
            <h1 className="text-center text-2xl md:text-4xl font-bold text-green-400 mb-12">
                My Projects
            </h1>
            <div className="max-w-7xl mx-auto space-y-20">
                {/* Row 1: Video Left, Text Right */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
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
                                    <Github></Github>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="self-start space-y-4 pt-5">
                        <h3 className="text-2xl font-bold text-green-400">Wanderlust</h3>
                        <p className="text-purple-300 text-sm">January 2025</p>
                        <p className="text-gray-300">
                            Wanderlust is a travel property booking website inspired by
                            Airbnb, designed to offer a seamless platform for users to
                            create, view, update and delete property listings. The project
                            features an intuitive interface, interactive maps and a robust
                            review system.
                        </p>
                    </div>
                </div>

                <hr className="visible md:hidden w-3/4 h-0.5 mx-auto bg-gradient-to-r from-indigo-900 via-green-400 to-indigo-900" />

                {/* Row 2: Text Left, Video Right */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div className="self-start space-y-4 pt-5 lg:order-1 order-2">
                        <h3 className="text-2xl font-bold text-green-400">EasyStock</h3>
                        <p className="text-purple-300 text-sm">December 2024</p>
                        <p className="text-gray-300">
                            EasyStock is a lightweight stock trading website designed for
                            users to buy and sell stocks seamlessly. It uses MongoDB to store
                            data dynamically, supporting buy/sell orders, stock details, and
                            holdings management.
                        </p>
                    </div>
                    <div
                        className="relative overflow-hidden rounded-2xl aspect-video bg-gradient-to-br from-gray-800 to-gray-900 group lg:order-2 order-1 hover:shadow-indigo-900 shadow-md"
                        onMouseEnter={() => setHovered(2)}
                        onMouseLeave={() => setHovered(null)}
                    >
                        <video
                            ref={video2Ref}
                            src="/EasyStock.mp4"
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
                                    <Github></Github>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="visible md:hidden w-3/4 h-0.5 mx-auto bg-gradient-to-r from-indigo-900 via-green-400 to-indigo-900" />

                {/* Row 3: Video Left, Text Right */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div
                        className="relative overflow-hidden rounded-2xl aspect-video bg-gradient-to-br from-purple-600/20 to-pink-600/20 group hover:shadow-indigo-900 shadow-md"
                        onMouseEnter={() => setHovered(3)}
                        onMouseLeave={() => setHovered(null)}
                    >
                        <video
                            ref={video3Ref}
                            src="/EduWorld.mp4"
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
                                    <Github></Github>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="self-start pt-5 space-y-4">
                        <h3 className="text-2xl font-bold text-green-400">
                            EduWorld All-in-One Digital Campus Platform
                        </h3>
                        <p className="text-purple-300 text-sm">April 2025</p>
                        <p className="text-gray-300">
                            EduWorld unifies essential campus services. Built on MERN with
                            Tailwind & Material UI, featuring JWT auth, Cloudinary storage,
                            and Twilio integration.
                        </p>
                    </div>
                </div>

                <hr className="visible md:hidden w-3/4 h-0.5 mx-auto bg-gradient-to-r from-indigo-900 via-green-400 to-indigo-900" />

                {/* Row 4: Text Left, Video Right */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div className="self-start pt-10 space-y-4 lg:order-1 order-2">
                        <h3 className="text-2xl font-bold text-green-400">Razer redesigned</h3>
                        <p className="text-purple-300 text-sm">March 2025</p>
                        <p className="text-gray-300">
                            Reimagined landing page for Razer – designed as part of the MockUpp 2.0 frontend hackathon at my college. The challenge was to transform a landing page into an immersive brand experience.
                        </p>
                    </div>
                    <div
                        className="relative overflow-hidden rounded-2xl aspect-video bg-gradient-to-br from-gray-800 to-gray-900 group lg:order-2 order-1 hover:shadow-indigo-900 shadow-md"
                        onMouseEnter={() => setHovered(4)}
                        onMouseLeave={() => setHovered(null)}
                    >
                        <video
                            ref={video4Ref}
                            src="/razer.mp4"
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
                                    <Github></Github>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}