"use client";

import { useEffect, useRef, useState } from "react";
import { skills } from "../data/portfolio";

type RevealDirection = "up" | "left" | "right";

export default function Skills() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      {
        threshold: 0.22,
        rootMargin: "0px 0px -12% 0px",
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const motionBase =
    "transition-all duration-[950ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform";

  const reveal = (from: RevealDirection = "up") => {
    const hidden =
      from === "left"
        ? "-translate-x-8 translate-y-3"
        : from === "right"
          ? "translate-x-8 translate-y-3"
          : "translate-y-8";

    return [
      motionBase,
      isVisible
        ? "translate-x-0 translate-y-0 opacity-100 blur-0"
        : `${hidden} opacity-0 blur-sm`,
    ].join(" ");
  };

  const delay = (ms: number) => ({
    transitionDelay: `${ms}ms`,
  });

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative overflow-hidden border-t border-[#20171a]/10 px-5 py-28 md:px-8"
      style={{
        background:
          "radial-gradient(circle at 12% 18%, rgba(255,255,255,0.42), transparent 30%), radial-gradient(circle at 86% 14%, rgba(231,143,173,0.16), transparent 34%), #e8ded1",
      }}
    >
      <div className="pointer-events-none absolute left-6 top-20 text-[7rem] font-black leading-none tracking-[-0.08em] text-white/20 md:text-[15rem]">
        TOOLS
      </div>

      <div className="pointer-events-none absolute bottom-16 right-6 text-[7rem] font-black leading-none tracking-[-0.08em] text-white/20 md:text-[13rem]">
        SKILLS
      </div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="absolute left-[8%] top-[24%] text-6xl font-black text-[#20171a]/[0.045] md:text-8xl">
          ♬
        </span>
        <span className="absolute right-[12%] top-[18%] text-5xl font-black text-[#20171a]/[0.04] md:text-7xl">
          ♪
        </span>
        <span className="absolute bottom-[18%] left-[18%] text-5xl font-black text-[#20171a]/[0.04] md:text-7xl">
          ♫
        </span>
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 flex items-center justify-between gap-6">
          <p
            className={[
              "text-sm font-black uppercase tracking-[0.42em] text-[#20171a]",
              reveal("left"),
            ].join(" ")}
            style={delay(0)}
          >
            [ Skills ]
          </p>

          <div
            className={[
              "hidden h-px flex-1 bg-[#20171a]/20 md:block",
              reveal("up"),
            ].join(" ")}
            style={delay(80)}
          />

          <p
            className={[
              "hidden text-sm font-bold uppercase tracking-[0.3em] text-[#20171a]/60 md:block",
              reveal("right"),
            ].join(" ")}
            style={delay(120)}
          >
            Tools · Communication · Flow
          </p>
        </div>

        <div
          className={[
            "relative overflow-hidden rounded-[2rem] border border-[#20171a]/10 bg-[#f7f1e8]/90 p-5 shadow-[0_26px_70px_rgba(32,23,26,0.12)] md:p-8",
            reveal("up"),
          ].join(" ")}
          style={delay(140)}
        >
          <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
            <div
              className={[
                "relative min-h-[34rem] overflow-hidden rounded-[1.5rem] bg-[#20171a] p-6 text-[#fff8ef] shadow-[0_24px_70px_rgba(32,23,26,0.18)] md:min-h-[39rem] md:p-8",
                reveal("left"),
              ].join(" ")}
              style={delay(260)}
            >
              <p className="text-xs font-black uppercase tracking-[0.34em] text-white/55">
                Skill System
              </p>

              <h2 className="mt-8 max-w-4xl text-6xl font-black uppercase leading-[0.86] tracking-[-0.08em] text-[#fff8ef] md:text-8xl">
                Skills for clear campaign execution.
              </h2>

              <p className="mt-8 max-w-xl text-base font-semibold leading-7 text-white/68 md:text-lg md:leading-8">
                A focused skill set for account work, reporting, research,
                coordination, and team communication.
              </p>

              <div className="mt-10 grid gap-3 text-sm font-bold text-white/70">
                <p>01 · Campaign operations</p>
                <p>02 · Reporting and research</p>
                <p>03 · Client-facing communication</p>
                <p>04 · Team coordination</p>
              </div>

              <p className="absolute bottom-8 right-8 rotate-[-4deg] text-7xl font-black italic leading-none tracking-[-0.08em] text-[#e78fad] md:text-[8rem]">
                useful
              </p>

              <div className="absolute bottom-8 left-8 right-8 h-px bg-white/15" />
            </div>

            <div className="grid gap-6">
              <div
                className={[
                  "relative overflow-hidden rounded-[1.5rem] border border-[#20171a]/10 bg-[#f7f1e8]/85 p-6 shadow-[0_18px_45px_rgba(32,23,26,0.08)] md:p-8",
                  reveal("right"),
                ].join(" ")}
                style={delay(340)}
              >
                <p className="text-xs font-black uppercase tracking-[0.34em] text-[#20171a]/55">
                  Capability Direction
                </p>

                <h3 className="mt-6 max-w-3xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.075em] text-[#20171a] md:text-7xl">
                  Tools are only useful when they make work clearer.
                </h3>

                <p className="mt-7 max-w-2xl text-base font-semibold leading-7 text-[#6b5d58] md:text-lg md:leading-8">
                  The point is not listing every software humanity has invented.
                  The point is showing how Maddie can support campaign flow,
                  client updates, and execution clarity.
                </p>

                <p className="absolute bottom-5 right-6 rotate-[-4deg] text-5xl font-black italic tracking-[-0.08em] text-[#e78fad]/50">
                  flow
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <SkillColumn
                  title="Technical Skills"
                  subtitle="Tools and methods for campaign operations, reporting, research, and account execution."
                  icon="technical"
                  items={skills.technical}
                  reveal={reveal}
                  delayStyle={delay}
                  baseDelay={460}
                />

                <SkillColumn
                  title="Soft Skills"
                  subtitle="Working habits for communication, coordination, adaptability, and client-facing discipline."
                  icon="soft"
                  items={skills.soft}
                  reveal={reveal}
                  delayStyle={delay}
                  baseDelay={560}
                />
              </div>
            </div>
          </div>
        </div>

        <p
          className={[
            "mx-auto mt-8 max-w-3xl text-center text-xs font-bold uppercase tracking-[0.36em] text-[#20171a]/45",
            reveal("up"),
          ].join(" ")}
          style={delay(860)}
        >
          skill lists are better when they look intentional, shocking discovery.
        </p>
      </div>
    </section>
  );
}

