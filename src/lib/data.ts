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
  bio: "Hey, I am a third-year student at Northeastern studying Computer Science and Business Administration. I'm passionate about leveraging technology to solve real-world problems and building things that have a real impact on users.",
  bioInterests: "From New Orleans. Running, slowly working through the Bhagavad Gita, and 70,000 Spotify minutes last year.",
};

export const experiences = [
  {
    id: "liaizon-fullstack",
    role: "Full Stack Developer, Part-Time",
    company: "Liaizon",
    date: "Jun 2026 – Aug 2026",
    description:
      "Shipped a full redesign of a social app across feed, camera, profile, messages, and settings, rebuilding the FastAPI service layer against a reworked PostgreSQL schema. Fixed large-file upload failures by moving uploads directly to S3 with asynchronous ffmpeg transcoding, which holds memory flat at any file size.",
    tags: ["React Native", "FastAPI", "SQLModel", "Python", "AWS S3", "pytest"],
  },
  {
    id: "ticker-intern",
    role: "Software Engineering Co-op, Mobile App Development",
    company: "ticker",
    date: "May 2026 – Aug 2026",
    description:
      "Built Ticker's first ad monetization system on Java and Spring Boot, with Redis campaign rotation and HMAC click fingerprinting to keep invalid clicks out of billing. Also shipped an offline-first financial glossary with sub-45ms lookups and rebuilt comments and groups across eight mobile screens with role-based permissions.",
    tags: ["React Native", "Spring Boot", "Java", "MongoDB", "JUnit"],
  },
  {
    id: "excel-with-dell",
    role: "Business Lead",
    company: "Excel with Dell",
    date: "Feb 2026 – Apr 2026",
    description:
      "Won 1st place in an AI case competition by leading the business case for running a customer-feedback NLP pipeline on Dell PowerEdge over three competing platforms, plus the risk assessment and phased rollout. Routed low-confidence and sarcastic reviews to human review rather than trusting the model outright.",
    tags: ["NLP", "Business Strategy", "Risk Assessment"],
  },
  {
    id: "oasis-instructor",
    role: "Web Development Instructor",
    company: "Oasis at Northeastern",
    date: "Jan 2026 – Apr 2026",
    description:
      "Mentored ten developers across two teams that launched a campus marketplace app and a professor review platform, leading architecture decisions, schema design, and weekly code review. Taught Git, SQL, RESTful APIs, React, and deployment to 80+ students through weekly presentations.",
    tags: ["React", "Git", "Full-Stack", "Mentorship"],
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
      "Conducted interviews and cold-called Emeryville businesses to assess challenges faced by entrepreneurs. Synthesized findings into recommendations used by the city to support local BIPOC entrepreneurs.",
    tags: ["Research", "Community Outreach"],
  },
  {
    id: "baps-outreach",
    role: "Outreach Coordinator",
    company: "BAPS Swaminarayan Sanstha",
    date: "Jan 2018 – Sep 2024",
    description:
      "Led outreach efforts to engage community members and boost attendance at major cultural and religious festivals. Helped coordinate event logistics like food service and cleanup to keep temple operations running smoothly.",
    tags: ["Volunteering", "Community Outreach", "Event Logistics"],
  },
  {
    id: "cypress-inn",
    role: "Assistant Manager",
    company: "Cypress Inn Motel",
    date: "Jan 2022 – Aug 2024",
    description:
      "Managed day-to-day operations, built revenue and expense tracking in Excel, and prepared monthly P&L statements.",
    tags: ["Excel", "Financial Analysis", "Operations"],
  },
];

export const projects = [
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
    id: "coffee-chat",
    title: "Coffee Chat Matcher",
    description:
      "Profile-matching platform for 200+ TAMID members using OpenAI embeddings to generate 1,536-dimensional vectors from Slack bios, ranking matches by cosine similarity. Built a Python scraper to bulk-download 338 photos from Notion and a React frontend with search and ranked profile cards.",
    tags: ["Python", "Flask", "React", "Supabase", "OpenAI"],
    github: "https://github.com/rioquinn11/tamidchatmatcher",
    live: "",
  },
  {
    id: "social-media-db",
    title: "Social Media Database",
    description:
      "Modeled a relational MySQL database with 10 tables and an ER diagram representing a social media app. Generated 1,000+ records with Python Faker to simulate users, posts, ad campaigns, and engagement, then wrote analytical SQL queries for bot detection, ad performance analysis, and viral post identification.",
    tags: ["SQL", "MySQL", "Python", "ER Modeling"],
    github: "",
    live: "",
  },
];

export const practices = [
  {
    name: "Basketball",
    note: "Grew up on it. Always down for a game.",
    image: "/basketball2.jpg",
    imagePosition: "center 35%",
  },
  {
    name: "Lifting",
    note: "Trying to stay consistent.",
    image: "/workout.png",
    imagePosition: "bottom",
  },
  {
    name: "Reading",
    note: "Currently working through the Bhagavad Gita. Taking it slowly.",
    image: "/reading.jpg",
  },
  {
    name: "Catan",
    note: "Longest road is always mine.",
    image: "/catan.jpg",
  },
  {
    name: "Running",
    note: "Getting into distance. Building the habit one early morning at a time.",
    image: "/strava.png",
  },
  {
    name: "Music",
    note: "70,000 Spotify minutes this year. Probably more by the time you read this.",
    image: "/music.jpg",
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
