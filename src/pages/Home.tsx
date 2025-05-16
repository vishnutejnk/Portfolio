import { ThemeToggle } from "@/Components/ThemeToggle";
import { StarBackground } from "@/Components/StarBackground"
import { useEffect, useState } from "react";

export const Home = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);
    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if(theme === "dark") {
            document.documentElement.classList.add("dark")
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove("dark")
            setIsDarkMode(false);
        }

    }, [])

    const toggleTheme = () => {
        if(isDarkMode) {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")          
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
            setIsDarkMode(true);
        } 
    };

    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme toggle */}
        <ThemeToggle toggleTheme={toggleTheme} isDarkMode={isDarkMode}/>
        {/* Background Effects */}
        <StarBackground isDarkMode={isDarkMode}/>
        {/* Navbar */}
        
        {/* Main Content */}

        {/* Footer */}
    </div>
}