function SkillColumn({
  title,
  subtitle,
  icon,
  items,
  reveal,
  delayStyle,
  baseDelay,
}: {
  title: string;
  subtitle: string;
  icon: "technical" | "soft";
  items: string[];
  reveal: (from?: RevealDirection) => string;
  delayStyle: (ms: number) => { transitionDelay: string };
  baseDelay: number;
}) {
  return (
    <article
      className={[
        "group relative min-h-[26rem] overflow-hidden rounded-[1.5rem] border border-[#20171a]/10 bg-[#f7f1e8]/85 p-6 shadow-[0_18px_45px_rgba(32,23,26,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(32,23,26,0.13)]",
        reveal("up"),
      ].join(" ")}
      style={delayStyle(baseDelay)}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#20171a] text-[#fff8ef] shadow-[0_14px_35px_rgba(32,23,26,0.18)] transition duration-300 group-hover:rotate-[-3deg] group-hover:scale-105">
          {icon === "technical" ? (
            <svg
              className="h-7 w-7"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M4 19V5" />
              <path d="M8 19V9" />
              <path d="M12 19V3" />
              <path d="M16 19v-7" />
              <path d="M20 19V7" />
            </svg>
          ) : (
            <svg
              className="h-7 w-7"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 21s-7-4.6-9.3-9.2C.7 7.8 3.2 4 7.2 4c2.1 0 3.7 1.1 4.8 2.7C13.1 5.1 14.7 4 16.8 4c4 0 6.5 3.8 4.5 7.8C19 16.4 12 21 12 21Z" />
            </svg>
          )}
        </div>

        <span className="rounded-full border border-[#20171a]/15 bg-[#f7f1e8]/90 px-3 py-1 text-xs font-black tracking-[0.18em] text-[#20171a]/70">
          {icon === "technical" ? "01" : "02"}
        </span>
      </div>

      <p className="mt-8 text-xs font-black uppercase tracking-[0.28em] text-[#20171a]/55">
        {icon === "technical" ? "Tool Stack" : "Working Style"}
      </p>

      <h3 className="mt-4 text-4xl font-black uppercase leading-[0.92] tracking-[-0.065em] text-[#20171a]">
        {title}
      </h3>

      <p className="mt-5 text-sm font-semibold leading-6 text-[#6b5d58]">
        {subtitle}
      </p>

      <div className="mt-7 flex flex-wrap gap-3">
        {items.map((skill, index) => (
          <span
            key={skill}
            className={[
              "rounded-full border border-[#20171a]/15 bg-[#fff8ef]/70 px-4 py-2 text-sm font-bold text-[#20171a]/72 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#20171a] hover:text-[#fff8ef]",
              reveal("up"),
            ].join(" ")}
            style={delayStyle(baseDelay + 160 + index * 45)}
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="absolute bottom-5 left-6 right-6 h-px bg-[#20171a]/15" />

      <p className="pointer-events-none absolute bottom-7 right-6 rotate-[-4deg] text-5xl font-black italic tracking-[-0.08em] text-[#e78fad]/45">
        {icon === "technical" ? "tools" : "soft"}
      </p>
    </article>
  );
}