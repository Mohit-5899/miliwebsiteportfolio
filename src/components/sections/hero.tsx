'use client'

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import AnimatedBackground from "@/components/animated-background";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen relative flex items-center liquid-bg pt-20">
      <AnimatedBackground bubbleCount={12} />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-sm uppercase tracking-wider text-primary font-semibold">Professional Physiotherapy Services</span>
              <h1 className="mt-2 text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                <span className="text-foreground">Expert </span>
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Physiotherapy Care
                </span>
                <span className="text-foreground"> at Your Doorstep</span>
              </h1>
              
              <p className="text-lg text-muted-foreground mb-6 max-w-lg">
                Get personalized physiotherapy treatment from Dr. Mili Jain (MPT Neurology). Available for online consultations and home visits across Delhi NCR, Gurgaon, and Noida.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 max-w-lg">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Online Consultations</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span>Home Visits Available</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Delhi NCR Coverage</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Neurological Specialist</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <a href="#services">Book Consultation</a>
                </Button>
                <Button variant="outline" asChild size="lg">
                  <a href="#contact">Call Now</a>
                </Button>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="lg:w-1/2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="absolute inset-2 rounded-full glass-card border border-white/20 shadow-xl flex items-center justify-center overflow-hidden">
                  {/* Using the uploaded image */}
                  <Image 
                    src="/assets/images/generation-cd19330d-9bfc-4acb-8663-7429fab862be.png"
                    alt="Dr. Mili Jain"
                    fill
                    sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, 320px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              
              {/* Floating badges */}
              <motion.div 
                className="absolute -top-4 -right-4 glass-card rounded-full px-4 py-2 text-sm font-medium"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                Online & Home Visits
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -left-4 glass-card rounded-full px-4 py-2 text-sm font-medium"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                Delhi NCR Coverage
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}