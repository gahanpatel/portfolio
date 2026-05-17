"use client";

import { useRef, useState } from "react";
import { Music, Pause } from "lucide-react";

const AUDIO_SRC = "/music.mp3";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [available, setAvailable] = useState(true);

  function toggle() {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().catch(() => {});
      setPlaying(true);
    }
  }

  if (!available) return null;

  return (
    <>
      <audio
        ref={audioRef}
        src={AUDIO_SRC}
        loop
        onError={() => setAvailable(false)}
      />
      <button
        onClick={toggle}
        aria-label={playing ? "Pause background music" : "Play background music"}
        style={{ bottom: "max(1.5rem, calc(env(safe-area-inset-bottom, 0px) + 1.5rem))", ...(!playing ? { animation: "idle-pulse 3s ease-in-out infinite" } : {}) }}
        className={`fixed bottom-6 right-6 z-40 w-11 h-11 flex items-center justify-center rounded-full border transition-all duration-300 ${
          playing
            ? "bg-ember-ink-subtle border-ember-ink text-ember-ink dark:bg-ember-subtle dark:border-ember dark:text-ember shadow-[0_0_0_4px_color-mix(in_oklch,var(--color-ember-ink)_20%,transparent)] dark:shadow-[0_0_0_4px_color-mix(in_oklch,var(--color-ember)_20%,transparent)]"
            : "bg-vellum border-linen text-gravel hover:border-ember-ink hover:text-ember-ink dark:bg-coal dark:border-cinder dark:text-smoke dark:hover:border-ember dark:hover:text-ember"
        }`}
      >
        {playing ? <Pause size={15} /> : <Music size={15} />}
      </button>
    </>
  );
}
