"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import { Project } from "@/types/portfolio";
import { ExternalLink, Lock, Eye, X, Code } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text)] mb-3">
          Featured Projects
        </h2>
        <p className="text-[var(--muted)] max-w-xl text-sm sm:text-base">
          A selection of real-world applications and capstone projects showcasing my technical capability and design sense. Click any card to preview.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project, idx) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="flex flex-col rounded-2xl bg-[var(--surface)] border border-[var(--border)] overflow-hidden shadow-xs hover:border-[var(--primary)] transition-all cursor-pointer group"
          >
            {/* Project Image with Preview Overlay */}
            <div className="relative h-40 w-full overflow-hidden bg-[var(--border)]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-medium text-sm gap-1.5">
                <Eye className="w-4 h-4" />
                <span>Preview</span>
              </div>
              {project.isPrivate && (
                <div className="absolute top-2 right-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-900/85 text-white text-[10px] font-medium backdrop-blur-md">
                  <Lock className="w-2.5 h-2.5" />
                  <span>Private</span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1 justify-between space-y-3">
              <div>
                <span className="text-xs text-[var(--muted)] line-clamp-1">{project.techStack.slice(0, 2).join(" • ")}</span>
                <h3 className="text-base font-bold text-[var(--text)] mt-1 group-hover:text-[var(--primary)] transition-colors line-clamp-1">
                  {project.title}
                </h3>
              </div>
              <p className="text-xs text-[var(--muted)] line-clamp-2 leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Project Preview Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl bg-[var(--surface)] border border-[var(--border)] rounded-2xl shadow-xl overflow-hidden max-h-[90vh] flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-[var(--border)]">
              <div className="flex items-center gap-2">
                <Code className="w-5 h-5 text-[var(--primary)]" />
                <h3 className="text-lg font-bold text-[var(--text)]">{selectedProject.title}</h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="w-8 h-8 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--muted)] hover:text-[var(--text)]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 space-y-4 overflow-y-auto">
              <div className="h-64 w-full rounded-xl overflow-hidden bg-[var(--border)] relative">
                {selectedProject.videoUrl ? (
                  <video
                    src={selectedProject.videoUrl}
                    controls
                    className="w-full h-full object-cover bg-black"
                  />
                ) : (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover object-top"
                  />
                )}
                {selectedProject.isPrivate && (
                  <div className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 text-white text-xs font-medium backdrop-blur-md">
                    <Lock className="w-3.5 h-3.5" />
                    <span>Private Project</span>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-[var(--text)]">Project Overview</h4>
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  {selectedProject.longDescription || selectedProject.description}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-[var(--text)]">Tech Stack</h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-[var(--border)]/50 text-[var(--muted)] text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-[var(--border)]">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-[var(--text)] text-sm font-medium hover:border-[var(--primary)] transition-all shadow-xs"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View Code</span>
                  </a>
                )}

                {selectedProject.demoUrl && (
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--primary)] text-white text-sm font-medium shadow-sm hover:bg-[var(--secondary)] transition-all"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
