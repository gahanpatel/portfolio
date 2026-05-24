"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectImagesProps {
  images: string[];
  title: string;
}

export default function ProjectImages({ images, title }: ProjectImagesProps) {
  const [index, setIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [snapping, setSnapping] = useState(false);
  const indexRef = useRef(0);
  const touchStartX = useRef<number | null>(null);
  const wheelAccum = useRef(0);
  const snapTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const snappingLock = useRef(false);

  if (images.length === 1) {
    return (
      <div className="mb-4 rounded-lg overflow-hidden border border-linen dark:border-cinder">
        <Image src={images[0]} alt={`${title} screenshot`} width={1200} height={675} className="w-full h-auto" />
      </div>
    );
  }

  function snapTo(newIndex: number) {
    const clamped = Math.max(0, Math.min(images.length - 1, newIndex));
    indexRef.current = clamped;
    snappingLock.current = true;
    setSnapping(true);
    setIndex(clamped);
    setDragOffset(0);
    wheelAccum.current = 0;
    setTimeout(() => {
      setSnapping(false);
      snappingLock.current = false;
    }, 400);
  }

  function handleWheel(e: React.WheelEvent) {
    if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) return;
    e.preventDefault();
    if (snappingLock.current) return;

    setSnapping(false);
    wheelAccum.current += e.deltaX;

    const rawOffset = -wheelAccum.current;
    const clampedOffset = indexRef.current === 0
      ? Math.min(0, rawOffset)
      : indexRef.current === images.length - 1
      ? Math.max(0, rawOffset)
      : rawOffset;
    setDragOffset(clampedOffset);

    if (snapTimer.current) clearTimeout(snapTimer.current);
    snapTimer.current = setTimeout(() => {
      if (wheelAccum.current > 50) snapTo(indexRef.current + 1);
      else if (wheelAccum.current < -50) snapTo(indexRef.current - 1);
      else snapTo(indexRef.current);
    }, 120);
  }

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
    setSnapping(false);
  }

  function handleTouchMove(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const raw = e.touches[0].clientX - touchStartX.current;
    const clamped = indexRef.current === 0
      ? Math.min(0, raw)
      : indexRef.current === images.length - 1
      ? Math.max(0, raw)
      : raw;
    setDragOffset(clamped);
  }

  function handleTouchEnd() {
    if (dragOffset < -60) snapTo(indexRef.current + 1);
    else if (dragOffset > 60) snapTo(indexRef.current - 1);
    else snapTo(indexRef.current);
    touchStartX.current = null;
  }

  return (
    <div
      className="mb-4 relative rounded-lg overflow-hidden border border-linen dark:border-cinder"
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="flex"
        style={{
          transform: `translateX(calc(-${index * 100}% + ${dragOffset}px))`,
          transition: snapping ? "transform 0.35s cubic-bezier(0.25, 1, 0.5, 1)" : "none",
        }}
      >
        {images.map((src, i) => (
          <div key={i} className="w-full shrink-0">
            <Image
              src={src}
              alt={`${title} screenshot ${i + 1}`}
              width={1200}
              height={675}
              className="w-full h-auto"
              draggable={false}
            />
          </div>
        ))}
      </div>

      <button
        onClick={() => snapTo(index - 1)}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-forge/70 text-chalk hover:bg-forge transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={() => snapTo(index + 1)}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-forge/70 text-chalk hover:bg-forge transition-colors"
        aria-label="Next image"
      >
        <ChevronRight size={18} />
      </button>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => snapTo(i)}
            className={`w-2 h-2 rounded-full transition-[background-color,transform] duration-200 ${i === index ? "bg-chalk scale-100" : "bg-chalk/40 scale-75"}`}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
