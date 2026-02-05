"use client";

import { motion } from "framer-motion";
import { type LucideIcon, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineItem {
  id: string;
  title: string;
  description: string;
  icon?: LucideIcon;
  status?: "completed" | "current" | "upcoming";
  date?: string;
  items?: string[];
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
  orientation?: "vertical" | "horizontal";
}

export function Timeline({
  items,
  className,
  orientation = "vertical",
}: TimelineProps) {
  if (orientation === "horizontal") {
    return (
      <div className={cn("overflow-x-auto pb-4", className)}>
        <div className="flex gap-8 min-w-max">
          {items.map((item, index) => {
            const Icon = item.icon;
            const isCompleted = item.status === "completed";
            const isCurrent = item.status === "current";

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center w-64"
              >
                {/* Icon */}
                <div
                  className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center mb-4",
                    isCompleted && "bg-success text-white",
                    isCurrent && "bg-primary text-white",
                    !isCompleted && !isCurrent && "bg-surface border-2 border-border text-muted"
                  )}
                >
                  {isCompleted ? (
                    <Check className="w-6 h-6" />
                  ) : Icon ? (
                    <Icon className="w-6 h-6" />
                  ) : (
                    <span className="text-lg font-bold">{index + 1}</span>
                  )}
                </div>

                {/* Content */}
                <div className="space-y-2">
                  {item.date && (
                    <span className="text-xs text-primary font-medium">
                      {item.date}
                    </span>
                  )}
                  <h3 className="font-semibold text-text">{item.title}</h3>
                  <p className="text-sm text-muted">{item.description}</p>
                </div>

                {/* Connector line */}
                {index < items.length - 1 && (
                  <div
                    className={cn(
                      "absolute top-6 left-full w-full h-0.5 -ml-8",
                      isCompleted ? "bg-success" : "bg-border"
                    )}
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className={cn("relative", className)}>
      {/* Vertical line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />

      <div className="space-y-8">
        {items.map((item, index) => {
          const Icon = item.icon;
          const isCompleted = item.status === "completed";
          const isCurrent = item.status === "current";

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative flex gap-6"
            >
              {/* Icon */}
              <div
                className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center shrink-0 z-10",
                  isCompleted && "bg-success text-white",
                  isCurrent && "bg-primary text-white ring-4 ring-primary/20",
                  !isCompleted && !isCurrent && "bg-surface border-2 border-border text-muted"
                )}
              >
                {isCompleted ? (
                  <Check className="w-6 h-6" />
                ) : Icon ? (
                  <Icon className="w-6 h-6" />
                ) : (
                  <span className="text-lg font-bold">{index + 1}</span>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 bg-surface rounded-lg border border-border p-6">
                <div className="flex items-center gap-3 mb-2">
                  {item.date && (
                    <span className="text-xs text-primary font-medium px-2 py-1 bg-primary/10 rounded">
                      {item.date}
                    </span>
                  )}
                  {isCurrent && (
                    <span className="text-xs text-accent font-medium px-2 py-1 bg-accent/10 rounded">
                      Em andamento
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-text mb-2">
                  {item.title}
                </h3>
                <p className="text-text-secondary mb-4">{item.description}</p>

                {item.items && item.items.length > 0 && (
                  <ul className="space-y-2">
                    {item.items.map((listItem, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        {listItem}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
