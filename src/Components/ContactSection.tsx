import { Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { FaDiscord, FaInstagram, FaLinkedin } from "react-icons/fa";

import { SiBuymeacoffee } from "react-icons/si";
import { Link } from "react-router-dom";

export const ContactSection = () => {
    const [message, setMessage] = useState("")
    const copyToClipboard = (text: string) => {
        const result = navigator.clipboard.writeText(text);

        result.then(() => {
            setMessage("You copied my email id successfully!")
            setTimeout(() => {
                
            })
        })
    };
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
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
                            <button onClick={() => copyToClipboard("vishnutejnk7@gmail.com")}>
                                <Mail size="24"/>
                            </button>
                            <Link to="https://www.linkedin.com/in/vishnutejnk" target="_blank">
                                <FaLinkedin size="24"/>
                            </Link>
                            <Link to="https://buymeacoffee.com/vishnutejnk" target="_blank">
                                <SiBuymeacoffee size="24" />
                            </Link>
                            <Link to="https://discordapp.com/users/vishnutejnk" target="_blank">
                                <FaDiscord size="24" />
                            </Link>
                            <Link to="https://www.instagram.com/vishnutejnk/" target="_blank">
                                <FaInstagram  size="24"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};