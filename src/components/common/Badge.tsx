import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "brand" | "peach" | "lavender" | "plum" | "emerald" | "outline" | "subtle";
  className?: string;
  dot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "brand",
  className = "",
  dot = false,
}) => {
  const variantStyles = {
    brand:
      "bg-[#EFC8B8]/20 text-[#292522] dark:text-[#FAF7F2] border border-[#DCA996]/40 shadow-sm",
    peach:
      "bg-[#EFC8B8]/25 text-[#292522] dark:text-[#FAF7F2] border border-[#DCA996]/50 shadow-sm",
    lavender:
      "bg-[#DCD2E9]/30 text-[#342633] dark:text-[#DCD2E9] border border-[#B9A5CF]/40 shadow-sm",
    plum:
      "bg-[#342633] text-[#FAF7F2] border border-[#DCA996]/30 shadow-sm",
    emerald:
      "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30",
    outline:
      "border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 bg-white/40 dark:bg-stone-900/40",
    subtle:
      "bg-stone-200/50 dark:bg-white/10 text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-white/10",
  };

  return (
    <span
      className={`inline-flex items-center gap-2 px-3.5 py-1 text-xs font-mono font-semibold tracking-wider uppercase rounded-full backdrop-blur-sm transition-colors ${variantStyles[variant]} ${className}`}
    >
      {dot && (
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
      )}
      {children}
    </span>
  );
};
