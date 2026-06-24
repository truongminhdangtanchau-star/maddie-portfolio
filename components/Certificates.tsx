"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { certificates } from "../data/portfolio";

export default function Certificates() {
  const education = certificates[0];
  const certificateList = certificates.slice(1);

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
      id="certificates"
      className="relative overflow-hidden border-t border-[#20171a]/10 px-5 py-28 md:px-8"
      style={{
        background:
          "radial-gradient(circle at 12% 18%, rgba(255,255,255,0.42), transparent 30%), radial-gradient(circle at 86% 16%, rgba(231,143,173,0.18), transparent 34%), #e8ded1",
      }}
    >
      <div className="pointer-events-none absolute left-6 top-20 text-[8rem] font-black leading-none tracking-[-0.08em] text-white/20 md:text-[15rem]">
        LEARN
      </div>

      <div className="pointer-events-none absolute bottom-16 right-6 text-[7rem] font-black leading-none tracking-[-0.08em] text-white/20 md:text-[13rem]">
        CERTS
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
            [ Education & Certificates ]
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
            Business · Office · English
          </p>
        </div>

        <div
          className={[
            "relative overflow-hidden rounded-[2rem] border border-[#20171a]/10 bg-[#f7f1e8]/90 p-5 shadow-[0_26px_70px_rgba(32,23,26,0.12)] md:p-8",
            reveal("up"),
          ].join(" ")}
          style={delay(140)}
        >
          <div className="grid gap-6 md:grid-cols-[0.95fr_1.05fr]">
            <div
              className={[
                "relative overflow-hidden rounded-[1.5rem] border border-[#20171a]/10 bg-[#20171a] p-3 shadow-[0_24px_70px_rgba(32,23,26,0.18)]",
                reveal("left"),
              ].join(" ")}
              style={delay(260)}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.15rem] bg-[#20171a] md:aspect-[4/4.1]">
                <Image
                  src="/Tôn Đức Thắng.png"
                  alt="Ton Duc Thang University"
                  fill
                  className="object-cover grayscale contrast-110"
                  sizes="(max-width: 768px) 100vw, 560px"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#20171a]/65 via-[#20171a]/10 to-white/5" />

                <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-white/15 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-white backdrop-blur">
                  Education
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-serif text-2xl italic text-white/85 md:text-3xl">
                    formal background,
                  </p>

                  <p className="mt-1 pl-8 font-serif text-xl italic text-white/70 md:text-2xl">
                    practical execution.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              <div
                className={[
                  "relative overflow-hidden rounded-[1.5rem] border border-[#20171a]/10 bg-[#f7f1e8]/85 p-6 shadow-[0_18px_45px_rgba(32,23,26,0.08)] md:p-8",
                  reveal("right"),
                ].join(" ")}
                style={delay(320)}
              >
                <p className="mb-5 text-xs font-black uppercase tracking-[0.34em] text-[#20171a]/55">
                  Ton Duc Thang University
                </p>

                <h2 className="max-w-3xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.075em] text-[#20171a] md:text-7xl">
                  Education made for client-facing creative work.
                </h2>

                <div className="mt-7 flex flex-wrap gap-3">
                  <span className="rounded-full border border-[#20171a]/10 bg-[#20171a] px-4 py-2 text-sm font-black text-[#fff8ef]">
                    {education.issuer}
                  </span>

                  <span className="rounded-full border border-[#20171a]/15 bg-[#f7f1e8]/90 px-4 py-2 text-sm font-bold text-[#20171a]">
                    {education.year}
                  </span>

                  <span className="rounded-full border border-[#20171a]/15 bg-[#f7f1e8]/90 px-4 py-2 text-sm font-bold text-[#20171a]">
                    International Business · English Program
                  </span>
                </div>

                <p className="mt-7 max-w-2xl text-base font-semibold leading-7 text-[#6b5d58] md:text-lg md:leading-8">
                  A business foundation for client communication, campaign
                  coordination, documentation, reporting, and multicultural
                  teamwork.
                </p>

                <p className="absolute bottom-5 right-6 rotate-[-3deg] text-5xl font-black italic tracking-[-0.08em] text-[#e78fad]/55 md:text-6xl">
                  study
                </p>
              </div>

              <div
                className={[
                  "relative overflow-hidden rounded-[1.5rem] border border-[#20171a]/10 bg-[#f7f1e8]/85 p-6 shadow-[0_18px_45px_rgba(32,23,26,0.08)]",
                  reveal("right"),
                ].join(" ")}
                style={delay(440)}
              >
                <p className="text-xs font-black uppercase tracking-[0.28em] text-[#20171a]/55">
                  Main Degree
                </p>

                <h3 className="mt-4 text-3xl font-black leading-[0.95] tracking-[-0.055em] text-[#20171a] md:text-5xl">
                  {education.name}
                </h3>

                <div className="mt-6 h-px bg-[#20171a]/15" />

                <div className="mt-5 grid gap-3 text-sm font-bold text-[#6b5d58] md:grid-cols-3">
                  <p>Client communication</p>
                  <p>Documentation</p>
                  <p>Campaign admin</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {certificateList.map((item, index) => (
              <article
                key={item.name}
                className={[
                  "group relative min-h-[18rem] overflow-hidden rounded-[1.5rem] border border-[#20171a]/10 bg-[#f7f1e8]/85 p-6 shadow-[0_18px_45px_rgba(32,23,26,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(32,23,26,0.13)]",
                  reveal("up"),
                ].join(" ")}
                style={delay(560 + index * 120)}
              >
                <div className="absolute right-5 top-5 rounded-full border border-[#20171a]/15 bg-[#f7f1e8]/90 px-3 py-1 text-xs font-black tracking-[0.18em] text-[#20171a]/70">
                  0{index + 1}
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#20171a] text-[#fff8ef] shadow-[0_14px_35px_rgba(32,23,26,0.18)] transition duration-300 group-hover:rotate-[-3deg] group-hover:scale-105">
                  {index === 0 ? (
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
                      <path d="M12 3 14.7 8.5 21 9.4 16.5 13.8 17.5 20 12 17.1 6.5 20 7.5 13.8 3 9.4 9.3 8.5 12 3Z" />
                    </svg>
                  ) : index === 1 ? (
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
                      <path d="M4 5h16" />
                      <path d="M4 12h16" />
                      <path d="M4 19h16" />
                      <path d="M8 5v14" />
                      <path d="M16 5v14" />
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
                      <path d="M9 18V5l12-2v13" />
                      <circle cx="6" cy="18" r="3" />
                      <circle cx="18" cy="16" r="3" />
                    </svg>
                  )}
                </div>

                <p className="mt-8 text-xs font-black uppercase tracking-[0.28em] text-[#20171a]/55">
                  Certificate
                </p>

                <h3 className="mt-4 text-3xl font-black leading-[0.95] tracking-[-0.055em] text-[#20171a]">
                  {item.name}
                </h3>

                <div className="mt-6 flex flex-wrap gap-3">
                  <p className="rounded-full border border-[#20171a]/15 bg-[#20171a] px-4 py-2 text-sm font-black text-[#fff8ef]">
                    {item.issuer}
                  </p>

                  <p className="rounded-full border border-[#20171a]/15 bg-[#f7f1e8]/90 px-4 py-2 text-sm font-bold text-[#20171a]">
                    {item.year}
                  </p>
                </div>

                <div className="absolute bottom-5 left-6 right-6 h-px bg-[#20171a]/15" />

                <p className="absolute bottom-7 right-6 rotate-[-4deg] text-5xl font-black italic tracking-[-0.08em] text-[#e78fad]/45">
                  skill
                </p>
              </article>
            ))}
          </div>
        </div>

        <p
          className={[
            "mx-auto mt-8 max-w-3xl text-center text-xs font-bold uppercase tracking-[0.36em] text-[#20171a]/45",
            reveal("up"),
          ].join(" ")}
          style={delay(940)}
        >
          proof of learning, not decoration.
        </p>
      </div>
    </section>
  );
}