import { Project, Stat, Experience, SkillGroup, Certificate } from '../types';

export const PROJECTS: Project[] = [
  {
    id: '01', name: 'Vivasayi — AI Farm Management', date: '2025 - Present',
    live: 'https://vivasayi-wheat.vercel.app',
    tech: ['Next.js 15', 'TypeScript', 'Supabase', 'Genkit', 'React 19'], color: 'var(--color-green)',
    desc: "Engineered a production AI farm management platform with 4 distinct AI tools. Secured application against critical Next.js RCE vulnerabilities, maintaining 0 critical runtime CVEs. Integrated a 23-language i18n architecture with active Tamil and Hindi localization. Built resilient AI pipelines using exponential backoff to handle transient rate limits gracefully. Verified logic with 4/4 Vitest suites passing."
  },
  {
    id: '02', name: 'Havan Bus Booking Engine', date: '2025',
    live: 'https://havan-bus-booking-engine.vercel.app',
    tech: ['Django REST', 'Celery', 'Redis', 'PostgreSQL'], color: 'var(--color-yellow)',
    desc: "Architected a decoupled, high-concurrency REST API for bus reservations. Enforced database integrity under load using Django's select_for_update() row-level locking to serialize transactions. Hardened authentication by mitigating timing-attack vectors with constant-time HMAC comparison. Offloaded heavy PDF ticket generation to an asynchronous Celery/Redis queue. Validated with passing Pytest suites for auth flows."
  },
  {
    id: '03', name: 'Havan Vision AI Chat', date: 'Oct 2025',
    live: 'https://github.com/Madhavan-dev18/havan-vision',
    tech: ['Flask', 'DistilRoBERTa', 'DeepFace'], color: 'var(--color-blue)',
    desc: "Developed a composite emotion-aware AI chat assistant. Fused visual telemetry with text sentiment analyzed via HuggingFace DistilRoBERTa transformers, including memory-safe fallback algorithms. Engineered a hard-coded crisis interception engine bypassing the LLM during severe distress. Achieved rigorous coverage with 73 passing tests (62 Pytest, 11 Vitest) across auth, JWT refresh, and core AI flows."
  },
  {
    id: '04', name: 'Havan Streaming Service', date: 'Jun 2026',
    live: 'https://github.com/Madhavan-dev18/havan-stream',
    tech: ['Django', 'Python', 'React', 'HLS'], color: 'var(--color-purple)',
    desc: "Engineered a robust streaming service backend emphasizing multi-profile account architecture. Implemented secure PIN-profile logic consistently across Django models, views, and serializers. Validated core functionality—including authentication, secure profiles, watchlists, and viewing history—with 15 comprehensive Pytest suites."
  }
];

export const STATS: Stat[] = [
  { title: 'Critical Runtime CVEs', value: 'Zero', percent: '100%', color: 'var(--color-green)', date: 'Audited' },
  { title: 'Test Coverage', value: '96+ Passing', percent: '100%', color: 'var(--color-yellow)', date: 'Pytest & Vitest' },
  { title: 'Security & Auth', value: 'HMAC / JWT', percent: '100%', color: 'var(--color-blue)', date: 'Timing-Safe' }
];

export const EXP: Experience[] = [
  { date: 'May 2025 - Jun 2025', title: 'Python Developer Intern', desc: 'Engineered Django-based reservation system with SQLite. Implemented complete session flows, relational ORM schemas, server-side validation, and CSRF protection.', label: 'Nextgen Tech', btnColor: 'var(--color-purple)' },
  { date: '2023 - 2026', title: 'B.Sc. Computer Science', desc: 'Thiruvalluvar University. Core coursework in Data Structures, Algorithms, and System Design.', label: 'Education', btnColor: 'var(--color-blue)' }
];

export const SKILLS: SkillGroup[] = [
  { category: 'Languages & Backend', items: ['TypeScript', 'Python', 'Next.js', 'Django REST', 'Flask', 'Celery', 'Redis'], color: 'var(--color-blue)' },
  { category: 'Data & Cloud', items: ['Supabase', 'Neon PostgreSQL', 'Firebase', 'SQLite', 'GitHub Actions'], color: 'var(--color-green)' },
  { category: 'Frontend', items: ['React 19', 'Tailwind CSS', 'Radix UI', 'Zod', 'PWA'], color: 'var(--color-purple)' },
  { category: 'AI & Vision', items: ['Google Gemini', 'Genkit', 'DeepFace', 'OpenCV', 'Prompt Eng'], color: 'var(--color-yellow)' },
  { category: 'Testing & Security', items: ['Vitest', 'RTL', 'CVE Remediation', 'Concurrency Control', 'RLS'], color: 'var(--color-pink)' }
];

export const CERTS: Certificate[] = [
  { name: 'Basics of Python', file: 'Basics of Python-infosys Springboard.pdf', issuer: 'Infosys Springboard' },
  { name: 'Data Visualisation', file: 'Data Visualisation using Python-Infosys SpringBoard.pdf', issuer: 'Infosys Springboard' },
  { name: 'Exploratory Data Analysis', file: 'Exploratory Data Analysis-Infosys SpringBoard.pdf', issuer: 'Infosys Springboard' },
  { name: 'Introduction to Agile Methodology', file: 'Introduction to Agile methodology-Infosys SpringBoard.pdf', issuer: 'Infosys Springboard' },
  { name: 'Introduction to Data Science', file: 'Introduction to Data Science-Infosys SpringBoard.pdf', issuer: 'Infosys Springboard' },
  { name: 'Python for Data Science', file: 'Python for Data Science-Infosys SpringBoard.pdf', issuer: 'Infosys Springboard' },
  { name: 'Object Oriented Programming', file: 'Object Oriented Programming using Python-Infosys SpringBoard.pdf', issuer: 'Infosys Springboard' },
  { name: 'Infosys Springboard Certificate', file: 'Madhavan_S_4829590.pdf', issuer: 'Infosys Springboard' }
];
