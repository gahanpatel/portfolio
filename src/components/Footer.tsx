import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-linen dark:border-cinder">
      <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-xs text-gravel dark:text-smoke">
          © 2026 Gahan Patel
        </p>
        <a
          href={personalInfo.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-gravel dark:text-smoke hover:text-forge dark:hover:text-chalk transition-colors"
        >
          Resume
        </a>
      </div>
    </footer>
  );
}
