import { certificates } from "../data/portfolio";

export default function Certificates() {
  return (
    <section id="certificates" className="mx-auto max-w-6xl px-6 py-24">
      <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#E9A6B3]">
        Certificates
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {certificates.map((item) => (
          <article
            key={item.name}
            className="rounded-3xl border border-white/10 bg-white/5 p-7"
          >
            <h3 className="text-xl font-semibold">{item.name}</h3>
            <p className="mt-3 text-[#E9A6B3]">{item.issuer}</p>
            <p className="mt-2 text-[#C8C8C8]">{item.year}</p>
          </article>
        ))}
      </div>
    </section>
  );
}