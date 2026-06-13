import { skills } from "../data/portfolio";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-t border-pink-200/60 bg-[#fff7fb] px-5 py-28 md:px-8"
    >
      <div className="pointer-events-none absolute -left-24 top-20 h-96 w-96 rounded-full bg-pink-200/45 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-fuchsia-200/35 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-pink-500">
              [ Skills ]
            </p>

            <div className="mt-8 hidden items-end gap-2 md:flex">
              <span className="skill-bar h-10 w-2 rounded-full bg-pink-300" />
              <span className="skill-bar h-20 w-2 rounded-full bg-rose-300 [animation-delay:120ms]" />
              <span className="skill-bar h-14 w-2 rounded-full bg-fuchsia-300 [animation-delay:240ms]" />
              <span className="skill-bar h-28 w-2 rounded-full bg-pink-400 [animation-delay:360ms]" />
              <span className="skill-bar h-16 w-2 rounded-full bg-rose-300 [animation-delay:480ms]" />
            </div>
          </div>

          <div>
            <h2 className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.055em] text-[#24151d] md:text-6xl">
              A mix of campaign tools, client-facing execution, and soft skills
              for creative team environments.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6f4a5d]">
              Technical skills keep the campaign running. Soft skills keep the
              humans from turning the campaign into a group-chat tragedy.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <SkillColumn
            title="Technical Skills"
            subtitle="Campaign operations, reporting, research, and account execution."
            icon="technical"
            items={skills.technical}
          />

          <SkillColumn
            title="Soft Skills"
            subtitle="Communication, coordination, adaptability, and client-facing discipline."
            icon="soft"
            items={skills.soft}
          />
        </div>
      </div>
    </section>
  );
}

function SkillColumn({
  title,
  subtitle,
  icon,
  items,
}: {
  title: string;
  subtitle: string;
  icon: "technical" | "soft";
  items: string[];
}) {
  return (
    <article className="skill-card group relative overflow-hidden rounded-[2.25rem] border border-pink-200/80 bg-white/75 p-7 shadow-[0_28px_80px_rgba(219,39,119,0.14)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-pink-300 hover:shadow-[0_36px_110px_rgba(219,39,119,0.22)] md:p-8">
      <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-pink-200/50 blur-2xl transition duration-300 group-hover:bg-fuchsia-200/70" />

      <div className="relative mb-8 flex items-start justify-between gap-6">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#24151d] text-pink-100 shadow-[0_14px_35px_rgba(36,21,29,0.18)]">
          {icon === "technical" ? (
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
              <path d="M4 19V5" />
              <path d="M8 19V9" />
              <path d="M12 19V3" />
              <path d="M16 19v-7" />
              <path d="M20 19V7" />
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
              <path d="M12 21s-7-4.6-9.3-9.2C.7 7.8 3.2 4 7.2 4c2.1 0 3.7 1.1 4.8 2.7C13.1 5.1 14.7 4 16.8 4c4 0 6.5 3.8 4.5 7.8C19 16.4 12 21 12 21Z" />
            </svg>
          )}
        </div>

        <span className="rounded-full border border-pink-200 bg-pink-50 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-pink-500">
          {icon === "technical" ? "Left Track" : "Right Track"}
        </span>
      </div>

      <div className="relative">
        <h3 className="text-3xl font-semibold tracking-[-0.045em] text-[#24151d]">
          {title}
        </h3>

        <p className="mt-4 max-w-xl text-base leading-7 text-[#6f4a5d]">
          {subtitle}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {items.map((skill) => (
            <span
              key={skill}
              className="skill-pill rounded-full border border-pink-200 bg-pink-50/80 px-4 py-2 text-sm font-medium text-[#6f4a5d] transition duration-300 hover:-translate-y-0.5 hover:border-pink-300 hover:bg-pink-100 hover:text-pink-700"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-8 h-1.5 overflow-hidden rounded-full bg-pink-100">
          <div className="skill-progress h-full rounded-full bg-gradient-to-r from-pink-300 via-rose-300 to-fuchsia-300" />
        </div>
      </div>
    </article>
  );
}