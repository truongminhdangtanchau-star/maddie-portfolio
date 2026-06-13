import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#E9A6B3]">
        Projects
      </p>

      <h2 className="max-w-3xl text-4xl font-semibold leading-tight">
        Selected work across campaign coordination, client communication, and
        execution support.
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-7"
          >
            <p className="text-sm text-[#E9A6B3]">{project.category}</p>

            <h3 className="mt-4 text-2xl font-semibold">{project.title}</h3>

            <p className="mt-5 leading-7 text-[#C8C8C8]">
              {project.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}