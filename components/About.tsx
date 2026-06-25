"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { about, profile, stats } from "../data/portfolio";

export default function About() {
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
        threshold: 0.28,
        rootMargin: "-10% 0px -18% 0px",
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const motionBase =
    "transition-all duration-[950ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform";

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
        : `${hidden} scale-[0.97] opacity-0 blur-sm`,
    ].join(" ");
  };

  const delay = (ms: number) => ({
    transitionDelay: isVisible ? `${ms}ms` : "0ms",
  });

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden border-t border-[#7a3a4d]/10 px-5 py-24 md:px-8"
      style={{
        background:
          "radial-gradient(circle at 12% 18%, rgba(255,244,240,0.9), transparent 30%), radial-gradient(circle at 88% 12%, rgba(236,157,181,0.32), transparent 34%), linear-gradient(135deg, #f9e3dc 0%, #f5cfd9 48%, #f8eadf 100%)",
      }}
    >
      <div className="pointer-events-none absolute left-6 top-20 text-[6rem] font-black leading-none tracking-[-0.08em] text-white/24 md:text-[11rem]">
        STORY
      </div>

      <div className="pointer-events-none absolute bottom-10 right-6 text-[5rem] font-black leading-none tracking-[-0.08em] text-white/24 md:text-[9rem]">
        FLOW
      </div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="absolute left-[8%] top-[25%] text-6xl font-black text-[#7a3a4d]/[0.05] md:text-8xl">
          ♪
        </span>
        <span className="absolute right-[10%] top-[18%] text-5xl font-black text-[#7a3a4d]/[0.045] md:text-7xl">
          ♫
        </span>
        <span className="absolute bottom-[18%] left-[17%] text-5xl font-black text-[#7a3a4d]/[0.045] md:text-7xl">
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
            [ {about.label} ]
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
            Client Creative Execution
          </p>
        </div>

        <div
          className={[
            "relative overflow-hidden rounded-[2rem] border border-[#b96f86]/25 bg-[#fff4f0]/84 p-4 shadow-[0_24px_70px_rgba(122,58,77,0.14)] backdrop-blur md:p-6",
            reveal("up"),
          ].join(" ")}
          style={delay(160)}
        >
          <div className="grid items-stretch gap-5 md:grid-cols-[0.82fr_1.18fr]">
            <div
              className={[
                "relative min-h-[26rem] overflow-hidden rounded-[1.5rem] border border-[#b96f86]/30 bg-[#f3c7d2] shadow-[0_22px_60px_rgba(122,58,77,0.16)] md:h-full md:min-h-0",
                reveal("left"),
              ].join(" ")}
              style={delay(260)}
            >
              <Image
                src="/maddie.png"
                alt="Maddie Nguyen"
                fill
                priority
                className="object-cover object-[center_30%] saturate-[1.06] contrast-[1.02]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#7a3a4d]/34 via-[#f6bfd0]/5 to-[#fff4f0]/10" />

              <div className="absolute left-5 top-5 rounded-full border border-white/35 bg-[#fff4f0]/30 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-white shadow-sm backdrop-blur">
                Maddie Nguyen
              </div>

              <div className="absolute bottom-6 left-5 right-5">
                <div className="flex items-end justify-between gap-4 rounded-3xl border border-white/30 bg-[#7a3a4d]/26 px-5 py-4 text-white shadow-[0_18px_45px_rgba(122,58,77,0.18)] backdrop-blur">
                  <p className="text-sm font-bold leading-6">
                    Account · Campaign · Creative Flow
                  </p>

                  <p className="rotate-[-5deg] text-5xl font-black italic leading-none tracking-[-0.08em] text-[#ff9dbc] drop-shadow-sm">
                    story
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-5">
              <div
                className={[
                  "relative overflow-hidden rounded-[1.5rem] border border-[#b96f86]/25 bg-[#fff8f3]/80 p-6 shadow-[0_18px_45px_rgba(122,58,77,0.08)] md:p-7",
                  reveal("right"),
                ].join(" ")}
                style={delay(340)}
              >
                <p
                  className={[
                    "mb-4 text-xs font-black uppercase tracking-[0.34em] text-[#9a5268]/70",
                    reveal("right"),
                  ].join(" ")}
                  style={delay(430)}
                >
                  Client Creative Execution
                </p>

                <h1
                  className={[
                    "max-w-3xl text-4xl font-black uppercase leading-[0.94] tracking-[-0.055em] text-[#2b1720] md:text-5xl lg:text-[3.45rem]",
                    reveal("right"),
                  ].join(" ")}
                  style={delay(500)}
                >
                  I connect creative ideas with campaign execution.
                </h1>

                <div className="mt-6 max-w-2xl space-y-3 text-sm font-semibold leading-7 text-[#765560] md:text-base md:leading-8">
                  {about.paragraphs.slice(0, 2).map((paragraph, index) => (
                    <p
                      key={paragraph}
                      className={reveal(index === 0 ? "right" : "left")}
                      style={delay(620 + index * 110)}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-[1fr_0.92fr]">
                <a
                  href="#experience"
                  className={[
                    "group relative min-h-[13rem] overflow-hidden rounded-[1.5rem] border border-[#b96f86]/25 bg-[#fde5eb]/84 p-5 shadow-[0_18px_45px_rgba(122,58,77,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#c95f83]/45 hover:bg-[#ffdce7]",
                    reveal("left"),
                  ].join(" ")}
                  style={delay(720)}
                >
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xs font-black uppercase tracking-[0.28em] text-[#9a5268]/70">
                      Snapshot
                    </p>

                    <span className="rounded-full border border-[#b96f86]/25 bg-[#fff8f3]/75 px-3 py-1 text-xs font-black text-[#7a3a4d] transition duration-300 group-hover:bg-[#7a3a4d] group-hover:text-white">
                      View Experience
                    </span>
                  </div>

                  <div className="mt-7 grid grid-cols-3 gap-3">
                    {stats.map((item, index) => (
                      <div
                        key={item.value}
                        className={reveal("up")}
                        style={delay(820 + index * 80)}
                      >
                        <p className="text-3xl font-black leading-none text-[#2b1720] md:text-4xl">
                          {item.value}
                        </p>

                        <p className="mt-2 text-[11px] font-bold leading-4 text-[#765560]">
                          {item.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 h-px bg-[#7a3a4d]/15" />

                  <p className="absolute bottom-7 right-5 rotate-[-4deg] text-4xl font-black italic tracking-[-0.08em] text-[#e991ad]/70">
                    flow
                  </p>
                </a>

                <div
                  className={[
                    "relative min-h-[13rem] overflow-hidden rounded-[1.5rem] border border-[#b96f86]/25 bg-[#fff8f3]/80 p-5 shadow-[0_18px_45px_rgba(122,58,77,0.08)]",
                    reveal("right"),
                  ].join(" ")}
                  style={delay(780)}
                >
                  <p className="text-xs font-black uppercase tracking-[0.28em] text-[#9a5268]/70">
                    Contact
                  </p>

                  <div className="mt-6 space-y-2 text-xs font-black leading-5 text-[#2b1720]">
                    <p className="break-words">{profile.email}</p>
                    <p>{profile.phone}</p>
                    <p>{profile.location}</p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href="#projects"
                      className="inline-flex rounded-full bg-[#d96f91] px-5 py-3 text-sm font-black text-white shadow-[0_12px_30px_rgba(217,111,145,0.28)] transition duration-300 hover:-translate-y-1 hover:bg-[#c95f83]"
                    >
                      View Work
                    </a>

                    <a
                      href={profile.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex rounded-full border border-[#b96f86]/30 bg-[#fff4f0] px-5 py-3 text-sm font-black text-[#7a3a4d] transition duration-300 hover:-translate-y-1 hover:bg-[#fde5eb]"
                    >
                      LinkedIn
                    </a>

                    <a
                      href={profile.resume}
                      download
                      className="inline-flex rounded-full border border-[#b96f86]/30 bg-[#fff4f0] px-5 py-3 text-sm font-black text-[#7a3a4d] transition duration-300 hover:-translate-y-1 hover:bg-[#fde5eb]"
                    >
                      Resume
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p
          className={[
            "mx-auto mt-7 max-w-3xl text-center text-xs font-bold uppercase tracking-[0.36em] text-[#7a3a4d]/45",
            reveal("up"),
          ].join(" ")}
          style={delay(960)}
        >
          and that&apos;s a cleaner wrap.
        </p>
      </div>
    </section>
  );
}