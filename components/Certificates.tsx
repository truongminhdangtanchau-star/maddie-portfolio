import { certificates } from "../data/portfolio";

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="relative overflow-hidden border-t border-pink-200/60 bg-[#fff7fb] px-5 py-28 md:px-8"
    >
      <div className="pointer-events-none absolute -left-24 top-20 h-80 w-80 rounded-full bg-pink-200/45 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-fuchsia-200/35 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-pink-500">
              [ Education & Certificates ]
            </p>

            <div className="mt-8 hidden items-end gap-2 md:flex">
              <span className="music-bar h-8 w-2 rounded-full bg-pink-300" />
              <span className="music-bar h-14 w-2 rounded-full bg-rose-300 [animation-delay:120ms]" />
              <span className="music-bar h-10 w-2 rounded-full bg-fuchsia-300 [animation-delay:240ms]" />
              <span className="music-bar h-20 w-2 rounded-full bg-pink-400 [animation-delay:360ms]" />
              <span className="music-bar h-12 w-2 rounded-full bg-rose-300 [animation-delay:480ms]" />
            </div>
          </div>

          <div>
            <h2 className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.055em] text-[#24151d] md:text-6xl">
              Academic background and certificates that support professional
              communication, business thinking, and execution discipline.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6f4a5d]">
              A compact view of Maddie&apos;s education and qualifications,
              presented with the softness of a creative portfolio and the
              clarity recruiters still require, tragically.
            </p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {certificates.map((item, index) => (
            <article
              key={item.name}
              className="certificate-card group relative overflow-hidden rounded-[2rem] border border-pink-200/80 bg-white/75 p-7 shadow-[0_24px_70px_rgba(219,39,119,0.12)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-pink-300 hover:shadow-[0_30px_90px_rgba(219,39,119,0.20)]"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-pink-200/50 blur-2xl transition duration-300 group-hover:bg-fuchsia-200/60" />

              <div className="relative flex items-start justify-between gap-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#24151d] text-pink-100 shadow-[0_14px_35px_rgba(36,21,29,0.18)]">
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
                      <path d="M22 10 12 5 2 10l10 5 10-5Z" />
                      <path d="M6 12v5c0 1.1 2.7 2 6 2s6-.9 6-2v-5" />
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
                      <path d="M12 3 14.7 8.5 21 9.4 16.5 13.8 17.5 20 12 17.1 6.5 20 7.5 13.8 3 9.4 9.3 8.5 12 3Z" />
                    </svg>
                  ) : index === 2 ? (
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

                <span className="rounded-full border border-pink-200 bg-pink-50 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-pink-500">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="relative mt-8">
                <h3 className="text-2xl font-semibold leading-tight tracking-[-0.035em] text-[#24151d]">
                  {item.name}
                </h3>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <p className="rounded-full bg-pink-100/80 px-4 py-2 text-sm font-medium text-pink-700">
                    {item.issuer}
                  </p>

                  <p className="rounded-full border border-pink-200 bg-white/70 px-4 py-2 text-sm text-[#7b5a69]">
                    {item.year}
                  </p>
                </div>
              </div>

              <div className="relative mt-8 h-1.5 overflow-hidden rounded-full bg-pink-100">
                <div className="certificate-progress h-full rounded-full bg-gradient-to-r from-pink-300 via-rose-300 to-fuchsia-300" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}