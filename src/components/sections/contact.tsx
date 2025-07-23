'use client'

import { motion } from "framer-motion";
import GlassCard from "@/components/glass-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Show loading state
      setIsSubmitting(true);
      
      // Use the Next.js API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (response.ok) {
        // Reset form
        setFormState({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
        
        // Show success message
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
      
    } catch (error) {
      console.error("Error preparing form submission:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
      });
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Book Your Consultation</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Ready to start your physiotherapy journey? Book an online consultation or schedule a home visit.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <GlassCard>
            <h3 className="text-xl font-semibold mb-4">Service Areas & Contact</h3>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full glass-card flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-sm">Phone</h4>
                  <a href="tel:8302074388" className="text-muted-foreground hover:text-primary transition-colors">+91 830 207 4388</a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full glass-card flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-sm">Email</h4>
                  <a href="mailto:physiojainmili23@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">physiojainmili23@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full glass-card flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-sm">Service Areas</h4>
                  <p className="text-muted-foreground">Delhi NCR, Gurgaon, Noida & Online</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Available Services</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Online Consultations (₹500-800)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-sm">Home Visits (₹800-1200)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-sm">Neurological Rehabilitation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Orthopedic Physiotherapy</span>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="font-medium mb-2">Working Hours</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <div>Mon-Fri: 9:00 AM - 6:00 PM</div>
                  <div>Sat: 9:00 AM - 4:00 PM</div>
                  <div>Sun: By Appointment</div>
                </div>
              </div>
            </div>
          </GlassCard>
          
          <GlassCard>
            <h3 className="text-xl font-semibold mb-4">Book Consultation</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="glass-card bg-transparent"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="glass-card bg-transparent"
                />
              </div>
              <div>
                <select
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className="glass-card bg-transparent border border-input rounded-md px-3 py-2 text-sm w-full"
                >
                  <option value="" disabled>Select Service Type</option>
                  <option value="Online Consultation">Online Consultation (₹500-800)</option>
                  <option value="Home Visit">Home Visit (₹800-1200)</option>
                  <option value="Neurological Rehab">Neurological Rehabilitation</option>
                  <option value="Orthopedic Treatment">Orthopedic Treatment</option>
                  <option value="Sports Injury">Sports Injury Rehabilitation</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Describe your condition, preferred time, and for home visits - your location in Delhi NCR/Gurgaon/Noida"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  className="glass-card bg-transparent min-h-[120px]"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "Booking..." : "Book Consultation"}
              </Button>
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}