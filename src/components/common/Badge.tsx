import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "brand" | "cyan" | "purple" | "emerald" | "outline" | "subtle";
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
      "bg-[#5865F2]/15 text-[#67E8F9] border border-[#5865F2]/30 shadow-[0_0_15px_-3px_rgba(88,101,242,0.3)]",
    cyan: "bg-[#67E8F9]/15 text-[#67E8F9] border border-[#67E8F9]/30",
    purple: "bg-[#7548E8]/15 text-[#C4B5FD] border border-[#7548E8]/30",
    emerald: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",
    outline: "border border-slate-700 text-slate-300 bg-slate-900/40",
    subtle: "bg-white/10 text-slate-200 border border-white/10",
  };

  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full backdrop-blur-sm ${variantStyles[variant]} ${className}`}
    >
      {dot && (
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
      )}
      {children}
    </span>
  );
};
