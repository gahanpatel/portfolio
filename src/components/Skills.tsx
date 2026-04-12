import FadeIn from "./FadeIn";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-50 dark:bg-slate-800/30">
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <h2 className="text-xs font-semibold tracking-widest uppercase text-indigo-600 dark:text-indigo-400 mb-10">
            Skills
          </h2>
        </FadeIn>
        <FadeIn delay={100}>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 text-sm font-medium rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-indigo-300 dark:hover:border-indigo-700 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors cursor-default"
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
