import Image from "next/image";
import FadeIn from "./FadeIn";
import { practices } from "@/lib/data";

export default function Practices() {
  return (
    <section id="practices" className="py-24 px-6 bg-bone dark:bg-ash">
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl font-bold font-heading tracking-tight text-ember-ink dark:text-ember mb-10 pl-3">
            Interests
          </h2>
        </FadeIn>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 auto-rows-fr">
          {practices.map((item, i) => (
            <FadeIn key={item.name} delay={i * 60} className="h-full">
              <div className="h-full flex flex-col rounded-xl border border-linen dark:border-cinder bg-vellum dark:bg-coal overflow-hidden group">
                  <div className="aspect-[3/4] bg-linen dark:bg-cinder flex items-center justify-center overflow-hidden">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={400}
                        height={533}
                        className={`h-full w-full transition-transform duration-500 group-hover:scale-105 ${item.imagePosition ? "object-cover" : "w-auto object-contain"}`}
                        style={item.imagePosition ? { objectPosition: item.imagePosition } : undefined}
                      />
                    ) : (
                      <span className="text-xs text-gravel dark:text-smoke">Soon</span>
                    )}
                  </div>
                  <div className="flex-1 p-3">
                    <p className="text-sm font-semibold font-heading text-forge dark:text-chalk mb-0.5">
                      {item.name}
                    </p>
                    <p className="text-xs text-char dark:text-dusk leading-relaxed line-clamp-2">
                      {item.note}
                    </p>
                  </div>
                </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
