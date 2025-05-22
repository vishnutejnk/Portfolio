import { Mail } from "lucide-react";
import { useState } from "react";
import { FaDiscord, FaInstagram, FaLinkedin } from "react-icons/fa";

import { SiBuymeacoffee } from "react-icons/si";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";

export const ContactSection = () => {
     // State to manage the toast message
    const [toastMessage, setToastMessage] = useState<string | null>(null);

    // Function to copy email to clipboard and show toast
    const handleCopyEmail = async () => {
        const email = "vishnutejnk7@gmail.com";
        try {
            await navigator.clipboard.writeText(email);
            setToastMessage("Email copied to clipboard!");
            // Hide the toast after 2 seconds
            setTimeout(() => {
                setToastMessage(null);
            }, 1000);
        } catch (err) {
            setToastMessage("Failed to copy email.");
            setTimeout(() => {
                setToastMessage(null);
            }, 1000);
        }
    };
    return (
        <section id="contact" className="py-40 px-4 mb-54 relative bg-secondary/30">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-glow">
                    Get In <span className="text-primary">Touch</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? Feel free to reach out.
                    I'm always open to discussing new opportunities.
                </p>
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-2 text-center">
                        Connect With Me
                    </h3>
                    <div className="pt-8">
                        <div className="flex space-x-4 justify-center">
                            <Link onClick={handleCopyEmail} to="mailto:vishnutejnk7@gmail.com">
                                <Mail size="24"/>
                            </Link>
                            <Link to="https://www.linkedin.com/in/vishnutejnk" target="_blank">
                                <FaLinkedin size="24"/>
                            </Link>
                            <Link to="https://buymeacoffee.com/vishnutejnk" target="_blank">
                                <SiBuymeacoffee size="24" />
                            </Link>
                            <Link to="https://discordapp.com/users/vishnutejnk" target="_blank">
                                <FaDiscord size="24" />
                            </Link>
                            <Link to="https://www.instagram.com/vishnutnk7/" target="_blank">
                                <FaInstagram  size="24"/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={cn(
                    "fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50",
                    toastMessage ? "": "hidden"
                    )}>
                    <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg animate-fade-in">
                        {toastMessage}
                    </div>
                </div>
            </div>
        </section>
    );
};