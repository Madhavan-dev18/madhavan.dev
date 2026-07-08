export interface Project {
  id: string;
  name: string;
  date: string;
  live: string;
  repo: string;
  tech: string[];
  desc: string;
  note?: string;
  featured?: boolean;
  icon: 'shield' | 'sprout' | 'bus' | 'chat' | 'play';
  accent: 'blue' | 'green' | 'amber' | 'purple' | 'coral';
}

export interface Experience {
  date: string;
  title: string;
  desc: string;
  label: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Certificate {
  name: string;
  file: string;
  issuer: string;
}
