import React, { useState } from 'react';
import { Menu, User, FileText, Box, Code2, BookOpen } from 'lucide-react';
import Switch from '@mui/material/Switch';
import BoxMUI from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import "./Navbar.css";

export default function Navbar({ darkMode, setDarkMode }) {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    const list = (
        <BoxMUI
            sx={{
                width: 250,
                bgcolor: 'rgba(20,20,30,0.9)',
                color: 'white',
                height: '100%',
            }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
            className="p-4 flex flex-col justify-between"
        >
            <List className="space-y-2">
                <ListItem disablePadding>
                    <a
                        href="#about"
                        className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-gradient-to-r from-purple-600 to-indigo-900 transition-colors"
                    >
                        <User className="w-5 h-5 text-green-400" /> About Me
                    </a>
                </ListItem>
                <Divider className="border-gray-700" />

                <ListItem disablePadding>
                    <a
                        href="/AtharvaJadhav_Resume.pdf"
                        download
                        className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-gradient-to-r from-purple-600 to-indigo-900 transition-colors"
                    >
                        <FileText className="w-5 h-5 text-green-400" /> Resume
                    </a>
                </ListItem>
                <Divider className="border-gray-700" />

                <ListItem disablePadding>
                    <a
                        href="#projects"
                        className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-gradient-to-r from-purple-600 to-indigo-900 transition-colors"
                    >
                        <Box className="w-5 h-5 text-green-400" /> Projects
                    </a>
                </ListItem>
                <Divider className="border-gray-700" />

                <ListItem disablePadding>
                    <a
                        href="#skills"
                        className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-gradient-to-r from-purple-600 to-indigo-900 transition-colors"
                    >
                        <Code2 className="w-5 h-5 text-green-400" /> Skills
                    </a>
                </ListItem>
                <Divider className="border-gray-700" />

                <ListItem disablePadding>
                    <a
                        href="#education"
                        className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-gradient-to-r from-purple-600 to-indigo-900 transition-colors"
                    >
                        <BookOpen className="w-5 h-5 text-green-400" /> Education
                    </a>
                </ListItem>
            </List>

            {/* Mobile Dark/Light Switch */}
            <div className="pt-4 border-t border-gray-700 mt-4">
                <div className="flex items-center justify-between px-3">
                    <span className="text-white text-sm">{darkMode ? 'Dark Mode' : 'Light Mode'}</span>
                    <Switch
                        checked={darkMode}
                        onChange={() => setDarkMode(!darkMode)}
                        color="success"
                    />
                </div>
            </div>
        </BoxMUI>
    );

    return (
        <nav className="navbar sticky top-2 z-50 backdrop-blur-sm bg-black/50 rounded-2xl mx-2 px-4 py-4 flex items-center border-transparent border-b-indigo-800">
            {/* Left: Name */}
            <div className="flex-1">
                <a
                    href="#home"
                    className="text-sm md:text-lg lg:text-xl md:font-medium text-white hover:text-green-400 transition-colors"
                >
                    &lt; &gt;Atharva Jadhav
                </a>
            </div>

            {/* Center (desktop only): Links */}
            <div className="hidden md:flex flex-1 justify-center space-x-8 text-white">
                <a href="#about" className="hover:text-green-400 transition-colors">
                    About
                </a>
                <a
                    href="/AtharvaJadhav_Resume.pdf"
                    download
                    className="hover:text-green-400 transition-colors"
                >
                    Resume
                </a>
                <a href="#projects" className="hover:text-green-400 transition-colors">
                    Projects
                </a>
                <a href="#skills" className="hover:text-green-400 transition-colors">
                    Skills
                </a>
                <a href="#education" className="hover:text-green-400 transition-colors">
                    Education
                </a>
            </div>

            {/* Right: Dark Mode Switch + Mobile Menu */}
            <div className="flex-1 flex justify-end items-center space-x-4">
                {/* MUI Switch */}
                <div className="hidden md:inline-block">
                    <Switch
                        checked={darkMode}
                        onChange={() => setDarkMode(!darkMode)}
                        color="success"
                    />
                </div>


                {/* Mobile hamburger */}
                <div className="md:hidden">
                    <Button onClick={toggleDrawer(true)}>
                        <Menu className="text-white" />
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