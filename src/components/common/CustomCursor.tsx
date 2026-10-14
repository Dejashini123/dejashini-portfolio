import React, { useEffect, useRef, useState } from "react";

type CursorState = "default" | "project" | "link" | "button" | "explore";

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const [cursorState, setCursorState] = useState<CursorState>("default");
  const [isVisible, setIsVisible] = useState(false);
  const pos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafId = useRef<number>(0);

  useEffect(() => {
    // Only enable on desktop with fine pointer
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const onLeave = () => setIsVisible(false);
    const onEnter = () => setIsVisible(true);

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    // Detect element under cursor
    const checkTarget = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      const closest = el.closest("[data-cursor]") as HTMLElement | null;
      if (closest) {
        setCursorState(closest.dataset.cursor as CursorState);
      } else if (el.closest("a") || el.closest("button") || el.closest("input") || el.closest("textarea")) {
        setCursorState("link");
      } else if (el.closest("img")) {
        setCursorState("explore");
      } else {
        setCursorState("default");
      }
    };
    document.addEventListener("mouseover", checkTarget);

    // Smooth ring follow
    const animate = () => {
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.14;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.14;

      if (dot) {
        dot.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }
      if (ring) {
        ring.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px)`;
      }
      rafId.current = requestAnimationFrame(animate);
    };
    rafId.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseover", checkTarget);
      cancelAnimationFrame(rafId.current);
    };
  }, [isVisible]);

  // Don't render on touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  const isExpanded = cursorState === "project" || cursorState === "explore";
  const label = cursorState === "project" ? "VIEW" : cursorState === "explore" ? "INSPECT" : "";

  return (
    <>
      {/* Central Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full transition-opacity duration-200 ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${
          isExpanded
            ? "w-2 h-2 bg-[#DCA996]"
            : cursorState === "link" || cursorState === "button"
            ? "w-1.5 h-1.5 bg-[#B9A5CF]"
            : "w-2 h-2 bg-[#DCA996]"
        }`}
        style={{ willChange: "transform" }}
      />

      {/* Trailing Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-300 flex items-center justify-center ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${
          isExpanded
            ? "w-20 h-20 border-[#DCA996]/80 bg-[#342633]/30 backdrop-blur-[2px]"
            : cursorState === "link" || cursorState === "button"
            ? "w-8 h-8 border-[#B9A5CF] scale-110"
            : "w-9 h-9 border-[#DCA996]/40"
        }`}
        style={{ willChange: "transform" }}
      >
        <div ref={labelRef}>
          {isExpanded && (
            <span className="text-[9.5px] font-mono font-bold text-[#FAF7F2] tracking-widest">
              {label}
            </span>
          )}
        </div>
      </div>
    </>
  );
};
