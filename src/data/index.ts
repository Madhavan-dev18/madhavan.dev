import { Project, Experience, SkillGroup, Certificate } from '../types';

export const PROJECTS: Project[] = [
  {
    icon: 'shield', accent: 'blue',
    id: '00', name: 'CHR System — Multi-Tenant EHR Platform', date: '2026', featured: true,
    live: 'https://chr-system-web.vercel.app/',
    repo: 'https://github.com/Madhavan-dev18/chr-system',
    tech: ['Next.js 15', 'tRPC v11', 'Prisma', 'PostgreSQL', 'Upstash Redis', 'QStash'],
    desc: "An Electronic Health Records platform with structural multi-tenant isolation: a Prisma Client Extension keys every query for nine patient-data models off an AsyncLocalStorage-scoped clinicId, with an explicit withTenantBypass() escape hatch reserved for audited admin access. A static-analysis test scans the full source tree on every CI run for the exact fallback pattern that once let a missing clinicId silently return unscoped cross-clinic data — so that specific bug class can't ship again. PDF export runs on a separate Express worker service, decoupled from the web app via signed QStash webhooks, since it operates outside any session context and has to re-derive tenant scoping manually.",
    note: 'Originally shipped with a bypass-string fallback that could leak cross-clinic data under a missing session field — caught in a security self-audit, fixed at the query layer, and now enforced by a CI regression test rather than developer discipline.'
  },
  {
    icon: 'bus', accent: 'amber',
    id: '02', name: 'Havan Bus Booking Engine', date: '2025',
    live: 'https://havan-bus-booking-engine.vercel.app',
    repo: 'https://github.com/Madhavan-dev18/havan-transit',
    tech: ['Django REST', 'Celery', 'Redis', 'PostgreSQL', 'k6'],
    desc: "A REST API for bus reservations backed by 18 backend tests: happy-path and double-booking races, sold-out and insufficient-capacity rejections, auth edge cases, and a Celery PDF-generation task, plus a TransactionTestCase that fires two concurrent booking attempts at the same seat via ThreadPoolExecutor and asserts at most one succeeds, with 4 more on the frontend. Database integrity under that race is enforced with select_for_update() row-level locking. After an initial k6 run against the live deployment miscounted expected 400 rejections as failures, the test methodology was corrected and re-run: real system-failure rate is now 0.00% (0/365 requests). Raw latency (p95 7.17s) still misses its own target, and a bus+status index plus a leaner collision query didn't move it \u2014 pointing at host-tier cold starts rather than the query path. CI runs the full backend suite against a real Postgres service container on every push.",
    note: 'Two honest, separate findings: the error-rate number was a test bug, now fixed and confirmed at 0%. The latency number is real, still failing, and not yet explained \u2014 correctly not claimed as fixed just because the query got faster on paper.'
  },
  {
    icon: 'sprout', accent: 'green',
    id: '01', name: 'Vivasayi — AI Farm Management', date: '2025',
    live: 'https://vivasayi-wheat.vercel.app',
    repo: 'https://github.com/Madhavan-dev18/vivasayi',
    tech: ['Next.js 15', 'TypeScript', 'Supabase', 'Genkit'],
    desc: "An AI farm-management platform localized across 23 languages including active Tamil and Hindi. A full security audit identified and patched a critical Next.js RCE (GHSA-9qr9-h5gf-34mp) and a jsPDF dependency CVE chain, taking the app from multiple critical vulnerabilities to zero — verified with a fresh npm audit, not just the fix commits. Gemini API calls run through an exponential-backoff wrapper to absorb transient rate limits. Covered by a passing Vitest suite.",
    note: '0 critical-severity vulnerabilities currently, but not 0 vulnerabilities overall \u2014 moderate/high advisories remain in transitive dependencies (mainly the firebase-admin/Google Cloud chain), unrelated to the two CVEs that were fixed.'
  },
  {
    icon: 'chat', accent: 'purple',
    id: '03', name: 'Havan Vision — Emotion-Aware Chat', date: '2025',
    live: 'https://havan-a-emotion-aware-chat-assistan.vercel.app/',
    repo: 'https://github.com/Madhavan-dev18/havan-vision',
    tech: ['Flask', 'DistilRoBERTa', 'face-api.js'],
    desc: "A chat assistant that fuses text sentiment from a HuggingFace DistilRoBERTa model with facial-emotion signal detected entirely client-side via @vladmandic/face-api in the browser \u2014 raw video never leaves the device, only the derived emotion label is sent. A hard-coded keyword layer intercepts and bypasses the LLM entirely on distress input rather than trusting a model's judgment in that moment. 62 backend tests cover auth, JWT refresh, and the core inference paths."
  },
  {
    icon: 'play', accent: 'coral',
    id: '04', name: 'Havan Streaming Service', date: '2025',
    live: 'https://havan-streaming-service.vercel.app/',
    repo: 'https://github.com/Madhavan-dev18/havan-stream',
    tech: ['Django REST', 'React 19', 'HLS'],
    desc: "A video streaming service with HLS chunked delivery and m3u8 manifest generation for adaptive bitrate playback, plus a multi-profile PIN system spanning models, views, and serializers. The profile PIN, originally a plaintext string comparison, is now hashed with Django's make_password on save and checked with the constant-time check_password \u2014 verified by re-running the full suite in a clean venv after the fix, 14/14 tests still pass. CI now runs the backend suite against a real database on every push.",
    note: 'The hashing fix is real and verified passing, but there is still no dedicated regression test asserting the PIN is actually stored hashed \u2014 the fix works, it just isn\u2019t locked in by a test yet the way the tenant-isolation fix is on chr-system.'
  }
];

export const EXP: Experience[] = [
  { date: 'May 2025 — Jun 2025', title: 'Python Developer Intern', desc: 'Engineered a secure Django REST reservation API with granular permission handling and CSRF protection, validated through end-to-end testing to guarantee stateful session integrity across the booking flow.', label: 'Nextgen Technology Pvt. Ltd.' },
  { date: '2023 — 2026', title: 'B.Sc. Computer Science', desc: 'Thiruvalluvar University, KMG College of Arts & Science, Vellore. Core coursework in Data Structures, Algorithms, and System Design. CGPA: 7.08/10.', label: 'Education' }
];

export const SKILLS: SkillGroup[] = [
  { category: 'Languages & Backend', items: ['TypeScript', 'Python', 'Django REST', 'tRPC', 'Flask', 'Celery', 'Redis'] },
  { category: 'Data & Cloud', items: ['PostgreSQL', 'Prisma', 'Supabase', 'Firebase', 'SQLite'] },
  { category: 'Frontend', items: ['Next.js', 'React 19', 'Tailwind CSS', 'Radix UI', 'Zod'] },
  { category: 'AI & Vision', items: ['Google Gemini', 'Genkit', 'DeepFace', 'OpenCV', 'HuggingFace Transformers'] },
  { category: 'Security & Testing', items: ['AES-256-GCM', 'NextAuth v5', 'HMAC', 'JWT', 'Vitest', 'Pytest'] }
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
