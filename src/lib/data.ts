export const personalInfo = {
  name: "Gahan Patel",
  tagline: "CS + Business at Northeastern. Building backend systems and full-stack products.",
  email: "patel.gah@northeastern.edu",
  github: "https://github.com/gahanpatel",
  linkedin: "https://linkedin.com/in/gahanpatel",
  resumeUrl: "/resume.pdf",
  location: "Boston, MA",
  school: "Northeastern University",
  gpa: "3.93",
  siteUrl: "https://gahanpatel.com",
  bio: "Third-year CS and Business student at Northeastern. I build full-stack products and backend systems, mostly things I'd want to use myself.",
  bioInterests: "From New Orleans — which means strong opinions about food and a high tolerance for humidity. Off-screen: 70,000 Spotify minutes last year, slowly working through the Bhagavad Gita, and I started running a few months ago (still in the painful part).",
};

export const experiences = [
  {
    id: "oasis-instructor",
    role: "Web Developer Instructor",
    company: "Oasis at Northeastern",
    date: "Jan 2026 – Apr 2026",
    description:
      "Instructed 10 developers across two teams building a campus marketplace and a professor review platform, guiding architecture decisions and database design.",
    tags: ["React", "Git", "Full-Stack", "Mentorship"],
  },
  {
    id: "nur-engineer",
    role: "Software Engineer",
    company: "Northeastern Electric Racing",
    date: "Sept 2025 – Dec 2025",
    description:
      "Redesigned the club website with React and TypeScript, improving navigation and scheduling for 300+ members. Added calendar event modals with quick-access links to Zoom meetings, documents, and status tracking.",
    tags: ["React", "TypeScript", "Git"],
  },
  {
    id: "handshake-ai",
    role: "AI Trainer",
    company: "Handshake",
    date: "Oct 2025 – Dec 2025",
    description:
      "Developed and evaluated prompts to assess the performance of large language models.",
    tags: ["LLMs", "Prompt Engineering"],
  },
  {
    id: "neu-research",
    role: "Research Assistant, Outreach Team",
    company: "Northeastern University Oakland",
    date: "Apr 2025 – Jun 2025",
    description:
      "Conducted 10 interviews and cold-called 50+ Emeryville businesses to assess challenges faced by entrepreneurs. Synthesized findings into recommendations used by the city to support local BIPOC entrepreneurs.",
    tags: ["Research", "Community Outreach"],
  },
  {
    id: "pawhacks",
    role: "Tech and Website Team",
    company: "PawHacks",
    date: "Jan 2025 – Mar 2025",
    description:
      "Organized the largest hackathon on Northeastern's Oakland campus, coordinating logistics for 80+ participants. Built the Devpost submission page with judging criteria that drove 20+ project submissions.",
    tags: ["Event Organizing", "Devpost"],
  },
  {
    id: "cypress-inn",
    role: "Assistant Manager",
    company: "Cypress Inn Motel",
    date: "Jan 2022 – Aug 2024",
    description:
      "Managed day-to-day operations, built revenue and expense tracking in Excel, and prepared monthly P&L statements that contributed to a 15% reduction in operating costs.",
    tags: ["Excel", "Financial Analysis", "Operations"],
  },
];

export const projects = [
  {
    id: "coffee-chat",
    title: "Coffee Chat Matcher",
    description:
      "Profile-matching platform for 200+ TAMID members using OpenAI embeddings to generate 1,536-dimensional vectors from Slack bios, ranking matches by cosine similarity. Built a Python scraper to bulk-download 338 photos from Notion and a React frontend with search and ranked profile cards.",
    tags: ["Python", "Flask", "React", "Supabase", "OpenAI"],
    github: "https://github.com/rioquinn11/tamidchatmatcher",
    live: "",
  },
  {
    id: "music-matcher",
    title: "AI Music Matcher",
    description:
      "Analyzes an uploaded image's visual characteristics through OpenAI Vision API, then scores and ranks songs from a Spotify playlist to match the aesthetic. Spring Boot backend with multi-API support and fallback logic across 1,000+ track playlists.",
    tags: ["Java", "Spring Boot", "React", "OpenAI", "Spotify API"],
    github: "https://github.com/gahanpatel/song-picker",
    live: "",
    image: "/songpicker-v2.png",
  },
  {
    id: "fantasy-stock-league",
    title: "Fantasy Stock League",
    description:
      "Fantasy stock trading platform with real-time S&P 500 pricing via Yahoo Finance API. Built with Next.js and FastAPI, featuring JWT auth, buy/sell execution, an analytics dashboard computing Sharpe ratio, P&L, and sector allocation, and a leaderboard to compete against other traders. Deployed on Vercel with CI/CD.",
    tags: ["Python", "FastAPI", "PostgreSQL", "Next.js", "Vercel"],
    github: "https://github.com/gahanpatel/fantasy-stock",
    live: "",
    images: ["/fantasy-dark-4.png", "/fantasy-dark-2.2.png"],
  },
];

export const practices = [
  {
    name: "Running",
    note: "Getting into distance. Building the habit one early morning at a time.",
    image: "/strava.png",
  },
  {
    name: "Lifting",
    note: "Consistent. The gym is the one thing I don't skip.",
    image: "/lifting.jpg",
    imagePosition: "bottom",
  },
  {
    name: "Reading",
    note: "Currently working through the Bhagavad Gita. Taking it slowly.",
    image: "/reading.jpg",
  },
  {
    name: "Music",
    note: "70,000 Spotify minutes this year. Probably more by the time you read this.",
    image: "/wrapped.jpg",
  },
  {
    name: "Basketball",
    note: "Grew up on it. Always down for a game.",
    image: "/baskebtall.jpg",
    imagePosition: "center 35%",
  },
  {
    name: "Catan",
    note: "Will argue about opening strategy for longer than is healthy.",
    image: "/catan.jpg",
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["Java", "Python", "SQL", "C", "Kotlin", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    category: "Frameworks",
    items: ["Spring Boot", "FastAPI", "Flask", "React", "Next.js", "Tailwind CSS", "NumPy", "JUnit"],
  },
  {
    category: "Tools",
    items: ["AWS", "Docker", "Git", "Vercel", "Railway", "PostgreSQL", "MySQL", "Supabase", "Claude Code"],
  },
];
