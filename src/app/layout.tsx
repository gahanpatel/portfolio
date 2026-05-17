import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import ConsoleEasterEgg from "@/components/ConsoleEasterEgg";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gahanpatel.com"),
  title: "Gahan Patel",
  description:
    "CS and Business student at Northeastern University building full-stack products and backend systems. Seeking software engineering co-ops for Fall 2026.",
  openGraph: {
    title: "Gahan Patel",
    description:
      "CS and Business student at Northeastern University building full-stack products and backend systems.",
    type: "website",
    url: "https://gahanpatel.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gahan Patel",
    description:
      "CS and Business student at Northeastern University building full-stack products and backend systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem('theme')!=='light')document.documentElement.classList.add('dark')}catch(e){}`,
          }}
        />
      </head>
      <body className="min-h-screen font-body bg-[var(--background)] text-[var(--foreground)]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-ember focus:text-forge focus:rounded-lg focus:text-sm focus:font-medium"
        >
          Skip to content
        </a>
        <ConsoleEasterEgg />
        {children}
      </body>
    </html>
  );
}
