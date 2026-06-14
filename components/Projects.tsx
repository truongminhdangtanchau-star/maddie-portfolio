"use client";

import { useEffect, useRef, useState } from "react";
import { projects } from "../data/portfolio";

type ProjectItem = {
  title: string;
  description: string;
  category?: string;
  type?: string;
};

export default function Projects() {
  const projectList = projects as ProjectItem[];

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
        threshold: 0.22,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative overflow-hidden border-t border-pink-200/60 bg-[#fff7fb] px-5 py-28 md:px-8"
    >
      <div className="pointer-events-none absolute -left-28 top-24 h-96 w-96 rounded-full bg-pink-200/45 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-20 h-96 w-96 rounded-full bg-fuchsia-200/35 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-100/55 blur-3xl" />

      <div
        className={[
          "pointer-events-none absolute inset-0 overflow-hidden",
          isVisible ? "readable-reveal" : "opacity-0",
        ].join(" ")}
      >
        <div className="project-symbol project-symbol-1">♪</div>
        <div className="project-symbol project-symbol-2">♫</div>
        <div className="project-symbol project-symbol-3">♬</div>
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p
              className={[
                "text-sm font-semibold uppercase tracking-[0.32em] text-[#F72D9A]",
                isVisible ? "readable-reveal" : "opacity-0",
              ].join(" ")}
            >
              [ Selected Work ]
            </p>

            <div
              className={[
                "mt-8 hidden items-end gap-2 md:flex",
                isVisible ? "readable-reveal [animation-delay:120ms]" : "opacity-0",
              ].join(" ")}
            >
              <span className="project-bar h-10 w-2 rounded-full bg-pink-300" />
              <span className="project-bar h-24 w-2 rounded-full bg-rose-300 [animation-delay:120ms]" />
              <span className="project-bar h-16 w-2 rounded-full bg-fuchsia-300 [animation-delay:240ms]" />
              <span className="project-bar h-28 w-2 rounded-full bg-pink-500 [animation-delay:360ms]" />
              <span className="project-bar h-14 w-2 rounded-full bg-rose-300 [animation-delay:480ms]" />
            </div>
          </div>

          <div>
            <h2
              className={[
                "max-w-4xl text-4xl font-black leading-[1.02] tracking-[-0.055em] text-[#24151d] md:text-6xl",
                isVisible ? "headline-wipe" : "opacity-0",
              ].join(" ")}
            >
              Campaign projects built for coordination, reporting, and client
              clarity.
            </h2>

            <p
              className={[
                "mt-6 max-w-2xl text-lg font-medium leading-8 text-[#6f4a5d]",
                isVisible ? "readable-reveal [animation-delay:180ms]" : "opacity-0",
              ].join(" ")}
            >
              Selected work across campaign flow, client communication,
              prospect operations, reporting, and review meetings.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projectList.map((project, index) => (
            <article
              key={project.title}
              className={[
                "project-card group relative flex min-h-[410px] flex-col justify-between overflow-hidden rounded-[2.25rem] border border-pink-200/80 bg-white/80 p-7 shadow-[0_28px_80px_rgba(219,39,119,0.14)] backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-pink-300 hover:shadow-[0_36px_110px_rgba(219,39,119,0.24)]",
                isVisible ? "project-card-enter" : "opacity-0",
              ].join(" ")}
              style={{ animationDelay: `${300 + index * 160}ms` }}
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-pink-200/50 blur-2xl transition duration-300 group-hover:bg-fuchsia-200/70" />

              <div className="relative">
                <div
                  className={[
                    "mb-8 flex items-start justify-between gap-4",
                    isVisible ? "readable-reveal" : "opacity-0",
                  ].join(" ")}
                  style={{ animationDelay: `${420 + index * 160}ms` }}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#24151d] text-pink-100 shadow-[0_14px_35px_rgba(36,21,29,0.18)] transition duration-300 group-hover:scale-105">
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
                        <path d="M9 18V5l12-2v13" />
                        <circle cx="6" cy="18" r="3" />
                        <circle cx="18" cy="16" r="3" />
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
                        <path d="M4 7h16" />
                        <path d="M4 12h16" />
                        <path d="M4 17h10" />
                        <path d="M17 15l3 3-3 3" />
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
                        <path d="M3 3v18h18" />
                        <path d="m7 15 4-4 3 3 5-7" />
                      </svg>
                    )}
                  </div>

                  <span className="rounded-full border border-pink-200 bg-pink-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#F72D9A]">
                    Track {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <p
                  className={[
                    "text-sm font-semibold uppercase tracking-[0.24em] text-[#F72D9A]",
                    isVisible ? "readable-reveal" : "opacity-0",
                  ].join(" ")}
                  style={{ animationDelay: `${500 + index * 160}ms` }}
                >
                  {project.category || project.type}
                </p>

                <h3
                  className={[
                    "mt-5 text-3xl font-black leading-tight tracking-[-0.045em] text-[#24151d]",
                    isVisible ? "headline-wipe" : "opacity-0",
                  ].join(" ")}
                  style={{ animationDelay: `${580 + index * 160}ms` }}
                >
                  {project.title}
                </h3>

                <p
                  className={[
                    "mt-5 text-base font-medium leading-7 text-[#6f4a5d]",
                    isVisible ? "readable-reveal" : "opacity-0",
                  ].join(" ")}
                  style={{ animationDelay: `${700 + index * 160}ms` }}
                >
                  {project.description}
                </p>
              </div>

              <div
                className={[
                  "relative mt-10",
                  isVisible ? "readable-reveal" : "opacity-0",
                ].join(" ")}
                style={{ animationDelay: `${820 + index * 160}ms` }}
              >
                <div className="mb-5 flex items-end gap-1.5">
                  <span className="project-mini-bar h-5 w-1.5 rounded-full bg-pink-300" />
                  <span className="project-mini-bar h-10 w-1.5 rounded-full bg-rose-300 [animation-delay:100ms]" />
                  <span className="project-mini-bar h-7 w-1.5 rounded-full bg-fuchsia-300 [animation-delay:200ms]" />
                  <span className="project-mini-bar h-12 w-1.5 rounded-full bg-pink-500 [animation-delay:300ms]" />
                  <span className="project-mini-bar h-8 w-1.5 rounded-full bg-rose-300 [animation-delay:400ms]" />
                </div>

                <div className="h-1.5 overflow-hidden rounded-full bg-pink-100">
                  <div className="project-progress h-full rounded-full bg-gradient-to-r from-pink-400 via-rose-300 to-fuchsia-400" />
                </div>

                <div className="mt-5 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-[#8a6475]">
                  <span>Campaign Flow</span>
                  <span>0{index + 1}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}