import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
	return (
		<section
			id="hero"
			className="relative min-h-screen flex flex-col items-center justify-center px-4">
			<div className="container max-w-6xl mx-auto text-center z-10 bg-card/60 py-4 px-2 md:p-20 rounded-lg">
				<div className="space-y-6">
					<h1 className="text-4xl md:text-5xl font-bold text-glow tracking-tight">
						<span className="opacity-0 animate-fade-in">
							{" "}
							Hi, I'm{" "}
						</span>
						<span className="opacity-0 animate-fade-in-delay-1 text-primary">
							{" "}
							Vishnu Tej{" "}
						</span>
						<span className="opacity-0 animate-fade-in-delay-2 text-gradient ml-2">
							{" "}
							Nanda Kumar
						</span>
					</h1>
					<p className="text-md md:text-lg font-semibold text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
						Welcome to my portfolio! I’m Vishnu Tej, a passionate
						Full Stack Developer with experience in crafting
						responsive, scalable, and performant web applications.
                        
						My mission is to build seamless digital solutions that
						solve real-world problems while delivering exceptional
						user experiences. Let’s create something impactful
						together!
					</p>
					<div className="opacity-0 animate-fade-in-delay-4 pt-2 pb-4">
						<a
							href="https://github.com/vishnutejnk"
							target="_blank"
							className="special-button w-fit flex items-center mx-auto gap-2 py-2">
							View My Work
						</a>
					</div>
				</div>
			</div>
			<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
				<a href="#about">
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
