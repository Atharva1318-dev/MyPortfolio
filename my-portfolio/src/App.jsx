import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FloatingLogos from "./components/FloatingLogos";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Project from "./components/Project";
import About from "./components/About";
import Contact from "./components/Contact";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3600); // adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <DotLottieReact
          src="https://lottie.host/ecb36bc5-ec37-452c-b483-a550d8582032/0SJ1wf8sW2.lottie"
          autoplay
          loop
          // style={{ width: 400, height: 400 }}
          className="md:w-[400px] md:h-[400px] w-60 h-60"
        />
      </div>
    );
  }

  return (
    <div className={darkMode ? "container min-w-screen bg-gradient-to-br from-black to-indigo-900" : "container min-w-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50"}>
      <FloatingLogos darkMode={darkMode}></FloatingLogos>
      <div className="relative z-10 min-h-screen hero-gradient transition-colors">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Education darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Project darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </div>
    </div>
  );
}

export default App;