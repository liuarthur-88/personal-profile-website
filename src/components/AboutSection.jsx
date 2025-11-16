import { cn } from "@/lib/utils";
import { Briefcase, Code, Database } from "lucide-react";

export const AboutSection = () => {
    return (
        <section 
            id="about"
            className="py-24 px-4 relative">
                <div className="container mx-auto max0w05xl">
                    <h2 className="text-3xl md:text-4cl font-bold mb-12 text-center">
                        About <span className="text-primary"> Me</span>
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold">Web Developer Who Never Stops Learning</h3>
                            <p className="text-muted-foreground">
                                I love learning new things and improving my coding skills every day. 
                                My goal is to grow as a developer, build useful projects, 
                                and keep exploring new technologies.
                            </p>
                            
                            <p className="text-muted-foreground">
                                I love coding because it challenges me to think, solve problems, 
                                and keep improving. Completing a project 
                                or solving a tough bug always gives me a great sense of achievement.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                                <a href="#contact" className="cosmic-button">
                                    Get In Touch

                                </a>

                                <a href="" className={
                                    cn("px-6 py-2 rounded-full border border-primary text-primary",
                                        "hover:bg-primary/10 transition-colors duration-300")
                                } >
                                    Download CV
                                </a>

                            </div>

                        </div>

                        <div className="grid grid-cols-1 gap-6">
                            <div className="gradient-border p-6 card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Code className="h-6 w-6 text-primary" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-lg">Web Development</h4>
                                    </div>
                                    <p className="text-muted-foreground">
                                        Creating and maintaining websites and web applications.
                                    </p>
                                </div>
                            </div>
                            <div className="gradient-border p-6 card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Database className="h-6 w-6 text-primary" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-lg">Database Management</h4>
                                    </div>
                                    <p className="text-muted-foreground">
                                        Managing and optimizing databases for efficient data storage and retrieval.
                                    </p>
                                </div>
                            </div>
                            <div className="gradient-border p-6 card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Briefcase className="h-6 w-6 text-primary" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-lg">Project Management</h4>
                                    </div>
                                    <p className="text-muted-foreground">
                                        Managing projects from conception to completion, ensuring quality and timely delivery.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    )
}