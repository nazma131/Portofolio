import { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "Hindia - Website Tugas Sekolah",
    description: "Website interaktif tugas sekolah yang menampilkan profil dan informasi seputar Hindia dengan desain responsif.",
    longDescription: "Proyek tugas sekolah web development yang menampilkan halaman profil informatif, galeri, dan navigasi yang bersih serta responsif.",
    image: "/hindia lengkap.png",
    techStack: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    demoUrl: "https://hindia-naz.netlify.app",
    featured: true,
  },
  {
    id: "proj-2",
    title: "Nexora Web - Aplikasi Sarpras Sekolah (Ujikom)",
    description: "Aplikasi pengelolaan sarana dan prasarana sekolah untuk manajemen peminjaman dan pengembalian barang secara digital.",
    longDescription: "Proyek Ujian Kompetensi (Ujikom) SMK yang dirancang khusus untuk mendigitalkan proses inventaris barang serta manajemen peminjaman dan pengembalian barang sarpras sekolah dengan fitur yang andal.",
    image: "/Dashboard.jpeg",
    videoUrl: "/Video_Demo-NEXORA WEB (1).mp4",
    techStack: ["PHP", "MySQL", "Bootstrap", "JavaScript", "HTML/CSS"],
    githubUrl: "https://github.com/nazma131",
    demoUrl: "/Video_Demo-NEXORA WEB (1).mp4",
    isPrivate: true,
    featured: true,
  },
];
