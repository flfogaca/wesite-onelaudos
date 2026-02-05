"use client";

import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "./Badge";

interface PageHeaderProps {
  title: string;
  description?: string;
  icon?: LucideIcon;
  badge?: string;
  children?: React.ReactNode;
  className?: string;
}

export function PageHeader({
  title,
  description,
  icon: Icon,
  badge,
  children,
  className,
}: PageHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn("mb-8", className)}
    >
      <div className="flex items-start gap-4 mb-4">
        {Icon && (
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0">
            <Icon className="w-7 h-7 text-white" />
          </div>
        )}
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl md:text-4xl font-bold text-text">
              {title}
            </h1>
            {badge && <Badge variant="primary">{badge}</Badge>}
          </div>
          {description && (
            <p className="text-lg text-muted max-w-3xl">{description}</p>
          )}
        </div>
      </div>
      {children}
    </motion.div>
  );
}
