import Image from "next/image";
import FadeIn from "./FadeIn";
import { practices } from "@/lib/data";

export default function Practices() {
  return (
    <section id="practices" className="py-24 bg-bone dark:bg-ash">
      <div className="max-w-2xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-2xl font-bold font-heading text-ember-ink dark:text-ember mb-10">
            Interests
          </h2>
        </FadeIn>
      </div>

      <FadeIn delay={80}>
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar px-6 pb-2">
          {practices.map((item) => (
            <div
              key={item.name}
              className="snap-start shrink-0 w-44 rounded-xl border border-linen dark:border-cinder bg-vellum dark:bg-coal overflow-hidden"
            >
              <div className="aspect-[3/4] bg-linen dark:bg-cinder flex items-center justify-center overflow-hidden">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={400}
                    height={533}
                    className="h-full w-auto object-contain"
                  />
                ) : (
                  <span className="text-xs text-gravel dark:text-smoke">Soon</span>
                )}
              </div>
              <div className="p-3">
                <p className="text-sm font-semibold font-heading text-forge dark:text-chalk mb-0.5">
                  {item.name}
                </p>
                <p className="text-xs text-char dark:text-dusk leading-relaxed">
                  {item.note}
                </p>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
