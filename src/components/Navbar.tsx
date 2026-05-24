"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Interests", href: "#practices" },
  { label: "Connect", href: "#contact" },
];


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const nearBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80;
      if (nearBottom) {
        setActiveSection("contact");
        return;
      }

      const threshold = window.innerHeight * 0.45;
      let active = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= threshold) active = id;
      }
      setActiveSection(active);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-parchment/90 dark:bg-forge/90 backdrop-blur-md border-b border-linen dark:border-cinder"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#hero"
          onClick={() => setMenuOpen(false)}
          className="text-sm font-semibold font-heading tracking-tight text-forge dark:text-chalk hover:text-ember-ink dark:hover:text-ember transition-colors"
        >
          GP
        </a>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative text-sm transition-colors ${
                  isActive
                    ? "text-ember-ink dark:text-ember font-medium"
                    : "text-char dark:text-dusk hover:text-forge dark:hover:text-chalk"
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 right-0 h-px bg-ember-ink dark:bg-ember origin-left transition-transform duration-300 ${isActive ? "scale-x-100" : "scale-x-0"}`} />
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="sm:hidden w-11 h-11 flex items-center justify-center text-char dark:text-dusk hover:text-forge dark:hover:text-chalk transition-colors"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div id="mobile-menu" className="sm:hidden border-t border-linen dark:border-cinder bg-parchment/95 dark:bg-forge/95 backdrop-blur-md">
          <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`min-h-[44px] flex items-center text-sm border-b border-linen/50 dark:border-cinder/50 last:border-0 transition-colors ${
                    isActive
                      ? "text-ember-ink dark:text-ember font-medium"
                      : "text-char dark:text-dusk"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
