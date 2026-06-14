"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "About", id: "about", note: "♪" },
  { label: "Experience", id: "experience", note: "♫" },
  { label: "Projects", id: "projects", note: "♬" },
  { label: "Certificates", id: "certificates", note: "♩" },
  { label: "Skills", id: "skills", note: "♭" },
  { label: "Contact", id: "contact", note: "𝄞" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-32% 0px -52% 0px",
        threshold: 0.12,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full border border-pink-200/70 bg-white/75 px-4 py-3 shadow-[0_18px_60px_rgba(219,39,119,0.16)] backdrop-blur-xl">
        <a
          href="#"
          className="group flex items-center gap-3 rounded-full bg-[#24151d] px-5 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-pink-50 shadow-[0_12px_35px_rgba(36,21,29,0.18)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(36,21,29,0.24)]"
        >
          <span className="brand-vinyl-wrap flex h-7 w-7 items-center justify-center rounded-full">
            <span className="brand-vinyl-disc">
              <span className="brand-vinyl-ring brand-vinyl-ring-1" />
              <span className="brand-vinyl-ring brand-vinyl-ring-2" />
              <span className="brand-vinyl-center">♪</span>
            </span>
          </span>

          <span>Maddie</span>
        </a>

        <div className="hidden items-end overflow-hidden rounded-2xl border border-pink-200 bg-[#24151d] p-1 shadow-inner md:flex">
          {navItems.map((item, index) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={[
                  "piano-key group relative flex h-14 min-w-[110px] items-center justify-center border-r border-black/10 px-4 text-xs font-semibold uppercase tracking-[0.18em] transition duration-300 last:border-r-0",
                  index % 2 === 0
                    ? "bg-[#fff7fb] text-[#24151d]"
                    : "bg-[#f8d9e8] text-[#24151d]",
                  isActive
                    ? "translate-y-1 bg-pink-500 text-white shadow-[inset_0_6px_14px_rgba(36,21,29,0.24)]"
                    : "hover:translate-y-1 hover:bg-pink-300 hover:text-white",
                ].join(" ")}
              >
                <span className="relative z-10">{item.label}</span>

                {isActive && (
                  <>
                    <span className="absolute bottom-1 left-1/2 h-1 w-8 -translate-x-1/2 rounded-full bg-white/80" />

                    <span className="nav-note-burst absolute -top-5 left-1/2 -translate-x-1/2 text-xl text-pink-500">
                      {item.note}
                    </span>

                    <span className="nav-note-burst-2 absolute -top-2 right-4 text-sm text-pink-300">
                      {item.note}
                    </span>
                  </>
                )}
              </a>
            );
          })}
        </div>

        <a
          href="#contact"
          className="hidden rounded-full border border-pink-200 bg-pink-50 px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#F72D9A] transition hover:-translate-y-0.5 hover:bg-pink-100 md:inline-flex"
        >
          Get in touch
        </a>

        <a
          href="#contact"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-pink-500 text-white shadow-[0_12px_35px_rgba(236,72,153,0.35)] md:hidden"
          aria-label="Go to contact section"
        >
          ♫
        </a>
      </nav>
    </header>
  );
}