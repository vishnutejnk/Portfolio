import { ArrowRight, ExternalLink } from "lucide-react"
import { FaGithub } from "react-icons/fa"

const projects = [
    {
        id: 1, 
        title: "SaaS Landing Page",
        description: "Landing Page app using react and tailwind",
        image: "/projects/project1.png",
        tags: ["React", "TailWindCSS", "Supabase"],
        demoURL: "#",
        gitHubURL: "#",
    },
    {
        id: 2, 
        title: "SaaS Landing Page",
        description: "Landing Page app using react and tailwind",
        image: "/projects/project2.png",
        tags: ["React", "TailWindCSS", "Supabase"],
        demoURL: "#",
        gitHubURL: "#",
    },
    {
        id: 3, 
        title: "SaaS Landing Page",
        description: "Landing Page app using react and tailwind",
        image: "/projects/project3.png",
        tags: ["React", "TailWindCSS", "Supabase"],
        demoURL: "#",
        gitHubURL: "#",
    }
]

export const ProjectsSection = () => {

    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Featured <span className="text-primary"> Projects </span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefully
                    crafted with attention to detail, performance, and user experience.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        projects.map((project, key) => (
                            <div key={key} className="group bg-card rounded-lg overflow-auto shadow-xs card-hover">
                                <div className="h-48 overflow-hidden">
                                    <img 
                                        src={project.image} 
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                                </div>
                                <div className="pt-3 pb-1 justify-items-center">
                                    <div className="flex flex-wrap gap-2">
                                        {
                                            project.tags.map((tag) => (
                                                <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border">
                                                    {tag}
                                                </span>
                                            ))
                                        }
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    description
                                </p>
                                <div className="flex space-x-3 justify-between items-center p-3">
                                    <a 
                                        href="{project.demoURL}" 
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        target="_blank">
                                        
                                        <ExternalLink size="20"/>
                                    </a>
                                    <a 
                                        href="{project.gitHubURL}" 
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        target="_blank">
                                        <FaGithub size="20"/>
                                    </a>
                                </div>
                            </div>
                        )) 
                    }    
                </div>
                <div className="text-center mb-12 max-w-2xl mx-auto mt-12">
                    <a className="special-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                        href="https://github.com/vishnutejnk">
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    )
}