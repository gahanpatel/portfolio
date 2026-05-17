import FadeIn from "./FadeIn";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-bone dark:bg-ash">
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <h2 className="text-2xl font-bold font-heading text-ember-ink dark:text-ember mb-10">
            Experience
          </h2>
        </FadeIn>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <FadeIn key={exp.id} delay={i * 80}>
              <div className="p-6 rounded-xl border border-linen dark:border-cinder bg-vellum dark:bg-coal hover:border-ember-ink dark:hover:border-ember dark:hover:bg-cinder/30 transition-colors duration-200">
                <div className="flex items-start justify-between gap-4 mb-2 flex-wrap">
                  <div>
                    <h3 className="text-base font-semibold font-heading text-forge dark:text-chalk">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-ember-ink dark:text-ember font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-sm text-gravel dark:text-smoke shrink-0">
                    {exp.date}
                  </span>
                </div>
                <p className="text-sm text-char dark:text-dusk leading-relaxed mb-4">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-ember-ink-subtle dark:bg-ember-subtle text-ember-ink dark:text-ember"
                    >
                      {tag}
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
