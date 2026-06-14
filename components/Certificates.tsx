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
      id="certificates"
      className="relative overflow-hidden border-t border-pink-200/60 bg-[#fff7fb] px-5 py-28 md:px-8"
    >
      <div className="pointer-events-none absolute -left-24 top-20 h-80 w-80 rounded-full bg-pink-200/45 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-fuchsia-200/35 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p
              className={[
                "text-sm font-semibold uppercase tracking-[0.32em] text-[#F72D9A]",
                isVisible ? "readable-reveal" : "opacity-0",
              ].join(" ")}
            >
              [ Education & Certificates ]
            </p>

            <div
              className={[
                "mt-8 hidden items-end gap-2 md:flex",
                isVisible ? "readable-reveal [animation-delay:120ms]" : "opacity-0",
              ].join(" ")}
            >
              <span className="music-bar h-8 w-2 rounded-full bg-pink-300" />
              <span className="music-bar h-14 w-2 rounded-full bg-rose-300 [animation-delay:120ms]" />
              <span className="music-bar h-10 w-2 rounded-full bg-fuchsia-300 [animation-delay:240ms]" />
              <span className="music-bar h-20 w-2 rounded-full bg-pink-500 [animation-delay:360ms]" />
              <span className="music-bar h-12 w-2 rounded-full bg-rose-300 [animation-delay:480ms]" />
            </div>
          </div>

          <div>
            <h2
              className={[
                "max-w-4xl text-4xl font-black leading-[1.02] tracking-[-0.055em] text-[#24151d] md:text-6xl",
                isVisible ? "headline-wipe" : "opacity-0",
              ].join(" ")}
            >
              Education background with practical certificates for client-facing
              creative work.
            </h2>

            <p
              className={[
                "mt-6 max-w-2xl text-lg font-medium leading-8 text-[#6f4a5d]",
                isVisible ? "readable-reveal [animation-delay:180ms]" : "opacity-0",
              ].join(" ")}
            >
              A focused view of business education, office capability, English
              communication, and professional learning discipline.
            </p>
          </div>
        </div>

        <div
          className={[
            "education-feature-card relative mb-8 overflow-hidden rounded-[2.75rem] border border-pink-200/80 bg-white/85 p-6 shadow-[0_35px_110px_rgba(219,39,119,0.18)] backdrop-blur md:p-8",
            isVisible ? "readable-reveal [animation-delay:260ms]" : "opacity-0",
          ].join(" ")}
        >
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-pink-200/50 blur-3xl" />

          <div className="grid items-center gap-8 md:grid-cols-[0.9fr_1.1fr]">
            <div className="relative overflow-hidden rounded-[2.25rem] border border-pink-200 bg-[#24151d] p-4 shadow-[0_24px_80px_rgba(36,21,29,0.20)]">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[1.75rem] bg-pink-50">
                <Image
                  src="/Tôn Đức Thắng.png"
                  alt="Ton Duc Thang University"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#24151d]/65 via-[#24151d]/10 to-white/10" />

                <div className="absolute bottom-5 left-5 rounded-full border border-white/20 bg-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
                  Education Background
                </div>
              </div>
            </div>

            <div>
              <p
                className={[
                  "mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#F72D9A]",
                  isVisible ? "readable-reveal [animation-delay:340ms]" : "opacity-0",
                ].join(" ")}
              >
                Ton Duc Thang University
              </p>

              <h3
                className={[
                  "max-w-3xl text-4xl font-black leading-tight tracking-[-0.05em] text-[#24151d] md:text-5xl",
                  isVisible ? "headline-wipe [animation-delay:420ms]" : "opacity-0",
                ].join(" ")}
              >
                {education.name}
              </h3>

              <div
                className={[
                  "mt-6 flex flex-wrap gap-3",
                  isVisible ? "readable-reveal [animation-delay:500ms]" : "opacity-0",
                ].join(" ")}
              >
                <span className="rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-[#F72D9A]">
                  {education.issuer}
                </span>

                <span className="rounded-full border border-pink-200 bg-white/80 px-4 py-2 text-sm font-medium text-[#7b5a69]">
                  {education.year}
                </span>

                <span className="rounded-full border border-pink-200 bg-white/80 px-4 py-2 text-sm font-medium text-[#7b5a69]">
                  International Business · English Program
                </span>
              </div>

              <p
                className={[
                  "mt-7 max-w-2xl text-lg font-medium leading-8 text-[#6f4a5d]",
                  isVisible ? "readable-reveal [animation-delay:580ms]" : "opacity-0",
                ].join(" ")}
              >
                A business foundation for client communication, campaign
                coordination, documentation, reporting, and multicultural
                teamwork.
              </p>

              <div
                className={[
                  "mt-8 h-1.5 overflow-hidden rounded-full bg-pink-100",
                  isVisible ? "readable-reveal [animation-delay:660ms]" : "opacity-0",
                ].join(" ")}
              >
                <div className="education-progress h-full rounded-full bg-gradient-to-r from-pink-400 via-rose-300 to-fuchsia-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {certificateList.map((item, index) => (
            <article
              key={item.name}
              className={[
                "certificate-card group relative overflow-hidden rounded-[2rem] border border-pink-200/80 bg-white/80 p-7 shadow-[0_24px_70px_rgba(219,39,119,0.12)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-pink-300 hover:shadow-[0_30px_90px_rgba(219,39,119,0.20)]",
                isVisible ? "readable-reveal" : "opacity-0",
              ].join(" ")}
              style={{ animationDelay: `${760 + index * 120}ms` }}
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-pink-200/50 blur-2xl transition duration-300 group-hover:bg-fuchsia-200/60" />

              <div className="relative flex items-start justify-between gap-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#24151d] text-pink-100 shadow-[0_14px_35px_rgba(36,21,29,0.18)] transition duration-300 group-hover:scale-105">
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

                <span className="rounded-full border border-pink-200 bg-pink-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#F72D9A]">
                  0{index + 1}
                </span>
              </div>

              <div className="relative mt-8">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#F72D9A]">
                  Certificate
                </p>

                <h3 className="text-2xl font-black leading-tight tracking-[-0.035em] text-[#24151d]">
                  {item.name}
                </h3>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <p className="rounded-full bg-pink-100/80 px-4 py-2 text-sm font-semibold text-[#F72D9A]">
                    {item.issuer}
                  </p>

                  <p className="rounded-full border border-pink-200 bg-white/70 px-4 py-2 text-sm font-medium text-[#7b5a69]">
                    {item.year}
                  </p>
                </div>
              </div>

              <div className="relative mt-8 h-1.5 overflow-hidden rounded-full bg-pink-100">
                <div className="certificate-progress h-full rounded-full bg-gradient-to-r from-pink-400 via-rose-300 to-fuchsia-400" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}