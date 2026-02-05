"use client";

import { AlertCircle, CheckCircle2, Info, AlertTriangle, X } from "lucide-react";
import { cn } from "@/lib/utils";

type AlertVariant = "info" | "success" | "warning" | "error";

interface AlertProps {
  variant?: AlertVariant;
  title?: string;
  children: React.ReactNode;
  onClose?: () => void;
  className?: string;
}

const variantStyles: Record<AlertVariant, { bg: string; border: string; icon: typeof Info }> = {
  info: {
    bg: "bg-primary/10",
    border: "border-primary/30",
    icon: Info,
  },
  success: {
    bg: "bg-success/10",
    border: "border-success/30",
    icon: CheckCircle2,
  },
  warning: {
    bg: "bg-warning/10",
    border: "border-warning/30",
    icon: AlertTriangle,
  },
  error: {
    bg: "bg-error/10",
    border: "border-error/30",
    icon: AlertCircle,
  },
};

const iconColors: Record<AlertVariant, string> = {
  info: "text-primary",
  success: "text-success",
  warning: "text-warning",
  error: "text-error",
};

export function Alert({
  variant = "info",
  title,
  children,
  onClose,
  className,
}: AlertProps) {
  const { bg, border, icon: Icon } = variantStyles[variant];

  return (
    <div
      className={cn(
        "flex gap-3 p-4 rounded-lg border",
        bg,
        border,
        className
      )}
    >
      <Icon className={cn("w-5 h-5 shrink-0 mt-0.5", iconColors[variant])} />
      <div className="flex-1">
        {title && (
          <h4 className="font-medium text-text mb-1">{title}</h4>
        )}
        <div className="text-sm text-text-secondary">{children}</div>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="text-muted hover:text-text transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
