import FadeIn from "./FadeIn";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-6 bg-bone dark:bg-ash">
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl font-bold font-heading tracking-tight text-ember-ink dark:text-ember mb-8">
            Skills
          </h2>
        </FadeIn>

        <div className="space-y-6">
          {skills.map((group, i) => (
            <FadeIn key={group.category} delay={i * 80}>
              <div className="sm:grid sm:grid-cols-[128px_1fr] sm:gap-8 items-start">
                <p className="text-xs font-semibold font-heading tracking-widest uppercase text-gravel dark:text-smoke sm:pt-2 mb-2 sm:mb-0">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm font-medium rounded-lg border border-linen dark:border-cinder bg-vellum dark:bg-coal text-char dark:text-dusk hover:border-ember-ink dark:hover:border-ember hover:text-ember-ink dark:hover:text-ember hover:scale-[1.03] transition duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
