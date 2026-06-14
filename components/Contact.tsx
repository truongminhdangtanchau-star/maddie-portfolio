"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { profile } from "../data/portfolio";

export default function Contact() {
  const phoneHref = "tel:+84905089503";
  const mailHref = `mailto:${profile.email}?subject=Creative%20Opportunity%20for%20Maddie%20Nguyen`;

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
      id="contact"
      className="relative overflow-hidden border-t border-pink-200/60 bg-[#fff7fb] px-5 py-28 md:px-8"
    >
      <div className="pointer-events-none absolute -left-28 bottom-10 h-[34rem] w-[34rem] rounded-full bg-pink-200/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 top-20 h-[36rem] w-[36rem] rounded-full bg-fuchsia-200/40 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-100/60 blur-3xl" />

      <div className="pointer-events-none absolute inset-0">
        <div className="contact-float-note contact-float-note-1">♪</div>
        <div className="contact-float-note contact-float-note-2">♫</div>
        <div className="contact-float-note contact-float-note-3">♬</div>
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div
          className={[
            "contact-shell-glow relative overflow-hidden rounded-[2.75rem] border border-pink-200/80 bg-white/78 p-7 shadow-[0_35px_110px_rgba(219,39,119,0.18)] backdrop-blur md:p-12",
            isVisible ? "contact-card-enter" : "opacity-0",
          ].join(" ")}
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-pink-200/55 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 left-20 h-72 w-72 rounded-full bg-fuchsia-100/70 blur-3xl" />

          <div
            className={[
              "pointer-events-none absolute right-8 top-8 hidden items-end gap-2 md:flex",
              isVisible ? "readable-reveal" : "opacity-0",
            ].join(" ")}
            style={{ animationDelay: "160ms" }}
          >
            <span className="contact-bar h-8 w-2 rounded-full bg-pink-300" />
            <span className="contact-bar h-14 w-2 rounded-full bg-rose-300 [animation-delay:120ms]" />
            <span className="contact-bar h-10 w-2 rounded-full bg-fuchsia-300 [animation-delay:240ms]" />
            <span className="contact-bar h-20 w-2 rounded-full bg-pink-500 [animation-delay:360ms]" />
            <span className="contact-bar h-12 w-2 rounded-full bg-rose-300 [animation-delay:480ms]" />
          </div>

          <div className="relative grid gap-12 md:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p
                className={[
                  "mb-5 text-sm font-semibold uppercase tracking-[0.32em] text-[#F72D9A]",
                  isVisible ? "contact-reveal-left" : "opacity-0",
                ].join(" ")}
              >
                [ Contact ]
              </p>

              <h2
                className={[
                  "contact-glow-heading max-w-5xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.07em] md:text-7xl lg:text-8xl",
                  isVisible ? "contact-heading-glow-in" : "opacity-0",
                ].join(" ")}
              >
                Let&apos;s build the next creative campaign.
              </h2>

              <p
                className={[
                  "mt-8 max-w-2xl text-lg font-medium leading-8 text-[#6f4a5d]",
                  isVisible ? "contact-reveal-left" : "opacity-0",
                ].join(" ")}
                style={{ animationDelay: "220ms" }}
              >
                Open to music label, entertainment, creative agency, and brand
                campaign opportunities where communication, coordination, and
                execution discipline can support stronger creative work.
              </p>

              <div
                className={[
                  "contact-info-box mt-10 rounded-[2rem] border border-pink-200 bg-pink-50/80 p-5 shadow-sm backdrop-blur",
                  isVisible ? "contact-reveal-left" : "opacity-0",
                ].join(" ")}
                style={{ animationDelay: "360ms" }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#F72D9A]">
                  Contact Me
                </p>

                <p className="mt-3 text-base font-medium leading-7 text-[#6f4a5d]">
                  For collaboration, interview, creative coordination, or
                  entertainment campaign opportunities, contact Maddie directly
                  through email, call, or LinkedIn.
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={mailHref}
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
                      <path d="M4 4h16v16H4z" />
                      <path d="m22 6-10 7L2 6" />
                    </svg>
                    Email Maddie
                  </a>

                  <a
                    href={phoneHref}
                    className="group inline-flex items-center gap-3 rounded-full border border-pink-200 bg-white/85 px-6 py-3 text-sm font-semibold text-[#24151d] shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-pink-300 hover:bg-pink-50"
                  >
                    <svg
                      className="h-5 w-5 text-[#F72D9A] transition group-hover:scale-110"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.35 1.9.66 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.31 1.85.53 2.81.66A2 2 0 0 1 22 16.92Z" />
                    </svg>
                    Call Maddie
                  </a>

                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 rounded-full border border-pink-200 bg-white/85 px-6 py-3 text-sm font-semibold text-[#24151d] shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-pink-300 hover:bg-pink-50"
                  >
                    <svg
                      className="h-5 w-5 text-[#F72D9A] transition group-hover:scale-110"
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
                      className="h-5 w-5 text-[#F72D9A] transition group-hover:translate-y-0.5"
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
            </div>

            <div
              className={[
                "flex flex-col justify-center",
                isVisible ? "contact-reveal-right" : "opacity-0",
              ].join(" ")}
              style={{ animationDelay: "280ms" }}
            >
              <div className="contact-console-glow relative overflow-hidden rounded-[2.25rem] border border-pink-200/90 bg-white/82 p-6 shadow-[0_28px_90px_rgba(219,39,119,0.18)] backdrop-blur">
                <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-pink-200/60 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-20 left-6 h-56 w-56 rounded-full bg-fuchsia-100/70 blur-3xl" />

                <div className="relative mb-8 flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#F72D9A]">
                    Contact Card
                  </p>

                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-pink-300 shadow-[0_0_12px_rgba(247,45,154,0.55)]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-300 shadow-[0_0_12px_rgba(251,113,133,0.45)]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-fuchsia-300 shadow-[0_0_12px_rgba(217,70,239,0.45)]" />
                  </div>
                </div>

                <div className="relative mb-8 overflow-hidden rounded-[1.75rem] border border-pink-200 bg-pink-50/70 p-3 shadow-sm">
                  <div className="relative h-64 w-full overflow-hidden rounded-[1.35rem]">
                    <Image
                      src="/vnhi.png"
                      alt="Vnhi"
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 500px"
                    />
                  </div>
                </div>

                <div className="relative space-y-5">
                  <div className="rounded-2xl border border-pink-200 bg-white/80 p-4 shadow-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F72D9A]">
                      Email
                    </p>
                    <a
                      href={mailHref}
                      className="mt-2 block break-words text-base font-semibold text-[#24151d] underline-offset-4 transition hover:text-[#F72D9A] hover:underline"
                    >
                      {profile.email}
                    </a>
                  </div>

                  <div className="rounded-2xl border border-pink-200 bg-white/80 p-4 shadow-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F72D9A]">
                      Phone
                    </p>
                    <a
                      href={phoneHref}
                      className="mt-2 block text-base font-semibold text-[#24151d] underline-offset-4 transition hover:text-[#F72D9A] hover:underline"
                    >
                      {profile.phone}
                    </a>
                  </div>

                  <div className="rounded-2xl border border-pink-200 bg-white/80 p-4 shadow-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F72D9A]">
                      Location
                    </p>
                    <p className="mt-2 text-base font-semibold text-[#24151d]">
                      {profile.location}
                    </p>
                  </div>

                  <div className="h-1.5 overflow-hidden rounded-full bg-pink-100">
                    <div className="contact-progress h-full rounded-full bg-gradient-to-r from-pink-400 via-rose-300 to-fuchsia-400" />
                  </div>

                  <a
                    href={mailHref}
                    className="inline-flex rounded-full bg-pink-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(244,114,182,0.35)] transition hover:-translate-y-1 hover:bg-pink-600"
                  >
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer
          className={[
            "mt-8 flex flex-col justify-between gap-4 border-t border-pink-200/70 pt-8 text-sm text-[#8a6475] md:flex-row",
            isVisible ? "readable-reveal" : "opacity-0",
          ].join(" ")}
          style={{ animationDelay: "520ms" }}
        >
          <p>© 2026 · Maddie Nguyen</p>
          <p>Creative Account Executive Portfolio</p>
        </footer>
      </div>
    </section>
  );
}