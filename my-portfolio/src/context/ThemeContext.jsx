import { createContext, useState, useEffect } from "react";

export const darkModeContext = createContext();

export const ThemeProvider = ({ children }) => {

    const [darkMode, setDarkMode] = useState(true);

    // useEffect(() => {
    //     const root = document.documentElement;
    //     if (darkMode) {
    //         root.classList.add("dark");
    //     } else {
    //         root.classList.remove("dark");
    //     }
    // }, [darkMode]);

    return (
        <darkModeContext.Provider value={{ darkMode, setDarkMode }}>
            {children}
        </darkModeContext.Provider>
    );
};