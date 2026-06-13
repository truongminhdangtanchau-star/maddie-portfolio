import { profile } from "../data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <div className="rounded-3xl border border-white/10 bg-[#E9A6B3] p-10 text-[#0E0E0E] md:p-14">
        <p className="mb-4 text-sm uppercase tracking-[0.35em]">
          Contact
        </p>

        <h2 className="max-w-3xl text-4xl font-semibold leading-tight">
          Open to music label, entertainment, creative agency, and brand
          campaign opportunities.
        </h2>

        <div className="mt-8 space-y-3 text-lg">
          <p>Email: {profile.email}</p>
          <p>Phone: {profile.phone}</p>
          <p>LinkedIn: linkedin.com/in/maddienguyenn</p>
        </div>

        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-block rounded-full bg-[#0E0E0E] px-6 py-3 text-sm font-medium text-[#F7F1E8]"
        >
          Send Email
        </a>
      </div>
    </section>
  );
}