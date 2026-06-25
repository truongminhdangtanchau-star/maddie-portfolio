"use client";

import { useEffect, useRef, useState } from "react";
import { experiences } from "../data/portfolio";

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  description: string;
  bullets?: string[];
};

export default function Experience() {
  const experienceList = experiences as ExperienceItem[];

  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
        rootMargin: "-8% 0px -16% 0px",
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const motionBase =
    "transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform";

  const reveal = (from: "up" | "left" | "right" = "up") => {
    const hidden =
      from === "left"
        ? "-translate-x-16 translate-y-4"
        : from === "right"
          ? "translate-x-16 translate-y-4"
          : "translate-y-12";

    return [
      motionBase,
      isVisible
        ? "translate-x-0 translate-y-0 scale-100 opacity-100 blur-0"
        : `${hidden} scale-[0.98] opacity-0 blur-sm`,
    ].join(" ");
  };

  const delay = (ms: number) => ({
    transitionDelay: isVisible ? `${ms}ms` : "0ms",
  });

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative overflow-hidden border-t border-[#7a3a4d]/10 px-5 py-24 md:px-8"
      style={{
        background:
          "radial-gradient(circle at 12% 18%, rgba(255,244,240,0.9), transparent 30%), radial-gradient(circle at 86% 14%, rgba(236,157,181,0.28), transparent 34%), linear-gradient(135deg, #f9e3dc 0%, #f5d2dc 48%, #f8eadf 100%)",
      }}
    >
      <div className="pointer-events-none absolute left-6 top-20 text-[6rem] font-black leading-none tracking-[-0.08em] text-white/24 md:text-[11rem]">
        WORK
      </div>

      <div className="pointer-events-none absolute bottom-10 right-6 text-[5rem] font-black leading-none tracking-[-0.08em] text-white/24 md:text-[9rem]">
        FLOW
      </div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="absolute left-[8%] top-[24%] text-6xl font-black text-[#7a3a4d]/[0.05] md:text-8xl">
          ♫
        </span>
        <span className="absolute right-[12%] top-[18%] text-5xl font-black text-[#7a3a4d]/[0.045] md:text-7xl">
          ♪
        </span>
        <span className="absolute bottom-[18%] left-[18%] text-5xl font-black text-[#7a3a4d]/[0.045] md:text-7xl">
          ♬
        </span>
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between gap-6">
          <p
            className={[
              "text-sm font-black uppercase tracking-[0.42em] text-[#7a3a4d]",
              reveal("left"),
            ].join(" ")}
            style={delay(0)}
          >
            [ Experience ]
          </p>

          <div
            className={[
              "hidden h-px flex-1 bg-[#7a3a4d]/20 md:block",
              reveal("up"),
            ].join(" ")}
            style={delay(90)}
          />

          <p
            className={[
              "hidden text-sm font-bold uppercase tracking-[0.3em] text-[#7a3a4d]/60 md:block",
              reveal("right"),
            ].join(" ")}
            style={delay(140)}
          >
            Clients · Campaigns · Execution
          </p>
        </div>

        <div
          className={[
            "relative overflow-hidden rounded-[2rem] border border-[#b96f86]/25 bg-[#fff4f0]/84 p-4 shadow-[0_24px_70px_rgba(122,58,77,0.14)] backdrop-blur md:p-6",
            reveal("up"),
          ].join(" ")}
          style={delay(160)}
        >
          <div
            className={[
              "mb-5 rounded-[1.5rem] border border-[#b96f86]/25 bg-[#fff8f3]/82 p-6 shadow-[0_18px_45px_rgba(122,58,77,0.08)] md:p-7",
              reveal("up"),
            ].join(" ")}
            style={delay(240)}
          >
            <p
              className={[
                "text-xs font-black uppercase tracking-[0.34em] text-[#9a5268]/70",
                reveal("left"),
              ].join(" ")}
              style={delay(320)}
            >
              Work Experience
            </p>

            <div className="mt-5 grid gap-5 md:grid-cols-[0.9fr_1.1fr] md:items-end">
              <h2
                className={[
                  "max-w-3xl text-4xl font-black uppercase leading-[0.92] tracking-[-0.06em] text-[#2b1720] md:text-5xl lg:text-6xl",
                  reveal("left"),
                ].join(" ")}
                style={delay(390)}
              >
                Built around clients, campaigns, and execution.
              </h2>

              <p
                className={[
                  "max-w-2xl text-sm font-semibold leading-7 text-[#765560] md:text-base md:leading-8",
                  reveal("right"),
                ].join(" ")}
                style={delay(470)}
              >
                My work covers client communication, campaign updates,
                reporting, handover documents, review meetings, and cross-team
                coordination.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            {experienceList.map((item, index) => {
              const from = index % 2 === 0 ? "left" : "right";

              return (
                <article
                  key={`${item.role}-${item.company}`}
                  className={[
                    "group relative overflow-hidden rounded-[1.5rem] border border-[#b96f86]/25 bg-[#fff8f3]/82 p-5 shadow-[0_18px_45px_rgba(122,58,77,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#c95f83]/45 hover:bg-[#fff3f6] md:p-6",
                    reveal(from),
                  ].join(" ")}
                  style={delay(560 + index * 140)}
                >
                  <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[#e991ad]/20 blur-2xl transition duration-300 group-hover:bg-[#e991ad]/30" />

                  <div className="relative grid gap-5 md:grid-cols-[0.34fr_0.66fr]">
                    <div
                      className={[
                        "rounded-[1.2rem] border border-[#b96f86]/20 bg-[#fde5eb]/70 p-4",
                        reveal(index % 2 === 0 ? "left" : "right"),
                      ].join(" ")}
                      style={delay(660 + index * 140)}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span className="rounded-full bg-[#d96f91] px-3 py-1 text-xs font-black tracking-[0.18em] text-white shadow-[0_10px_24px_rgba(217,111,145,0.22)]">
                          0{index + 1}
                        </span>

                        <span className="rounded-full border border-[#b96f86]/25 bg-[#fff8f3]/75 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-[#7a3a4d]">
                          Track
                        </span>
                      </div>

                      <div className="mt-5">
                        <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#9a5268]/65">
                          Period
                        </p>

                        <p className="mt-2 text-sm font-black leading-tight text-[#2b1720]">
                          {item.period}
                        </p>
                      </div>

                      <div className="my-4 h-px bg-[#7a3a4d]/15" />

                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#9a5268]/65">
                          Company
                        </p>

                        <p className="mt-2 text-sm font-black leading-tight text-[#2b1720]">
                          {item.company}
                        </p>
                      </div>
                    </div>

                    <div>
                      <p
                        className={[
                          "text-[10px] font-black uppercase tracking-[0.28em] text-[#9a5268]/65",
                          reveal("right"),
                        ].join(" ")}
                        style={delay(720 + index * 140)}
                      >
                        Role
                      </p>

                      <h3
                        className={[
                          "mt-3 max-w-3xl text-3xl font-black uppercase leading-[0.94] tracking-[-0.055em] text-[#2b1720] md:text-4xl",
                          reveal("right"),
                        ].join(" ")}
                        style={delay(780 + index * 140)}
                      >
                        {item.role}
                      </h3>

                      <p
                        className={[
                          "mt-4 max-w-3xl text-sm font-semibold leading-6 text-[#765560] md:text-base md:leading-7",
                          reveal("right"),
                        ].join(" ")}
                        style={delay(840 + index * 140)}
                      >
                        {item.description}
                      </p>

                      {item.bullets && item.bullets.length > 0 && (
                        <ul className="mt-5 grid gap-2">
                          {item.bullets.slice(0, 2).map((bullet, bulletIndex) => (
                            <li
                              key={bullet}
                              className={[
                                "flex gap-3 rounded-2xl border border-[#b96f86]/18 bg-[#fff4f0]/75 p-3 text-xs font-semibold leading-5 text-[#765560] md:text-sm md:leading-6",
                                reveal("up"),
                              ].join(" ")}
                              style={delay(
                                900 + index * 140 + bulletIndex * 70
                              )}
                            >
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d96f91]" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  <p className="pointer-events-none absolute bottom-4 right-6 rotate-[-4deg] text-4xl font-black italic tracking-[-0.08em] text-[#e991ad]/55">
                    work
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        <p
          className={[
            "mx-auto mt-7 max-w-3xl text-center text-xs font-bold uppercase tracking-[0.36em] text-[#7a3a4d]/45",
            reveal("up"),
          ].join(" ")}
          style={delay(940)}
        >
          useful experience, without the giant layout trying to eat the page.
        </p>
      </div>
    </section>
  );
}