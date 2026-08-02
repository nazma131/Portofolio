"use client";

import { skillCategories } from "@/data/skills";
import { Code, Database, Server, Wrench } from "lucide-react";

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Frontend":
      return <Code className="w-5 h-5 text-[var(--primary)]" />;
    case "Backend":
      return <Server className="w-5 h-5 text-[var(--primary)]" />;
    case "Database":
      return <Database className="w-5 h-5 text-[var(--primary)]" />;
    case "Tools":
      return <Wrench className="w-5 h-5 text-[var(--primary)]" />;
    default:
      return <Code className="w-5 h-5 text-[var(--primary)]" />;
  }
};

export function Skills() {
  return (
    <section id="skills" className="py-28 px-6 sm:px-8 lg:px-12 max-w-[1400px] mx-auto">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="px-3.5 py-1.5 rounded-full bg-[var(--surface)] border border-[var(--border)] text-xs font-semibold text-[var(--accent)] tracking-widest uppercase mb-3 shadow-md">
          Expertise & Stack
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--text)] mb-4">
          Technical <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">Skills</span>
        </h2>
        <p className="text-[var(--muted)] max-w-xl text-sm sm:text-base leading-relaxed">
          A comprehensive breakdown of the programming languages, frameworks, and modern tools I use to build robust applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((cat) => (
          <div
            key={cat.category}
            className="p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border)] shadow-xl space-y-6 hover:border-[var(--primary)]/50 transition-all group"
          >
            <div className="flex items-center gap-3.5 pb-4 border-b border-[var(--border)]">
              <div className="w-10 h-10 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center">
                {getCategoryIcon(cat.category)}
              </div>
              <h3 className="text-xl font-bold text-[var(--text)]">{cat.category}</h3>
            </div>

            <div className="space-y-4">
              {cat.skills.map((skill) => (
                <div key={skill.name} className="space-y-1.5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-semibold text-[var(--text)]">{skill.name}</span>
                    <span className="text-xs font-mono text-[var(--muted)]">{skill.level}%</span>
                  </div>
                  {/* Progress bar */}
                  <div className="w-full h-2.5 rounded-full bg-[var(--border)] overflow-hidden p-0.5">
                    <div
                      style={{ width: `${skill.level}%` }}
                      className="h-full rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] transition-all duration-1000"
                    />
                  </div>
                  {skill.description && (
                    <p className="text-xs text-[var(--muted)] pt-0.5">{skill.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
