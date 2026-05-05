import FadeIn from "./FadeIn";
import { personalInfo } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <h2 className="text-xs font-semibold font-heading tracking-widest uppercase text-ember-ink dark:text-ember mb-3">
            About
          </h2>
          <p className="text-3xl font-bold font-heading text-forge dark:text-chalk mb-6 leading-snug">
            Hey, I&apos;m Gahan.
          </p>
          <p className="text-lg text-char dark:text-dusk leading-relaxed">
            {personalInfo.bio}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
