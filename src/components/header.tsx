'use client'

import { useState, useEffect, useMemo } from "react";
import { NavMenu, MobileNav } from "@/components/ui/nav-menu";
import { cn } from "@/lib/utils";

export default function Header() {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  
  const sections = useMemo(() => [
    { href: "#home", title: "Home" },
    { href: "#about", title: "About" },
    { href: "#services", title: "Services" },
    { href: "#experience", title: "Experience" },
    { href: "#education", title: "Education" },
    { href: "#contact", title: "Contact" }
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      // Set header background when scrolled
      setScrolled(window.scrollY > 10);
      
      // Determine active section based on scroll position
      const sectionElements = sections.map(section => ({
        id: section.href.slice(1),
        element: document.getElementById(section.href.slice(1))
      })).filter(section => section.element);
      
      // Reset active section initially
      let currentActive = "";
      
      // Find the section currently in view
      // We iterate in reverse to prioritize later sections when scrolling down
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        const rect = section.element?.getBoundingClientRect();
        
        // A section is considered in view if its top is above the middle of the viewport
        // or if we're at the bottom of the page and it's the last section
        if (rect && 
            ((rect.top <= window.innerHeight / 2 && rect.bottom > 0) || 
             (window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 100 && i === sectionElements.length - 1)) {
          currentActive = section.id;
          break;
        }
      }
      
      setActiveSection(currentActive);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections]);

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 py-3",
      scrolled ? "glass-card py-2" : "bg-transparent py-4"
    )}>
      <div className="container flex justify-between items-center">
        <a href="#home" className="flex items-center text-lg font-semibold">
          <span className="text-primary">Dr. Mili Jain</span>
          <span className="text-xs font-normal text-muted-foreground ml-2 hidden sm:inline">Physiotherapist</span>
        </a>
        <div className="flex items-center">
          <NavMenu items={sections.map(s => ({ href: s.href, title: s.title }))} activeSection={activeSection} />
          <MobileNav items={sections.map(s => ({ href: s.href, title: s.title }))} activeSection={activeSection} />
        </div>
      </div>
    </header>
  );
}