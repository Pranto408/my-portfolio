export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Tech Stack", href: "#techstack" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];


export const socialLinks = {
  github: "https://github.com/Pranto408",
  linkedin: "https://linkedin.com/in/prantodutta",
  email:
    "https://mail.google.com/mail/?view=cm&fs=1&to=prantodutta408@gmail.com",
};

// @/lib/data.ts
export const techStack = [
  { name: "HTML5", icon: "html5", color: "#E34F26" },
  { name: "CSS3", icon: "css3", color: "#1572B6" },
  { name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
  { name: "TypeScript", icon: "typescript", color: "#3178C6" }, // 👈 Added here
  { name: "React.js", icon: "react", color: "#61DAFB" },
  { name: "Next.js", icon: "nextjs", color: "#ffffff" },
  { name: "Tailwind CSS", icon: "tailwind", color: "#06B6D4" },
  { name: "Node.js", icon: "nodejs", color: "#339933" },
  { name: "Express.js", icon: "express", color: "#ffffff" },
  { name: "MongoDB", icon: "mongodb", color: "#47A248" },
  { name: "Git", icon: "git", color: "#F05032" },
  { name: "GitHub", icon: "github", color: "#ffffff" },
];

export const skills = {
  frontend: [
    { name: "React.js", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "Tailwind CSS", level: 92 },
    { name: "Responsive Design", level: 95 },
  ],
  backend: [
    { name: "Node.js", level: 80 },
    { name: "Express.js", level: 78 },
    { name: "REST API", level: 82 },
  ],
  database: [
    { name: "MongoDB", level: 80 },
  ],
  tools: [
    { name: "Git", level: 85 },
    { name: "GitHub", level: 88 },
    { name: "VS Code", level: 95 },
  
  ],
};

export const education = [
  {
    degree: "B.Sc in CSE",
    institution: "Green University of Bangladesh",
    period: "2020 – 2025",
    description: "Bachelor of Science in Computer Science & Engineering. Focused on full-stack web development, algorithms, data structures, and software engineering principles.",
    icon: "graduation-cap",
  },
  {
    degree: "HSC",
    institution: "Satrujitpur College",
    period: "2017 – 2019",
    description: "Higher Secondary Certificate in Science. Achieved strong academic results with a focus on Mathematics, Physics, and Chemistry.",
    icon: "book-open",
  },
  {
    degree: "SSC",
    institution: "Satrujitpur K.P. Secondary School",
    period: "2012 – 2017",
    description: "Secondary School Certificate in Science. Built a strong foundation in mathematics and sciences with excellent academic performance.",
    icon: "school",
  },
];

export const projects = [
  {
    id: 1,
    title: "StudyNook — University Library Booking Platform",
    description:
      "A premium room booking platform for university libraries, enabling students to search, filter, and book private study rooms or collaborative workspaces in real time.",
    image:
      "https://plain-apac-prod-public.komododecks.com/202605/24/A3q5dZ8K7ajC1StEXsDW/image.png",
    features: [
      "Interactive Room Grid",
      "Advanced Amenities Filtering",
      "Live Slot Booking Flow",
      "Dynamic Pricing Indicator",
      "Room Management Wizard",
    ],
    tech: ["React.js", "Next.js", "Tailwind CSS", "MongoDB", "Node.js"],
    github: "https://github.com/Pranto408/study-nook-client",
    live: "https://study-nook-client-rgbl.vercel.app",
  },
  {
    id: 2,
    title: "SunCart — Summer E-Commerce Platform",
    description:
      "A modern seasonal e-commerce platform built for exploring and purchasing summer essentials, featuring seamless user authentication, order placement, and a tropical-inspired responsive UI.",
    image:
      "https://plain-apac-prod-public.komododecks.com/202605/24/pjF9UMvGdQSmbQY8TzVW/image.png",
    features: [
      "Seasonal Product Catalog",
      "Secure Auth with Better Auth",
      "Order Placement & Tracking",
      "Summer-Inspired Modern UI",
      "Real-time Toast Notifications",
    ],
    tech: ["Next.js", "Better Auth", "MongoDB", "Tailwind CSS", "HeroUI"],
    github: "https://github.com/Pranto408/sun-cart",
    live: "https://sun-cart-two.vercel.app",
  },
  {
    id: 3,
    title: "Book Vibe — Book Review & Tracking Platform",
    description:
      "A clean and intuitive platform for book lovers to discover books, view detailed insights, and efficiently manage their personalized read list and wishlist with custom sorting.",
    image:
      "https://plain-apac-prod-public.komododecks.com/202605/24/Kl8ZVG7bnEat5Aq5gJMn/image.png",
    features: [
      "Curated Book Showcase",
      "Dynamic Sorting (Rating, Year, Pages)",
      "Dual Tracking (Read List & Wishlist)",
      "Interactive Analytical Charts",
      "Tabbed View Navigation",
    ],
    tech: ["React.js", "Tailwind CSS", "React Router", "Recharts"],
    github: "https://github.com/Pranto408/book-vibe",
    live: "https://book-vibe-pranto-dutta.netlify.app",
  },
  {
    id: 4,
    title: "KeenKeeper — Relationship Management",
    description:
      "A smart relationship management application that helps users track interactions with friends, maintain meaningful connections, and visualize communication patterns through interactive timelines and charts.",
    image:
      "https://plain-apac-prod-public.komododecks.com/202605/24/hO31u5ZwTkKr3KTSzMQp/image.png",
    features: [
      "Interaction Tracking Timeline",
      "Pie Chart Interaction Statistics",
      "Dynamic Activity Filtering",
      "Relationship Health Dashboard",
      "Personalized Connection Management",
    ],
    tech: ["Next.js", "React.js", "Tailwind CSS", "DaisyUI", "Recharts"],
    github: "https://github.com/Pranto408/keen-keeper",
    live: "https://keen-keeper-52b9.vercel.app",
  },
];
