import { profile } from "../data/portfolio";

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-28">
      <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#E9A6B3]">
        {profile.name}
      </p>

      <h1 className="max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
        {profile.title}
      </h1>

      <p className="mt-8 max-w-2xl text-lg leading-8 text-[#C8C8C8]">
        {profile.intro}
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="#projects"
          className="rounded-full bg-[#F7F1E8] px-6 py-3 text-sm font-medium text-[#0E0E0E]"
        >
          View Work
        </a>

        <a
          href={`mailto:${profile.email}`}
          className="rounded-full border border-[#F7F1E8]/30 px-6 py-3 text-sm font-medium text-[#F7F1E8]"
        >
          Contact Maddie
        </a>
      </div>
    </section>
  );
}