import FadeIn from "./FadeIn";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-slate-50 dark:bg-slate-800/30">
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <h2 className="text-xs font-semibold tracking-widest uppercase text-indigo-600 dark:text-indigo-400 mb-10">
            Experience
          </h2>
        </FadeIn>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <FadeIn key={exp.id} delay={i * 80}>
              <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-600 transition-colors">
                <div className="flex items-start justify-between gap-4 mb-2 flex-wrap">
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-slate-50">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-sm text-slate-400 dark:text-slate-500 shrink-0">
                    {exp.date}
                  </span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
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
