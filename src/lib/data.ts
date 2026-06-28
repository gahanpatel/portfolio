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
  bio: "Hey, I am a third-year CS and Business student at Northeastern. Passionate about writing code that makes a real difference: building products that are genuinely useful and improve people's lives.",
  bioInterests: "From New Orleans. Running, slowly working through the Bhagavad Gita, and 70,000 Spotify minutes last year.",
};

export const experiences = [
  {
    id: "liaizon-fullstack",
    role: "Full Stack Developer",
    company: "Liaizon",
    date: "Jun 2026 – Present",
    description:
      "Built Posting Rituals, a recurring video commitment feature backed by a direct-to-S3 pipeline with async ffmpeg transcoding. Shipped a private referral system in FastAPI and SQLModel where trusted contacts vouch on profiles.",
    tags: ["FastAPI", "SQLModel", "Python", "AWS S3", "pytest"],
  },
  {
    id: "ticker-intern",
    role: "Software Engineering Intern",
    company: "ticker",
    date: "May 2026 – Present",
    description:
      "Shipped a Groups feature across 8 React Native screens and 58 Spring Boot endpoints, and built Learning Mode, a delta-synced financial glossary cutting term load to under 45ms.",
    tags: ["React Native", "Spring Boot", "Java", "MongoDB", "JUnit"],
  },
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
  {
    id: "coffee-chat",
    title: "Coffee Chat Matcher",
    description:
      "Profile-matching platform for 200+ TAMID members using OpenAI embeddings to generate 1,536-dimensional vectors from Slack bios, ranking matches by cosine similarity. Built a Python scraper to bulk-download 338 photos from Notion and a React frontend with search and ranked profile cards.",
    tags: ["Python", "Flask", "React", "Supabase", "OpenAI"],
    github: "https://github.com/rioquinn11/tamidchatmatcher",
    live: "",
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
    note: "Trying to stay consistent.",
    image: "/lifting2.png",
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
    note: "Longest road is always mine.",
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
    items: ["Spring Boot", "FastAPI", "Flask", "React", "React Native", "Next.js", "Expo", "Tailwind CSS", "NumPy", "JUnit"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Supabase"],
  },
  {
    category: "Tools",
    items: ["AWS", "Google Cloud Storage", "Docker", "Git", "Vercel", "Railway", "Claude Code"],
  },
];
