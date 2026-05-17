import Image from "next/image";
import FadeIn from "./FadeIn";
import { personalInfo } from "@/lib/data";

export default function Hero() {
  const [firstName, ...rest] = personalInfo.name.split(" ");
  const lastName = rest.join(" ");

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-6 pt-20 pb-16"
    >
      <div className="max-w-2xl mx-auto w-full">
        <FadeIn>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold font-heading tracking-tight text-forge dark:text-chalk leading-none mb-8">
            {firstName}
            <br />
            {lastName}
          </h1>

          <div className="w-12 h-px bg-ember mb-8" />

          <div className="flex flex-col-reverse sm:flex-row sm:items-start sm:justify-between gap-10">
            <div className="flex-1">
              <p className="text-lg text-char dark:text-dusk leading-relaxed mb-4">
                {personalInfo.bio}
              </p>
              <p className="text-lg text-char dark:text-dusk leading-relaxed">
                {personalInfo.bioInterests}
              </p>
            </div>
            <div className="shrink-0">
              <Image
                src="/gahan.jpeg"
                alt="Gahan Patel"
                width={176}
                height={224}
                quality={100}
                className="rounded-xl border border-linen dark:border-cinder object-cover w-44 h-56 object-top"
                priority
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
