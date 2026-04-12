import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./Icons";
import FadeIn from "./FadeIn";
import { personalInfo } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-xs font-semibold tracking-widest uppercase text-indigo-600 dark:text-indigo-400 mb-4">
            Contact
          </h2>
          <p className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-4">
            Let&apos;s work together.
          </p>
          <p className="text-slate-500 dark:text-slate-400 mb-10 max-w-md mx-auto">
            I&apos;m actively looking for software engineering co-ops for Fall&nbsp;2025. Reach out — I&apos;d love to chat.
          </p>
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700 transition-colors mb-12"
          >
            <Mail size={15} />
            {personalInfo.email}
          </a>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="flex items-center justify-center gap-5 pt-6 border-t border-slate-200 dark:border-slate-700">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
            >
              <GitHubIcon size={15} />
              GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
            >
              <LinkedInIcon size={15} />
              LinkedIn
            </a>
          </div>
          <p className="mt-6 text-xs text-slate-400 dark:text-slate-600">
            Built with Next.js &amp; Tailwind CSS
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
