'use client'

import GlassCard from "@/components/glass-card";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Why Choose Our Services</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8">
          <GlassCard className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-primary mb-4">Expert Physiotherapy Care</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Dr. Mili Jain brings years of specialized experience in neurological physiotherapy, offering both 
              online consultations and home visits across Delhi NCR, Gurgaon, and Noida.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              With a Master&apos;s degree in Neurology and extensive ICU experience, she provides comprehensive 
              rehabilitation services tailored to your specific needs.
            </p>
            <div className="flex items-center gap-2 text-sm font-medium text-primary">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span>MPT Neurology • Licensed Physiotherapist • 5+ Years Experience</span>
            </div>
          </GlassCard>
          
          <div className="md:w-1/2 space-y-4">
            <GlassCard delay={2} hover={true} className="bg-gradient-to-r from-primary/5 to-primary/10 flex items-center">
              <div className="mr-4 h-12 w-12 flex items-center justify-center rounded-full bg-primary/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Online Consultations</h3>
                <p className="text-sm text-muted-foreground">Video calls from comfort of your home</p>
              </div>
            </GlassCard>
            
            <GlassCard delay={3} hover={true} className="bg-gradient-to-r from-secondary/5 to-secondary/10 flex items-center">
              <div className="mr-4 h-12 w-12 flex items-center justify-center rounded-full bg-secondary/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Home Visits</h3>
                <p className="text-sm text-muted-foreground">Personalized treatment at your location</p>
              </div>
            </GlassCard>
            
            <GlassCard delay={4} hover={true} className="bg-gradient-to-r from-accent/5 to-accent/10 flex items-center">
              <div className="mr-4 h-12 w-12 flex items-center justify-center rounded-full bg-accent/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Delhi NCR Coverage</h3>
                <p className="text-sm text-muted-foreground">Serving Gurgaon, Noida, and surrounding areas</p>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}