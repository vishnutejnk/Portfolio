import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    // {name: "Projects", href: "#projects"},
    {name: "Contact", href: "#contact"}
]

interface ThemeToggleProps {
    isDarkMode: boolean;
    toggleTheme: () => void;
}

export const NavBar = ({isDarkMode, toggleTheme}: ThemeToggleProps) => {
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.screenY > 10);
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }
    })

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
            
        <nav 
            className={cn("fixed w-full z-40 transition-all duration-300",
            isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5")}>
            <div className="pl-8 pr-4 flex items-center justify-between">
                <a className="text-xl font-bold text-primary flex items-center" href="#hero">
                    <span className="relative z-10">
                        <span className="text-glow text-foreground"> Vishnu's </span> Portfolio
                    </span>
                </a>
                <div className="inline-flex">

                    {/* desktop nav */}
                    <div className="hidden md:flex space-x-8 font-bold">
                        {navItems.map((item, key) => (
                            <a key={key} 
                                href={item.href}
                                className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme}></ThemeToggle>
                    {/* mobile nav */}
                    <button 
                        onClick={()=> setIsMenuOpen((prev) => !prev)}
                        className="md:hidden p-2 z-50 text-foreground"
                        aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}>
                        {isMenuOpen? <X size={24}/>:<Menu size={24}/>}{""}
                    </button>
                    <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                        "transition-all duration-300 md:hidden",
                        isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none")}>
                        <div className="flex flex-col  space-y-8 text-xl">
                            {navItems.map((item, key) => (
                                <a key={key} 
                                    href={item.href}
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    onClick={() => setIsMenuOpen(false)}>
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                
            </div>
        </nav>
    )
    
};