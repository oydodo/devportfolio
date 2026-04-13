export type SiteConfig = {
  name: string;
  title: string;
  description: string;
  accentColor: string;
  social: {
    email?: string;
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
  aboutMe: string;
  skills: string[];
  projects: {
    name: string;
    description: string;
    link?: string;
    skills: string[];
  }[];
  experience: {
    company: string;
    title: string;
    dateRange: string;
    bullets: string[];
  }[];
  education: {
    school: string;
    degree: string;
    dateRange: string;
    achievements: string[];
  }[];
};

export type UiConfig = {
  about: string;
  projects: string;
  experience: string;
  education: string;
  greeting: string;
  allRightsReserved: string;
};

export type Lang = "en" | "zh";
export const defaultLang: Lang = "en";
export const languages: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "zh", label: "中文" },
];
