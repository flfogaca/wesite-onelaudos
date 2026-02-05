"use client";

import { motion } from "framer-motion";
import { type LucideIcon, ArrowRight, ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FlowStep {
  id: string;
  title: string;
  description?: string;
  icon?: LucideIcon;
  color?: "primary" | "accent" | "success" | "warning" | "error";
}

interface FlowDiagramProps {
  steps: FlowStep[];
  orientation?: "horizontal" | "vertical";
  className?: string;
}

const colorStyles = {
  primary: "bg-primary/20 border-primary/30 text-primary",
  accent: "bg-accent/20 border-accent/30 text-accent",
  success: "bg-success/20 border-success/30 text-success",
  warning: "bg-warning/20 border-warning/30 text-warning",
  error: "bg-error/20 border-error/30 text-error",
};

const iconBgStyles = {
  primary: "bg-primary",
  accent: "bg-accent",
  success: "bg-success",
  warning: "bg-warning",
  error: "bg-error",
};

export function FlowDiagram({
  steps,
  orientation = "horizontal",
  className,
}: FlowDiagramProps) {
  const Arrow = orientation === "horizontal" ? ArrowRight : ArrowDown;

  return (
    <div
      className={cn(
        "flex gap-4",
        orientation === "vertical" && "flex-col",
        orientation === "horizontal" && "flex-wrap items-center justify-center",
        className
      )}
    >
      {steps.map((step, index) => {
        const Icon = step.icon;
        const color = step.color || "primary";

        return (
          <div
            key={step.id}
            className={cn(
              "flex items-center gap-4",
              orientation === "vertical" && "flex-col"
            )}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "flex items-center gap-4 p-4 rounded-xl border-2",
                colorStyles[color],
                orientation === "horizontal" && "min-w-[200px]",
                orientation === "vertical" && "w-full max-w-md"
              )}
            >
              {Icon && (
                <div
                  className={cn(
                    "w-10 h-10 rounded-lg flex items-center justify-center shrink-0",
                    iconBgStyles[color]
                  )}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
              )}
              <div>
                <h4 className="font-semibold text-text">{step.title}</h4>
                {step.description && (
                  <p className="text-sm text-muted mt-1">{step.description}</p>
                )}
              </div>
            </motion.div>

            {index < steps.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.05 }}
                className="text-muted"
              >
                <Arrow className="w-6 h-6" />
              </motion.div>
            )}
          </div>
        );
      })}
    </div>
  );
}
