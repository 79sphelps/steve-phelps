import {
  Award,
  //   Briefcase,
  Calendar,
  Code2,
  Database,
  Layers,
  Sparkles,
} from "lucide-react";

/* ==========================================================
   RESUME DATA
========================================================== */

export const resume = {
  name: "Steve Phelps",

  title: "Senior Frontend / Product Systems Engineer",

  location: "Portland, Oregon",

  yearsExperience: "10+",

  email: "79sphelps@gmail.com",

  website: "steve-phelps-portfolio.onrender.com",

  github: "github.com/79sphelps",

  linkedin: "linkedin.com/in/steve-phelps-1614192b",

  summary: `
Frontend Product Systems Engineer with 10+ years of experience building
scalable, high-impact web applications using React and TypeScript.

Proven experience delivering performance-critical, customer-facing
applications at companies including Nike, Workday, and fintech platforms.

Focused on AI-native product development, modern frontend architecture,
LLM-powered user experiences, and AI-assisted engineering workflows.

Strong product-minded engineer who partners with design and product teams
to translate complex workflows into clean, accessible, and maintainable
frontend systems.
  `,

  metrics: [
    {
      label: "Years Engineering",
      value: "10+",
      icon: Calendar,
    },
    {
      label: "Enterprise Companies Worked At",
      value: "8+",
      icon: Layers,
    },
    {
      label: "Years in Core Stack - React + TS",
      value: "6+",
      icon: Code2,
    },
    {
      label: "Years with Product Focus - AI + SaaS",
      value: "2+",
      icon: Sparkles,
    },
  ],
};

/* ==========================================================
   EXPERIENCE
========================================================== */

export const experience = [
  {
    company: "AI-Native Frontend / Architecture Focus",
    role: "Full Stack / Product Developer",
    location: "Happy Valley, OR",
    period: "Aug 2025 — Current",

    summary:
      "Expanded focus into AI-native frontend development, LLM integration patterns, and modern product architecture approaches.",

    achievements: [
      "Designed AI-native UI patterns including streaming responses, incremental rendering, and structured AI-to-UI data transformation.",
      "Explored frontend architecture patterns for integrating LLM-driven features into React and TypeScript applications.",
      "Developed approaches for managing asynchronous AI workflows, uncertain outputs, and dynamic user experiences.",
      "Applied AI-assisted engineering workflows using tools such as ChatGPT, Claude, and Cursor-style development environments.",
      "Built modern SaaS product architecture concepts including multi-tenant systems, analytics pipelines, onboarding workflows, and configurable AI experiences.",
    ],

    technologies: [
      "React",
      "TypeScript",
      "LLM APIs",
      "OpenAI",
      "Node.js",
      "Firebase",
      "AI UX Patterns",
      "Frontend Architecture",
    ],
  },

  {
    company: "Nike",
    role: "Senior Frontend Product Developer - Contract",
    location: "Remote / Beaverton, OR",
    period: "Mar 2025 — Jul 2025",

    summary:
      "Enhanced Nike.com's Product Display Page experience following a major frontend refactor while collaborating with design, product, and QA teams.",

    achievements: [
      "Improved PDP performance through lazy loading, memoization, and code splitting strategies.",
      "Enhanced customer-facing purchasing workflows with scalable React and TypeScript solutions.",
      "Collaborated across product, design, and QA teams to deliver high-quality user experiences.",
    ],

    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "REST APIs",
      "Git",
      "Figma",
      "Jira",
    ],
  },

  {
    company: "Workday",
    role: "Senior Frontend Product Developer - Contract",
    location: "Remote / Beaverton, OR",
    period: "Nov 2024 — Feb 2025",

    summary:
      "Developed Workday's internal Kira planning and execution tracking application supporting engineering workflows.",

    achievements: [
      "Re-architected core components improving stability, maintainability, and scalability.",
      "Implemented reusable hooks, improved state management patterns, and API abstraction improvements.",
      "Delivered workflow improvements that increased visibility into milestones and release planning.",
    ],

    technologies: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "REST APIs",
      "MUI",
      "Node.js",
      "Express",
    ],
  },

  {
    company: "SMAR Investments 1, LLC",
    role: "Senior Frontend / Full Stack Developer",
    location: "Happy Valley, OR",
    period: "Apr 2022 — Nov 2024",

    summary:
      "Maintained and enhanced a custom real estate investment platform supporting dashboards, asset management, and business operations.",

    achievements: [
      "Delivered React frontend enhancements and Node.js backend improvements.",
      "Built customer engagement workflows, dashboards, and operational tools.",
      "Improved usability and efficiency across business applications.",
    ],

    technologies: [
      "React",
      "TypeScript",
      "Redux",
      "Redux Saga",
      "REST APIs",
      "Node.js",
      "Express",
    ],
  },

  {
    company: "NorthOne",
    role: "Senior Frontend Product / Full Stack Developer",
    location: "Remote",
    period: "Mar 2021 — Mar 2022",

    summary:
      "Built web and mobile banking experiences for a fintech startup using React, React Native, GraphQL, and AWS services.",

    achievements: [
      "Delivered customer-facing banking features including wire transfers and mobile check deposits.",
      "Improved frontend maintainability through reusable hooks and component architecture.",
      "Collaborated with product teams to reduce technical debt and standardize frontend patterns.",
    ],

    technologies: [
      "React",
      "React Native",
      "TypeScript",
      "Redux",
      "GraphQL",
      "Apollo Client",
      "Storybook",
    ],
  },
];

