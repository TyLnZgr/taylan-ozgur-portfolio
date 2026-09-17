export const profile = {
  name: "Taylan Özgür Taşkırdı",
  role: "Frontend Engineer",
  location: "Istanbul, Türkiye",
  phone: "0507 772 44 95",
  phoneHref: "tel:+905077724495",
  email: "taylan.taskirdi@hotmail.com",
  github: "https://github.com/TyLnZgr",
  linkedin: "https://www.linkedin.com/in/tylnzgr/",
} as const;

export const experience = [
  {
    company: "YUKATO",
    role: "Frontend Engineer",
    period: "Nov 2023 — Present",
    summary: "Building responsive interfaces for a logistics platform used by more than 1,000 people.",
    details: [
      "Developed a drag-and-drop Schedule Board for driver and ramp assignments using React DnD.",
      "Built reusable React and TypeScript components, integrated REST APIs, and improved loading through lazy loading.",
      "Contributed to React Native and Next.js product work within a six-person team.",
    ],
    tags: ["React", "TypeScript", "React DnD", "Next.js"],
  },
  {
    company: "NTT DATA Business Solutions",
    role: "Frontend Engineer",
    period: "May 2022 — Nov 2023",
    summary: "Delivered frontend experiences for enterprise products across Koç and BSH projects.",
    details: [
      "Built the Koç EVP frontend from the ground up with React and TypeScript.",
      "Worked on Koç Dialog, a platform used by more than 3,000 people, using Redux Toolkit in an Agile team.",
      "Contributed to frontend delivery and project coordination for BSH Clicq.",
    ],
    tags: ["React", "TypeScript", "Redux Toolkit", "Agile"],
  },
  {
    company: "MBIS",
    role: "Frontend Engineer",
    period: "Nov 2021 — May 2022",
    summary: "Developed the Milangaz Showroom web experience and companion mobile application.",
    details: [
      "Built the web interface with Angular and the mobile application with Ionic.",
    ],
    tags: ["Angular", "Ionic"],
  },
] as const;

export const projects = [
  {
    number: "01",
    name: "Ecommerce App",
    type: "Full-stack commerce",
    description: "A modern commerce application with a customer storefront and administration features. The repository brings together a Next.js interface, authentication, a cart, and a Prisma-backed data layer.",
    contribution: "Storefront UI, application flows, and integration across the frontend and data layer.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma"],
    github: "https://github.com/TyLnZgr/ecommerce-app",
    demo: "https://ecommerce-app-lac-ten.vercel.app/",
    visual: "commerce",
  },
  {
    number: "02",
    name: "Wild Oasis",
    type: "Reservation experience",
    description: "A reservation application built with Next.js, TypeScript, Tailwind CSS, and Supabase.",
    contribution: "Responsive booking interface and application integration.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    github: "https://github.com/TyLnZgr/wild-oasis-next-app",
    demo: "https://wild-oasis-next-app.vercel.app/",
    visual: "oasis",
  },
  {
    number: "03",
    name: "Phoenix E-Commerce",
    type: "Commerce platform",
    description: "A commerce platform pairing a Next.js frontend with an ASP.NET Core API. The public repository covers catalog, cart, checkout, and administration workflows.",
    contribution: "Frontend implementation and integration with the API.",
    tags: ["Next.js", "TypeScript", "ASP.NET Core", "React"],
    github: "https://github.com/TyLnZgr/eTicaretAPI",
    demo: null,
    visual: "phoenix",
  },
  {
    number: "04",
    name: "Weather App",
    type: "API-driven interface",
    description: "A React weather interface that uses OpenWeather data, TanStack Query, and a theme-aware responsive design.",
    contribution: "API integration, asynchronous data states, and interface design.",
    tags: ["React", "TanStack Query", "Tailwind CSS", "OpenWeather"],
    github: "https://github.com/TyLnZgr/weather-react-app",
    demo: null,
    visual: "weather",
  },
] as const;

export const skillGroups = [
  { title: "Frontend", skills: ["React", "Next.js", "TypeScript", "JavaScript", "Angular", "React Native", "Ionic"] },
  { title: "UI & styling", skills: ["HTML", "CSS", "SCSS", "Tailwind CSS", "MUI", "Styled Components", "CSS Modules", "Storybook"] },
  { title: "State & data", skills: ["Redux Toolkit", "Context API", "TanStack Query", "REST APIs", "GraphQL", "WebSocket"] },
  { title: "Backend & platform", skills: ["C#", "ASP.NET Core", "Entity Framework Core", "Prisma", "PostgreSQL", "SQLite", "Redis", "RabbitMQ", "Docker"] },
  { title: "Quality & tools", skills: ["React Hook Form", "Zod", "React Testing Library", "Git", "GitLab CI/CD"] },
] as const;
