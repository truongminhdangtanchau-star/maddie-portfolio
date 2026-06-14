"use client";

import { useEffect, useRef, useState } from "react";
import { skills } from "../data/portfolio";

export default function Skills() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.24,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative overflow-hidden border-t border-pink-200/60 bg-[#fff7fb] px-5 py-28 md:px-8"
    >
      <div className="pointer-events-none absolute -left-24 top-20 h-96 w-96 rounded-full bg-pink-200/45 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-fuchsia-200/35 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p
              className={[
                "text-sm font-semibold uppercase tracking-[0.32em] text-[#F72D9A]",
                isVisible ? "readable-reveal" : "opacity-0",
              ].join(" ")}
            >
              [ Skills ]
            </p>

            <div
              className={[
                "mt-8 hidden items-end gap-2 md:flex",
                isVisible ? "readable-reveal [animation-delay:120ms]" : "opacity-0",
              ].join(" ")}
            >
              <span className="skill-bar h-10 w-2 rounded-full bg-pink-300" />
              <span className="skill-bar h-20 w-2 rounded-full bg-rose-300 [animation-delay:120ms]" />
              <span className="skill-bar h-14 w-2 rounded-full bg-fuchsia-300 [animation-delay:240ms]" />
              <span className="skill-bar h-28 w-2 rounded-full bg-pink-500 [animation-delay:360ms]" />
              <span className="skill-bar h-16 w-2 rounded-full bg-rose-300 [animation-delay:480ms]" />
            </div>
          </div>

          <div>
            <h2
              className={[
                "max-w-4xl text-4xl font-black leading-[1.02] tracking-[-0.055em] text-[#24151d] md:text-6xl",
                isVisible ? "headline-wipe" : "opacity-0",
              ].join(" ")}
            >
              Skills for campaign execution, client communication, and creative
              team flow.
            </h2>

            <p
              className={[
                "mt-6 max-w-2xl text-lg font-medium leading-8 text-[#6f4a5d]",
                isVisible ? "readable-reveal [animation-delay:180ms]" : "opacity-0",
              ].join(" ")}
            >
              A focused skill set for account work, reporting, research,
              coordination, and team communication.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <SkillColumn
            title="Technical Skills"
            subtitle="Tools and methods for campaign operations, reporting, research, and account execution."
            icon="technical"
            items={skills.technical}
            isVisible={isVisible}
            delay={300}
          />

          <SkillColumn
            title="Soft Skills"
            subtitle="Working habits for communication, coordination, adaptability, and client-facing discipline."
            icon="soft"
            items={skills.soft}
            isVisible={isVisible}
            delay={460}
          />
        </div>
      </div>
    </section>
  );
}

function SkillColumn({
  title,
  subtitle,
  icon,
  items,
  isVisible,
  delay,
}: {
  title: string;
  subtitle: string;
  icon: "technical" | "soft";
  items: string[];
  isVisible: boolean;
  delay: number;
}) {
  return (
    <article
      className={[
        "skill-card group relative overflow-hidden rounded-[2.25rem] border border-pink-200/80 bg-white/80 p-7 shadow-[0_28px_80px_rgba(219,39,119,0.14)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-pink-300 hover:shadow-[0_36px_110px_rgba(219,39,119,0.22)] md:p-8",
        isVisible ? "skill-card-enter" : "opacity-0",
      ].join(" ")}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-pink-200/50 blur-2xl transition duration-300 group-hover:bg-fuchsia-200/70" />

      <div
        className={[
          "relative mb-8 flex items-start justify-between gap-6",
          isVisible ? "readable-reveal" : "opacity-0",
        ].join(" ")}
        style={{ animationDelay: `${delay + 120}ms` }}
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#24151d] text-pink-100 shadow-[0_14px_35px_rgba(36,21,29,0.18)] transition duration-300 group-hover:scale-105">
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

        <span className="rounded-full border border-pink-200 bg-pink-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#F72D9A]">
          {icon === "technical" ? "Left Track" : "Right Track"}
        </span>
      </div>

      <div className="relative">
        <h3
          className={[
            "text-3xl font-black tracking-[-0.045em] text-[#24151d]",
            isVisible ? "headline-wipe" : "opacity-0",
          ].join(" ")}
          style={{ animationDelay: `${delay + 180}ms` }}
        >
          {title}
        </h3>

        <p
          className={[
            "mt-4 max-w-xl text-base font-medium leading-7 text-[#6f4a5d]",
            isVisible ? "readable-reveal" : "opacity-0",
          ].join(" ")}
          style={{ animationDelay: `${delay + 280}ms` }}
        >
          {subtitle}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {items.map((skill, index) => (
            <span
              key={skill}
              className={[
                "skill-pill rounded-full border border-pink-200 bg-pink-50/85 px-4 py-2 text-sm font-semibold text-[#6f4a5d] transition duration-300 hover:-translate-y-0.5 hover:border-pink-300 hover:bg-pink-100 hover:text-[#F72D9A]",
                isVisible ? "skill-pill-enter" : "opacity-0",
              ].join(" ")}
              style={{ animationDelay: `${delay + 360 + index * 45}ms` }}
            >
              {skill}
            </span>
          ))}
        </div>

        <div
          className={[
            "mt-8 h-1.5 overflow-hidden rounded-full bg-pink-100",
            isVisible ? "readable-reveal" : "opacity-0",
          ].join(" ")}
          style={{ animationDelay: `${delay + 760}ms` }}
        >
          <div className="skill-progress h-full rounded-full bg-gradient-to-r from-pink-400 via-rose-300 to-fuchsia-400" />
        </div>
      </div>
    </article>
  );
}