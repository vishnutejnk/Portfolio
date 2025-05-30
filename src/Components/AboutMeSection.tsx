import { Briefcase, GraduationCap } from "lucide-react";
import { useState } from "react";
import { FaCanadianMapleLeaf } from "react-icons/fa";

export const AboutMeSection = () => {
	const [activeTab, setActiveTab] = useState<string | null>(null);

	const handleTabChange = (tab: string) => {
		setActiveTab(activeTab === tab ? null : tab);
	};

	return (
		<section id="about" className="py-24 px-4 relative">
			<div className="container mx-auto max-w-6xl bg-card/60 p-2 md:p-10 rounded-lg">
				<h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
					About <span className="text-primary"> Me</span>
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
					{/* Left Half - Description */}
					<div className="space-y-6">
						<h3 className="text-2xl font-semibold">
							Passionate Web Developer and Software Engineer
						</h3>
						<ul className="list-disc pl-5 text-muted-foreground text-justify font-semibold space-y-2">
							<li>
								Full Stack Developer with over 3 years of
								hands-on experience.
							</li>
							<li>
								Master’s in Computing and Data Analytics from
								Saint Mary’s University.
							</li>
							<li>
								Skilled in React, Java, Go, Angular, and Azure
								certified.
							</li>
							<li>
								Committed to delivering innovative solutions
								from concept to completion.
							</li>
						</ul>
						<div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
							<a href="#contact" className="special-button">
								Get In Touch
							</a>
							<a
								className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
								href="/VishnuTejNandaKumar.pdf"
								download>
								Download CV
							</a>
						</div>
					</div>

					{/* Right Half - Tabs */}
					<div className="relative min-h-[300px] pb-4">
						{!activeTab && (
							<div className="grid grid-cols-1 gap-6">
								<div
									className="gradient-border p-6 card-hover cursor-pointer"
									onClick={() =>
										handleTabChange("microFocus")
									}>
									<div className="flex items-start gap-4">
										<div className="p-3 rounded-full bg-primary/10">
											<Briefcase className="h-6 w-6 text-primary" />
										</div>
										<div className="text-left">
											<h4 className="font-semibold text-lg">
												Micro Focus
											</h4>
											<p className="text-muted-foreground">
												Software Engineer (2 years)
											</p>
										</div>
									</div>
								</div>
								<div
									className="gradient-border p-6 card-hover cursor-pointer"
									onClick={() =>
										handleTabChange("saintMarys")
									}>
									<div className="flex items-start gap-4">
										<div className="p-3 rounded-full bg-primary/10">
											<GraduationCap className="h-6 w-6 text-primary" />
										</div>
										<div className="text-left">
											<h4 className="font-semibold text-lg">
												Saint Mary’s University
											</h4>
											<p className="text-muted-foreground">
												MSc in Computing and Data
												Analytics
											</p>
										</div>
									</div>
								</div>
								<div
									className="gradient-border p-6 card-hover cursor-pointer"
									onClick={() => handleTabChange("cra")}>
									<div className="flex items-start gap-4">
										<div className="p-3 rounded-full bg-primary/10">
											<FaCanadianMapleLeaf className="h-6 w-6 text-primary" />
										</div>
										<div className="text-left">
											<h4 className="font-semibold text-lg">
												Canada Revenue Agency
											</h4>
											<p className="text-muted-foreground">
												Software Developer Analyst (15
												months)
											</p>
										</div>
									</div>
								</div>
							</div>
						)}

						{/* Expanded Content */}
						{activeTab === "microFocus" && (
							<div
								className="absolute top-0 left-0 w-full h-auto min-h-0 gradient-border p-6 card-hover animate-fade-in transition-all duration-300"
								onMouseLeave={() => setActiveTab(null)}
								onClick={() => setActiveTab(null)}>
								<div className="flex flex-col h-full">
									<div className="flex items-start gap-4 mb-4">
										<div className="p-3 rounded-full bg-primary/10">
											<Briefcase className="h-6 w-6 text-primary" />
										</div>
										<div className="text-left">
											<h4 className="font-semibold text-lg">
												Micro Focus
											</h4>
											<p className="text-muted-foreground">
												Software Engineer (2 years)
											</p>
										</div>
									</div>
									<ul className="list-disc pl-5 text-muted-foreground text-justify font-semibold space-y-2">
										<li>
											As a Software Engineer at Micro
											Focus, I developed secure and
											scalable applications using Java,
											Go, and Angular.
										</li>
										<li>
											I led efforts to reduce deployment
											times by 40% through Docker
											containerization and CI/CD
											pipelines, optimizing backend
											systems with microservices
											architecture.
										</li>
										<li>
											My role involved collaborating with
											cross-functional teams to deliver
											production-ready solutions,
											enhancing system performance and
											reliability.
										</li>
									</ul>
								</div>
							</div>
						)}
						{activeTab === "saintMarys" && (
							<div
								className="absolute top-0 left-0 w-full h-auto min-h-0 gradient-border p-6 card-hover animate-fade-in transition-all duration-300"
								onMouseLeave={() => setActiveTab(null)}
								onClick={() => setActiveTab(null)}>
								<div className="flex flex-col h-full">
									<div className="flex items-start gap-4 mb-4">
										<div className="p-3 rounded-full bg-primary/10">
											<GraduationCap className="h-6 w-6 text-primary" />
										</div>
										<div className="text-left">
											<h4 className="font-semibold text-lg">
												Saint Mary’s University
											</h4>
											<p className="text-muted-foreground">
												MSc in Computing and Data
												Analytics
											</p>
										</div>
									</div>
									<ul className="list-disc pl-5 text-muted-foreground text-justify font-semibold space-y-2">
										<li>
											I earned my Master’s in Computing
											and Data Analytics from Saint Mary’s
											University, where I deepened my
											expertise in software development,
											data modeling, and system
											optimization.
										</li>
										<li>
											My coursework and projects focused
											on leveraging modern technologies
											like Java, Python, and cloud
											platforms to build data-driven
											solutions, laying a strong
											foundation for my professional
											career.
										</li>
									</ul>
								</div>
							</div>
						)}
						{activeTab === "cra" && (
							<div
								className="absolute top-0 left-0 w-full h-auto min-h-0 gradient-border p-6 card-hover animate-fade-in transition-all duration-300"
								onMouseLeave={() => setActiveTab(null)}
								onClick={() => setActiveTab(null)}>
								<div className="flex flex-col h-full">
									<div className="flex items-start gap-4 mb-4">
										<div className="p-3 rounded-full bg-primary/10">
											<FaCanadianMapleLeaf className="h-6 w-6 text-primary" />
										</div>
										<div className="text-left">
											<h4 className="font-semibold text-lg">
												Canada Revenue Agency
											</h4>
											<p className="text-muted-foreground">
												Software Developer Analyst (15
												months)
											</p>
										</div>
									</div>
									<ul className="list-disc pl-5 text-muted-foreground text-justify font-semibold space-y-2">
										<li>
											At the Canada Revenue Agency, I
											served as an IT Analyst for 15
											months, optimizing backend systems
											with Java and Spring Boot.
										</li>
										<li>
											I improved response times by 30%
											through efficient microservices
											design and collaborated on
											production support to ensure system
											reliability, gaining valuable
											experience in Agile environments and
											system performance tuning.
										</li>
									</ul>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};
