"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  href: string;
  icon?: LucideIcon;
  children?: Omit<NavItem, "children">[];
}

interface SideNavProps {
  items: NavItem[];
  title?: string;
}

// Helper to compute expanded items from path
function getExpandedFromPath(items: NavItem[], pathname: string): string[] {
  const expanded: string[] = [];
  items.forEach((item) => {
    if (item.children?.some((child) => pathname === child.href)) {
      expanded.push(item.href);
    }
  });
  return expanded;
}

export function SideNav({ items, title }: SideNavProps) {
  const pathname = usePathname();
  
  // Compute which items should be auto-expanded based on path
  const autoExpanded = useMemo(
    () => getExpandedFromPath(items, pathname),
    [items, pathname]
  );
  
  // Track manually toggled items separately
  const [manuallyToggled, setManuallyToggled] = useState<Set<string>>(new Set());
  
  // Combine auto-expanded with manual toggles
  const expandedItems = useMemo(() => {
    const result = new Set(autoExpanded);
    manuallyToggled.forEach((href) => {
      if (result.has(href)) {
        result.delete(href);
      } else {
        result.add(href);
      }
    });
    return Array.from(result);
  }, [autoExpanded, manuallyToggled]);

  const toggleExpand = (href: string) => {
    setManuallyToggled((prev) => {
      const next = new Set(prev);
      if (next.has(href)) {
        next.delete(href);
      } else {
        next.add(href);
      }
      return next;
    });
  };

  return (
    <nav className="sticky top-20 w-64 shrink-0 hidden lg:block">
      <div className="bg-surface rounded-xl border border-border p-4">
        {title && (
          <h3 className="text-sm font-semibold text-text mb-4 px-2">
            {title}
          </h3>
        )}
        <ul className="space-y-1">
          {items.map((item) => {
            const isActive = pathname === item.href;
            const isExpanded = expandedItems.includes(item.href);
            const hasActiveChild = item.children?.some(
              (child) => pathname === child.href
            );

            return (
              <li key={item.href}>
                <div className="flex items-center">
                  <Link
                    href={item.href}
                    className={cn(
                      "flex-1 flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors",
                      isActive || hasActiveChild
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-text-secondary hover:text-text hover:bg-surface-hover"
                    )}
                  >
                    {item.icon && <item.icon className="w-4 h-4" />}
                    <span className="truncate">{item.name}</span>
                  </Link>
                  {item.children && (
                    <button
                      onClick={() => toggleExpand(item.href)}
                      className="p-2 text-muted hover:text-text transition-colors"
                    >
                      <ChevronRight
                        className={cn(
                          "w-4 h-4 transition-transform",
                          isExpanded && "rotate-90"
                        )}
                      />
                    </button>
                  )}
                </div>

                {item.children && isExpanded && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="ml-4 mt-1 space-y-1 border-l border-border pl-3"
                  >
                    {item.children.map((child) => {
                      const isChildActive = pathname === child.href;
                      return (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className={cn(
                              "block px-3 py-2 text-sm rounded-lg transition-colors",
                              isChildActive
                                ? "bg-primary/10 text-primary font-medium"
                                : "text-text-secondary hover:text-text hover:bg-surface-hover"
                            )}
                          >
                            {child.name}
                          </Link>
                        </li>
                      );
                    })}
                  </motion.ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
