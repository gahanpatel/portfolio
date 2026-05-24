import Image from "next/image";
import { ExternalLink } from "lucide-react";
import FadeIn from "./FadeIn";
import ProjectImages from "./ProjectImages";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <FadeIn wipe>
          <h2 className="text-3xl font-bold font-heading tracking-tight text-ember-ink dark:text-ember mb-12">
            Projects
          </h2>
        </FadeIn>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <FadeIn key={project.id} delay={i * 80}>
              <div className="group p-6 rounded-xl border border-linen dark:border-cinder bg-vellum dark:bg-coal hover:border-ember-ink/50 dark:hover:border-ember/45 hover:-translate-y-0.5 transition duration-200">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-lg font-semibold font-heading text-forge dark:text-chalk">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 shrink-0">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-md border border-ember-ink/40 dark:border-ember/40 text-ember-ink dark:text-ember hover:bg-ember-ink-subtle dark:hover:bg-ember-subtle transition-colors"
                      >
                        GitHub <ExternalLink size={11} />
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
                {project.images && (
                  <ProjectImages images={project.images} title={project.title} />
                )}
                {project.image && (
                  <div className="mb-4 rounded-lg overflow-hidden border border-linen dark:border-cinder">
                    <Image
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      width={1200}
                      height={675}
                      className="w-full h-auto"
                    />
                  </div>
                )}
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
