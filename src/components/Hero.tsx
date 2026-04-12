import { Mail, Download, ArrowDown } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./Icons";
import { personalInfo } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-6 pt-16"
    >
      <div className="max-w-2xl w-full text-center">
        {/* Eyebrow */}
        <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-4 tracking-widest uppercase">
          Software Engineer
        </p>

        {/* Name */}
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-slate-900 dark:text-slate-50 mb-6">
          {personalInfo.name}
        </h1>

        {/* Tagline */}
        <p className="text-lg sm:text-xl text-slate-500 dark:text-slate-400 max-w-lg mx-auto leading-relaxed mb-10">
          {personalInfo.tagline}
        </p>

        {/* Links row */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 transition-colors"
          >
            <GitHubIcon size={15} />
            GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 transition-colors"
          >
            <LinkedInIcon size={15} />
            LinkedIn
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 transition-colors"
          >
            <Mail size={15} />
            Email
          </a>
          <a
            href={personalInfo.resumeUrl}
            download
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
          >
            <Download size={15} />
            Resume
          </a>
        </div>

        {/* Scroll cue */}
        <a
          href="#about"
          className="inline-flex flex-col items-center gap-2 text-xs text-slate-400 dark:text-slate-600 hover:text-slate-600 dark:hover:text-slate-400 transition-colors"
        >
          <ArrowDown size={16} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
