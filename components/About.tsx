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
      id="about"
      className="relative min-h-screen overflow-hidden border-t border-pink-200/60 bg-[#fff7fb] px-5 py-32 md:px-8"
    >
      <div className="pointer-events-none absolute -left-40 top-10 h-[30rem] w-[30rem] rounded-full bg-pink-200/55 blur-3xl" />
      <div className="pointer-events-none absolute -right-36 top-28 h-[34rem] w-[34rem] rounded-full bg-fuchsia-200/45 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-12rem] left-1/3 h-[36rem] w-[36rem] rounded-full bg-rose-100/70 blur-3xl" />

      <div className="pointer-events-none absolute inset-0">
        <div className="about-float-note about-float-note-1">♪</div>
        <div className="about-float-note about-float-note-2">♫</div>
        <div className="about-float-note about-float-note-3">♬</div>
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 flex items-center justify-between gap-6">
          <p
            className={[
              "text-sm font-semibold uppercase tracking-[0.32em] text-[#F72D9A]",
              isVisible ? "readable-reveal" : "opacity-0",
            ].join(" ")}
          >
            [ {about.label} ]
          </p>

          <div className="hidden h-px flex-1 bg-gradient-to-r from-pink-300 via-fuchsia-200 to-transparent md:block" />

          <p
            className={[
              "hidden text-sm font-semibold italic text-[#F72D9A] md:block",
              isVisible ? "readable-reveal [animation-delay:100ms]" : "opacity-0",
            ].join(" ")}
          >
            Client servicing · Campaign coordination · Entertainment focus
          </p>
        </div>

        <div className="grid items-center gap-14 md:grid-cols-[1.02fr_0.98fr]">
          <div className="relative z-10">
            <p
              className={[
                "mb-6 text-sm font-semibold uppercase tracking-[0.28em] text-[#F72D9A]",
                isVisible ? "about-reveal-left" : "opacity-0",
              ].join(" ")}
            >
              Client servicing meets creative execution
            </p>

            <h2
              className={[
                "about-glow-heading max-w-5xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.075em] md:text-7xl lg:text-8xl",
                isVisible ? "about-heading-glow-in" : "opacity-0",
              ].join(" ")}
            >
              I connect creative ideas with campaign execution.
            </h2>

            <div className="mt-8 max-w-3xl space-y-5 text-lg font-medium leading-8 text-[#6f4a5d]">
              {about.paragraphs.slice(0, 2).map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={[
                    isVisible ? "about-reveal-left" : "opacity-0",
                  ].join(" ")}
                  style={{ animationDelay: `${220 + index * 120}ms` }}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div
              className={[
                "mt-10 flex flex-wrap gap-4",
                isVisible ? "about-reveal-left" : "opacity-0",
              ].join(" ")}
              style={{ animationDelay: "440ms" }}
            >
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full border border-pink-200 bg-white/85 px-6 py-3 text-sm font-semibold text-[#24151d] shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-pink-300 hover:bg-pink-50"
              >
                LinkedIn
              </a>

              <a
                href={profile.resume}
                download
                className="group inline-flex items-center gap-3 rounded-full bg-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(236,72,153,0.35)] transition hover:-translate-y-1 hover:bg-pink-600"
              >
                Download Resume
              </a>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {[
                ["12", "client accounts managed"],
                ["2+", "years in client-facing work"],
                ["4", "accounts, campaigns, reports, coordination"],
              ].map(([value, label], index) => (
                <div
                  key={value}
                  className={[
                    "about-stat-card rounded-3xl border border-pink-200 bg-white/70 p-5 shadow-sm backdrop-blur",
                    isVisible ? "about-stat-enter" : "opacity-0",
                  ].join(" ")}
                  style={{ animationDelay: `${560 + index * 120}ms` }}
                >
                  <p className="text-3xl font-black text-[#F72D9A]">{value}</p>
                  <p className="mt-2 text-sm font-medium leading-6 text-[#7b5a69]">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            className={[
              "relative z-10 mx-auto flex w-full max-w-xl items-center justify-center",
              isVisible ? "about-reveal-right" : "opacity-0",
            ].join(" ")}
            style={{ animationDelay: "220ms" }}
          >
            <div className="about-visual-stage relative flex h-[34rem] w-full items-center justify-center">
              <div className="about-orbit about-orbit-1" />
              <div className="about-orbit about-orbit-2" />
              <div className="about-orbit about-orbit-3" />

              <div className="about-vinyl-large">
                <div className="about-vinyl-large-disc">
                  <div className="about-vinyl-groove about-vinyl-groove-1" />
                  <div className="about-vinyl-groove about-vinyl-groove-2" />
                  <div className="about-vinyl-groove about-vinyl-groove-3" />

                  <div className="about-vinyl-photo">
                    <Image
                      src="/maddie.png"
                      alt="Maddie Nguyen"
                      fill
                      priority
                      className="rounded-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>

              <div className="about-tonearm">
                <span className="about-tonearm-head" />
              </div>

              <div className="about-floating-badge about-floating-badge-1">
                <span>Creative</span>
                <strong>Account Flow</strong>
              </div>

              <div className="about-floating-badge about-floating-badge-2">
                <span>Music</span>
                <strong>Campaign Ready</strong>
              </div>

              <div className="about-wave-card">
                <span className="about-wave-bar h-7" />
                <span className="about-wave-bar h-12 [animation-delay:120ms]" />
                <span className="about-wave-bar h-8 [animation-delay:240ms]" />
                <span className="about-wave-bar h-16 [animation-delay:360ms]" />
                <span className="about-wave-bar h-10 [animation-delay:480ms]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}