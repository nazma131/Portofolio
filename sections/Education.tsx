"use client";

import { motion } from "framer-motion";
import { education } from "@/data/education";
import { Award, Calendar, GraduationCap, MapPin } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-24 px-6 sm:px-8 lg:px-12 max-w-[1400px] mx-auto">
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text)] mb-3">
          Education
        </h2>
        <p className="text-[var(--muted)] max-w-xl text-sm sm:text-base">
          Academic background and specialized technical bootcamps.
        </p>
      </div>

      <div className="relative border-l-2 border-[var(--border)] ml-4 sm:ml-8 space-y-12">
        {education.map((edu, idx) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative pl-6 sm:pl-8"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 border-[var(--primary)] bg-[var(--surface)] shadow-xs" />

            {/* Card */}
            <div className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <GraduationCap className="w-5 h-5 text-[var(--primary)]" />
                    <h3 className="text-xl font-bold text-[var(--text)]">{edu.degree}</h3>
                  </div>
                  <p className="text-base font-medium text-[var(--muted)]">{edu.institution}</p>
                </div>

                <div className="flex flex-col sm:items-end gap-1 text-xs text-[var(--muted)]">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-[var(--muted)] leading-relaxed">
                {edu.description}
              </p>

              {edu.gpa && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-semibold">
                  <Award className="w-3.5 h-3.5" />
                  <span>GPA: {edu.gpa}</span>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
