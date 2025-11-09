import { Facebook, Instagram, Link, Linkedin, Loader2, Mail, Map, Phone, Send, Smile, TicketIcon, Twitter } from "lucide-react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {cn} from "@/lib/utils";
import { useState } from "react";

export const ContactSection = () => {
    
    const storedTheme = localStorage.getItem("theme");
    const theme = storedTheme === "dark" ? "dark" : "light";
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {

        e.preventDefault();
        setIsSubmitting(true);

        try {
            const resolveAfter3Sec = new Promise((resolve) => setTimeout(resolve, 3000));

            await toast.promise(resolveAfter3Sec, {
                pending: 'Sending message...',
                success: 'Message sent successfully!',
                error: 'Failed to send message. Please try again.',
            });
        } catch (error) {
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    }


    return (
        <section id="contact" className="py-24 p-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get in <span className="text-primary">Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    If you have any questions or would like to work together, don't hesitate to reach out to me. I'm always open to new opportunities and collaborations.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12" >
                    <div className="space-y-8 bg-card p-8 rounded-lg shadow-xs">
                        <div className="text-2xl font-semibold mb-6"> Contact Information </div>

                        <div className="space-y-6 flex flex-col items-center text-center md:items-start md:text-left">
                            <div className="flex flex-col items-center space-y-2 md:flex-row md:items-start md:space-y-0 md:space-x-4">
                                <div className="p-3 rounded-full bg-primart/10">
                                    <Phone className="w-6 h-6text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Phone</h4>
                                    <a 
                                        href="tel:+1 123-456-789" 
                                        target="_blank" rel="noopener noreferrer" 
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >+1 123-456-789</a>
                                </div>
                            </div>
                            <div className="flex flex-col items-center space-y-2 md:flex-row md:items-start md:space-y-0 md:space-x-4">
                                <div className="p-3 rounded-full bg-primart/10">
                                    <Mail className="w-6 h-6text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <a 
                                        href="mailto:pearl.milk88@gmail.com" 
                                        target="_blank" rel="noopener noreferrer" 
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >pearl.milk88@gmail.com</a>
                                </div>
                            </div>
                            <div className="flex flex-col items-center space-y-2 md:flex-row md:items-start md:space-y-0 md:space-x-4">
                                <div className="p-3 rounded-full bg-primart/10">
                                    <Map className="w-6 h-6text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Location</h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors"
                                    >Kuala Lumpur, Malaysia</a>
                                </div>
                            </div>
                        </div>
                        <div className="pt-8">
                            <h4 className="font-medium mb-4">Connect With Me</h4>
                            <div className="flex space-x-4 justify-ceenter">
                                <a href="#" target="_blank">
                                    <Linkedin/>
                                </a>
                                <a href="#" target="_blank">
                                    <Twitter/>
                                </a>
                                <a href="#" target="_blank">
                                    <Instagram/>
                                </a>
                                <a href="#" target="_blank">
                                    <Facebook />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-card p-8 rounded-lg shadow-xs" onSubmit={handleSubmit}>
                        <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name"className="block text-sm font-medium mb-2">Your Name</label>
                                <input 
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Joe"
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlind-hidden focusLring-2 focus:ring-primary"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email"className="block text-sm font-medium mb-2">Your Email</label>
                                <input 
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="joe@email.com"
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlind-hidden focusLring-2 focus:ring-primary"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message"className="block text-sm font-medium mb-2">Your Message</label>
                                <input 
                                    id="message"
                                    name="message"
                                    placeholder="Hello there!"
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlind-hidden focusLring-2 focus:ring-primary rize-none"
                                    required
                                />
                            </div>

                            <button 
                                type="submit" 
                                disabled={isSubmitting}
                                className={cn(
                                    "cosmic-button w-full flex items-center justify-center gap-2",
                                    )}
                                >
                                {isSubmitting ? (
                                    <Loader2 className="w-6 h-6 animate-spin" />
                                ) : (
                                    <>
                                        Send Message
                                        <Send className="w-6 h-6" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>      
            <ToastContainer 
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                closeOnClick={false}
                pauseOnHover={false}
                draggable={true}
                progress={undefined}
                theme={theme}
            /> 
        </section>
    )
}