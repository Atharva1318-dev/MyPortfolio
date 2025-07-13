import React from "react";
import { motion } from "framer-motion";

import reactLogo from "../assets/logos/react.png";
import jsLogo from "../assets/logos/javascript.png";
import htmlLogo from "../assets/logos/html5.png";
import cssLogo from "../assets/logos/css3.svg";
import mongoLogo from "../assets/logos/mongodb-icon-1.svg";
import nodeLogo from "../assets/logos/nodejs.png";
import javaLogo from "../assets/logos/java.png";
import tailwindLogo from "../assets/logos/tailwind.svg";
import bootLogo from "../assets/logos/boot.svg.png";
import pythonLogo from "../assets/logos/Python.png";
import gsapLogo from "../assets/logos/gsap.webp";
import gitLogo from "../assets/logos/git.png";

const logos = [gsapLogo, gitLogo, gsapLogo, pythonLogo, pythonLogo, pythonLogo, reactLogo, jsLogo, gitLogo, htmlLogo, cssLogo, mongoLogo, nodeLogo, javaLogo, tailwindLogo, reactLogo, jsLogo, htmlLogo, cssLogo, mongoLogo, nodeLogo, javaLogo, tailwindLogo, reactLogo, htmlLogo, cssLogo, mongoLogo, nodeLogo, javaLogo, tailwindLogo, bootLogo, mongoLogo, nodeLogo, nodeLogo, javaLogo, tailwindLogo, tailwindLogo, tailwindLogo, bootLogo];

export default function FloatingLogos() {
    return (
        <div className="min-h-screen fixed inset-0 z-0 overflow-hidden">
            {logos.map((src, i) => {
                const randomTop = Math.random() * 100;
                const randomLeft = Math.random() * 100;

                // Random drift range: -50 to +50 px for both axes
                const driftX = (Math.random() - 0.5) * 100;
                const driftY = (Math.random() - 0.5) * 100;

                // Random speeds
                const duration = 4 + Math.random() * 10;

                return (
                    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                        <motion.img
                            key={i}
                            src={src}
                            alt="Tech Logo"
                            className="absolute"
                            style={{
                                top: `${randomTop}%`,
                                left: `${randomLeft}%`,
                                width: "42px",
                                height: "42px",
                                borderRadius: "10px",
                                opacity: 0.57,
                            }}
                            animate={{
                                x: [0, driftX, 0, -driftX, 0],
                                y: [0, driftY, 0, -driftY, 0],
                                rotate: [0, 360],
                            }}
                            transition={{
                                x: {
                                    duration: duration,
                                    repeat: Infinity,
                                    repeatType: "mirror",
                                    ease: "easeInOut",
                                },
                                y: {
                                    duration: duration,
                                    repeat: Infinity,
                                    repeatType: "mirror",
                                    ease: "easeInOut",
                                },
                                rotate: {
                                    duration: duration * 2,
                                    repeat: Infinity,
                                    ease: "linear",
                                },
                            }}
                        />
                    </div>
                );
            })}
        </div>
    );
}
