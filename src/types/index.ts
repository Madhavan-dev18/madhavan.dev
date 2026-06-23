export interface Project {
  id: string;
  name: string;
  date: string;
  live: string;
  tech: string[];
  color: string;
  desc: string;
}

export interface Stat {
  title: string;
  value: string;
  percent: string;
  color: string;
  date: string;
}

export interface Experience {
  date: string;
  title: string;
  desc: string;
  label: string;
  btnColor: string;
}

export interface Repo {
  name: string;
  desc: string;
  lang: string;
  color: string;
  stars: number;
}

export interface SkillGroup {
  category: string;
  items: string[];
  color: string;
}

export interface Certificate {
  name: string;
  file: string;
  issuer: string;
}
