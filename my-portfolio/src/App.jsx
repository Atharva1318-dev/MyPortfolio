import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FloatingLogos from "./components/FloatingLogos";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Project from "./components/Project";
import About from "./components/About";

import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark container min-w-screen" : "container  min-w-screen"}>
      <FloatingLogos></FloatingLogos>
      <div className="min-h-screen hero-gradient transition-colors">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero />
        <About />
        <Education />
        <Skills />
        <Project />
      </div>
    </div>
  );
}

export default App;