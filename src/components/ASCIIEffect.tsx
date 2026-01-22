"use client";

import React, { useEffect, useRef } from "react";

const colors = ["#fdb6d0", "#ffae57", "#ffd580", "#bae67e", "#5ccfe6", "#9cc6f4", "#a2aabc", "#aa72c5", "#d47598"];
const symbols = [".", ":", ".", ":", "."];

export default function ASCIIEffect() {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const generateMaze = () => {
      if (!containerRef.current) return;

      const cols = Math.floor(window.innerWidth / 25);
      const rows = 20; // Fixed number of rows for footer effect
      
      // Clear previous content
      containerRef.current.innerHTML = "";

      // Create document fragment for better performance
      const fragment = document.createDocumentFragment();

      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
          const randomColor = colors[Math.floor(Math.random() * colors.length)];
          
          const span = document.createElement("span");
          span.style.color = randomColor;
          span.textContent = randomSymbol;
          fragment.appendChild(span);
        }
      }

      containerRef.current.appendChild(fragment);
    };

    const handleResize = () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      
      animationFrameRef.current = requestAnimationFrame(() => {
        generateMaze();
      });
    };

    // Initial generation
    generateMaze();

    // Handle window resize
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10 pointer-events-none" />
      
      {/* ASCII content */}
      <div
        ref={containerRef}
        id="ascii-rain"
        className="relative w-full pointer-events-none"
        style={{
          fontFamily: "monospace",
          fontSize: "20px",
          lineHeight: "1.2",
          whiteSpace: "pre",
          minHeight: "500px",
        }}
      />
    </div>
  );
}
