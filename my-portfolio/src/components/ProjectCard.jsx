import React, { useRef, useEffect, useState } from "react";
import { ExternalLink, Github, Zap, Calendar, Ban } from "lucide-react";

export default function ProjectCard({ project, darkMode }) {
    const videoRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    // Handle video playback speed
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = project.playbackRate || 1.5;
        }
    }, [project.playbackRate]);

    const isDemoDisabled = project.isDisabled || !project.liveLink || project.liveLink === "#";


    const cardBg = darkMode
        ? "bg-slate-900/60 backdrop-blur-md border-white/10 hover:border-indigo-500/50 hover:shadow-indigo-500/10"
        : "bg-white border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(79,70,229,0.15)] hover:border-indigo-100";

    const textColor = darkMode ? "text-gray-400" : "text-slate-500";
    const titleColor = darkMode ? "text-white" : "text-slate-900";
    const featureIconColor = darkMode ? "text-indigo-400" : "text-indigo-600";
    // Light mode pills: Distinct light purple bg
    const pillBg = darkMode ? "bg-indigo-500/10 text-indigo-300 border-indigo-500/20" : "bg-indigo-50 text-indigo-700 border-indigo-100";

    return (
        <div
            className={`project-card group relative flex flex-col rounded-xl border transition-all duration-500 hover:-translate-y-2 ${cardBg} overflow-hidden h-full shadow-lg`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* --- Media Section --- */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-900">
                <video
                    ref={videoRef}
                    src={project.videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                    <span className={`px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase rounded-full backdrop-blur-md border ${darkMode ? "bg-black/60 text-white border-white/10" : "bg-white/90 text-gray-900 border-gray-200"}`}>
                        {project.category}
                    </span>
                </div>
            </div>

            {/* --- Content Body --- */}
            <div className="flex flex-col flex-1 p-4 space-y-3">

                {/* Header */}
                <div className="space-y-1">
                    <div className="flex justify-between items-start">
                        <h3 className={`text-lg font-bold font-sans tracking-tight ${titleColor}`}>
                            {project.title}
                        </h3>
                        {/* Status Icon Top Right */}
                        {isDemoDisabled ? (
                            <div className={`p-1.5 rounded-full ${darkMode ? "text-gray-600" : "text-gray-300"}`} title="Demo not available">
                                <Ban size={16} />
                            </div>
                        ) : (
                            <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noreferrer"
                                className={`p-1.5 rounded-full transition-colors ${darkMode ? "hover:bg-white/10 text-gray-400 hover:text-white" : "hover:bg-gray-100 text-gray-500 hover:text-black"}`}
                            >
                                <ExternalLink size={16} />
                            </a>
                        )}
                    </div>

                    <div className="flex items-center gap-1.5 text-[12.5px] font-mono text-slate-400">
                        <Calendar size={10} />
                        <span>{project.date}</span>
                    </div>

                    <p className={`text-xs leading-relaxed line-clamp-2 ${textColor}`}>
                        {project.description}
                    </p>
                </div>

                {/* Key Features */}
                <div className="space-y-2">
                    <div className={`flex items-center gap-1.5 text-xs font-semibold ${featureIconColor}`}>
                        <Zap size={14} />
                        <span>Key Features</span>
                    </div>
                    <ul className="space-y-1">
                        {project.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className={`flex items-start gap-1.5 text-[13px] ${textColor}`}>
                                <span className={`mt-1.5 block h-1 w-1 rounded-full ${darkMode ? "bg-gray-600" : "bg-gray-400"}`}></span>
                                <span className="line-clamp-1">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Tech Pills */}
                <div className="mt-auto pt-3 border-t border-dashed border-gray-700/30">
                    <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((tech, idx) => (
                            <span
                                key={idx}
                                className={`text-[11px] px-2 py-0.5 rounded font-medium border ${pillBg}`}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                    {/* Conditional Demo Button */}
                    {isDemoDisabled ? (
                        <span
                            className={`flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold cursor-not-allowed opacity-50 select-none ${darkMode
                                ? "bg-white/5 text-gray-500 border border-white/5"
                                : "bg-gray-100 text-gray-400 border border-gray-200"
                                }`}
                            title="Deployment unavailable"
                        >
                            <ExternalLink size={14} /> Demo
                        </span>
                    ) : (
                        <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noreferrer"
                            className={`flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold transition-all ${darkMode
                                ? "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                                : "bg-gray-50 hover:bg-gray-100 text-gray-900 border border-gray-200"
                                }`}
                        >
                            <ExternalLink size={14} /> Demo
                        </a>
                    )}

                    <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        className={`flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold transition-all ${darkMode
                            ? "bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-900/20"
                            : "bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-200"
                            }`}
                    >
                        <Github size={14} /> Code
                    </a>
                </div>
            </div>
        </div>
    );
}