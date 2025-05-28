import { StarBackground } from "../Components/StarBackground"
import { useEffect, useState } from "react";
import { NavBar } from "../Components/NavBar";
import { HeroSection } from "../Components/HeroSection";
import { AboutMeSection } from "../Components/AboutMeSection";
import { SkillsSection } from "../Components/SkillsSection";
import { ProjectsSection } from "../Components/ProjectsSection";
import { ContactSection } from "../Components/ContactSection";
import { Footer } from "../Components/Footer";

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
        {/* Background Effects */}
        <StarBackground/>
        {/* Navbar */}
        {<NavBar  toggleTheme={toggleTheme} isDarkMode={isDarkMode}/>}
        {/* Main Content */}
        <main className="scroll-snap-parent">
            <HeroSection/>
            <AboutMeSection/>
            <SkillsSection/>
            {/* <ProjectsSection/> */}
            <ContactSection/>
        </main>
        {/* Footer */}
        <Footer/>
    </div>
}