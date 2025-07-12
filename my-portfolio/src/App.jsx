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
    <div className={darkMode ? "container min-w-screen bg-gradient-to-br from-black to-indigo-900" : "container min-w-screen bg-gradient-to-br from-sky-100 to-indigo-100"}>
      <FloatingLogos></FloatingLogos>
      <div className="min-h-screen hero-gradient transition-colors">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Education darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Project darkMode={darkMode} />
      </div>
    </div>
  );
}

export default App;