import { ArrowBigRight, Clock, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "My Profile Website",
        description: "Description of My Profile Website",
        image: "/projects/1.png",
        tags:["React", "Tailwind CSS"],
        demoUrl: "https://liuarthur88-profile.vercel.app",
        githubUrl: "https://github.com/liuarthur-88/personal-profile-website",
    },
    {
        id: 2,
        title: "Responsive Resaurant Website",
        description: "Description of Responsive Resaurant Website",
        image: "/projects/2.png",
        tags:["React", "Tailwind CSS"],
        demoUrl: "https://liuarthur88-restaurant.vercel.app",
        githubUrl: "https://github.com/liuarthur-88/responsive-restaurant-website",
    },
    {
        id: 3,
        title: "Recipe Finder Website",
        description: "Description of Recipe Finder Website",
        image: "/projects/3.png",
        tags:["React", "Tailwind CSS"],
        demoUrl: "https://liuarthur88-recipe-app.vercel.app/",
        githubUrl: "https://github.com/liuarthur-88/food-recipe-app",
    },
];

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 p-4 relative"> 
            <div className="container mx-auto max-w-5xl"> 
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> 
                    Featured <span className="text-primary">Projects</span> 
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of the projects I've worked on. You can find more on my GitHub.
                </p>
                {/* ✅ Check if projects are empty */}
                {projects.length === 0 ? (
                    <div className="p-3 flex flex-col items-center justify-center py-24 text-center border border-dashed rounded-lg bg-muted/30">
                        <Clock size={48} className="text-primary mb-4" />
                        <h3 className="text-2xl font-semibold mb-2">Projects Coming Soon!</h3>
                        <p className="text-muted-foreground max-w-md">
                        I’m currently working on exciting things. Stay tuned — new projects will appear here soon!
                        </p>
                    </div>
                ) : (
                    <div
                    className={
                        projects.length <= 2 
                        ? "flex justify-center"
                        : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    }
                    >
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
                                            <span
                                                className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground "
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                    <p className="text-muted-foreground text-sm mb-4">
                                        {project.description}
                                    </p>
                                    
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
                )}

                <div className="text-center mt-12">
                    <a 
                        className="cosmic-button w-fit flex itmes-center mx-auto gap-2" 
                        target="_blank"
                        href="https://github.com/liuarthur-88">
                        Check my GitHub <ArrowBigRight size={20} />
                    </a>

                </div>
            </div>
        </section>
    )
}