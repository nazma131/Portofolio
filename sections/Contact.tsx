"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import { socials } from "@/data/socials";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" },);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", message: "" });
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 px-6 sm:px-8 lg:px-12 max-w-[1400px] mx-auto">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="px-3.5 py-1.5 rounded-full bg-[var(--surface)] border border-[var(--border)] text-xs font-semibold text-[var(--primary)] tracking-widest uppercase mb-3 shadow-md">
          Get In Touch
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--text)] mb-4">
          Let&apos;s Build Something <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">Together</span>
        </h2>
        <p className="text-[var(--muted)] max-w-xl text-sm sm:text-base leading-relaxed">
          Have a project in mind, a job opportunity, or just want to connect? Send me a message and I&apos;ll get back to you soon.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Info & Details */}
        <div className="space-y-6">
          <div className="p-5 sm:p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border)] shadow-xl space-y-6">
            <h3 className="text-xl font-bold text-[var(--text)]">Contact Information</h3>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              Feel free to reach out through the contact form or directly via email, phone, or professional networks.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-sm text-[var(--muted)]">
                <div className="w-12 h-12 rounded-2xl bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-medium text-[var(--text)]">Email</p>
                  <a href="mailto:nazmanurlatifah@example.com" className="hover:text-[var(--primary)] transition-colors">
                    nazmanurlatifah@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-[var(--muted)]">
                <div className="w-12 h-12 rounded-2xl bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-medium text-[var(--text)]">Location</p>
                  <span>Indonesia</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-[var(--muted)]">
                <div className="w-12 h-12 rounded-2xl bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-medium text-[var(--text)]">WhatsApp / Phone</p>
                  <span>Available upon request</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[var(--border)]">
              <p className="text-xs font-medium text-[var(--text)] mb-3">Connect on Social Media</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {socials.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 rounded-xl bg-[var(--border)]/30 hover:bg-[var(--primary)]/10 hover:text-[var(--primary)] text-xs font-medium text-[var(--muted)] transition-colors text-center flex items-center justify-center"
                  >
                    {social.platform}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="p-5 sm:p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border)] shadow-xl">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--text)]">Message Sent!</h3>
              <p className="text-sm text-[var(--muted)] max-w-sm">
                Thank you for reaching out. I have received your message and will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-xl font-bold text-[var(--text)]">Send Me a Message</h3>

              <div className="space-y-2">
                <label className="text-xs font-medium text-[var(--text)]">Your Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder=""
                  className="w-full px-4 py-3 rounded-xl bg-[var(--background)] border border-[var(--border)] text-sm text-[var(--text)] placeholder:text-[var(--muted)]/50 focus:outline-none focus:border-[var(--primary)] transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-medium text-[var(--text)]">Your Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder=""
                  className="w-full px-4 py-3 rounded-xl bg-[var(--background)] border border-[var(--border)] text-sm text-[var(--text)] placeholder:text-[var(--muted)]/50 focus:outline-none focus:border-[var(--primary)] transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-medium text-[var(--text)]">Message</label>
                <textarea
                  required
      rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder=""
                  className="w-full px-4 py-3 rounded-xl bg-[var(--background)] border border-[var(--border)] text-sm text-[var(--text)] placeholder:text-[var(--muted)]/50 focus:outline-none focus:border-[var(--primary)] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white font-medium text-sm shadow-lg glow-primary hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
