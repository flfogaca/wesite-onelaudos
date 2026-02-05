"use client";

import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  variant?: "default" | "gradient" | "outline";
  href?: string;
  className?: string;
  delay?: number;
}

export function FeatureCard({
  title,
  description,
  icon: Icon,
  variant = "default",
  href,
  className,
  delay = 0,
}: FeatureCardProps) {
  const Wrapper = href ? motion.a : motion.div;
  const wrapperProps = href ? { href } : {};

  return (
    <Wrapper
      {...wrapperProps}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4 }}
      className={cn(
        "block p-6 rounded-xl transition-all duration-300",
        variant === "default" && "bg-surface hover:bg-surface-hover border border-border",
        variant === "gradient" && "gradient-border hover:shadow-lg hover:shadow-primary/10",
        variant === "outline" && "border-2 border-primary/20 hover:border-primary/50 bg-transparent",
        href && "cursor-pointer",
        className
      )}
    >
      <div
        className={cn(
          "w-12 h-12 rounded-lg flex items-center justify-center mb-4",
          variant === "gradient"
            ? "bg-gradient-to-br from-primary to-accent"
            : "bg-primary/10"
        )}
      >
        <Icon
          className={cn(
            "w-6 h-6",
            variant === "gradient" ? "text-white" : "text-primary"
          )}
        />
      </div>
      <h3 className="text-lg font-semibold text-text mb-2">{title}</h3>
      <p className="text-sm text-muted leading-relaxed">{description}</p>
    </Wrapper>
  );
}