/* ==========================================================
   PROJECTS
========================================================== */

export const projects = [
  {
    title: "AI-Native Customer Engagement Platform",

    category: "Full-Stack SaaS Architecture • AI Product Development",

    description:
      "Designed and developed an AI-powered customer engagement platform exploring modern SaaS architecture, configurable AI workflows, analytics, and customer activation experiences.",

    highlights: [
      "Designed multi-tenant application architecture with isolated customer workspaces.",
      "Built configurable AI conversation workflows using structured configuration models.",
      "Implemented analytics event pipelines for conversations, engagement, and lead activity.",
      "Created onboarding flows focused on activation and customer success.",
      "Developed reusable React components and scalable frontend patterns.",
    ],

    stack: [
      "React",
      "TypeScript",
      "Tailwind",
      "Firebase",
      "Node.js",
      "OpenAI APIs",
    ],
  },

  {
    title: "Enterprise Product Analytics Dashboards",

    category: "Data Visualization • Product Systems",

    description:
      "Built analytics-driven interfaces that transform complex business data into actionable product insights.",

    highlights: [
      "Designed dashboard experiences focused on usability and information hierarchy.",
      "Created reusable data visualization components.",
      "Implemented event tracking patterns for product analytics.",
    ],

    stack: ["React", "TypeScript", "Redux", "REST APIs", "Charts", "Storybook"],
  },

  {
    title: "Frontend Architecture & Design Systems",

    category: "UI Engineering • Component Architecture",

    description:
      "Created scalable frontend foundations focused on consistency, accessibility, maintainability, and developer velocity.",

    highlights: [
      "Developed reusable component patterns.",
      "Established frontend architecture standards.",
      "Partnered with designers using Figma workflows.",
      "Implemented accessibility-focused UI practices.",
    ],

    stack: [
      "React",
      "TypeScript",
      "Storybook",
      "Figma",
      "Accessibility",
      "Testing",
    ],
  },
];

/* ==========================================================
   SKILLS
========================================================== */

export const skillGroups = [
  {
    title: "Frontend Engineering",

    description:
      "Building scalable, maintainable, high-performance user interfaces.",

    icon: Code2,

    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Redux Toolkit",
      "Redux Saga",
      "TanStack Query",
      "Tailwind",
      "MUI",
    ],
  },

  {
    title: "UI / UX Engineering",

    description:
      "Creating polished product experiences through architecture and design systems.",

    icon: Layers,

    skills: [
      "Component Architecture",
      "Design Systems",
      "Responsive Design",
      "Accessibility",
      "Figma",
      "Interaction Design",
      "Animation",
    ],
  },

  {
    title: "APIs / Backend / Data",

    description: "Connecting frontend experiences with scalable services.",

    icon: Database,

    skills: [
      "REST APIs",
      "GraphQL",
      "Apollo Client",
      "Node.js",
      "Express",
      "Firebase",
      "SQL",
      "API Integration",
    ],
  },

  {
    title: "AI-Native Development",

    description: "Building modern product experiences powered by AI workflows.",

    icon: Sparkles,

    skills: [
      "OpenAI APIs",
      "LLM Integration",
      "AI UX Patterns",
      "Streaming Interfaces",
      "Prompt Engineering",
      "AI-Assisted Development",
    ],
  },

  {
    title: "Testing & Engineering Quality",

    description: "Building reliable production systems.",

    icon: Award,

    skills: [
      "Jest",
      "React Testing Library",
      "Playwright",
      "CI/CD",
      "Git",
      "Performance Optimization",
      "Accessibility Testing",
    ],
  },
];

/* ==========================================================
   EDUCATION
========================================================== */

export const education = [
  {
    institution: "Portland State University",
    degree: "Bachelor of Science — Computer Science",
    period: "2010",
    details:
      "Computer science education focused on software engineering principles and application development.",
  },
];

export const certifications = [];

/* ==========================================================
   HIGHLIGHTS
========================================================== */

export const highlights = [
  {
    value: "10+",
    label: "Years Building Software",
  },

  {
    value: "React",
    label: "Primary Frontend Platform",
  },

  {
    value: "AI",
    label: "Emerging Product Focus",
  },

  {
    value: "UX",
    label: "Product Engineering Philosophy",
  },
];
