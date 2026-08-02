"use client";

import { CheckCircle2, Compass, Layers, Target, Users } from "lucide-react";

const softSkills = [
  "Problem Solving & Analytical Thinking",
  "Effective Cross-Functional Communication",
  "Agile Methodologies & Sprint Planning",
  "Fast Learner & Adaptable to New Tech",
  "Continuous Learning & Adaptation",
  "Time Management & Task Prioritization",
];

export function About() {
  return (
    <section id="about" className="py-28 px-6 sm:px-8 lg:px-12 max-w-[1400px] mx-auto">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="px-3.5 py-1.5 rounded-full bg-[var(--surface)] border border-[var(--border)] text-xs font-semibold text-[var(--accent)] tracking-widest uppercase mb-3 shadow-md">
          Background & Vision
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--text)] mb-4">
          About <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">Me</span>
        </h2>
        <p className="text-[var(--muted)] max-w-xl text-sm sm:text-base leading-relaxed">
          Get to know my background, philosophy, and what drives my passion for software engineering and creative UI design.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Column: Introduction & Career Goals */}
        <div className="space-y-6">
          <div className="p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border)] shadow-xl space-y-4 hover:border-[var(--primary)]/50 transition-all group">
            <div className="flex items-center gap-3.5 text-[var(--primary)] font-semibold">
              <div className="w-10 h-10 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center">
                <Compass className="w-5 h-5 text-[var(--primary)]" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text)]">Introduction</h3>
            </div>
            <p className="text-[var(--muted)] text-sm sm:text-base leading-relaxed">
              I am a dedicated Computer Science graduate with a relentless passion for building modern, high-performance web applications. I bridge the gap between clean code and intuitive design, ensuring every project is performant, accessible, and recruiter-ready.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border)] shadow-xl space-y-4 hover:border-[var(--primary)]/50 transition-all group">
            <div className="flex items-center gap-3.5 text-[var(--primary)] font-semibold">
              <div className="w-10 h-10 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center">
                <Target className="w-5 h-5 text-[var(--primary)]" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text)]">Career Goals</h3>
            </div>
            <p className="text-[var(--muted)] text-sm sm:text-base leading-relaxed">
              My immediate goal is to build a successful career as a Junior Web Developer at an innovative tech company where I can contribute to high-impact web applications, collaborate with seasoned engineers, and continuously expand my technical expertise.
            </p>
          </div>
        </div>

        {/* Right Column: Soft Skills & Tech Summary */}
        <div className="space-y-6">
          <div className="p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border)] shadow-xl space-y-4 hover:border-[var(--accent)]/50 transition-all group">
            <div className="flex items-center gap-3.5 text-[var(--accent)] font-semibold">
              <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-[var(--accent)]" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text)]">Soft Skills</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {softSkills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2.5 text-sm text-[var(--muted)]">
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border)] shadow-xl space-y-4 hover:border-[var(--accent)]/50 transition-all group">
            <div className="flex items-center gap-3.5 text-[var(--accent)] font-semibold">
              <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center">
                <Layers className="w-5 h-5 text-[var(--accent)]" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text)]">Technology Summary</h3>
            </div>
            <p className="text-[var(--muted)] text-sm sm:text-base leading-relaxed">
              Proficient in the modern JavaScript / TypeScript ecosystem, specializing in React, Next.js 15, Tailwind CSS v4, and Node.js. Experienced with Python, PostgreSQL, Git version control, and Vercel cloud deployment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
