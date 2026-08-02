import { Heart } from "lucide-react";
import { socials } from "@/data/socials";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div>
          <span className="font-bold text-lg text-[var(--text)]">
            Nazma Nurlatifah T
          </span>
        </div>

        {/* Socials */}
        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors text-sm font-medium"
            >
              {social.platform}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-xs text-[var(--muted)]">
          © 2026 Nazma Nurlatifah T
        </p>
      </div>
    </footer>
  );
}
