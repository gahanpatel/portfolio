import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "./Icons";
import FadeIn from "./FadeIn";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <h2 className="text-xs font-semibold font-heading tracking-widest uppercase text-ember-ink dark:text-ember mb-10">
            Projects
          </h2>
        </FadeIn>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <FadeIn key={project.id} delay={i * 80}>
              <div className="group p-6 rounded-xl border border-linen dark:border-cinder bg-vellum dark:bg-coal hover:border-ember-ink/50 dark:hover:border-ember/45 transition-colors">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-semibold font-heading text-forge dark:text-chalk group-hover:text-ember-ink dark:group-hover:text-ember transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 shrink-0">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="text-gravel hover:text-forge dark:hover:text-chalk transition-colors"
                      >
                        <GitHubIcon size={16} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live site"
                        className="text-gravel hover:text-forge dark:hover:text-chalk transition-colors"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-sm text-char dark:text-dusk leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
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
