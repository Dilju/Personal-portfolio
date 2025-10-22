import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "../lib/utils";
import { toast } from "sonner";
import { useState } from "react";


export const ContactSection = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        setIsSubmitting(true)

        // toast.loading("Sending Message...")
        
        setTimeout(() => {
            toast.dismiss()
            toast.success("Message sent", {
                description: "Thanks for reaching out! I'll get back to you soon."
            })   
            setIsSubmitting(false)
        }, 1500);
    }
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary"> Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Feel free to reach out for collaborations, opportunities, or just to
                connect. I’m always open to discussing new projects, creative ideas,
                or potential opportunities in web development and software
                engineering.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10 ">
                                    <Mail className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-left"> Email</h4>
                                    <a 
                                        href="mailto:diljubhaskaranam@gmail.com" 
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >diljubhaskaranam@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10 ">
                                    <Phone className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-left"> Phone</h4>
                                    <a 
                                        href="tel:+918590348930" 
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >+91 8590348930</a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10 ">
                                    <MapPin className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-left"> Location</h4>
                                    <a 
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >Koduvally, Kozhikode, 673572, Kerala, India</a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4">Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://linkedin.com/in/dilju-bhaskaran-am" target="_blank" className="hover:border rounded-lg px-2 py-2 transition duration-300">
                                    <Linkedin/>  
                                </a>
                                <a href="https://www.instagram.com/dilju__bhaskaran__am" target="_blank" className="hover:border rounded-lg px-2 py-2 transition duration-300">
                                    <Instagram/>  
                                </a>
                                <a href="#" target="_blank" className="hover:border rounded-lg px-2 py-2 transition duration-300">
                                    <Facebook/>  
                                </a>
                            </div>
                        </div>

                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2 text-left"> Your Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    required 
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-primary"
                                    placeholder="John Dae"
                                />
                            </div> 

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2 text-left"> Your Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    required 
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-primary"
                                    placeholder="john@xyz.com"
                                />
                            </div> 

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2 text-left"> Your Message</label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    required 
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-primary"
                                    placeholder="Type message..."
                                />
                            </div> 

                            <button 
                                type="submit" 
                                disabled = {isSubmitting}
                                className={cn(
                                    "cosmic-button w-full flex items-center justify-center gap-2"
                            )}>
                                {isSubmitting ? "Sending..." : "Send Message"}
                                <Send size={16}/>
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}