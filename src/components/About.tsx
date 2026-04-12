import FadeIn from "./FadeIn";
import { personalInfo } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <h2 className="text-xs font-semibold tracking-widest uppercase text-indigo-600 dark:text-indigo-400 mb-3">
            About
          </h2>
          <p className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-6 leading-snug">
            Hey, I&apos;m Gahan.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            {personalInfo.bio}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
