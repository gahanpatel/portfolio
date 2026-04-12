export const personalInfo = {
  name: "Gahan Patel",
  tagline: "Building things that matter — software that scales, systems that ship.",
  email: "patel.gah@northeastern.edu",
  github: "https://github.com/gahanpatel",
  linkedin: "https://linkedin.com/in/gahanpatel",
  resumeUrl: "/resume.pdf",
  location: "Boston, MA",
  school: "Northeastern University",
  bio: "Second-year CS and Business student at Northeastern University, originally from New Orleans. I build full-stack products and backend systems — currently seeking software engineering co-ops where I can contribute to real problems at scale.",
};

export const experiences = [
  {
    id: "tamid-engineer",
    role: "Backend Engineer",
    company: "TAMID Group",
    date: "2024 – Present",
    description:
      "Built TamidTrades, a full-stack fantasy stock trading platform with real-time portfolio tracking. Designed REST APIs with FastAPI, managed PostgreSQL schemas, and deployed on Docker.",
    tags: ["FastAPI", "PostgreSQL", "Docker", "Python"],
  },
  {
    id: "nur-engineer",
    role: "Software Engineer",
    company: "Northeastern Electric Racing",
    date: "2024 – Present",
    description:
      "Developing data pipeline and telemetry tooling for the formula-style electric race car. Focused on real-time sensor data processing and visualization.",
    tags: ["Python", "TypeScript", "React"],
  },
  {
    id: "dell-excel",
    role: "Excel with Dell Program",
    company: "Dell Technologies",
    date: "2024",
    description:
      "Participated in Dell's Excel program, gaining exposure to enterprise software engineering practices, mentorship, and product development workflows.",
    tags: ["Professional Development"],
  },
  {
    id: "oasis-mentor",
    role: "Project Mentor",
    company: "Oasis @ Northeastern",
    date: "2024 – Present",
    description:
      "Mentoring student engineering teams on full-stack web projects, conducting code reviews, and guiding architecture decisions for club members.",
    tags: ["Mentorship", "Full-Stack", "Code Review"],
  },
];

export const projects = [
  {
    id: "tamid-trades",
    title: "TamidTrades",
    description:
      "Fantasy stock trading platform with real-time portfolio tracking, leaderboards, and trade execution. Built for the TAMID consulting group.",
    tags: ["FastAPI", "React", "PostgreSQL", "Docker", "Python"],
    github: "https://github.com/gahanpatel/tamidtrades",
    live: "",
  },
  {
    id: "coffee-chat",
    title: "TAMID Coffee Chat Matcher",
    description:
      "Automated matching system that pairs TAMID members for weekly coffee chats based on shared interests, tracks participation, and sends email notifications.",
    tags: ["Python", "Supabase", "TypeScript", "Next.js"],
    github: "https://github.com/gahanpatel/coffee-chat-matcher",
    live: "",
  },
  {
    id: "music-matcher",
    title: "AI Music Matcher",
    description:
      "AI-powered app that analyzes your listening history and mood to recommend new songs and build personalized playlists using Spotify and Claude APIs.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Spotify API", "Claude API"],
    github: "https://github.com/gahanpatel/ai-music-matcher",
    live: "",
  },
];

export const skills = [
  "Python",
  "Java",
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "FastAPI",
  "Spring Boot",
  "PostgreSQL",
  "Supabase",
  "Docker",
  "Git",
  "Tailwind CSS",
  "REST APIs",
];
