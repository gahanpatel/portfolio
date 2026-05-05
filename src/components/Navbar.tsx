"use client";

import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-parchment/90 dark:bg-forge/90 backdrop-blur-md border-b border-linen dark:border-cinder"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#hero"
          className="text-sm font-semibold font-heading tracking-tight text-forge dark:text-chalk hover:opacity-70 transition-opacity"
        >
          GP
        </a>

        <div className="hidden sm:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-char dark:text-dusk hover:text-forge dark:hover:text-chalk transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <ThemeToggle />
      </nav>
    </header>
  );
}
