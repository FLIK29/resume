export interface Profile {
  name: string;
  shortName: string;
  role: string;
  tagline: string;
  photo: string;
  cvUrl: string;
  about: string[];
}

export interface EducationInfo {
  institution: string;
  degree: string;
  term: string;
  modality: string;
  completedSubjects: number;
  totalSubjects: number;
}

export interface Subject {
  name: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image: string | null;
  githubUrl: string | null;
  demoUrl: string | null;
  placeholder: boolean;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  current: boolean;
}

export interface SocialLinks {
  email: string;
  github: string;
  location: string;
}
