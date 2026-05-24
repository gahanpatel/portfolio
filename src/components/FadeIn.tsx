"use client";

import { useEffect, useRef, useState } from "react";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  wipe?: boolean;
}

export default function FadeIn({ children, delay = 0, className = "", wipe = false }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  if (wipe) {
    return (
      <div
        ref={ref}
        className={className}
        style={{
          clipPath: visible ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
          transition: `clip-path 0.6s cubic-bezier(0.25, 1, 0.5, 1) ${delay}ms`,
        }}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
