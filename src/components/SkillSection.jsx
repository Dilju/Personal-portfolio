import { useState } from "react"
import { cn } from "../lib/utils"

const skills = [
    // front end
    {name: "HTML/CSS", level: 90, category: "Frontend"},
    {name: "JavaScript", level: 80, category: "Frontend"},
    {name: "React", level: 70, category: "Frontend"},
    {name: "Bootstrap", level: 80, category: "Frontend"},
    {name: "Tailwindcss", level: 70, category: "Frontend"},
    {name: "Next.js", level: 40, category: "Frontend"},
    
    // backend
    {name: "Node.js", level: 60, category: "Backend"},
    {name: "Express", level: 60, category: "Backend"},
    {name: "MongoDB", level: 70, category: "Backend"},
    {name: "MySQL", level: 80, category: "Backend"},

    // Tools
    {name: "Git/Github", level: 50, category: "Tools"},
    {name: "VS Code", level: 80, category: "Tools"},
    {name: "Postman", level: 90, category: "Tools"},
    {name: "Sublime", level: 95, category: "Tools"},

    // Programming languages
    {name: "Python", level: 75, category: "Programming Languages"},
    {name: "C", level: 80, category: "Programming Languages"},
    {name: "Java", level: 60, category: "Programming Languages"},

]

const categories = ["all", "Frontend", "Backend", "Tools", "Programming Languages"]

export const SkillSection = () => {

    const [activeCategory, setActiveCategory] = useState("all")
    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory)
    return (
        <section 
            id="skills" 
            className="py-24 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button 
                            key={key} 
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 cap",
                                activeCategory === category 
                                ? "bg-primary text-primary-foreground" 
                                : "bg-secondary/70 text-foreground hover: bg-secondary"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div 
                            key={key} 
                            className="bg-card p-6 rounded-lg shadow-xs card-hover"
                        >
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">
                                   {skill.name} 
                                </h3>
                            </div>
                            <div className="w-full bg-secondary/50 rounded-full h-2 overflow-hidden">
                                <div 
                                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out"
                                    style={{width: skill.level + "%"}}
                                />
                            </div>

                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}