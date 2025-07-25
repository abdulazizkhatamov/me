"use client";

import Link from "next/link";
import React from "react";
import { FlipText } from "./motions";
import { ThemeSwitcher } from "./theme-provider";
import { motion } from "framer-motion";
import { Cross2Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import clsx from "clsx";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={clsx(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "backdrop-blur-sm bg-white/70 dark:bg-black/30"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl w-full mx-auto px-4 md:px-8 lg:px-0 flex justify-between items-center py-5">
        {/* Logo */}
        <div>
          <Link href={"/"}>
            <FlipText defaultText="ABDULAZIZ" hoverText="KHATAMOV" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {[
            { label: "About", path: "/about" },
            { label: "Skills", path: "/skills" },
            { label: "Projects", path: "/projects" },
            { label: "Experience", path: "/experience" },
            { label: "Testimonials", path: "/testimonials" },
            { label: "Blog", path: "/blog" },
            { label: "Contact", path: "/contact" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.path}
              className="relative transition hover:text-inherit
               after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 
               after:bg-red-500 dark:after:bg-canary after:transition-all after:duration-300 hover:after:w-full"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <ThemeSwitcher />
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(true)}>
          <HamburgerMenuIcon width={24} height={24} />
        </button>
      </div>

      {/* Render mobile menu only when isOpen is true */}
      {isOpen && (
        <>
          {/* Dark Overlay */}
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Full-Screen Mobile Menu */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-white dark:bg-black z-50 h-screen flex flex-col items-center justify-center space-y-6 text-xl"
          >
            <button
              className="absolute top-5 right-5"
              onClick={() => setIsOpen(false)}
            >
              <Cross2Icon width={30} height={30} />
            </button>

            {[
              { label: "About", path: "/about" },
              { label: "Skills", path: "/skills" },
              { label: "Projects", path: "/projects" },
              { label: "Experience", path: "/experience" },
              { label: "Testimonials", path: "/testimonials" },
              { label: "Blog", path: "/blog" },
              { label: "Contact", path: "/contact" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.path}
                className="hover:text-gray-500 transition"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <ThemeSwitcher />
          </motion.div>
        </>
      )}
    </nav>
  );
}
