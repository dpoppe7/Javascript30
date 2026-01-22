export interface Project {
  id: string;
  title: string;
  description: string;
  folderName: string;
  tags: string[];
  difficulty: "Beginner" | "Intermediate" | "Advanced";
}

export const projects: Project[] = [
  {
    id: "01",
    title: "Drum Kit",
    description: "An interactive drum kit that responds to keyboard input. Press keys A through L to play different drum sounds. Features colorful visual feedback and smooth animations when keys are pressed.",
    folderName: "01-Drum-Kit",
    tags: ["Audio", "Events", "DOM"],
    difficulty: "Beginner",
  },
  {
    id: "02",
    title: "Clock",
    description: "A beautiful analog clock with real-time updates. Features smooth hand animations and a stunning background. Demonstrates Date object manipulation and CSS transforms.",
    folderName: "02-Clock",
    tags: ["Date", "CSS", "Animation"],
    difficulty: "Beginner",
  },
  {
    id: "03",
    title: "CSS Variables",
    description: "A dynamic image editor that uses CSS custom properties (variables) to control spacing, blur, and base color. Real-time updates demonstrate the power of CSS variables with JavaScript.",
    folderName: "03-CSS-Variables",
    tags: ["CSS Variables", "DOM", "Events"],
    difficulty: "Beginner",
  },
  {
    id: "04",
    title: "Array Cardio Day 1",
    description: "A comprehensive workout with JavaScript array methods including filter, map, sort, and reduce. Practice manipulating data arrays with real-world examples.",
    folderName: "04-Cardio-Day",
    tags: ["Arrays", "ES6", "Data Manipulation"],
    difficulty: "Intermediate",
  },
];
