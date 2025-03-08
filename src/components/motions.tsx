"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const DURATION = 0.25;
const STAGGER = 0.025;

export const FlipText = ({
  defaultText,
  hoverText,
}: {
  defaultText: string;
  hoverText: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [maxWidth, setMaxWidth] = useState<number | "auto">("auto");

  useEffect(() => {
    if (containerRef.current) {
      const defaultWidth = containerRef.current.children[0].clientWidth;
      const hoverWidth = containerRef.current.children[1].clientWidth;
      setMaxWidth(Math.max(defaultWidth, hoverWidth)); // Set width to the largest text
    }
  }, []);

  // Function to split text and wrap spaces in spans
  const splitText = (text: string) =>
    text.split("").map((char, i) =>
      char === " " ? (
        <motion.span key={`space-${i}`}>&nbsp;</motion.span>
      ) : (
        <motion.span
          key={`char-${i}`}
          transition={{
            duration: DURATION,
            ease: "easeInOut",
            delay: STAGGER * i,
          }}
          className="inline-block"
        >
          {char}
        </motion.span>
      )
    );

  return (
    <motion.div
      ref={containerRef}
      initial="initial"
      whileHover="hovered"
      className="relative inline-block overflow-hidden font-bold"
      style={{ width: maxWidth, lineHeight: 1 }}
    >
      {/* Default Text */}
      <motion.div
        variants={{
          initial: { y: 0 },
          hovered: { y: "-100%" },
        }}
        transition={{ duration: DURATION, ease: "easeInOut" }}
        className="relative block text-center whitespace-nowrap cursor-pointer"
      >
        {splitText(defaultText)}
      </motion.div>

      {/* Hover Text */}
      <motion.div
        variants={{
          initial: { y: "100%" },
          hovered: { y: "0%" },
        }}
        transition={{ duration: DURATION, ease: "easeInOut" }}
        className="absolute left-0 top-0 text-center whitespace-nowrap cursor-pointer"
      >
        {splitText(hoverText)}
      </motion.div>
    </motion.div>
  );
};
