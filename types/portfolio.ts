export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  videoUrl?: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  isPrivate?: boolean;
  featured?: boolean;
}

export interface SkillItem {
  name: string;
  icon?: string;
  level: number; // 1-100
  description?: string;
}

export interface SkillCategory {
  category: "Frontend" | "Backend" | "Database" | "Tools";
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: "Internship" | "Freelance" | "Personal Project" | "Full-time";
  description: string[];
  techStack: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  gpa?: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  image: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
