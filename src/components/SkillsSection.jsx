import { useState } from "react";
import {cn} from "@/lib/utils";

const skills = [
    // Frontend
    { name: "HTML", level: 80, category: "Frontend" },
    { name: "CSS", level: 80, category: "Frontend" },
    { name: "JavaScript", level: 80, category: "Frontend" },
    { name: "React", level: 60, category: "Frontend" },
    { name: "Tailwind CSS", level: 50, category: "Frontend" },
    // { name: "Bootstrap", level: 50, category: "Frontend" },
    // { name: "Material UI", level: 50, category: "Frontend" },
    // { name: "NPM", level: 40, category: "Frontend" },
    { name: "Vite", level: 40, category: "Frontend" },

    // Backend
    { name: "Node.js", level: 80, category: "Backend" },
    { name: "Express.js", level: 80, category: "Backend" },

    // Databases
    { name: "PostgreSQL", level: 80, category: "Databases" },
    { name: "Microsoft SQL", level: 80, category: "Databases" },    
    { name: "SQLite", level: 80, category: "Databases" },

    // Data/ML/Automation
    { name: "Python", level: 70, category: "Data/ML/Automation" },

    // Tools
    { name: "GitHub", level: 40, category: "Tools" },
    { name: "VS Code", level: 70, category: "Tools" },

    // Mobile
    { name: "Flutter", level: 40, category: "Mobile" },
]

const categories = ["all", "Frontend", "Backend", "Databases", "Data/ML/Automation", "Tools", "Mobile"];


export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);

    return <section id="skills" className="py-24 p-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary">Skills</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">

                {categories.map((category, index) => (
                    <button 
                        key={index} 
                        className={cn(
                            "px-5 py-2 rounded-full transition-clors duration-300 capitalize",
                            activeCategory === category
                                ? "bg-primary text-primary-foreground"
                                : "bg-secondary/70 text-foreground hover:bg-secondary"
                        )}
                        onClick={() => setActiveCategory(category)}>
                        {category} ({skills.filter(skill => category === "all" || skill.category === category).length})
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm-grid-cols-2 lg:grid-cols-3 gap-6">

                {filteredSkills.map((skill, index) => (
                    <div 
                        key={index} 
                        className="bg-card p-6 rounded-lg shadow-xs card-hover">
                        <div className="text-left mb-4">
                            <h3 className="text-lg font-semibold">{skill.name}</h3>
                        </div>
                        
                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                            <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]" style={{ width: `${skill.level}%` }}></div>
                        </div>    

                        <div className="text-right mt-1">
                            <div className="text-sm text-muted-foreground">
                                {skill.level}%
                            </div>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    </section>
}