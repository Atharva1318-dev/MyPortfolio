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
    }, 3350); // adjust time as needed

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
    <div
      className={`w-full min-h-screen transition-colors duration-290 ${darkMode
        ? "bg-gradient-to-br from-black to-indigo-950"
        : "bg-[#FAFAFA]" // Ultra clean off-white background
        }`}
    >

      {!darkMode && (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-200/30 blur-[100px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-200/30 blur-[100px]" />
          <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] rounded-full bg-green-200/20 blur-[100px]" />
        </div>
      )}
      <FloatingLogos darkMode={darkMode}></FloatingLogos>
      <div className="relative z-10 min-h-screen hero-gradient transition-colors">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="overflow-x-hidden">
          <Hero darkMode={darkMode} />
          <About darkMode={darkMode} />
          <Education darkMode={darkMode} />
          <Skills darkMode={darkMode} />
          <Project darkMode={darkMode} />
          <Contact darkMode={darkMode} />
        </main>
      </div>
    </div>
  );
}

export default App;