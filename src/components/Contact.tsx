import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./Icons";
import FadeIn from "./FadeIn";
import { personalInfo } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-xs font-semibold font-heading tracking-widest uppercase text-ember-ink dark:text-ember mb-4">
            Contact
          </h2>
          <p className="text-3xl font-bold font-heading text-forge dark:text-chalk mb-4">
            Let&apos;s work together.
          </p>
          <p className="text-char dark:text-dusk mb-10 max-w-md mx-auto">
            I&apos;m actively looking for software engineering co-ops for Fall&nbsp;2025. Reach out — I&apos;d love to chat.
          </p>
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium bg-ember-ink text-parchment hover:bg-ember-ink-deep dark:bg-ember dark:text-forge dark:hover:bg-ember-dim transition-colors mb-12"
          >
            <Mail size={15} />
            {personalInfo.email}
          </a>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="flex items-center justify-center gap-5 pt-6 border-t border-linen dark:border-cinder">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-gravel dark:text-dusk hover:text-forge dark:hover:text-chalk transition-colors"
            >
              <GitHubIcon size={15} />
              GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-gravel dark:text-dusk hover:text-forge dark:hover:text-chalk transition-colors"
            >
              <LinkedInIcon size={15} />
              LinkedIn
            </a>
          </div>
          <p className="mt-6 text-xs text-gravel dark:text-smoke">
            Built with Next.js &amp; Tailwind CSS
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
