import { experiences } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#E9A6B3]">
        Experience
      </p>

      <div className="space-y-6">
        {experiences.map((item) => (
          <article
            key={item.role}
            className="rounded-3xl border border-white/10 bg-white/5 p-8"
          >
            <p className="text-sm text-[#C8C8C8]">{item.period}</p>

            <h2 className="mt-3 text-2xl font-semibold">{item.role}</h2>

            <p className="mt-2 text-[#E9A6B3]">{item.company}</p>

            <p className="mt-6 leading-7 text-[#C8C8C8]">
              {item.description}
            </p>

            <ul className="mt-6 space-y-3 text-[#C8C8C8]">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="border-l border-[#E9A6B3] pl-4">
                  {bullet}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}