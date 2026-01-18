import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "SpendWise",
        description:
        "SpendWise is a personal expense tracker built using the MERN stack and styled with Tailwind CSS. It helps users manage daily expenses, categorize spending, and gain insights into their financial habits through a clean and responsive interface.",
        image: "/projects/SpendWise.png",
        tags: ["MongoDB", "Express", "React.js", "Node.js", "TailwindCSS", "Vercel", "Render"],
        demoUrl: "https://spend-wise-frontend-client.vercel.app/",
        githubUrl: "https://github.com/Dilju/SpendWise-frontend-client"
    },
    {
        id: 2,
        title: "Crowdderling",
        description:
        "An online crowdfunding platform built with the MERN stack, designed to connect users with causes and campaigns. It allows secure user authentication, campaign creation, and contribution tracking through a clean, responsive interface.",
        image: "/projects/crowdderling.png",
        tags: ["MongoDB", "Express", "React.js", "Node.js", "React-Bootstrap"],
        demoUrl: "#",
        githubUrl: "https://github.com/Dilju/Crowd_Funding_Platform"
    },
    {
        id: 3,
        title: "Real-time Weather prediction using SNN (B-tech main project)",
        description:
        "An online crowdfunding platform built with the MERN stack, designed to connect users with causes and campaigns. It allows secure user authentication, campaign creation, and contribution tracking through a clean, responsive interface.",
        image: "/projects/RWP_SNN.png",
        tags: ["Python", "PyTorch with Norse", "Intel Loihi", "Scikit-learn"],
        demoUrl: "#",
        githubUrl: "https://github.com/Dilju/Main_project-RWP_SNN-"
    },
    {
        id: 4,
        title: "Alpha Corporate Website (B2B Advertising)",
        description:
        "A client-driven corporate website for a sample B2B advertising company, designed in Figma and developed using React and Tailwind CSS. The project focuses on modern UI/UX, responsive layouts, accessibility, performance optimization, and subtle animations, following strict brand guidelines for colors and typography.",
        image: "/projects/alpha_corporate_website.png",
        tags: ["React", "Tailwind CSS", "Figma", "Vite", "UI/UX"],
        demoUrl: "https://alpha-advertising-git-main-diljus-projects.vercel.app/",
        githubUrl: "https://github.com/Dilju/Alpha_Advertising"
}

];

export const ProjectSection = () => {
    return (
        <section id="project" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:4xl font-bold mb-4 text-center">
                Featured <span className="text-primary"> Projects</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my recent projects. Each Project was carefully
                crafted with attention to detail, performance, and user experience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div 
                            key={key} 
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div className="h-48 overflow-hidden">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6">   
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground ">{tag}</span>
                                    ))}
                                </div>
                            

                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                            <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a 
                                            href={project.demoUrl} 
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <ExternalLink size={20}/>
                                        </a>
                                        <a 
                                            href={project.githubUrl} 
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <Github size={20}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a 
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        href="https://github.com/Dilju"
                        target="_blank"
                    >
                        Check My Github<ArrowRight size={16}/>
                    </a>
                </div>
            </div>
        </section>
    );
}