import React, { useRef, useCallback } from "react";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  onClick?: (e: React.MouseEvent) => void;
  href?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  "data-cursor"?: string;
  download?: string;
  "aria-label"?: string;
  style?: React.CSSProperties;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = "",
  strength = 0.35,
  onClick,
  href,
  target,
  rel,
  type = "button",
  disabled,
  download,
  "aria-label": ariaLabel,
  style = {},
}) => {
  const ref = useRef<HTMLElement>(null);
  const isMobile = typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches;

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (isMobile) return;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) * strength;
      const dy = (e.clientY - cy) * strength;
      el.style.transform = `translate(${dx}px, ${dy}px)`;
    },
    [isMobile, strength]
  );

  const onMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0px, 0px)";
    el.style.transition = "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)";
    setTimeout(() => {
      if (el) el.style.transition = "";
    }, 500);
  }, []);

  const commonProps = {
    ref: ref as React.RefObject<HTMLAnchorElement & HTMLButtonElement>,
    className,
    onMouseMove,
    onMouseLeave,
    "data-cursor": "button",
    "aria-label": ariaLabel,
    style: { willChange: "transform", transition: "transform 0.1s ease", ...style },
  };

  if (href) {
    return (
      <a
        {...(commonProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        href={href}
        target={target}
        rel={rel}
        download={download}
        onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      {...(commonProps as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      type={type}
      disabled={disabled}
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
    >
      {children}
    </button>
  );
};
