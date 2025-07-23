'use client'

import { useEffect, useRef } from "react";

interface AnimatedBackgroundProps {
  bubbleCount?: number;
  minSize?: number;
  maxSize?: number;
}

export default function AnimatedBackground({
  bubbleCount = 10,
  minSize = 50,
  maxSize = 200
}: AnimatedBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    // Clear previous bubbles
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    // Create bubbles
    for (let i = 0; i < bubbleCount; i++) {
      const size = Math.random() * (maxSize - minSize) + minSize;
      const bubble = document.createElement('div');
      bubble.classList.add('bubble');
      
      // Random position
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      
      // Set bubble style
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${left}%`;
      bubble.style.top = `${top}%`;
      
      // Random animation duration and delay
      const duration = 5 + Math.random() * 10;
      const delay = Math.random() * 5;
      bubble.style.animationDuration = `${duration}s`;
      bubble.style.animationDelay = `${delay}s`;
      
      // Append to container
      container.appendChild(bubble);
    }
  }, [bubbleCount, minSize, maxSize]);

  return <div ref={containerRef} className="absolute inset-0 overflow-hidden z-[-1]" />;
}