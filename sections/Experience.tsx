"use client";

import { experiences } from "@/data/experience";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-28 px-6 sm:px-8 lg:px-12 max-w-[1400px] mx-auto">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="px-3.5 py-1.5 rounded-full bg-[var(--surface)] border border-[var(--border)] text-xs font-semibold text-[var(--accent)] tracking-widest uppercase mb-3 shadow-md">
          Professional Career
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--text)] mb-4">
          Work <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">Experience</span>
        </h2>
        <p className="text-[var(--muted)] max-w-xl text-sm sm:text-base leading-relaxed">
          My professional journey, internships, freelance engagements, and leadership roles in software development.
        </p>
      </div>

      <div className="relative border-l-2 border-[var(--border)] ml-4 sm:ml-8 space-y-12">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="relative pl-6 sm:pl-8"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full border-2 border-[var(--primary)] bg-[var(--surface)] shadow-lg glow-primary" />

            {/* Card */}
            <div className="p-5 sm:p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border)] shadow-xl space-y-4 hover:border-[var(--primary)]/50 transition-all group">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-xs font-bold uppercase tracking-wider mb-2">
                    {exp.type}
                  </span>
                  <h3 className="text-xl font-bold text-[var(--text)]">{exp.role}</h3>
                  <p className="text-base font-medium text-[var(--muted)]">{exp.company}</p>
                </div>

                <div className="flex flex-col sm:items-end gap-1 text-xs text-[var(--muted)]">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[var(--primary)]" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[var(--primary)]" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Description bullets */}
              <ul className="space-y-2 text-sm text-[var(--muted)] list-disc pl-4 leading-relaxed">
                {exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 pt-3 border-t border-[var(--border)]">
                {exp.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-[var(--border)]/40 text-[var(--muted)] text-xs font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
