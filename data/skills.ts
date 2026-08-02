import { SkillCategory } from "@/types/portfolio";

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 40, description: "Component-based UI development, hooks" },
      { name: "Next.js", level: 40, description: "App Router, Server Components, SSR" },
      { name: "TypeScript", level: 50, description: "Type safety and interfaces" },
      { name: "Tailwind CSS v4", level: 75, description: "Modern styling, responsive layouts" },
      { name: "HTML dan CSS3", level: 90, description: "Semantic markup, flexbox, grid" },
      { name: "JavaScript", level: 80, description: "ES6+, asynchronous programming" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "PHP", level: 90, description: "Server-side scripting, OOP, MVC architecture" },
      { name: "Node.js", level: 70, description: "JavaScript runtime environment" },
      { name: "Next.js API Routes", level: 50, description: "Serverless endpoints, route handlers" },
      { name: "Python", level: 85, description: "Scripting, logic, backend services" },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "PostgreSQL", level: 70, description: "Relational database management" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git & GitHub", level: 70, description: "Version control and collaboration" },
      { name: "Vercel", level: 50, description: "Deployment and hosting" },
      { name: "VS Code", level: 90, description: "Development environment" },
    ],
  },
];
