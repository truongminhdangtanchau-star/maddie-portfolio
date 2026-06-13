export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#E9A6B3]">
        About
      </p>

      <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
        <h2 className="text-4xl font-semibold leading-tight">
          From client servicing to creative campaign coordination.
        </h2>

        <div className="space-y-6 text-lg leading-8 text-[#C8C8C8]">
          <p>
            Maddie Nguyen is an Account Executive with experience in client
            servicing, campaign coordination, performance reporting, and
            cross-functional project delivery.
          </p>

          <p>
            Her background in B2B campaign operations has trained her to manage
            timelines, communicate with clients, prepare updates, coordinate
            internal teams, and keep campaign execution aligned with business
            objectives.
          </p>

          <p>
            She is now seeking to grow in music, entertainment, and creative
            brand environments, where strong coordination, communication, taste,
            and execution discipline are essential.
          </p>
        </div>
      </div>
    </section>
  );
}