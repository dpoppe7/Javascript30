"use client";

import React, { useEffect, useRef } from "react";

const colors = ["#fdb6d0", "#ffae57", "#ffd580", "#bae67e", "#5ccfe6", "#9cc6f4", "#a2aabc", "#aa72c5", "#d47598"];
const symbols = [".", ":", ".", ":", "."];

export default function ASCIIEffect() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // fixed, centered decoration
    const rows = 1; 
    // fixed number of columns so it stays centered and doesn't stretch to the edges
    const cols = 50;

    const generateFrame = () => {
      if (!containerRef.current) return;
      
      let content = "";
      for (let i = 0; i < rows; i++) {
        let line = "";
        for (let j = 0; j < cols; j++) {
          const symbol = symbols[Math.floor(Math.random() * symbols.length)];
          const color = colors[Math.floor(Math.random() * colors.length)];
          line += `<span style="color: ${color}">${symbol}</span>`;
        }
        content += line + "\n";
      }
      containerRef.current.innerHTML = content;
    };

    // Update every 150ms for a steady "flicker" effect
    const interval = setInterval(generateFrame, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
        ref={containerRef}
        className="select-none cursor-default text-center"
        style={{
          fontFamily: "'Courier New', monospace",
          fontSize: "20px",
          lineHeight: "1.2",
          whiteSpace: "pre",
          width: "fit-content",
        }}
    ></div>
  );
}