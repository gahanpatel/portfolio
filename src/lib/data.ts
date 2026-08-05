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
  bio: "I am a third-year student at Northeastern studying Computer Science and Business Administration. I'm passionate about leveraging technology to solve real-world problems and building things that have a real impact on users.",
  bioInterests: "From New Orleans. Running, slowly working through the Bhagavad Gita, and 70,000 Spotify minutes last year.",
};

export const experiences = [
  {
    id: "liaizon-fullstack",
    role: "Full Stack Developer",
    company: "Liaizon",
    date: "Jun 2026 – Present",
    description:
      "Rebuilt the app's entire frontend from the ground up and built Posting Rituals, a recurring video commitment feature backed by a direct-to-S3 pipeline with async ffmpeg transcoding.",
    tags: ["React Native", "FastAPI", "SQLModel", "Python", "AWS S3", "pytest"],
  },
  {
    id: "ticker-intern",
    role: "Software Engineering Intern",
    company: "ticker",
    date: "May 2026 – Present",
    description:
      "Built Learning Mode, a financial glossary that loads terms in under 45ms with delta syncing and caching. Engineered the company's first sponsored-content system, which brought in its first $1,000 in ad revenue, and revamped the Groups feature across 8 React Native screens and 30 Spring Boot endpoints.",
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
