import React from "react";
import { Typewriter } from "react-simple-typewriter";

const TypedTagline = () => {
    return (
        <h2 className="text-2xl md:text-3xl font-medium">
            <Typewriter
                words={[
                    "Full Stack Developer",
                    "Computer Engineering Student"
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
            />
        </h2>
    );
};

export default TypedTagline;