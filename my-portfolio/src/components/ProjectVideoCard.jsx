import React, { useRef, useEffect } from "react";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectVideoCard({ videoSrc, liveLink, githubLink, isHovered, setHovered, index, playbackRate = 1.85, orderNum }) {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = playbackRate;
        }
    }, [playbackRate]);

    return (
        <div
            className="relative overflow-hidden rounded-2xl aspect-video bg-gradient-to-br from-gray-800 to-gray-900 group lg:order-{orderNum} order-1 hover:shadow-indigo-900 shadow-md"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
        >
            <video
                ref={videoRef}
                src={videoSrc}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div
                className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"
                    }`}
            >
                <div className="flex h-full items-center justify-center space-x-4">
                    <a
                        href={liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-white/90 text-purple-900 rounded-full"
                    >
                        <ExternalLink />
                    </a>
                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-purple-600/90 text-white rounded-full"
                    >
                        <Github />
                    </a>
                </div>
            </div>
        </div>
    );
}