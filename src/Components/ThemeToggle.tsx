import { Sun, Moon  } from "lucide-react";
import { cn } from "../lib/utils";
import { useEffect } from "react";


interface ThemeToggleProps {
    isDarkMode: boolean;
    toggleTheme: () => void;
}

export const ThemeToggle = ({isDarkMode, toggleTheme}: ThemeToggleProps) => {
    useEffect(() => {
    }, [])
    return (
        <button 
            onClick={toggleTheme} 
            className={
                cn("relative z-50 md:pl-8 md:py-0 p-2 rounded-full transition-colors duration-300",
                "focus:outlin-hidden")
                }
            >
            {" "}
            { isDarkMode ? (
                    <Moon className="h-6 w-6 text-blue-900"/> 
                ) : (
                    <Sun className="h-6 w-6 text-yellow-600"/>  
                ) 
            }
        </button>
    )
};