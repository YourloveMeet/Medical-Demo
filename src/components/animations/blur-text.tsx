"use client";

import { motion, Variants } from "framer-motion";
import React, { useRef } from "react";

interface BlurTextProps {
  text: string;
  delay?: number;
  className?: string;
  tag?: keyof React.JSX.IntrinsicElements;
  duration?: number;
}

export function BlurText({
  text,
  delay = 0,
  className = "",
  tag: Tag = "h1",
  duration = 0.8
}: BlurTextProps) {
  // Parsing logic: split by spaces but preserve newlines and highlight tags
  // This regex matches: {hlt}...{/hlt} tokens, \n tokens, or words
  const tokens = text.split(/(\{hlt\}.*?\{\/hlt\}|\\n|\n|\s+)/).filter(Boolean);

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: delay }
    }
  };

  const wordAnimation: Variants = {
    hidden: { filter: "blur(10px)", opacity: 0, y: 15 },
    visible: {
      filter: "blur(0px)",
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: duration
      }
    }
  };

  const Component = Tag as any;

  return (
    <Component className={className}>
      <motion.span
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-wrap"
      >
        {tokens.map((token, index) => {
          // Handle newlines (both literal and string \n)
          if (token === "\n" || token === "\\n") {
            return <div key={index} className="w-full h-0" />;
          }

          // Handle whitespace
          if (/^\s+$/.test(token)) {
            return <span key={index}>&nbsp;</span>;
          }

          // Handle highlights
          const highlightMatch = token.match(/\{hlt\}(.*?)\{\/hlt\}/);
          if (highlightMatch) {
            const content = highlightMatch[1];
            return (
              <motion.span
                key={index}
                variants={wordAnimation}
                className="inline-block text-[#4A7C6F]"
              >
                {content}
              </motion.span>
            );
          }

          // Handle normal words
          return (
            <motion.span
              key={index}
              variants={wordAnimation}
              className="inline-block"
            >
              {token}
            </motion.span>
          );
        })}
      </motion.span>
    </Component>
  );
}
