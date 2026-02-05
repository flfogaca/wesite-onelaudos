"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  className?: string;
}

const positionStyles = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
  left: "right-full top-1/2 -translate-y-1/2 mr-2",
  right: "left-full top-1/2 -translate-y-1/2 ml-2",
};

const arrowStyles = {
  top: "bottom-[-6px] left-1/2 -translate-x-1/2 border-t-surface border-x-transparent border-b-transparent",
  bottom: "top-[-6px] left-1/2 -translate-x-1/2 border-b-surface border-x-transparent border-t-transparent",
  left: "right-[-6px] top-1/2 -translate-y-1/2 border-l-surface border-y-transparent border-r-transparent",
  right: "left-[-6px] top-1/2 -translate-y-1/2 border-r-surface border-y-transparent border-l-transparent",
};

export function Tooltip({
  content,
  children,
  position = "top",
  className,
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className={cn(
              "absolute z-50 px-3 py-2 text-sm bg-surface border border-border rounded-lg shadow-lg whitespace-nowrap",
              positionStyles[position],
              className
            )}
          >
            {content}
            <div
              className={cn(
                "absolute w-0 h-0 border-[6px]",
                arrowStyles[position]
              )}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
