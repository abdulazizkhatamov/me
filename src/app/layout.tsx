import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Abdulaziz Khatamov | Full Stack Web Developer",
  description:
    "Experienced full stack JavaScript developer specializing in React, Next.js, Node.js, and scalable web solutions.",
  keywords: [
    "Abdulaziz Khatamov",
    "Full Stack Developer",
    "Web Developer",
    "JavaScript Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Freelance Developer",
    "Web Development",
    "Full Stack JavaScript",
    "Software Engineer",
    "Web Applications",
    "Frontend Developer",
    "Backend Developer",
    "UI/UX Developer",
    "Responsive Design",
    "Web Design",
    "Web Development Portfolio",
    "Web Development Projects",
    "Web Development Skills",
    "Web Development Experience",
    "Web Development Testimonials",
    "Web Development Contact",
    "Web Development About Me",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute={"class"} defaultTheme="system" enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
