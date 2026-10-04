import React from "react";
import { Badge } from "./Badge";

interface SectionHeaderProps {
  badge?: string;
  badgeVariant?: "brand" | "cyan" | "purple" | "emerald" | "outline";
  title: string;
  subtitle?: string;
  centered?: boolean;
  theme?: "dark" | "light";
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  badgeVariant = "brand",
  title,
  subtitle,
  centered = true,
  theme = "dark",
  className = "",
}) => {
  return (
    <div
      className={`mb-12 md:mb-16 ${centered ? "text-center max-w-3xl mx-auto" : "max-w-3xl"} ${className}`}
    >
      {badge && (
        <div className={`mb-3 ${centered ? "flex justify-center" : "flex"}`}>
          <Badge variant={badgeVariant}>{badge}</Badge>
        </div>
      )}
      <h2
        className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 ${
          theme === "light" ? "text-slate-900" : "text-white"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base sm:text-lg leading-relaxed ${
            theme === "light" ? "text-slate-600 font-medium" : "text-slate-300"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
