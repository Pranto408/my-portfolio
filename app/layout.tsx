import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/hooks/useTheme";

export const metadata: Metadata = {
  title: "Pranto Dutta | Full Stack Web Developer",
  description: "Full Stack Web Developer specializing in MERN Stack and Next.js. Building modern, scalable, and high-performance web applications.",
  keywords: ["Full Stack Developer", "MERN Stack", "Next.js", "React", "Web Developer", "Bangladesh"],
  authors: [{ name: "Pranto Dutta" }],
  openGraph: {
    title: "Pranto Dutta | Full Stack Web Developer",
    description: "Full Stack Web Developer specializing in MERN Stack and Next.js.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
