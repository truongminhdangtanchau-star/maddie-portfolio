"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { about, profile } from "../data/portfolio";

export default function About() {
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
      id="about"
      className="relative min-h-screen overflow-hidden border-t border-[#20171a]/10 px-5 py-28 md:px-8"
      style={{
        background:
          "radial-gradient(circle at 12% 18%, rgba(255,255,255,0.42), transparent 30%), radial-gradient(circle at 88% 12%, rgba(231,143,173,0.20), transparent 32%), #e8ded1",
      }}
    >
      <div className="pointer-events-none absolute left-6 top-20 text-[9rem] font-black leading-none tracking-[-0.08em] text-white/20 md:text-[17rem]">
        STORY
      </div>

      <div className="pointer-events-none absolute bottom-16 right-6 text-[8rem] font-black leading-none tracking-[-0.08em] text-white/20 md:text-[14rem]">
        WORK
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
            [ {about.label} ]
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
            Client Creative Execution
          </p>
        </div>

        <div
          className={[
            "relative overflow-hidden rounded-[2rem] border border-[#20171a]/10 bg-[#f7f1e8]/90 p-5 shadow-[0_26px_70px_rgba(32,23,26,0.12)] md:p-8",
            reveal("up"),
          ].join(" ")}
          style={delay(120)}
        >
          <div className="grid gap-6 md:grid-cols-[1fr_1fr]">
            <div
              className={[
                "relative min-h-[34rem] overflow-hidden rounded-[1.5rem] bg-[#20171a] shadow-[0_24px_70px_rgba(32,23,26,0.18)] md:min-h-[43rem]",
                reveal("left"),
              ].join(" ")}
              style={delay(240)}
            >
              <Image
                src="/maddie.png"
                alt="Maddie Nguyen"
                fill
                priority
                className="object-cover object-[center_32%] grayscale contrast-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#20171a]/60 via-transparent to-white/5" />

              <div className="absolute left-6 top-6 max-w-sm">
                <p className="rotate-[-3deg] font-serif text-2xl italic text-[#20171a]/80 md:text-3xl">
                  Hi, since you&apos;re here,
                </p>

                <p className="mt-2 rotate-[-2deg] pl-8 font-serif text-lg italic text-[#20171a]/70 md:text-xl">
                  let me be your tour guide.
                </p>
              </div>

              <div className="absolute inset-x-0 bottom-14 rotate-[-4deg] text-center">
                <p className="text-7xl font-black italic leading-none tracking-[-0.08em] text-[#e78fad] md:text-[8.5rem]">
                  story
                </p>

                <p className="-mt-6 text-7xl font-black italic leading-none tracking-[-0.08em] text-[#e78fad] md:text-[8.5rem]">
                  work
                </p>
              </div>

              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
                <p className="max-w-sm text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
                  Account · Campaign · Creative Flow
                </p>

                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
                  By Maddie Nguyen
                </p>
              </div>
            </div>

            <div className="grid gap-6">
              <div
                className={[
                  "relative overflow-hidden rounded-[1.5rem] border border-[#20171a]/10 bg-[#f7f1e8]/85 p-6 shadow-[0_18px_45px_rgba(32,23,26,0.08)] md:p-8",
                  reveal("right"),
                ].join(" ")}
                style={delay(300)}
              >
                <p className="mb-5 text-xs font-black uppercase tracking-[0.34em] text-[#20171a]/55">
                  Client Creative Execution
                </p>

                <h1 className="max-w-3xl text-5xl font-black uppercase leading-[0.88] tracking-[-0.075em] text-[#20171a] md:text-7xl">
                  I connect creative ideas with campaign execution.
                </h1>

                <div className="mt-7 max-w-2xl space-y-4 text-base font-semibold leading-7 text-[#6b5d58] md:text-lg md:leading-8">
                  {about.paragraphs.slice(0, 2).map((paragraph, index) => (
                    <p
                      key={paragraph}
                      className={reveal("right")}
                      style={delay(420 + index * 120)}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div
                  className={[
                    "relative min-h-[16rem] overflow-hidden rounded-[1.5rem] border border-[#20171a]/10 bg-[#f7f1e8]/85 p-5 shadow-[0_18px_45px_rgba(32,23,26,0.08)]",
                    reveal("up"),
                  ].join(" ")}
                  style={delay(500)}
                >
                  <p className="text-xs font-black uppercase tracking-[0.28em] text-[#20171a]/55">
                    Snapshot
                  </p>

                  <div className="mt-8 grid grid-cols-3 gap-3">
                    {[
                      ["12", "client accounts"],
                      ["2+", "years"],
                      ["4", "focus areas"],
                    ].map(([value, label], index) => (
                      <div
                        key={value}
                        className={reveal("up")}
                        style={delay(620 + index * 90)}
                      >
                        <p className="text-4xl font-black leading-none text-[#20171a]">
                          {value}
                        </p>

                        <p className="mt-2 text-xs font-semibold leading-5 text-[#6b5d58]">
                          {label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 h-px bg-[#20171a]/15" />

                  <p className="absolute bottom-7 right-5 text-5xl font-black tracking-[-0.08em] text-[#e78fad]/55">
                    flow
                  </p>
                </div>

                <div
                  className={[
                    "relative min-h-[16rem] overflow-hidden rounded-[1.5rem] border border-[#20171a]/10 bg-[#f7f1e8]/85 p-5 shadow-[0_18px_45px_rgba(32,23,26,0.08)]",
                    reveal("up"),
                  ].join(" ")}
                  style={delay(580)}
                >
                  <p className="text-xs font-black uppercase tracking-[0.28em] text-[#20171a]/55">
                    Contact
                  </p>

                  <div className="mt-7 space-y-3 text-sm font-bold text-[#20171a]">
                    <p>{profile.email}</p>
                    <p>{profile.phone}</p>
                    <p>{profile.location}</p>
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <a
                      href="#projects"
                      className="inline-flex rounded-full bg-[#20171a] px-5 py-3 text-sm font-black text-[#fff8ef] transition duration-300 hover:-translate-y-1"
                    >
                      View Work
                    </a>

                    <a
                      href={profile.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex rounded-full border border-[#20171a]/15 bg-[#f7f1e8]/90 px-5 py-3 text-sm font-black text-[#20171a] transition duration-300 hover:-translate-y-1"
                    >
                      LinkedIn
                    </a>

                    <a
                      href={profile.resume}
                      download
                      className="inline-flex rounded-full border border-[#20171a]/15 bg-[#f7f1e8]/90 px-5 py-3 text-sm font-black text-[#20171a] transition duration-300 hover:-translate-y-1"
                    >
                      Resume
                    </a>
                  </div>
                </div>
              </div>

              <div
                className={[
                  "relative grid gap-5 rounded-[1.5rem] border border-[#20171a]/10 bg-[#f7f1e8]/85 p-5 shadow-[0_18px_45px_rgba(32,23,26,0.08)] md:grid-cols-[0.9fr_1.1fr]",
                  reveal("right"),
                ].join(" ")}
                style={delay(700)}
              >
                <div className="relative min-h-[13rem] overflow-hidden rounded-[1.1rem] bg-[#20171a]">
                  <Image
                    src="/vnhi.png"
                    alt="Maddie Nguyen visual"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 420px"
                  />
                </div>

                <div className="flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.28em] text-[#20171a]/55">
                      Working Style
                    </p>

                    <h3 className="mt-4 text-4xl font-black leading-[0.9] tracking-[-0.06em] text-[#20171a]">
                      It&apos;s not just coordination,
                      <br />
                      it&apos;s vibing with visuals.
                    </h3>
                  </div>

                  <p className="mt-6 text-sm font-semibold leading-6 text-[#6b5d58]">
                    Built for client communication, reporting discipline,
                    cross-team handover, and campaign clarity.
                  </p>
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
          and that&apos;s a wrap.
        </p>
      </div>
    </section>
  );
}