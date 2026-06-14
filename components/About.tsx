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
      className="relative min-h-screen overflow-hidden border-t border-pink-200/60 bg-[#fdebf4] px-5 py-32 md:px-8"
    >
      <div className="pointer-events-none absolute -left-40 top-10 h-[30rem] w-[30rem] rounded-full bg-pink-300/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-36 top-28 h-[34rem] w-[34rem] rounded-full bg-fuchsia-300/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-12rem] left-1/3 h-[36rem] w-[36rem] rounded-full bg-rose-200/55 blur-3xl" />

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
            Client Creative Execution
          </p>
        </div>

        <div className="grid items-center gap-14 md:grid-cols-[1.04fr_0.96fr]">
          <div className="relative z-10">
            <p
              className={[
                "mb-6 text-sm font-semibold uppercase tracking-[0.28em] text-[#F72D9A]",
                isVisible ? "about-reveal-left" : "opacity-0",
              ].join(" ")}
            >
              Client Creative Execution
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
                  className={isVisible ? "about-reveal-left" : "opacity-0"}
                  style={{ animationDelay: `${220 + index * 120}ms` }}
                >
                  {paragraph}
                </p>
              ))}
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

            <div
              className={[
                "mt-9 flex flex-wrap gap-4",
                isVisible ? "about-reveal-left" : "opacity-0",
              ].join(" ")}
              style={{ animationDelay: "920ms" }}
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 rounded-full bg-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(236,72,153,0.35)] transition hover:-translate-y-1 hover:bg-pink-600"
              >
                <svg
                  className="h-5 w-5 transition group-hover:scale-110"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M9 18V5l12-2v13" />
                  <circle cx="6" cy="18" r="3" />
                  <circle cx="18" cy="16" r="3" />
                </svg>
                View Work
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full border border-pink-200 bg-white/85 px-6 py-3 text-sm font-semibold text-[#24151d] shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-pink-300 hover:bg-pink-50"
              >
                <svg
                  className="h-5 w-5 text-pink-500 transition group-hover:scale-110"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.1 20.45H3.54V9H7.1v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
                </svg>
                LinkedIn
              </a>

              <a
                href={profile.resume}
                download
                className="group inline-flex items-center gap-3 rounded-full border border-pink-200 bg-white/85 px-6 py-3 text-sm font-semibold text-[#24151d] shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-pink-300 hover:bg-pink-50"
              >
                <svg
                  className="h-5 w-5 text-pink-500 transition group-hover:translate-y-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 3v12" />
                  <path d="m7 10 5 5 5-5" />
                  <path d="M5 21h14" />
                </svg>
                Resume
              </a>
            </div>
          </div>

          <div
            className={[
              "relative z-10 mx-auto flex w-full max-w-xl items-center justify-center",
              isVisible ? "about-reveal-right" : "opacity-0",
            ].join(" ")}
            style={{ animationDelay: "260ms" }}
          >
            <div className="about-clean-vinyl-stage relative flex w-full items-center justify-center">
              <div className="about-clean-vinyl-glow" />

              <div className="about-clean-vinyl-disc">
                <div className="about-clean-vinyl-ring about-clean-vinyl-ring-1" />
                <div className="about-clean-vinyl-ring about-clean-vinyl-ring-2" />
                <div className="about-clean-vinyl-ring about-clean-vinyl-ring-3" />
                <div className="about-clean-vinyl-ring about-clean-vinyl-ring-4" />

                <div className="about-clean-vinyl-photo">
                  <Image
                    src="/maddie.png"
                    alt="Maddie Nguyen"
                    fill
                    priority
                    className="rounded-full object-cover object-top"
                  />
                </div>
              </div>

              <div className="about-clean-tonearm">
                <span className="about-clean-tonearm-head" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}