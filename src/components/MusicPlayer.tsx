"use client";

import { useRef, useState } from "react";
import { Music, Pause } from "lucide-react";

// Drop your audio file at public/music.mp3 (or update src below)
const AUDIO_SRC = "/music.mp3";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

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

  return (
    <>
      <audio ref={audioRef} src={AUDIO_SRC} loop />
      <button
        onClick={toggle}
        aria-label={playing ? "Pause background music" : "Play background music"}
        className={`fixed bottom-6 right-6 z-40 w-10 h-10 flex items-center justify-center rounded-full border transition-all duration-300 ${
          playing
            ? "bg-ember-subtle border-ember text-ember shadow-[0_0_0_4px_color-mix(in_oklch,#d4a020_20%,transparent)]"
            : "bg-coal border-cinder text-smoke hover:border-ember hover:text-ember"
        }`}
      >
        {playing ? (
          <Pause size={15} />
        ) : (
          <Music size={15} />
        )}
      </button>
    </>
  );
}
