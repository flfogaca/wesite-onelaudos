"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Tab {
  id: string;
  label: string;
  icon?: LucideIcon;
  content: React.ReactNode;
}

interface TabPanelProps {
  tabs: Tab[];
  defaultTab?: string;
  className?: string;
  variant?: "default" | "pills" | "underline";
}

export function TabPanel({
  tabs,
  defaultTab,
  className,
  variant = "default",
}: TabPanelProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  const activeContent = tabs.find((tab) => tab.id === activeTab)?.content;

  return (
    <div className={className}>
      {/* Tab Headers */}
      <div
        className={cn(
          "flex gap-1 mb-6",
          variant === "default" && "bg-surface p-1 rounded-lg",
          variant === "pills" && "gap-2",
          variant === "underline" && "border-b border-border gap-0"
        )}
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "relative flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors",
                variant === "default" && [
                  "rounded-md",
                  isActive
                    ? "bg-primary text-white"
                    : "text-text-secondary hover:text-text",
                ],
                variant === "pills" && [
                  "rounded-full border",
                  isActive
                    ? "bg-primary/10 text-primary border-primary/30"
                    : "text-text-secondary border-border hover:text-text hover:border-text-secondary",
                ],
                variant === "underline" && [
                  "border-b-2 -mb-px",
                  isActive
                    ? "border-primary text-primary"
                    : "border-transparent text-text-secondary hover:text-text hover:border-muted",
                ]
              )}
            >
              {Icon && <Icon className="w-4 h-4" />}
              {tab.label}
              {isActive && variant === "default" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-primary rounded-md -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        {activeContent}
      </motion.div>
    </div>
  );
}
