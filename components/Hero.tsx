import { profile } from "../data/portfolio";

export default function Hero() {
  return (
    <section className="hero-stage relative flex min-h-screen items-center overflow-hidden bg-[#fff7fb] px-5 py-28 md:px-8">
      <div className="pointer-events-none absolute -left-28 top-20 h-96 w-96 rounded-full bg-pink-200/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-[28rem] w-[28rem] rounded-full bg-fuchsia-200/40 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-100/70 blur-3xl" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="music-symbol music-symbol-1">♪</div>
        <div className="music-symbol music-symbol-2">♫</div>
        <div className="music-symbol music-symbol-3">♬</div>
        <div className="music-symbol music-symbol-4">♩</div>
        <div className="music-symbol music-symbol-5">𝄞</div>
        <div className="music-symbol music-symbol-6">♭</div>
        <div className="music-symbol music-symbol-7">♯</div>
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 md:grid-cols-[1.05fr_0.95fr]">
        <div className="hero-reveal">
          <p className="mb-5 text-sm uppercase tracking-[0.35em] text-pink-500">
            {profile.name}
          </p>

          <div className="hero-marquee-wrap mb-8 overflow-hidden rounded-full border border-pink-200 bg-white/70 py-2 backdrop-blur">
            <div className="hero-marquee">
              MUSIC LABELS ✦ ENTERTAINMENT ✦ BRAND CAMPAIGNS ✦ CREATIVE COORDINATION ✦ ACCOUNT FLOW ✦ MUSIC LABELS ✦ ENTERTAINMENT ✦ BRAND CAMPAIGNS ✦
            </div>
          </div>

          <h1 className="hero-glow-title max-w-5xl text-6xl font-black uppercase leading-[0.9] tracking-[-0.08em] text-[#24151d] md:text-[7.6rem]">
            Creative
            <br />
            Account
            <br />
            Executive
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-9 text-[#6f4a5d]">
            {profile.intro}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
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
              className="group inline-flex items-center gap-3 rounded-full border border-pink-200 bg-white/80 px-6 py-3 text-sm font-semibold text-[#24151d] shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-pink-300 hover:bg-pink-50"
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
              className="group inline-flex items-center gap-3 rounded-full border border-pink-200 bg-white/80 px-6 py-3 text-sm font-semibold text-[#24151d] shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-pink-300 hover:bg-pink-50"
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

        <div className="hero-card-float relative">
          <div className="absolute -left-5 -top-5 h-full w-full rounded-[2.5rem] border border-pink-300/70" />

          <div className="relative overflow-hidden rounded-[2.5rem] border border-pink-200 bg-[#24151d] p-5 text-pink-50 shadow-[0_35px_110px_rgba(219,39,119,0.28)]">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-pink-100/45">
                  Now Playing
                </p>
                <p className="mt-2 text-lg font-medium">Maddie Nguyen</p>
              </div>

              <div className="hero-play-pulse flex h-14 w-14 items-center justify-center rounded-full bg-pink-400 text-white shadow-[0_16px_40px_rgba(244,114,182,0.45)]">
                <svg
                  className="ml-0.5 h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7L8 5Z" />
                </svg>
              </div>
            </div>

            <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-6 md:grid-cols-[1fr_0.95fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-pink-100/45">
                  Focus
                </p>

                <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.05em] md:text-5xl">
                  Music · Entertainment · Brand Campaigns
                </h2>

                <p className="mt-6 leading-7 text-pink-100/60">
                  A soft but structured portfolio for creative coordination,
                  account support, and campaign execution.
                </p>

                <div className="mt-8 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div className="hero-progress h-full rounded-full bg-gradient-to-r from-pink-300 via-rose-300 to-fuchsia-300" />
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-pink-100/70">
                    Client Servicing
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-pink-100/70">
                    Campaign Flow
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-pink-100/70">
                    Creative Teams
                  </span>
                </div>
              </div>

              <div className="record-player flex items-center justify-center">
                <div className="vinyl-shell">
                  <div className="vinyl-disc">
                    <div className="vinyl-ring vinyl-ring-1" />
                    <div className="vinyl-ring vinyl-ring-2" />
                    <div className="vinyl-ring vinyl-ring-3" />
                    <div className="vinyl-center">
                      <span>MADDIE</span>
                    </div>
                  </div>

                  <div className="tonearm">
                    <div className="tonearm-head" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-end gap-1.5">
              <span className="hero-bar h-5 w-1.5 rounded-full bg-pink-300" />
              <span className="hero-bar h-10 w-1.5 rounded-full bg-rose-300 [animation-delay:100ms]" />
              <span className="hero-bar h-7 w-1.5 rounded-full bg-fuchsia-300 [animation-delay:200ms]" />
              <span className="hero-bar h-12 w-1.5 rounded-full bg-pink-400 [animation-delay:300ms]" />
              <span className="hero-bar h-8 w-1.5 rounded-full bg-rose-300 [animation-delay:400ms]" />
              <span className="hero-bar h-14 w-1.5 rounded-full bg-fuchsia-300 [animation-delay:500ms]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}