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
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.scrollY + window.innerHeight * 0.38;

      let current = "";

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);

        if (!section) return;

        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (triggerPoint >= top && triggerPoint < bottom) {
          current = item.id;
        }
      });

      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 80;

      if (nearBottom) {
        current = "contact";
      }

      setActiveSection(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full border border-[#20171a]/10 bg-[#f7f1e8]/82 px-4 py-3 shadow-[0_18px_55px_rgba(32,23,26,0.12)] backdrop-blur-xl">
        <a
          href="#"
          className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-[#20171a] px-5 py-3 text-xs font-black uppercase tracking-[0.28em] text-[#fff8ef] shadow-[0_12px_35px_rgba(32,23,26,0.18)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(32,23,26,0.24)]"
        >
          <span className="relative z-10">Maddie</span>

          <span className="relative z-10 text-sm text-[#e78fad] transition duration-300 group-hover:rotate-12">
            ♪
          </span>

          <span className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[#e78fad]/25 blur-2xl" />
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={[
                  "group relative overflow-hidden rounded-full px-4 py-3 text-xs font-black uppercase tracking-[0.18em] transition-all duration-300",
                  isActive
                    ? "bg-[#20171a] text-[#fff8ef] shadow-[0_12px_32px_rgba(32,23,26,0.18)]"
                    : "text-[#20171a]/62 hover:-translate-y-0.5 hover:bg-[#20171a]/7 hover:text-[#20171a]",
                ].join(" ")}
              >
                <span className="relative z-10">{item.label}</span>

                {isActive && (
                  <span className="absolute -right-1 -top-2 rotate-[-12deg] text-lg font-black text-[#e78fad]">
                    {item.note}
                  </span>
                )}

                <span className="absolute inset-x-4 bottom-2 h-px scale-x-0 bg-[#e78fad] transition duration-300 group-hover:scale-x-100" />
              </a>
            );
          })}
        </div>

        <a
          href="#contact"
          className="hidden rounded-full border border-[#20171a]/15 bg-[#f7f1e8]/90 px-5 py-3 text-xs font-black uppercase tracking-[0.22em] text-[#20171a] shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#20171a] hover:text-[#fff8ef] md:inline-flex"
        >
          Get in touch
        </a>

        <a
          href="#contact"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#20171a] text-[#fff8ef] shadow-[0_12px_35px_rgba(32,23,26,0.22)] transition duration-300 hover:-translate-y-0.5 md:hidden"
          aria-label="Go to contact section"
        >
          ✦
        </a>
      </nav>
    </header>
  );
}