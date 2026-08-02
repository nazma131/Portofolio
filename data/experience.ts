import { ExperienceItem } from "@/types/portfolio";

export const experiences: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Peserta Praktik Kerja Lapangan (PKL)",
    company: "PT. GeoDipa Energi (Persero) Unit Patuha",
    location: "Patuha, Jawa Barat",
    period: "14 Jul 2025 - 14 Okt 2025",
    type: "Internship",
    description: [
      "Melaksanakan Praktik Kerja Lapangan (PKL) di PT. GeoDipa Energi (Persero) Unit Patuha.",
      "Mempelajari sistem operasional perusahaan, infrastruktur IT, serta tata kelola administrasi teknis.",
      "Berkolaborasi dengan tim profesional dalam mendukung kelancaran operasional teknologi informasi."
    ],
    techStack: ["IT Support", "System Operations", "Documentation"],
  },
  {
    id: "exp-2",
    role: "Junior Web Developer (Freelance)",
    company: "Self-Employed",
    location: "Global / Remote",
    period: "Jan 2025 - Present",
    type: "Freelance",
    description: [
      "Designed and delivered custom landing pages and school project websites.",
      "Integrated modern frontend tools and optimized websites for maximum performance.",
      "Maintained ongoing client communication and technical support."
    ],
    techStack: ["Next.js", "Tailwind CSS", "JavaScript", "HTML/CSS"],
  },
];
