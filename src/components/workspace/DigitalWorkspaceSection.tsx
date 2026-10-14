import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Terminal, Globe, Brain, Database, Cpu, ArrowDown, Code2, Layers } from "lucide-react";
import { FadeUp, RevealText } from "../common/AnimationComponents";

gsap.registerPlugin(ScrollTrigger);

interface StackNode {
  id: string;
  label: string;
  sublabel: string;
  icon: React.ReactNode;
  color: string;
  bg: string;
  border: string;
}

const stack: StackNode[] = [
  {
    id: "user",
    label: "User / Client",
    sublabel: "Browser / Device",
    icon: <Globe className="w-5 h-5" />,
    color: "#DCA996",
    bg: "rgba(220,169,150,0.08)",
    border: "rgba(220,169,150,0.3)",
  },
  {
    id: "frontend",
    label: "React Frontend",
    sublabel: "Vite · TypeScript · Tailwind",
    icon: <Layers className="w-5 h-5" />,
    color: "#B9A5CF",
    bg: "rgba(185,165,207,0.08)",
    border: "rgba(185,165,207,0.3)",
  },
  {
    id: "api",
    label: "FastAPI Backend",
    sublabel: "REST · WebSockets · JWT",
    icon: <Code2 className="w-5 h-5" />,
    color: "#EFC8B8",
    bg: "rgba(239,200,184,0.08)",
    border: "rgba(239,200,184,0.3)",
  },
  {
    id: "ml",
    label: "AI / ML Engine",
    sublabel: "YOLOv8 · sklearn · CV",
    icon: <Brain className="w-5 h-5" />,
    color: "#DCD2E9",
    bg: "rgba(220,210,233,0.08)",
    border: "rgba(220,210,233,0.3)",
  },
  {
    id: "data",
    label: "Data & Models",
    sublabel: "Datasets · Weights · APIs",
    icon: <Database className="w-5 h-5" />,
    color: "#EFC8B8",
    bg: "rgba(239,200,184,0.08)",
    border: "rgba(239,200,184,0.3)",
  },
  {
    id: "result",
    label: "Result / Output",
    sublabel: "Inference · Reports · UI",
    icon: <Cpu className="w-5 h-5" />,
    color: "#34d399",
    bg: "rgba(52,211,153,0.08)",
    border: "rgba(52,211,153,0.3)",
  },
];

const floatingPanels = [
  {
    icon: <Terminal className="w-4 h-4 text-emerald-400" />,
    title: "Terminal",
    lines: ["$ python train.py --epochs 50", "Epoch 50/50: mAP@50=0.88 ✓", "Model saved → best.pt"],
    border: "rgba(52,211,153,0.25)",
  },
  {
    icon: <Brain className="w-4 h-4 text-[#DCD2E9]" />,
    title: "ML Model",
    lines: ["Model: YOLOv8n-custom", "Classes: 5 | Images: 2000+", "Precision: 89% | Recall: 86%"],
    border: "rgba(220,210,233,0.25)",
  },
  {
    icon: <Code2 className="w-4 h-4 text-[#DCA996]" />,
    title: "API Endpoint",
    lines: ["POST /api/detect", "→ 200 OK (47ms)", "{ detections: [...] }"],
    border: "rgba(220,169,150,0.25)",
  },
];

