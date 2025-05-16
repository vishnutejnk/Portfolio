import { Sun, Moon  } from "lucide-react";
import { cn } from "../lib/utils";


interface ThemeToggleProps {
    isDarkMode: boolean;
    toggleTheme: () => void;
  }

export const ThemeToggle = ({isDarkMode, toggleTheme}: ThemeToggleProps) => {
    return (
        <button 
            onClick={toggleTheme} 
            className={
                cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
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