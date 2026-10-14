import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface RevealTextProps {
  children: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  splitBy?: "words" | "chars";
  threshold?: number;
}

export const RevealText: React.FC<RevealTextProps> = ({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
  splitBy = "words",
  threshold = 0.2,
}) => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const units = splitBy === "words" ? children.split(" ") : children.split("");
    const sep = splitBy === "words" ? " " : "";

    // Build spans
    el.innerHTML = units
      .map(
        (unit) =>
          `<span class="reveal-unit" style="display:inline-block; overflow:hidden; vertical-align:bottom; ${
            splitBy === "words" ? "margin-right:0.25em" : ""
          }">` +
          `<span class="reveal-inner" style="display:inline-block;">${unit === " " ? "&nbsp;" : unit}${sep}</span>` +
          `</span>`
      )
      .join("");

    const inners = el.querySelectorAll(".reveal-inner");

    // Check reduced motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      gsap.set(inners, { y: 0, opacity: 1 });
      return;
    }

    gsap.set(inners, { y: "105%", opacity: 0 });

    const tween = gsap.to(inners, {
      y: "0%",
      opacity: 1,
      duration: 0.75,
      stagger: splitBy === "words" ? 0.08 : 0.04,
      ease: "power3.out",
      delay,
      scrollTrigger: {
        trigger: el,
        start: `top ${(1 - threshold) * 100}%`,
        toggleActions: "play none none none",
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill();
      });
    };
  }, [children, delay, splitBy, threshold]);

  return (
    <Tag
      ref={containerRef as React.RefObject<HTMLHeadingElement & HTMLDivElement & HTMLParagraphElement & HTMLSpanElement>}
      className={className}
    >
      {children}
    </Tag>
  );
};

// Fade + slide up on scroll
interface FadeUpProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
  duration?: number;
  threshold?: number;
}

export const FadeUp: React.FC<FadeUpProps> = ({
  children,
  className = "",
  delay = 0,
  distance = 40,
  duration = 0.7,
  threshold = 0.15,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    gsap.set(el, { y: distance, opacity: 0 });

    const tween = gsap.to(el, {
      y: 0,
      opacity: 1,
      duration,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: `top ${(1 - threshold) * 100}%`,
        toggleActions: "play none none none",
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill();
      });
    };
  }, [delay, distance, duration, threshold]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

// Scale reveal
export const ScaleIn: React.FC<FadeUpProps> = ({
  children,
  className = "",
  delay = 0,
  duration = 0.7,
  threshold = 0.15,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    gsap.set(el, { scale: 0.88, opacity: 0 });

    const tween = gsap.to(el, {
      scale: 1,
      opacity: 1,
      duration,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: `top ${(1 - threshold) * 100}%`,
        toggleActions: "play none none none",
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill();
      });
    };
  }, [delay, duration, threshold]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

// Clip-path reveal (wipe from bottom)
export const ClipReveal: React.FC<FadeUpProps> = ({
  children,
  className = "",
  delay = 0,
  duration = 0.85,
  threshold = 0.15,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    gsap.set(el, { clipPath: "inset(100% 0% 0% 0%)", opacity: 1 });

    const tween = gsap.to(el, {
      clipPath: "inset(0% 0% 0% 0%)",
      duration,
      delay,
      ease: "power4.out",
      scrollTrigger: {
        trigger: el,
        start: `top ${(1 - threshold) * 100}%`,
        toggleActions: "play none none none",
      },
    });

    return () => {
      tween.kill();
    };
  }, [delay, duration, threshold]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};
