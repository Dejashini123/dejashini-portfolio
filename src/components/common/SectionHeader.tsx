import React from "react";
import { Badge } from "./Badge";

interface SectionHeaderProps {
  badge?: string;
  badgeVariant?: "brand" | "peach" | "lavender" | "plum" | "emerald" | "outline" | "subtle";
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  badgeVariant = "brand",
  title,
  subtitle,
  centered = true,
  className = "",
}) => {
  return (
    <div
      className={`mb-12 md:mb-16 ${
        centered ? "text-center max-w-3xl mx-auto" : "max-w-3xl"
      } ${className}`}
    >
      {badge && (
        <div className={`mb-3.5 ${centered ? "flex justify-center" : "flex"}`}>
          <Badge variant={badgeVariant}>{badge}</Badge>
        </div>
      )}
      <h2
        className="text-3xl sm:text-4xl md:text-5xl font-display-serif font-bold tracking-tight mb-4 transition-colors"
        style={{ color: "var(--text-primary)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="text-base sm:text-lg leading-relaxed transition-colors font-normal"
          style={{ color: "var(--text-secondary)" }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
