"use client";

import { ArrowRight, Download, Mail, MessageCircle } from "lucide-react";
import { socials } from "@/data/socials";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/SocialIcons";

export function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background neon glow blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--primary)]/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[var(--accent)]/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-[1400px] mx-auto text-center flex flex-col items-center px-6 sm:px-8 lg:px-12">
        {/* Profile Avatar with glowing border */}
        <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden p-1 bg-gradient-to-tr from-[var(--primary)] to-[var(--accent)] shadow-xl mb-8 group">
          <div className="w-full h-full rounded-full overflow-hidden bg-[var(--surface)]">
            <img
              src="/foto.jpg"
              alt="Nazma Nurlatifah T"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>

        {/* Name with Gradient */}
        <h1 className="text-4xl sm:text-7xl font-extrabold tracking-tight text-[var(--text)] mb-4">
          Hi, I&apos;m <span className="bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)] bg-clip-text text-transparent">Nazma Nurlatifah T</span>
        </h1>

        {/* Title */}
        <p className="text-xl sm:text-2xl font-semibold text-[var(--muted)] mb-6 tracking-wide">
          Junior Web Developer
        </p>

        {/* Paragraph */}
        <p className="max-w-2xl text-base sm:text-lg text-[var(--muted)] mb-12 leading-relaxed">
          Crafting high-performance, immersive web applications with modern technologies like Next.js 15, TypeScript, and Tailwind CSS. Focused on bold typography, elegant interfaces, and flawless user experiences.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white font-medium text-sm shadow-lg glow-primary hover:opacity-95 transition-all group"
          >
            <span>Let&apos;s Connect</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href="#projects"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-[var(--text)] font-medium text-sm shadow-md hover:border-[var(--primary)] hover:bg-[var(--border)]/20 transition-all"
          >
            <span>Explore Projects</span>
          </a>

          <a
            href="/cv.pdf"
            download="CV_Nazma_Nurlatifah.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-[var(--muted)] hover:text-[var(--text)] font-medium text-sm shadow-md hover:border-[var(--primary)] hover:bg-[var(--border)]/20 transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Download CV</span>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          {socials.map((social) => {
            return (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.platform}
                className="w-11 h-11 rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] flex items-center justify-center transition-all shadow-md group"
              >
                {social.platform === "GitHub" && <GithubIcon className="w-4 h-4 transition-transform group-hover:scale-110" />}
                {social.platform === "LinkedIn" && <LinkedinIcon className="w-4 h-4 transition-transform group-hover:scale-110" />}
                {social.platform === "Email" && <Mail className="w-4 h-4 transition-transform group-hover:scale-110" />}
                {social.platform === "WhatsApp" && <MessageCircle className="w-4 h-4 transition-transform group-hover:scale-110" />}
                {social.platform === "Twitter" && <TwitterIcon className="w-4 h-4 transition-transform group-hover:scale-110" />}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