export const DigitalWorkspaceSection: React.FC = () => {
  const nodesRef = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const nodes = nodesRef.current.filter(Boolean) as HTMLDivElement[];
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || nodes.length === 0) return;

    gsap.set(nodes, { opacity: 0, y: 30, scale: 0.9 });

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 70%",
      onEnter: () => {
        gsap.to(nodes, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.12,
          ease: "power3.out",
        });
      },
    });

    return () => ScrollTrigger.getAll().forEach((st) => st.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      id="workspace"
      className="py-24 relative overflow-hidden"
      style={{
        backgroundColor: "var(--bg-primary)",
        color: "var(--text-primary)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeUp className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-widest uppercase mb-4 editorial-tag">
            <Terminal className="w-3 h-3" />
            My Digital Workspace
          </span>
          <RevealText
            as="h2"
            className="text-3xl sm:text-4xl font-display-serif font-bold tracking-tight leading-tight mt-3"
          >
            How I Build End-to-End Systems
          </RevealText>
          <p className="text-sm mt-3 max-w-xl mx-auto leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            From user interface to AI inference — I architect and build every layer of the stack.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT: Stack flow diagram */}
          <div className="flex flex-col items-center gap-0">
            {stack.map((node, i) => (
              <React.Fragment key={node.id}>
                <div
                  ref={(el) => { nodesRef.current[i] = el; }}
                  className="w-full max-w-sm rounded-2xl p-4 border flex items-center gap-4 transition-all duration-300 hover:scale-[1.02] group"
                  style={{
                    background: node.bg,
                    borderColor: node.border,
                    boxShadow: `0 0 0 0 ${node.color}20`,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 20px -5px ${node.color}40`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 0 0 ${node.color}20`;
                  }}
                >
                  <div
                    className="p-2.5 rounded-xl flex-shrink-0"
                    style={{ background: node.bg, border: `1px solid ${node.border}`, color: node.color }}
                  >
                    {node.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>{node.label}</div>
                    <div className="text-[11px] font-mono truncate" style={{ color: "var(--text-muted)" }}>{node.sublabel}</div>
                  </div>
                  <div
                    className="ml-auto text-[10px] font-mono px-2 py-0.5 rounded-full border opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: node.color, borderColor: node.border }}
                  >
                    ACTIVE
                  </div>
                </div>

                {/* Connector arrow */}
                {i < stack.length - 1 && (
                  <div className="flex flex-col items-center my-0.5 py-1">
                    <div className="w-[1px] h-4 bg-gradient-to-b from-[#DCA996]/50 to-[#B9A5CF]/50" />
                    <ArrowDown className="w-3 h-3 text-[#DCA996]/60" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* RIGHT: Floating terminal panels */}
          <div className="space-y-5">
            <FadeUp delay={0.1}>
              <div className="text-[11px] font-mono mb-4 uppercase tracking-widest text-[#DCA996]">
                // Active Environment
              </div>
            </FadeUp>
            {floatingPanels.map((panel, i) => (
              <FadeUp key={i} delay={0.15 + i * 0.1}>
                <div
                  className="rounded-2xl overflow-hidden border paper-surface"
                  style={{ borderColor: panel.border }}
                >
                  <div
                    className="flex items-center gap-2 px-4 py-2.5 border-b"
                    style={{
                      backgroundColor: "var(--bg-tertiary)",
                      borderColor: panel.border,
                    }}
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E57373]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFD54F]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#81C784]" />
                    <span className="flex items-center gap-1.5 ml-2">
                      {panel.icon}
                      <span className="text-[11px] font-mono" style={{ color: "var(--text-muted)" }}>{panel.title}</span>
                    </span>
                  </div>
                  <div className="p-4 font-mono text-sm" style={{ backgroundColor: "var(--bg-card)" }}>
                    {panel.lines.map((line, j) => (
                      <div key={j} className="text-[12px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                        {line.startsWith("$") ? (
                          <span>
                            <span className="text-[#DCA996]">$</span>
                            <span style={{ color: "var(--text-primary)" }}>{line.substring(1)}</span>
                          </span>
                        ) : line.startsWith("→") ? (
                          <span>
                            <span className="text-emerald-500">→</span>
                            <span style={{ color: "var(--text-primary)" }}>{line.substring(1)}</span>
                          </span>
                        ) : (
                          <span style={{ color: "var(--text-muted)" }}>{line}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>
            ))}

            {/* ECE note */}
            <FadeUp delay={0.45}>
              <div
                className="rounded-2xl p-4 border paper-surface"
                style={{ borderColor: "var(--border-subtle)" }}
              >
                <div className="text-[11px] font-mono text-[#DCA996] mb-1">// ECE Foundation</div>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  Electronics & Communication Engineering background gives me a unique edge —
                  I understand both software systems and hardware interfaces including IoT, embedded systems, and signal processing.
                </p>
                <div className="flex gap-2 mt-3 flex-wrap">
                  {["Embedded C", "IoT Sensors", "Signal Processing", "Circuit Design"].map((t) => (
                    <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded editorial-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
};
