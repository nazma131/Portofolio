"use client";

import { useState } from "react";
import { certificates } from "@/data/certificates";
import { CertificateItem } from "@/types/portfolio";
import { Award, ExternalLink, X, Eye } from "lucide-react";

export function Certificates() {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  return (
    <section id="certificates" className="py-28 px-6 sm:px-8 lg:px-12 max-w-[1400px] mx-auto">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="px-3.5 py-1.5 rounded-full bg-[var(--surface)] border border-[var(--border)] text-xs font-semibold text-[var(--accent)] tracking-widest uppercase mb-3 shadow-md">
          Verified Credentials
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--text)] mb-4">
          Certifications & <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">Awards</span>
        </h2>
        <p className="text-[var(--muted)] max-w-xl text-sm sm:text-base leading-relaxed">
          Professional certifications validating my expertise in cloud computing, modern web frameworks, and software development standards.
        </p>
      </div>

      <div className="max-w-md mx-auto">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            onClick={() => setSelectedCert(cert)}
            className="flex flex-col rounded-3xl bg-[var(--surface)] border border-[var(--border)] overflow-hidden shadow-xl hover:border-[var(--accent)] transition-all cursor-pointer group"
          >
            <div className="relative h-44 w-full overflow-hidden bg-[var(--border)]">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-sm gap-2 backdrop-blur-xs">
                <Eye className="w-4 h-4 text-[var(--accent)]" />
                <span>Preview Certificate</span>
              </div>
            </div>

            <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between space-y-4">
              <div>
                <span className="text-xs font-medium text-[var(--accent)]">{cert.issuer} • {cert.date}</span>
                <h3 className="text-base font-bold text-[var(--text)] mt-1.5 group-hover:text-[var(--accent)] transition-colors line-clamp-2">
                  {cert.title}
                </h3>
              </div>
              {cert.credentialId && (
                <span className="text-xs font-mono text-[var(--muted)] bg-[var(--border)]/40 px-2.5 py-1 rounded-lg w-fit">
                  ID: {cert.credentialId}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Preview Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-[var(--surface)] border border-[var(--border)] rounded-3xl shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-[var(--border)]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-[var(--accent)]" />
                </div>
                <h3 className="text-lg font-bold text-[var(--text)]">{selectedCert.title}</h3>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="w-9 h-9 rounded-xl border border-[var(--border)] flex items-center justify-center text-[var(--muted)] hover:text-[var(--text)] hover:border-[var(--accent)] transition-all"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="h-72 w-full rounded-2xl overflow-hidden bg-[var(--border)] shadow-inner">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-1.5">
                <p className="text-base font-bold text-[var(--text)]">Issued by {selectedCert.issuer}</p>
                <p className="text-xs text-[var(--muted)]">Completion Date: {selectedCert.date}</p>
                {selectedCert.credentialId && (
                  <p className="text-xs font-mono text-[var(--muted)]">Credential ID: {selectedCert.credentialId}</p>
                )}
              </div>

              {selectedCert.credentialUrl && (
                <div className="pt-2">
                  <a
                    href={selectedCert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white text-sm font-bold tracking-wide shadow-lg glow-primary hover:opacity-95 transition-all"
                  >
                    <span>Verify Official Credential</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
