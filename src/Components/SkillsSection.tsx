import { cn } from "../lib/utils";
// Importing icons from react-icons
import {
	FaHtml5,
	FaJs,
	FaReact,
	FaAngular,
	FaPython,
	FaNodeJs,
	FaJava,
	FaDocker,
	FaJenkins,
	FaGithub,
	FaGit,
	FaSoap,
	FaAws,
	FaMicrosoft,
} from "react-icons/fa";
import {
	SiTypescript,
	SiTailwindcss,
	SiNextdotjs,
	SiGoland,
	SiSpringboot,
	SiApachekafka,
	SiGraphql,
	SiKubernetes,
	SiGithubactions,
	SiMongodb,
	SiPostgresql,
} from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { IbmDb2Alt } from "@carbon/icons-react";

import { TbApi } from "react-icons/tb"; // For RESTful APIs
import { ArrowDown } from "lucide-react";
const allSkills = [
	{
		category: "Front-End",
		skills: [
			{ name: "HTML/CSS", level: 90, icon: FaHtml5 },
			{ name: "JavaScript", level: 80, icon: FaJs },
			{ name: "TypeScript", level: 80, icon: SiTypescript },
			{ name: "React", level: 75, icon: FaReact },
			{ name: "Angular", level: 70, icon: FaAngular },
			{ name: "TailWind", level: 70, icon: SiTailwindcss },
			{ name: "Next.js", level: 60, icon: SiNextdotjs },
			{ name: "React Native", level: 65, icon: FaReact },
		],
	},
	{
		category: "Back-End",
		skills: [
			{ name: "Java", level: 90, icon: FaJava },
			{ name: "Go", level: 85, icon: SiGoland },
			{ name: "Python", level: 85, icon: FaPython },
			{ name: "Node.js", level: 70, icon: FaNodeJs },
			{ name: "SpringBoot", level: 90, icon: SiSpringboot },
			{ name: "Kafka", level: 80, icon: SiApachekafka },
			{ name: "RESTful APIs", level: 95, icon: TbApi },
			{ name: "GraphQL", level: 85, icon: SiGraphql },
			{ name: "SOAP APIs", level: 85, icon: FaSoap },
		],
	},
	{
		category: "Data-Base",
		skills: [
			{ name: "SQL Server", level: 100, icon: TbSql },
			{ name: "MongoDB", level: 90, icon: SiMongodb },
			{ name: "PostgreSQL", level: 95, icon: SiPostgresql },
			{ name: "IBM DB2", level: 100, icon: IbmDb2Alt },
		],
	},
	{
		category: "Dev-Ops",
		skills: [
			{ name: "Git", level: 95, icon: FaGit },
			{ name: "GitHub", level: 100, icon: FaGithub },
			{ name: "GitHub Actions", level: 80, icon: SiGithubactions },
			{ name: "Jenkins", level: 85, icon: FaJenkins },
			{ name: "Docker", level: 85, icon: FaDocker },
			{ name: "Kubernetes", level: 75, icon: SiKubernetes },
			{ name: "AWS", level: 70, icon: FaAws },
			{ name: "Azure", level: 90, icon: FaMicrosoft },
		],
	},
];
export const SkillsSection = () => {
	return (
		<section id="skills" className="py-24 px-4 relative min-h-screen">
			<div className="container mx-auto max-w-7xl bg-card/60 p-2 md:px-10 md:py-6 rounded-lg">
				<h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 md:mb-12 text-center text-glow">
					My <span className="text-primary">Skills</span>
				</h2>
				{allSkills.map((skillsByCategory, index) => {
					// Calculate total width for the carousel based on the number of skills
					const animationDuration = 70;
					return (
						<div
							key={index}
							className="md:grid md:grid-cols-[13%_87%] mb-4">
							{/* Category Label */}
							<div className="hidden md:flex items-center">
								<h3
									className={cn(
										"text-lg font-semibold capitalize text-foreground",
										"px-5 py-2 rounded-full transition-colors duration-300 capitalize",
										"bg-primary text-primary-foreground"
									)}>
									{skillsByCategory.category}
								</h3>
							</div>

							{/* Carousel Container */}
							<div className="overflow-hidden md:mx-6">
								<div
									className={cn(
										"flex gap-4 carousel-track",
										index % 2 === 0
											? "animate-scroll-left"
											: "animate-scroll-right"
									)}
									style={{
										display: "flex",
										whiteSpace: "nowrap",
										animationDuration: `${animationDuration}s`,
									}}>
									{/* Duplicate skills for seamless scrolling */}
									{[
										...skillsByCategory.skills,
										...skillsByCategory.skills,
										...skillsByCategory.skills,
										...skillsByCategory.skills,
										...skillsByCategory.skills,
										...skillsByCategory.skills,
									].map((skill, skillIndex) => (
										<div
											key={`${index}-${skillIndex}`}
											className={cn(
												"bg-card p-2 md:p-4 rounded-lg shadow-xs card-hover flex-shrink-0 w-16 md:w-48",
												"flex-col justify-center items-center"
											)}>
											<div className="flex flex-col items-center mb-2 md:mb-4 md:flex-row pt-2">
												<skill.icon
													size="24"
													className="text-primary text-2xl mb-2 md:mb-0 md:mr-3"
												/>
												<h3 className="hidden md:block font-semibold text-lg">
													{skill.name}
												</h3>
											</div>
											<div className="flex flex-col md:flex-row md:items-center items-center mb-2">
												<span className="text-sm text-foreground mb-1 md:mb-0 md:mr-2">
													{skill.level}%
												</span>
												<div className="hidden md:block w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
													<div
														className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease_out]"
														style={{
															width: `${skill.level}%`,
														}}
													/>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					);
				})}
			</div>
			<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
				<a href="#contact">
					<div className="flex flex-col items-center">
						<span className="text-sm text-muted-foreground mb-2">
							Scroll
						</span>
						<ArrowDown className="h-5 w-5 text-primary"></ArrowDown>
					</div>
				</a>
			</div>
		</section>
	);
};
