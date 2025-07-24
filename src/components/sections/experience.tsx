'use client'

import GlassCard from "@/components/glass-card";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      area: "Orthopedic Medicine & Pediatric Ward",
      duration: "1 month",
      description: "Provided physiotherapy treatments for orthopedic patients including post-surgical rehabilitation and pediatric care."
    },
    {
      area: "Surgery, Oncology, OBS, GYNAE",
      duration: "1 month",
      description: "Assisted patients recovering from various surgical procedures and specialized treatment for cancer patients."
    },
    {
      area: "Neurology & Neurosurgery Ward",
      duration: "1 month",
      description: "Applied advanced neurological rehabilitation techniques for patients with brain and spinal cord injuries."
    },
    {
      area: "Outpatient Physiotherapy Department",
      duration: "1 month",
      description: "Treated a diverse range of outpatients with various musculoskeletal and neurological conditions."
    },
    {
      area: "ICU/NICU/CCU/PICU",
      duration: "2 months",
      description: "Provided critical care physiotherapy for patients in intensive care units, including respiratory therapy."
    },
    {
      area: "HDU and Cardiothoracic & Vascular Surgery",
      duration: "1 month",
      description: "Specialized rehabilitation for patients recovering from heart and vascular surgeries."
    },
    {
      area: "COVID-19 ICU Ward & Private Rooms",
      duration: "1 month",
      description: "Implemented respiratory physiotherapy protocols for COVID-19 patients requiring critical care."
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Clinical Experience</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Practical experience across diverse medical disciplines and specialized care units.
          </p>
        </motion.div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/30 before:to-transparent">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex items-start md:justify-center group"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary/30 bg-white glass-card shadow md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <span className="h-3 w-3 rounded-full bg-primary"></span>
              </div>
              
              <GlassCard
                className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-1">
                  <h3 className="font-semibold text-primary">{exp.area}</h3>
                  <span className="text-xs font-medium bg-primary/20 text-primary px-3 py-1 rounded-full self-start sm:self-auto">
                    {exp.duration}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{exp.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}