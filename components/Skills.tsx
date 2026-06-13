import { skills } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#E9A6B3]">
        Skills
      </p>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-[#F7F1E8]"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}