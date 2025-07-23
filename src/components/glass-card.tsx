import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export default function GlassCard({ 
  children, 
  className, 
  hover = false,
  delay = 0
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className={cn(
        "glass-card rounded-xl p-6",
        hover && "transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
        className
      )}
    >
      {children}
    </motion.div>
  );
}