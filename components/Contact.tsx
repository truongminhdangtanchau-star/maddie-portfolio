"use client";

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
      id="contact"
      className="relative overflow-hidden border-t border-[#20171a]/10 px-5 py-28 md:px-8"
      style={{
        background:
          "radial-gradient(circle at 12% 18%, rgba(255,255,255,0.42), transparent 30%), radial-gradient(circle at 88% 12%, rgba(231,143,173,0.18), transparent 34%), #e8ded1",
      }}
    >
      <div className="pointer-events-none absolute left-6 top-20 text-[8rem] font-black leading-none tracking-[-0.08em] text-white/20 md:text-[15rem]">
        HELLO
      </div>

      <div className="pointer-events-none absolute bottom-16 right-6 text-[7rem] font-black leading-none tracking-[-0.08em] text-white/20 md:text-[13rem]">
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
            [ Contact ]
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
            Let&apos;s build something clear
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
                "relative min-h-[36rem] overflow-hidden rounded-[1.5rem] border border-[#20171a]/10 bg-[#20171a] p-6 text-[#fff8ef] shadow-[0_24px_70px_rgba(32,23,26,0.18)] md:p-8",
                reveal("left"),
              ].join(" ")}
              style={delay(260)}
            >
              <p className="text-xs font-black uppercase tracking-[0.34em] text-white/55">
                Creative opportunity
              </p>

              <h2 className="mt-8 max-w-4xl text-6xl font-black uppercase leading-[0.86] tracking-[-0.08em] text-[#fff8ef] md:text-8xl">
                Let&apos;s build the next creative campaign.
              </h2>

              <p className="mt-8 max-w-2xl text-base font-semibold leading-7 text-white/68 md:text-lg md:leading-8">
                Open to music label, entertainment, creative agency, and brand
                campaign opportunities where communication, coordination, and
                execution discipline can support stronger creative work.
              </p>

              <p className="absolute bottom-8 right-8 rotate-[-4deg] text-7xl font-black italic leading-none tracking-[-0.08em] text-[#e78fad] md:text-[8rem]">
                contact
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
                  Contact details
                </p>

                <div className="mt-8 space-y-5">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.26em] text-[#20171a]/45">
                      Email
                    </p>

                    <a
                      href={mailHref}
                      className="mt-2 block break-words text-xl font-black leading-tight text-[#20171a] underline-offset-4 transition hover:text-[#e78fad] hover:underline md:text-2xl"
                    >
                      {profile.email}
                    </a>
                  </div>

                  <div className="h-px bg-[#20171a]/15" />

                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.26em] text-[#20171a]/45">
                      Phone
                    </p>

                    <a
                      href={phoneHref}
                      className="mt-2 block text-xl font-black leading-tight text-[#20171a] underline-offset-4 transition hover:text-[#e78fad] hover:underline md:text-2xl"
                    >
                      {profile.phone}
                    </a>
                  </div>

                  <div className="h-px bg-[#20171a]/15" />

                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.26em] text-[#20171a]/45">
                      Location
                    </p>

                    <p className="mt-2 text-xl font-black leading-tight text-[#20171a] md:text-2xl">
                      {profile.location}
                    </p>
                  </div>
                </div>
              </div>

              <div
                className={[
                  "relative overflow-hidden rounded-[1.5rem] border border-[#20171a]/10 bg-[#f7f1e8]/85 p-6 shadow-[0_18px_45px_rgba(32,23,26,0.08)]",
                  reveal("right"),
                ].join(" ")}
                style={delay(460)}
              >
                <p className="text-xs font-black uppercase tracking-[0.34em] text-[#20171a]/55">
                  Quick actions
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={mailHref}
                    className="inline-flex rounded-full bg-[#20171a] px-5 py-3 text-sm font-black text-[#fff8ef] transition duration-300 hover:-translate-y-1"
                  >
                    Email Maddie
                  </a>

                  <a
                    href={phoneHref}
                    className="inline-flex rounded-full border border-[#20171a]/15 bg-[#f7f1e8]/90 px-5 py-3 text-sm font-black text-[#20171a] transition duration-300 hover:-translate-y-1"
                  >
                    Call
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

                <p className="mt-8 max-w-md text-sm font-semibold leading-6 text-[#6b5d58]">
                  For collaboration, interview, creative coordination, or
                  entertainment campaign opportunities, contact Maddie directly.
                </p>

                <p className="absolute bottom-5 right-6 rotate-[-4deg] text-5xl font-black italic tracking-[-0.08em] text-[#e78fad]/55">
                  hello
                </p>
              </div>

              <div
                className={[
                  "relative overflow-hidden rounded-[1.5rem] border border-[#20171a]/10 bg-[#f7f1e8]/85 p-6 shadow-[0_18px_45px_rgba(32,23,26,0.08)]",
                  reveal("right"),
                ].join(" ")}
                style={delay(580)}
              >
                <p className="text-xs font-black uppercase tracking-[0.34em] text-[#20171a]/55">
                  Availability
                </p>

                <h3 className="mt-5 text-4xl font-black uppercase leading-[0.9] tracking-[-0.06em] text-[#20171a] md:text-5xl">
                  Open to creative teams.
                </h3>

                <div className="mt-7 h-px bg-[#20171a]/15" />

                <div className="mt-5 grid gap-3 text-sm font-bold text-[#6b5d58] md:grid-cols-3">
                  <p>Music labels</p>
                  <p>Entertainment</p>
                  <p>Brand campaigns</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer
          className={[
            "mt-8 flex flex-col justify-between gap-4 border-t border-[#20171a]/15 pt-8 text-sm font-semibold text-[#20171a]/50 md:flex-row",
            reveal("up"),
          ].join(" ")}
          style={delay(740)}
        >
          <p>© 2026 · Maddie Nguyen</p>
          <p>Creative Account Executive Portfolio</p>
        </footer>
      </div>
    </section>
  );
}