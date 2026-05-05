import FadeIn from "./FadeIn";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-bone dark:bg-ash">
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <h2 className="text-xs font-semibold font-heading tracking-widest uppercase text-ember-ink dark:text-ember mb-10">
            Skills
          </h2>
        </FadeIn>
        <FadeIn delay={100}>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 text-sm font-medium rounded-lg border border-linen dark:border-cinder bg-vellum dark:bg-coal text-char dark:text-dusk hover:border-ember-ink dark:hover:border-ember hover:text-ember-ink dark:hover:text-ember transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
