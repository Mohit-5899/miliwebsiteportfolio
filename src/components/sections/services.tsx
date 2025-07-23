'use client'

import GlassCard from "@/components/glass-card";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Online Physiotherapy Consultation",
      price: "₹500-800 per session",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
          <rect width="18" height="18" x="3" y="3" rx="2"></rect>
          <path d="M9 9h6v6H9z"></path>
          <path d="m16 16 2 2 4-4"></path>
        </svg>
      ),
      description: "Get expert physiotherapy consultation from the comfort of your home via video call",
      features: ["Video consultation", "Exercise prescription", "Treatment plan", "Follow-up included"]
    },
    {
      title: "Home Visit Physiotherapy",
      price: "₹800-1200 per visit", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
          <path d="M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9"></path>
          <path d="M9 22V12h6v10M2 10.6L12 2l10 8.6"></path>
        </svg>
      ),
      description: "Personalized physiotherapy treatment at your home across Delhi NCR, Gurgaon, Noida",
      features: ["In-person treatment", "Equipment provided", "Customized therapy", "Regular follow-up"]
    },
    {
      title: "Neurological Rehabilitation",
      price: "₹1000-1500 per session",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
          <path d="M12 2v4"></path>
          <path d="m16.2 7.8 2.9-2.9"></path>
          <path d="M18 12h4"></path>
          <path d="m16.2 16.2 2.9 2.9"></path>
          <path d="M12 18v4"></path>
          <path d="m4.9 19.1 2.9-2.9"></path>
          <path d="M2 12h4"></path>
          <path d="m4.9 4.9 2.9 2.9"></path>
        </svg>
      ),
      description: "Specialized neurological physiotherapy for stroke, paralysis, and brain injury recovery",
      features: ["Post-stroke recovery", "Paralysis treatment", "Balance training", "Mobility improvement"]
    },
    {
      title: "Orthopedic Physiotherapy",
      price: "₹600-1000 per session",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
          <path d="M12 3v6l4-4-4-4"></path>
          <path d="M12 21v-6l4 4-4 4"></path>
          <path d="M3 12h6l-4-4-4 4"></path>
          <path d="M21 12h-6l4-4 4 4"></path>
        </svg>
      ),
      description: "Treatment for joint pain, back pain, neck pain, and post-surgical rehabilitation",
      features: ["Joint mobilization", "Pain management", "Post-surgery rehab", "Strengthening exercises"]
    },
    {
      title: "Cupping & Manual Therapy",
      price: "₹700-1000 per session",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M8 12a4 4 0 0 1 8 0"></path>
        </svg>
      ),
      description: "Traditional cupping therapy combined with modern manual therapy techniques",
      features: ["Cupping therapy", "Deep tissue massage", "Trigger point release", "Pain relief"]
    },
    {
      title: "Sports Injury Rehabilitation",
      price: "₹800-1200 per session",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
          <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"></path>
          <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"></path>
          <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"></path>
          <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"></path>
        </svg>
      ),
      description: "Specialized rehabilitation for sports injuries and return to activity programs",
      features: ["Sports injury recovery", "Performance enhancement", "Injury prevention", "Return to sport"]
    }
  ];

  return (
    <section id="services" className="py-20 relative liquid-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Our Services</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Professional physiotherapy services available online and at your home across Delhi NCR, Gurgaon, and Noida.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <GlassCard key={index} hover={true} delay={index} className="p-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full glass-card flex items-center justify-center flex-shrink-0">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold">{service.title}</h3>
                    <span className="text-sm font-bold text-primary bg-primary/10 px-2 py-1 rounded-full whitespace-nowrap">
                      {service.price}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3">{service.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-xs">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <p className="text-sm text-muted-foreground mb-4">
              Ready to start your physiotherapy journey?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 py-2">
                Book Consultation
              </a>
              <a href="tel:+918302074388" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-6 py-2">
                Call Now: +91 830 207 4388
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}