"use client";

import { useEffect, useRef, useState } from "react";
import { profile } from "../data/portfolio";

export default function Hero() {
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
        threshold: 0.18,
        rootMargin: "0px 0px -10% 0px",
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
      className="relative flex min-h-screen items-center overflow-hidden border-b border-[#20171a]/10 px-5 py-28 md:px-8"
      style={{
        background:
          "radial-gradient(circle at 12% 18%, rgba(255,255,255,0.44), transparent 30%), radial-gradient(circle at 86% 14%, rgba(231,143,173,0.16), transparent 34%), #e8ded1",
      }}
    >
      <div className="pointer-events-none absolute left-6 top-16 text-[7rem] font-black leading-none tracking-[-0.08em] text-white/20 md:text-[15rem]">
        CREATIVE
      </div>

      <div className="pointer-events-none absolute bottom-12 right-6 text-[7rem] font-black leading-none tracking-[-0.08em] text-white/20 md:text-[13rem]">
        FLOW
      </div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="absolute left-[7%] top-[20%] text-6xl font-black text-[#20171a]/[0.055] md:text-8xl">
          ♪
        </span>
        <span className="absolute right-[12%] top-[18%] text-5xl font-black text-[#20171a]/[0.05] md:text-7xl">
          ♫
        </span>
        <span className="absolute left-[48%] top-[12%] text-4xl font-black text-[#20171a]/[0.045] md:text-6xl">
          ♬
        </span>
        <span className="absolute bottom-[18%] left-[16%] text-5xl font-black text-[#20171a]/[0.05] md:text-7xl">
          ♭
        </span>
        <span className="absolute bottom-[16%] right-[22%] text-5xl font-black text-[#20171a]/[0.045] md:text-7xl">
          ♯
        </span>
      </div>

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="mb-10 flex items-center justify-between gap-6">
          <p
            className={[
              "text-sm font-black uppercase tracking-[0.42em] text-[#20171a]",
              reveal("left"),
            ].join(" ")}
            style={delay(0)}
          >
            [ {profile.name} ]
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
            Creative Account Executive
          </p>
        </div>

        <div
          className={[
            "relative overflow-hidden rounded-[2rem] border border-[#20171a]/10 bg-[#f7f1e8]/90 p-5 shadow-[0_26px_70px_rgba(32,23,26,0.12)] md:p-8",
            reveal("up"),
          ].join(" ")}
          style={delay(140)}
        >
          <div className="grid gap-6 md:grid-cols-[1.05fr_0.95fr]">
            <div
              className={[
                "relative min-h-[38rem] overflow-hidden rounded-[1.5rem] bg-[#20171a] p-6 text-[#fff8ef] shadow-[0_24px_70px_rgba(32,23,26,0.18)] md:p-8",
                reveal("left"),
              ].join(" ")}
              style={delay(260)}
            >
              <p className="text-xs font-black uppercase tracking-[0.34em] text-white/55">
                Music · Entertainment · Brand Campaigns
              </p>

              <h1 className="mt-8 max-w-4xl text-6xl font-black uppercase leading-[0.84] tracking-[-0.085em] text-[#fff8ef] md:text-[7.8rem]">
                Creative
                <br />
                Account
                <br />
                Executive
              </h1>

              <p className="mt-8 max-w-2xl text-base font-semibold leading-7 text-white/68 md:text-lg md:leading-8">
                {profile.intro}
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="inline-flex rounded-full bg-[#fff8ef] px-5 py-3 text-sm font-black text-[#20171a] transition duration-300 hover:-translate-y-1"
                >
                  View Work
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-black text-[#fff8ef] backdrop-blur transition duration-300 hover:-translate-y-1"
                >
                  LinkedIn
                </a>

                <a
                  href={profile.resume}
                  download
                  className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-black text-[#fff8ef] backdrop-blur transition duration-300 hover:-translate-y-1"
                >
                  Resume
                </a>
              </div>

              <p className="absolute bottom-8 right-8 rotate-[-4deg] text-7xl font-black italic leading-none tracking-[-0.08em] text-[#e78fad] md:text-[8rem]">
                hello
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
                  Portfolio Focus
                </p>

                <h2 className="mt-6 max-w-3xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.075em] text-[#20171a] md:text-7xl">
                  Soft visuals. Clear execution. Creative flow.
                </h2>

                <p className="mt-7 max-w-2xl text-base font-semibold leading-7 text-[#6b5d58] md:text-lg md:leading-8">
                  A structured portfolio for client servicing, account support,
                  campaign coordination, and creative team collaboration.
                </p>

                <p className="absolute bottom-5 right-6 rotate-[-4deg] text-5xl font-black italic tracking-[-0.08em] text-[#e78fad]/50">
                  flow
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div
                  className={[
                    "relative min-h-[15rem] overflow-hidden rounded-[1.5rem] border border-[#20171a]/10 bg-[#f7f1e8]/85 p-5 shadow-[0_18px_45px_rgba(32,23,26,0.08)]",
                    reveal("up"),
                  ].join(" ")}
                  style={delay(460)}
                >
                  <p className="text-xs font-black uppercase tracking-[0.28em] text-[#20171a]/55">
                    Core Areas
                  </p>

                  <div className="mt-7 grid gap-3 text-sm font-bold text-[#6b5d58]">
                    <p>01 · Client servicing</p>
                    <p>02 · Campaign flow</p>
                    <p>03 · Creative coordination</p>
                    <p>04 · Brand communication</p>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 h-px bg-[#20171a]/15" />
                </div>

                <div
                  className={[
                    "relative min-h-[15rem] overflow-hidden rounded-[1.5rem] border border-[#20171a]/10 bg-[#f7f1e8]/85 p-5 shadow-[0_18px_45px_rgba(32,23,26,0.08)]",
                    reveal("up"),
                  ].join(" ")}
                  style={delay(540)}
                >
                  <p className="text-xs font-black uppercase tracking-[0.28em] text-[#20171a]/55">
                    Direction
                  </p>

                  <h3 className="mt-6 text-4xl font-black uppercase leading-[0.9] tracking-[-0.06em] text-[#20171a]">
                    Music labels, entertainment, and brand campaigns.
                  </h3>

                  <p className="absolute bottom-5 right-5 rotate-[-4deg] text-5xl font-black italic tracking-[-0.08em] text-[#e78fad]/45">
                    work
                  </p>
                </div>
              </div>

              <div
                className={[
                  "relative overflow-hidden rounded-[1.5rem] border border-[#20171a]/10 bg-[#f7f1e8]/85 p-5 shadow-[0_18px_45px_rgba(32,23,26,0.08)]",
                  reveal("right"),
                ].join(" ")}
                style={delay(640)}
              >
                <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.28em] text-[#20171a]/55">
                      Now Playing
                    </p>

                    <h3 className="mt-4 text-4xl font-black uppercase leading-[0.9] tracking-[-0.06em] text-[#20171a] md:text-5xl">
                      Maddie Nguyen
                    </h3>
                  </div>

                  <div className="flex gap-2">
                    <span className="h-10 w-2 rounded-full bg-[#20171a]/70" />
                    <span className="h-16 w-2 rounded-full bg-[#e78fad]" />
                    <span className="h-12 w-2 rounded-full bg-[#20171a]/45" />
                    <span className="h-20 w-2 rounded-full bg-[#20171a]" />
                    <span className="h-14 w-2 rounded-full bg-[#e78fad]/70" />
                  </div>
                </div>

                <div className="mt-6 h-px bg-[#20171a]/15" />

                <div className="mt-5 flex flex-wrap gap-2">
                  {["Client Servicing", "Campaign Flow", "Creative Teams"].map(
                    (item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[#20171a]/15 bg-[#f7f1e8]/90 px-3 py-1.5 text-xs font-bold text-[#20171a]/70"
                      >
                        {item}
                      </span>
                    )
                  )}
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
          style={delay(820)}
        >
          music symbols stay in the background, because UI deserves peace.
        </p>
      </div>
    </section>
  );
}