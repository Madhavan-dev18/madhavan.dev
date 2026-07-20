import type { Metadata } from 'next';
import { Bricolage_Grotesque, Source_Sans_3 } from 'next/font/google';
import '../index.css';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const viewport = {
  themeColor: '#f6f7fb',
};

export const metadata: Metadata = {
  title: 'Madhavan Shivakumar | Full-Stack & AI Engineer',
  description: 'Full-Stack & AI Engineer building secure Django & Next.js systems with robust test suites. Final-year B.Sc. CS student available for 2026 placement.',
  authors: [{ name: 'Madhavan Shivakumar' }],
  openGraph: {
    title: 'Madhavan Shivakumar | Full-Stack & AI Engineer',
    description: 'Full-Stack & AI Engineer — Django, Next.js, multi-tenant architecture, 100+ tests across five shipped projects, one deployed live.',
    url: 'https://madhavan-shivakumar-dev.vercel.app/',
    siteName: 'Madhavan Shivakumar Portfolio',
    images: [
      {
        url: 'https://madhavan-shivakumar-dev.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Madhavan Shivakumar Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Madhavan Shivakumar | Full-Stack & AI Engineer',
    description: 'Full-Stack & AI Engineer — Django, Next.js, multi-tenant architecture, 100+ tests across five shipped projects.',
    images: ['https://madhavan-shivakumar-dev.vercel.app/og-image.png'],
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
};

const personSchema = {
  "@context": "https://schema.org/",
  "@type": "Person",
  "name": "Madhavan Shivakumar",
  "jobTitle": "Full-Stack Developer & AI Engineer",
  "url": "https://madhavan-shivakumar-dev.vercel.app/",
  "image": "https://madhavan-shivakumar-dev.vercel.app/logo.png",
  "gender": "Male",
  "description": "Full-Stack & AI Engineer building secure Django & Next.js systems with robust multi-tenant architectures and extensive Vitest & Pytest suites.",
  "sameAs": [
    "https://github.com/Madhavan-dev18",
    "https://linkedin.com/in/madhavan-shivakumar-dev"
  ],
  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": "Thiruvalluvar University",
    "sameAs": "https://en.wikipedia.org/wiki/Thiruvalluvar_University"
  },
  "knowsAbout": ["Python", "Django", "Next.js", "TypeScript", "React", "PostgreSQL", "Genkit", "AI Engineering", "Multi-Tenant Architecture", "Application Security", "System Design", "TDD"]
};

const projectsSchema = [
  {
    "@context": "https://schema.org/",
    "@type": "SoftwareSourceCode",
    "name": "CHR System — Multi-Tenant EHR Platform",
    "description": "An Electronic Health Records platform with structural multi-tenant isolation.",
    "codeRepository": "https://github.com/Madhavan-dev18/chr-system",
    "programmingLanguage": ["Next.js 15", "TypeScript", "Prisma", "PostgreSQL"],
    "author": {
      "@type": "Person",
      "name": "Madhavan Shivakumar"
    }
  },
  {
    "@context": "https://schema.org/",
    "@type": "SoftwareSourceCode",
    "name": "Vivasayi — AI Farm Management",
    "description": "An AI farm-management platform localized across 23 languages.",
    "codeRepository": "https://github.com/Madhavan-dev18/vivasayi",
    "programmingLanguage": ["Next.js 15", "TypeScript", "Supabase", "Genkit"],
    "author": {
      "@type": "Person",
      "name": "Madhavan Shivakumar"
    }
  }
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bricolage.variable} ${sourceSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
        />
      </head>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
