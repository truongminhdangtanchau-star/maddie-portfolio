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

  const reveal = (from: "up" | "left" | "right" = "up") => {
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
      id="experience"
      className="relative overflow-hidden border-t border-[#20171a]/10 px-5 py-28 md:px-8"
      style={{
        background:
          "radial-gradient(circle at 12% 18%, rgba(255,255,255,0.42), transparent 30%), radial-gradient(circle at 86% 14%, rgba(231,143,173,0.16), transparent 34%), #e8ded1",
      }}
    >
      <div className="pointer-events-none absolute left-6 top-20 text-[7rem] font-black leading-none tracking-[-0.08em] text-white/20 md:text-[14rem]">
        WORK
      </div>

      <div className="pointer-events-none absolute bottom-16 right-6 text-[7rem] font-black leading-none tracking-[-0.08em] text-white/20 md:text-[13rem]">
        FLOW
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
            [ Experience ]
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
            Clients · Campaigns · Execution
          </p>
        </div>

        <div
          className={[
            "relative overflow-hidden rounded-[2rem] border border-[#20171a]/10 bg-[#f7f1e8]/90 p-5 shadow-[0_26px_70px_rgba(32,23,26,0.12)] md:p-8",
            reveal("up"),
          ].join(" ")}
          style={delay(140)}
        >
          <div className="grid gap-6 md:grid-cols-[0.82fr_1.18fr]">
            <div
              className={[
                "relative min-h-[34rem] overflow-hidden rounded-[1.5rem] bg-[#20171a] p-6 text-[#fff8ef] shadow-[0_24px_70px_rgba(32,23,26,0.18)] md:min-h-[42rem] md:p-8",
                reveal("left"),
              ].join(" ")}
              style={delay(260)}
            >
              <p className="text-xs font-black uppercase tracking-[0.34em] text-white/55">
                Work Experience
              </p>

              <h2 className="mt-8 max-w-4xl text-6xl font-black uppercase leading-[0.86] tracking-[-0.08em] text-[#fff8ef] md:text-8xl">
                Built around clients, campaigns, and execution.
              </h2>

              <p className="mt-8 max-w-xl text-base font-semibold leading-7 text-white/68 md:text-lg md:leading-8">
                My work covers client communication, campaign updates,
                reporting, handover documents, review meetings, and cross-team
                coordination.
              </p>

              <div className="mt-10 grid gap-3 text-sm font-bold text-white/70">
                <p>01 · Account management</p>
                <p>02 · Campaign coordination</p>
                <p>03 · Reporting and handover</p>
                <p>04 · Cross-team communication</p>
              </div>

              <p className="absolute bottom-8 right-8 rotate-[-4deg] text-7xl font-black italic leading-none tracking-[-0.08em] text-[#e78fad] md:text-[8rem]">
                track
              </p>

              <div className="absolute bottom-8 left-8 right-8 h-px bg-white/15" />
            </div>

            <div className="grid gap-5">
              {experienceList.map((item, index) => (
                <article
                  key={`${item.role}-${item.company}`}
                  className={[
                    "group relative overflow-hidden rounded-[1.5rem] border border-[#20171a]/10 bg-[#f7f1e8]/85 p-6 shadow-[0_18px_45px_rgba(32,23,26,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(32,23,26,0.13)] md:p-7",
                    reveal("right"),
                  ].join(" ")}
                  style={delay(340 + index * 140)}
                >
                  <div className="flex flex-col gap-6 md:grid md:grid-cols-[0.36fr_0.64fr]">
                    <div>
                      <div className="flex items-center justify-between gap-4">
                        <span className="rounded-full border border-[#20171a]/15 bg-[#20171a] px-4 py-2 text-xs font-black tracking-[0.22em] text-[#fff8ef]">
                          0{index + 1}
                        </span>

                        <span className="rounded-full border border-[#20171a]/15 bg-[#f7f1e8]/90 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#20171a]/65">
                          Track
                        </span>
                      </div>

                      <p className="mt-8 text-xs font-black uppercase tracking-[0.28em] text-[#20171a]/45">
                        Period
                      </p>

                      <p className="mt-3 text-lg font-black leading-tight text-[#20171a]">
                        {item.period}
                      </p>

                      <div className="mt-6 h-px bg-[#20171a]/15" />

                      <p className="mt-6 text-xs font-black uppercase tracking-[0.28em] text-[#20171a]/45">
                        Company
                      </p>

                      <p className="mt-3 text-lg font-black leading-tight text-[#20171a]">
                        {item.company}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.28em] text-[#20171a]/45">
                        Role
                      </p>

                      <h3 className="mt-4 max-w-3xl text-4xl font-black uppercase leading-[0.92] tracking-[-0.065em] text-[#20171a] md:text-5xl">
                        {item.role}
                      </h3>

                      <p className="mt-6 max-w-3xl text-base font-semibold leading-7 text-[#6b5d58] md:text-lg md:leading-8">
                        {item.description}
                      </p>

                      {item.bullets && item.bullets.length > 0 && (
                        <ul className="mt-7 grid gap-3">
                          {item.bullets.slice(0, 3).map((bullet, bulletIndex) => (
                            <li
                              key={bullet}
                              className={[
                                "flex gap-3 rounded-2xl border border-[#20171a]/10 bg-[#fff8ef]/60 p-4 text-sm font-semibold leading-6 text-[#6b5d58]",
                                reveal("up"),
                              ].join(" ")}
                              style={delay(
                                520 + index * 140 + bulletIndex * 90
                              )}
                            >
                              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#20171a]" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  <p className="pointer-events-none absolute bottom-4 right-6 rotate-[-4deg] text-5xl font-black italic tracking-[-0.08em] text-[#e78fad]/35">
                    work
                  </p>
                </article>
              ))}

              <div
                className={[
                  "relative overflow-hidden rounded-[1.5rem] border border-[#20171a]/10 bg-[#f7f1e8]/85 p-6 shadow-[0_18px_45px_rgba(32,23,26,0.08)]",
                  reveal("right"),
                ].join(" ")}
                style={delay(680)}
              >
                <p className="text-xs font-black uppercase tracking-[0.28em] text-[#20171a]/55">
                  Work Style
                </p>

                <h3 className="mt-4 text-4xl font-black uppercase leading-[0.9] tracking-[-0.06em] text-[#20171a] md:text-5xl">
                  Clear handover. Fast follow-up. Practical campaign flow.
                </h3>

                <div className="mt-7 h-px bg-[#20171a]/15" />

                <div className="mt-5 grid gap-3 text-sm font-bold text-[#6b5d58] md:grid-cols-3">
                  <p>Client updates</p>
                  <p>Timeline tracking</p>
                  <p>Execution discipline</p>
                </div>
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
          experience is useful when it turns messy work into clear next steps.
        </p>
      </div>
    </section>
  );
}