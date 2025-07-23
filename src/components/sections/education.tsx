'use client'

import GlassCard from "@/components/glass-card";
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Education() {
  const education = [
    {
      degree: "Master of Physiotherapy (MPT) - Neurology",
      institution: "Atal Bihari Vajpayee Medical University",
      location: "Uttar Pradesh, Lucknow",
      year: "2022"
    },
    {
      degree: "Bachelor of Physiotherapy (BPT)",
      institution: "Mahatma Gandhi University of Medical Sciences and Technology",
      location: "Jaipur, Rajasthan",
      year: "2016"
    },
    {
      degree: "Senior Secondary (XII)",
      institution: "Children Senior Secondary School",
      location: "Kota, Rajasthan",
      year: "2015"
    },
    {
      degree: "Secondary Education (X)",
      institution: "Shiv Jyoti Convent School",
      location: "Kota, Rajasthan",
      year: "2013"
    }
  ];
  
  const certifications = [
    {
      title: "5th International Conference of Physical Therapy",
      organization: "AIIMS",
      year: "2016"
    },
    {
      title: "1st International Conference of Physiotherapy",
      organization: "RPAICON",
      year: "2017"
    },
    {
      title: "Workshop on Cupping Therapy",
      organization: "Re-Health Education, Jaipur",
      year: "2018"
    },
    {
      title: "Workshop on Functional Therapeutic Kinesiology Taping in Orthopedic & Sports Conditions",
      organization: "",
      year: "2022"
    },
    {
      title: "Certificate in Osteorehab Clinical Training Program",
      organization: "",
      year: "2022"
    }
  ];

  const skills = [
    { name: "Neurological Rehabilitation", percentage: 95 },
    { name: "Orthopedic Rehabilitation", percentage: 90 },
    { name: "Critical Care Physiotherapy", percentage: 85 },
    { name: "Manual Therapy", percentage: 80 },
    { name: "Cupping Therapy", percentage: 90 },
    { name: "Kinesiology Taping", percentage: 85 }
  ];

  return (
    <section id="education" className="py-20 liquid-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Education & Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Academic qualifications, professional certifications, and specialized skills.
          </p>
        </motion.div>

        <Tabs defaultValue="education" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-3 glass-card mb-8">
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>
          
          <TabsContent value="education" className="space-y-4 animate-in fade-in-50 duration-300">
            {education.map((edu, index) => (
              <GlassCard key={index} delay={index} hover={true}>
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-primary">{edu.degree}</h3>
                    <p className="text-muted-foreground">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground">{edu.location}</p>
                  </div>
                  <div className="md:text-right">
                    <span className="inline-block px-3 py-1 rounded-full glass-card text-sm font-medium">
                      {edu.year}
                    </span>
                  </div>
                </div>
              </GlassCard>
            ))}
          </TabsContent>
          
          <TabsContent value="certifications" className="space-y-4 animate-in fade-in-50 duration-300">
            {certifications.map((cert, index) => (
              <GlassCard key={index} delay={index} hover={true}>
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold">{cert.title}</h3>
                    {cert.organization && (
                      <p className="text-sm text-muted-foreground">{cert.organization}</p>
                    )}
                  </div>
                  <div className="md:text-right">
                    <span className="inline-block px-3 py-1 rounded-full glass-card text-sm font-medium">
                      {cert.year}
                    </span>
                  </div>
                </div>
              </GlassCard>
            ))}
          </TabsContent>
          
          <TabsContent value="skills" className="space-y-6 animate-in fade-in-50 duration-300">
            <GlassCard>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.percentage}%</span>
                    </div>
                    <Progress 
                      value={skill.percentage} 
                      className={`h-2 ${
                        index % 3 === 0 ? '[&>div]:bg-primary' : 
                        index % 3 === 1 ? '[&>div]:bg-secondary' : '[&>div]:bg-accent'
                      }`}
                    />
                  </div>
                ))}
              </div>
            </GlassCard>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}