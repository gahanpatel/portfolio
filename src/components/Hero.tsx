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
        <p className="text-xs font-semibold font-heading tracking-widest uppercase text-ember-ink dark:text-ember mb-4">
          Software Engineer
        </p>

        {/* Name */}
        <h1 className="text-5xl sm:text-7xl font-bold font-heading tracking-tight text-forge dark:text-chalk mb-6">
          {personalInfo.name}
        </h1>

        {/* Tagline */}
        <p className="text-lg sm:text-xl text-char dark:text-dusk max-w-lg mx-auto leading-relaxed mb-10">
          {personalInfo.tagline}
        </p>

        {/* Links row */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-char dark:text-chalk border border-linen dark:border-cinder hover:bg-bone dark:hover:bg-cinder transition-colors"
          >
            <GitHubIcon size={15} />
            GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-char dark:text-chalk border border-linen dark:border-cinder hover:bg-bone dark:hover:bg-cinder transition-colors"
          >
            <LinkedInIcon size={15} />
            LinkedIn
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-char dark:text-chalk border border-linen dark:border-cinder hover:bg-bone dark:hover:bg-cinder transition-colors"
          >
            <Mail size={15} />
            Email
          </a>
          <a
            href={personalInfo.resumeUrl}
            download
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-ember-ink text-parchment hover:bg-ember-ink-deep dark:bg-ember dark:text-forge dark:hover:bg-ember-dim transition-colors"
          >
            <Download size={15} />
            Resume
          </a>
        </div>

        {/* Scroll cue */}
        <a
          href="#about"
          className="inline-flex flex-col items-center gap-2 text-xs text-linen dark:text-cinder hover:text-gravel dark:hover:text-smoke transition-colors"
        >
          <ArrowDown size={16} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
