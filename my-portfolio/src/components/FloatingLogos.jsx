import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

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

const logos = [reactLogo, javaLogo, gsapLogo, htmlLogo, javaLogo, gitLogo, gsapLogo, pythonLogo, pythonLogo, pythonLogo, reactLogo, jsLogo, gitLogo, htmlLogo, cssLogo, mongoLogo, nodeLogo, javaLogo, tailwindLogo, reactLogo, jsLogo, htmlLogo, cssLogo, mongoLogo, nodeLogo, javaLogo, tailwindLogo, reactLogo, htmlLogo, cssLogo, mongoLogo, nodeLogo, javaLogo, tailwindLogo, bootLogo, mongoLogo, nodeLogo, nodeLogo, javaLogo, tailwindLogo, tailwindLogo, tailwindLogo, bootLogo, javaLogo, reactLogo];


export default function FloatingLogos({ darkMode }) {
    const containerRef = useRef(null);

    useGSAP(() => {
        const images = containerRef.current.querySelectorAll("img");

        images.forEach((img) => {
            const driftX = (Math.random() - 0.5) * 100;
            const driftY = (Math.random() - 0.5) * 100;
            const duration = 2 + Math.random() * 10;

            gsap.to(img, {
                x: `+=${driftX}`,
                y: `+=${driftY}`,
                duration: duration,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });

            gsap.to(img, {
                rotation: 360,
                duration: duration * 2,
                repeat: -1,
                ease: "linear"
            });
        });
    }, { scope: containerRef });

    return (
        <div className="min-h-screen fixed inset-0 z-0 overflow-x-hidden" ref={containerRef}>
            {logos.map((src, i) => {
                const top = Math.random() * 100;
                const left = Math.random() * 100;

                return (
                    <img
                        key={i}
                        src={src}
                        alt="Tech Logo"
                        className="absolute w-[38px] h-[38px] md:w-[45px] md:h-[45px] lg:w-[52px] lg:h-[52px]"
                        style={{
                            top: `${top}%`,
                            left: `${left}%`,
                            borderRadius: "12.5px",
                            opacity: darkMode ? 0.58 : 0.75,
                        }}
                    />
                );
            })}
        </div>
    );
}