import { experiences } from "../data/portfolio";

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  description: string;
  bullets?: string[];
};

export default function Experience() {
  const experienceList = experiences as ExperienceItem[];

  return (
    <section
      id="experience"
      className="relative overflow-hidden border-t border-pink-200/60 bg-[#fff7fb] px-5 py-28 md:px-8"
    >
      <div className="pointer-events-none absolute -left-28 top-24 h-96 w-96 rounded-full bg-pink-200/45 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-20 h-96 w-96 rounded-full bg-fuchsia-200/35 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#F72D9A]">
              [ Experience ]
            </p>

            <div className="mt-8 hidden items-end gap-2 md:flex">
              <span className="experience-bar h-10 w-2 rounded-full bg-pink-300" />
              <span className="experience-bar h-20 w-2 rounded-full bg-rose-300 [animation-delay:120ms]" />
              <span className="experience-bar h-14 w-2 rounded-full bg-fuchsia-300 [animation-delay:240ms]" />
              <span className="experience-bar h-24 w-2 rounded-full bg-pink-500 [animation-delay:360ms]" />
              <span className="experience-bar h-16 w-2 rounded-full bg-rose-300 [animation-delay:480ms]" />
            </div>
          </div>

          <div>
            <h2 className="headline-wipe max-w-4xl text-4xl font-black leading-[1.02] tracking-[-0.055em] text-[#24151d] md:text-6xl">
              Account experience built around clients, campaigns, and execution.
            </h2>

            <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-[#6f4a5d]">
              My work covers client communication, campaign updates, reporting,
              handover documents, review meetings, and cross-team coordination.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-pink-400 via-rose-200 to-transparent md:block" />

          <div className="space-y-8">
            {experienceList.map((item, index) => (
              <article
                key={item.role}
                className="experience-card readable-reveal group relative grid gap-6 rounded-[2.25rem] border border-pink-200/80 bg-white/80 p-7 shadow-[0_28px_80px_rgba(219,39,119,0.14)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-pink-300 hover:shadow-[0_34px_100px_rgba(219,39,119,0.22)] md:grid-cols-[0.75fr_1.25fr] md:p-8 md:pl-16"
              >
                <div className="absolute left-0 top-8 hidden -translate-x-1/2 md:block">
                  <div className="experience-dot flex h-12 w-12 items-center justify-center rounded-full border border-pink-200 bg-[#24151d] text-sm font-black text-pink-100 shadow-[0_16px_40px_rgba(36,21,29,0.22)]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                <div>
                  <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#F72D9A]">
                    <span className="h-2 w-2 rounded-full bg-[#F72D9A]" />
                    Track {String(index + 1).padStart(2, "0")}
                  </div>

                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8a6475]">
                    {item.period}
                  </p>

                  <p className="mt-4 text-lg font-black text-[#F72D9A]">
                    {item.company}
                  </p>

                  <div className="mt-8 flex items-end gap-1.5">
                    <span className="experience-mini-bar h-5 w-1.5 rounded-full bg-pink-300" />
                    <span className="experience-mini-bar h-9 w-1.5 rounded-full bg-rose-300 [animation-delay:100ms]" />
                    <span className="experience-mini-bar h-6 w-1.5 rounded-full bg-fuchsia-300 [animation-delay:200ms]" />
                    <span className="experience-mini-bar h-11 w-1.5 rounded-full bg-pink-500 [animation-delay:300ms]" />
                    <span className="experience-mini-bar h-7 w-1.5 rounded-full bg-rose-300 [animation-delay:400ms]" />
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl font-black leading-tight tracking-[-0.045em] text-[#24151d] md:text-5xl">
                    {item.role}
                  </h3>

                  <p className="mt-5 max-w-3xl text-lg font-medium leading-8 text-[#6f4a5d]">
                    {item.description}
                  </p>

                  {item.bullets && item.bullets.length > 0 && (
                    <ul className="mt-7 grid gap-3">
                      {item.bullets.slice(0, 3).map((bullet) => (
                        <li
                          key={bullet}
                          className="flex gap-3 rounded-2xl border border-pink-100 bg-pink-50/75 p-4 text-sm font-medium leading-6 text-[#6f4a5d] transition duration-300 group-hover:border-pink-200"
                        >
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#F72D9A]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-8 h-1.5 overflow-hidden rounded-full bg-pink-100">
                    <div className="experience-progress h-full rounded-full bg-gradient-to-r from-pink-400 via-rose-300 to-fuchsia-400" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}