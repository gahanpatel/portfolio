"use client";

import { useState } from "react";
import { Mail, Check } from "lucide-react";
import { LinkedInIcon } from "./Icons";
import FadeIn from "./FadeIn";
import { personalInfo } from "@/lib/data";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  function handleEmailClick() {
    navigator.clipboard.writeText(personalInfo.email).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <section id="contact" className="pt-24 pb-16 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-2xl font-bold font-heading text-ember-ink dark:text-ember mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-char dark:text-dusk mb-10 max-w-md mx-auto">
            I&apos;m always open to discussing new projects and opportunities!
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${personalInfo.email}`}
              onClick={handleEmailClick}
              className="inline-flex items-center gap-2 px-6 py-3 min-h-[44px] rounded-lg text-sm font-medium bg-ember-ink text-parchment hover:bg-ember-ink-deep dark:bg-ember dark:text-forge dark:hover:bg-ember-dim transition-colors"
            >
              {copied ? <Check size={15} /> : <Mail size={15} />}
              {copied ? "Copied!" : personalInfo.email}
            </a>
<a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 min-h-[44px] rounded-lg text-sm font-medium bg-ember-ink text-parchment hover:bg-ember-ink-deep dark:bg-ember dark:text-forge dark:hover:bg-ember-dim transition-colors"
            >
              <LinkedInIcon size={15} />
              LinkedIn
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
