import React, { useEffect, useState } from 'react';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { User, FileText, Box, Code2, BookOpen, Mail, Moon, Sun } from 'lucide-react';
import BoxMUI from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import "./Navbar.css";

export default function Navbar({ darkMode, setDarkMode }) {

    useGSAP(() => {
        gsap.from('.nav-links', {
            y: -70,
            duration: 0.65,
            delay: 0.1,
            stagger: 0.25
        });
    }, []);

    const [drawerOpen, setDrawerOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("home");

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-50% 0px -50% 0px',
            threshold: 0
        };

        const observerCallback = (entries) => {
            let foundActiveSection = false;
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;
                    setActiveTab(sectionId);
                    foundActiveSection = true;
                }
            });
            // If no section is in view (hero/home section), reset activeTab
            if (!foundActiveSection) {
                setActiveTab("");
            }
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Observe all sections
        const sections = document.querySelectorAll('#about, #education, #skills, #projects, #contact');
        sections.forEach(section => observer.observe(section));

        return () => {
            sections.forEach(section => observer.unobserve(section));
        };
    }, []);

    const list = (
        <BoxMUI
            sx={{
                width: 250,
                bgcolor: darkMode ? 'rgba(20,20,30,0.9)' : 'rgba(255,255,255,0.95)',
                color: darkMode ? 'white' : '#222',
                height: '100%',
            }}
            role="presentation"
            className="p-4 flex flex-col justify-between"
        >
            <List className="space-y-2">
                <ListItem disablePadding>
                    <a
                        href="#about"
                        onClick={(e) => {
                            setActiveTab("about");
                            e.preventDefault();
                            setDrawerOpen(false);
                            setTimeout(() => {
                                document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
                            }, 300); // must match Drawer close animation delay
                        }}
                        className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-gradient-to-r ${darkMode ? 'from-purple-600 to-indigo-900' : 'from-green-200 to-green-400'
                            } transition-colors`}
                    >
                        <User className={`w-5 h-5 ${darkMode ? 'text-green-400' : 'text-green-600'}`} /> About Me
                    </a>
                </ListItem>
                <Divider className="border-gray-700" />

                {/* <ListItem disablePadding>
                    <a
                        href="/AtharvaJadhav_Resume.pdf"
                        download
                        className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-gradient-to-r ${darkMode ? 'from-purple-600 to-indigo-900' : 'from-green-200 to-green-400'
                            } transition-colors`}
                    >
                        <FileText className={`w-5 h-5 ${darkMode ? 'text-green-400' : 'text-green-600'}`} /> Resume
                    </a>
                </ListItem>
                <Divider className="border-gray-700" /> */}

                <ListItem disablePadding>
                    <a
                        href="#projects"
                        onClick={(e) => {
                            e.preventDefault();
                            setActiveTab("projects");
                            setDrawerOpen(false);
                            setTimeout(() => {
                                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                            }, 300); // must match Drawer close animation delay
                        }}
                        className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-gradient-to-r ${darkMode ? 'from-purple-600 to-indigo-900' : 'from-green-200 to-green-400'
                            } transition-colors`}
                    >
                        <i className={` ${darkMode ? 'text-green-400' : 'text-green-600'} fa-solid fa-laptop-code`}></i> Projects
                    </a>
                </ListItem>
                <Divider className="border-gray-700" />

                <ListItem disablePadding>
                    <a
                        href="#skills"
                        onClick={(e) => {
                            e.preventDefault();
                            setActiveTab("skills");
                            setDrawerOpen(false);
                            setTimeout(() => {
                                document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' });
                            }, 300); // must match Drawer close animation delay
                        }}
                        className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-gradient-to-r ${darkMode ? 'from-purple-600 to-indigo-900' : 'from-green-200 to-green-400'
                            } transition-colors`}
                    >
                        <Code2 className={`w-5 h-5 ${darkMode ? 'text-green-400' : 'text-green-600'}`} /> Skills
                    </a>
                </ListItem>
                <Divider className="border-gray-700" />

                <ListItem disablePadding>
                    <a
                        href="#education"
                        onClick={(e) => {
                            e.preventDefault();
                            setActiveTab("education");
                            setDrawerOpen(false);
                            setTimeout(() => {
                                document.querySelector('#education')?.scrollIntoView({ behavior: 'smooth' });
                            }, 300); // must match Drawer close animation delay
                        }}
                        className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-gradient-to-r ${darkMode ? 'from-purple-600 to-indigo-900' : 'from-green-200 to-green-400'
                            } transition-colors`}
                    >
                        <BookOpen className={`w-5 h-5 ${darkMode ? 'text-green-400' : 'text-green-600'}`} /> Education
                    </a>
                </ListItem>
                <Divider className="border-gray-700" />

                <ListItem disablePadding>
                    <a
                        href="#contact"
                        onClick={(e) => {
                            e.preventDefault();
                            setActiveTab("contact");
                            setDrawerOpen(false);
                            setTimeout(() => {
                                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                            }, 300); // must match Drawer close animation delay
                        }}
                        className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-gradient-to-r ${darkMode ? 'from-purple-600 to-indigo-900' : 'from-green-200 to-green-400'
                            } transition-colors`}
                    >
                        <Mail className={`w-5 h-5 ${darkMode ? 'text-green-400' : 'text-green-600'}`} /> Contact
                    </a>
                </ListItem>
            </List>

            {/* Mobile Dark/Light Switch */}
            <div className="pt-4 border-t border-gray-700 mt-4">
                <div className="flex items-center justify-between px-3" onClick={() => setDarkMode(!darkMode)}>
                    <span className={`${darkMode ? 'text-white' : 'text-gray-800'} text-sm`}>
                        {darkMode ? 'Dark Mode' : 'Light Mode'}
                    </span>
                    {darkMode ? (
                        <Moon className="w-5 h-5 text-green-400" />
                    ) : (
                        <Sun className="w-5 h-5 text-yellow-500" />
                    )}
                </div>
            </div>
        </BoxMUI>
    );


    return (
        <nav
            className={`backdrop-blur-lg navbar sticky top-2 z-50 border-x border-b border-t shadow-2xl
    ${darkMode
                    ? 'bg-black/50 border-b-indigo-700 border-x-indigo-900 border-t-indigo-950 backdrop-blur-md'
                    : 'bg-[rgba(0,0,0,0.1)] border-gray-300'}
    rounded-2xl mx-2 px-3 py-3.5 md:py-4 flex items-center justify-between`}
        >

            {/* Left: Name */}
            <div className="nav-links flex-1">
                <a
                    href="#home"
                    onClick={() => setActiveTab("home")}
                    className={`text-sm md:text-lg lg:text-xl firaCodeFont ${darkMode ? 'text-white' : 'text-gray-900'
                        } hover:text-green-400 transition-colors`}
                >
                    &lt;Atharva Jadhav/&gt;
                </a>
            </div>

            {/* Center (desktop only): Links */}
            <div
                className={`nav-links text-md hidden md:flex flex-1 justify-center space-x-10 ${darkMode ? 'text-white' : 'text-gray-900'
                    }`}
            >
                <a href="#about" onClick={() => setActiveTab("about")} className={`${activeTab == "about" ? 'text-green-400' : ''} nav-links hover:text-green-400 transition-colors flex items-center`}>
                    <User className='w-4 h-4 mr-1' />
                    About
                </a>
                {/* <a
                    href="/AtharvaJadhav_Resume.pdf"
                    download
                    onClick={() => setActiveTab("resume")}
                    className={`${activeTab == "resume" ? 'text-green-400' : ''} nav-links hover:text-green-400 transition-colors flex items-center`}
                >
                    <FileText className='w-4 h-4 mr-1' />
                    Resume
                </a> */}
                <a href="#education" onClick={() => setActiveTab("education")} className={`${activeTab == "education" ? 'text-green-400' : ''} nav-links hover:text-green-400 transition-colors flex items-center`}>
                    <BookOpen className='w-4 h-4 mr-1' />
                    Education
                </a>
                <a href="#skills" onClick={() => setActiveTab("skills")} className={`${activeTab == "skills" ? 'text-green-400' : ''} nav-links hover:text-green-400 transition-colors flex items-center`}>
                    <Code2 className='w-4 h-4 mr-1' />
                    Skills
                </a>
                <a href="#projects" onClick={() => setActiveTab("projects")} className={`${activeTab == "projects" ? 'text-green-400' : ''} nav-links hover:text-green-400 transition-colors flex items-center`}>
                    <i className="fa-solid fa-laptop-code mr-1"></i>
                    Projects
                </a>
                <a href="#contact" onClick={() => setActiveTab("contact")} className={`${activeTab == "contact" ? 'text-green-400' : ''} nav-links hover:text-green-400 transition-colors flex items-center`}>
                    <Mail className='w-4 h-4 mr-1' />
                    Contact
                </a>
            </div>

            {/* Right: Dark Mode Switch + Mobile Menu */}
            <div className="flex-1 flex justify-end items-center space-x-4">
                {/* Lucide icons instead of MUI Switch */}
                <div className="nav-links hidden md:inline-block">
                    <button onClick={() => setDarkMode(!darkMode)}>
                        {darkMode ? (
                            <Moon className="w-5 h-5 text-green-400" />
                        ) : (
                            <Sun className="w-5 h-5 text-yellow-500" />
                        )}
                    </button>
                </div>

                {/* Mobile hamburger */}
                <div className="md:hidden">
                    <Button onClick={toggleDrawer(true)}>
                        <i className={`fa-solid fa-ellipsis-vertical ${darkMode ? 'text-white' : 'text-gray-900'}`}></i>
                    </Button>
                    <Drawer
                        anchor="right"
                        open={drawerOpen}
                        onClose={toggleDrawer(false)}
                        PaperProps={{ sx: { background: 'transparent', boxShadow: 'none' } }}
                    >
                        {list}
                    </Drawer>
                </div>
            </div>
        </nav>
    );
}