import Image from "next/image";
import { about, profile } from "../data/portfolio";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-pink-200/60 bg-[#fff7fb] px-5 py-28 md:px-8"
    >
      <div className="pointer-events-none absolute left-[-8rem] top-20 h-80 w-80 rounded-full bg-pink-200/50 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-10rem] right-[-8rem] h-96 w-96 rounded-full bg-fuchsia-200/40 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 flex items-center justify-between gap-6">
          <p className="text-sm uppercase tracking-[0.32em] text-pink-500">
            [ {about.label} ]
          </p>

          <div className="hidden h-px flex-1 bg-gradient-to-r from-pink-200 to-transparent md:block" />

          <p className="hidden text-sm italic text-pink-400 md:block">
            soft discipline · creative coordination · campaign taste
          </p>
        </div>

        <div className="grid items-center gap-14 md:grid-cols-[0.9fr_1.1fr]">
          <div className="about-image-float relative mx-auto w-full max-w-md">
            <div className="absolute -left-6 -top-6 h-full w-full rounded-[2.25rem] bg-pink-200/60 blur-sm" />

            <div className="spotify-card relative overflow-hidden rounded-[2.25rem] border border-pink-200/70 bg-[#171217] p-4 shadow-[0_35px_100px_rgba(219,39,119,0.32)]">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-pink-200/60">
                    Now Playing
                  </p>
                  <p className="mt-1 text-sm font-medium text-white">
                    Maddie Nguyen
                  </p>
                </div>

                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-pink-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-200" />
                  <span className="h-2.5 w-2.5 rounded-full bg-fuchsia-300" />
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[1.7rem] bg-pink-100 shadow-[0_24px_70px_rgba(0,0,0,0.35)]">
                <div className="relative aspect-square">
                  <Image
                    src="/maddie.png"
                    alt="Portrait of Maddie Nguyen"
                    fill
                    priority
                    className="object-cover object-top"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-white/10" />
                  <div className="spotify-shine absolute inset-0" />
                </div>
              </div>

              <div className="mt-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">
                      Creative Account Executive
                    </h3>
                    <p className="mt-1 text-sm text-pink-100/60">
                      Music · Entertainment · Brand Campaigns
                    </p>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-400 text-white shadow-[0_12px_30px_rgba(244,114,182,0.45)]">
                    <svg
                      className="ml-0.5 h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M8 5v14l11-7L8 5Z" />
                    </svg>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div className="spotify-progress h-full w-[68%] rounded-full bg-pink-300" />
                  </div>

                  <div className="mt-2 flex justify-between text-xs text-pink-100/45">
                    <span>0:24</span>
                    <span>3:12</span>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-pink-100/70">
                    Client Servicing
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-pink-100/70">
                    Campaign Flow
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-pink-100/70">
                    Artist-side Energy
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -right-4 rounded-full border border-pink-200 bg-white/90 px-5 py-3 text-sm font-medium text-pink-600 shadow-lg backdrop-blur">
              Available for creative teams
            </div>
          </div>

          <div className="about-content-reveal">
            <p className="mb-5 text-sm uppercase tracking-[0.28em] text-pink-400">
              From client servicing to creative campaign coordination
            </p>

            <h2 className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.055em] text-[#24151d] md:text-6xl">
              {about.headline}
            </h2>

            <div className="mt-10 space-y-6 text-lg leading-8 text-[#6f4a5d]">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full border border-pink-200 bg-white/80 px-6 py-3 text-sm font-semibold text-[#24151d] shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-pink-300 hover:bg-pink-50"
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
              <div className="rounded-3xl border border-pink-200 bg-white/70 p-5 shadow-sm backdrop-blur">
                <p className="text-3xl font-semibold text-pink-500">12</p>
                <p className="mt-2 text-sm leading-6 text-[#7b5a69]">
                  client accounts managed across campaign delivery
                </p>
              </div>

              <div className="rounded-3xl border border-pink-200 bg-white/70 p-5 shadow-sm backdrop-blur">
                <p className="text-3xl font-semibold text-pink-500">2+</p>
                <p className="mt-2 text-sm leading-6 text-[#7b5a69]">
                  years in client-facing campaign operations
                </p>
              </div>

              <div className="rounded-3xl border border-pink-200 bg-white/70 p-5 shadow-sm backdrop-blur">
                <p className="text-3xl font-semibold text-pink-500">∞</p>
                <p className="mt-2 text-sm leading-6 text-[#7b5a69]">
                  interest in music, entertainment, and creative brands
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}