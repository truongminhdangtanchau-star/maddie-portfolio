import { profile } from "../data/portfolio";

export default function Contact() {
  const phoneHref = "tel:+84905089503";
  const mailHref = `mailto:${profile.email}?subject=Creative%20Opportunity%20for%20Maddie%20Nguyen`;

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-pink-200/60 bg-[#fff7fb] px-5 py-28 md:px-8"
    >
      <div className="pointer-events-none absolute -left-28 bottom-10 h-96 w-96 rounded-full bg-pink-200/45 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-20 h-80 w-80 rounded-full bg-fuchsia-200/35 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="contact-card relative overflow-hidden rounded-[2.5rem] border border-pink-200/80 bg-white/75 p-7 shadow-[0_35px_110px_rgba(219,39,119,0.18)] backdrop-blur md:p-12">
          <div className="pointer-events-none absolute right-8 top-8 hidden items-end gap-2 md:flex">
            <span className="contact-bar h-8 w-2 rounded-full bg-pink-300" />
            <span className="contact-bar h-14 w-2 rounded-full bg-rose-300 [animation-delay:120ms]" />
            <span className="contact-bar h-10 w-2 rounded-full bg-fuchsia-300 [animation-delay:240ms]" />
            <span className="contact-bar h-20 w-2 rounded-full bg-pink-400 [animation-delay:360ms]" />
            <span className="contact-bar h-12 w-2 rounded-full bg-rose-300 [animation-delay:480ms]" />
          </div>

          <div className="grid gap-12 md:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="mb-5 text-sm uppercase tracking-[0.32em] text-pink-500">
                [ Contact ]
              </p>

              <h2 className="max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.06em] text-[#24151d] md:text-7xl">
                Let&apos;s build the next creative campaign.
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-[#6f4a5d]">
                Open to music label, entertainment, creative agency, and brand
                campaign opportunities where communication, coordination, and
                execution discipline can support stronger creative work.
              </p>

              <div className="mt-10 rounded-[2rem] border border-pink-200 bg-pink-50/80 p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-pink-500">
                  Contact Me
                </p>

                <p className="mt-3 text-base leading-7 text-[#6f4a5d]">
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
                      className="h-5 w-5 text-pink-500 transition group-hover:scale-110"
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
            </div>

            <div className="flex flex-col justify-end">
              <div className="rounded-[2rem] border border-pink-200 bg-[#24151d] p-6 text-pink-50 shadow-[0_24px_70px_rgba(36,21,29,0.22)]">
                <div className="mb-8 flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.28em] text-pink-100/50">
                    Contact Card
                  </p>

                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-pink-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-fuchsia-300" />
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-pink-100/40">
                      Email
                    </p>
                    <a
                      href={mailHref}
                      className="mt-2 block break-words text-lg text-pink-50 underline-offset-4 transition hover:text-pink-300 hover:underline"
                    >
                      {profile.email}
                    </a>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-pink-100/40">
                      Phone
                    </p>
                    <a
                      href={phoneHref}
                      className="mt-2 block text-lg text-pink-50 underline-offset-4 transition hover:text-pink-300 hover:underline"
                    >
                      {profile.phone}
                    </a>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-pink-100/40">
                      Location
                    </p>
                    <p className="mt-2 text-lg text-pink-50">
                      {profile.location}
                    </p>
                  </div>

                  <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div className="contact-progress h-full rounded-full bg-gradient-to-r from-pink-300 via-rose-300 to-fuchsia-300" />
                  </div>

                  <a
                    href={mailHref}
                    className="inline-flex rounded-full bg-pink-400 px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(244,114,182,0.35)] transition hover:-translate-y-1 hover:bg-pink-500"
                  >
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-8 flex flex-col justify-between gap-4 border-t border-pink-200/70 pt-8 text-sm text-[#8a6475] md:flex-row">
          <p>© 2026 · Maddie Nguyen</p>
          <p>Creative Account Executive Portfolio</p>
        </footer>
      </div>
    </section>
  );
}