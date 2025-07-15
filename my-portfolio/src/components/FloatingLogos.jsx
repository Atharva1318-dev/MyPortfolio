import React from "react";
import { motion } from "framer-motion";

let reactLogo = "https://res.cloudinary.com/dkpgnq7ym/image/upload/v1752604990/react_oe0be6.png";
let jsLogo = "https://res.cloudinary.com/dkpgnq7ym/image/upload/v1752604989/javascript_ev9mvq.png";
let htmlLogo = "https://res.cloudinary.com/dkpgnq7ym/image/upload/v1752604989/html5_n8e0nf.png";
let cssLogo = "https://res.cloudinary.com/dkpgnq7ym/image/upload/v1752604988/css3_viaqna.svg";
let mongoLogo = "https://res.cloudinary.com/dkpgnq7ym/image/upload/v1752604989/mongodb-icon-1_ewaept.svg";
let nodeLogo = "https://res.cloudinary.com/dkpgnq7ym/image/upload/v1752604989/nodejs_dzhgc1.png";
let javaLogo = "https://res.cloudinary.com/dkpgnq7ym/image/upload/v1752604988/java_ob43or.png";
let tailwindLogo = "https://res.cloudinary.com/dkpgnq7ym/image/upload/v1752604990/tailwind_hgejgq.svg";
let bootLogo = "https://res.cloudinary.com/dkpgnq7ym/image/upload/v1752604988/boot.svg_ggksfp.png";
let pythonLogo = "https://res.cloudinary.com/dkpgnq7ym/image/upload/v1752604989/Python_a8kvsd.png";
let gsapLogo = "https://res.cloudinary.com/dkpgnq7ym/image/upload/v1752604988/gsap_enssxy.webp";
let gitLogo = "https://res.cloudinary.com/dkpgnq7ym/image/upload/v1752604988/git_apyqbs.png";

const logos = [reactLogo, gsapLogo, htmlLogo, javaLogo, gitLogo, gsapLogo, pythonLogo, pythonLogo, pythonLogo, reactLogo, jsLogo, gitLogo, htmlLogo, cssLogo, mongoLogo, nodeLogo, javaLogo, tailwindLogo, reactLogo, jsLogo, htmlLogo, cssLogo, mongoLogo, nodeLogo, javaLogo, tailwindLogo, reactLogo, htmlLogo, cssLogo, mongoLogo, nodeLogo, javaLogo, tailwindLogo, bootLogo, mongoLogo, nodeLogo, nodeLogo, javaLogo, tailwindLogo, tailwindLogo, tailwindLogo, bootLogo, javaLogo, reactLogo];

export default function FloatingLogos() {
    return (
        <div className="min-h-screen fixed inset-0 z-0 overflow-x-hidden">
            {logos.map((src, i) => {
                const randomTop = Math.random() * 100;
                const randomLeft = Math.random() * 100;

                // Random drift range: -50 to +50 px for both axes
                const driftX = (Math.random() - 0.5) * 100;
                const driftY = (Math.random() - 0.5) * 100;

                // Random speeds
                const duration = 4 + Math.random() * 10;

                return (
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
                            opacity: 0.61,
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
                );
            })}
        </div>
    );
}