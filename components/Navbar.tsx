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
    const handleScroll = () => {
      const triggerPoint = window.scrollY + window.innerHeight * 0.38;

      let current = "about";

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

      if (nearBottom) current = "contact";

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
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full border border-[#20171a]/10 bg-[#f7f1e8]/90 px-4 py-3 shadow-[0_18px_55px_rgba(32,23,26,0.12)] backdrop-blur-xl">
        <a
          href="#"
          className="group relative flex items-center gap-3 overflow-hidden rounded-full border border-[#20171a]/15 bg-[#fff8ef] px-5 py-3 text-xs font-black uppercase tracking-[0.28em] text-[#20171a] shadow-[0_12px_30px_rgba(32,23,26,0.10)] transition duration-500 hover:-translate-y-0.5 hover:border-[#20171a]/25 hover:bg-[#20171a] hover:text-[#fff8ef]"
        >
          <span className="relative z-10">Maddie</span>

          <span className="relative z-10 inline-block text-sm text-[#e78fad] transition duration-500 group-hover:translate-x-1 group-hover:rotate-12 group-hover:scale-110">
            ♪
          </span>

          <span className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[#e78fad]/20 blur-2xl" />
        </a>

        <div className="hidden items-center rounded-full border border-[#20171a]/10 bg-[#fff8ef]/55 p-1 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? "page" : undefined}
                className={[
                  "group relative flex items-center gap-2 overflow-hidden rounded-full border px-4 py-3 text-xs font-black uppercase tracking-[0.18em] transition-all duration-500",
                  isActive
                    ? "border-[#e78fad]/60 bg-[#e78fad]/20 text-[#20171a] shadow-[0_10px_26px_rgba(32,23,26,0.10)]"
                    : "border-transparent text-[#20171a]/62 hover:-translate-y-0.5 hover:border-[#20171a]/10 hover:bg-[#f7f1e8] hover:text-[#20171a]",
                ].join(" ")}
              >
                <span
                  className={[
                    "relative z-10 flex h-5 items-center justify-center overflow-hidden rounded-full text-sm transition-all duration-500",
                    isActive
                      ? "w-5 translate-x-0 rotate-0 bg-[#20171a] text-[#fff8ef] opacity-100"
                      : "w-0 -translate-x-3 -rotate-12 bg-[#e78fad]/35 text-[#20171a] opacity-0 group-hover:w-5 group-hover:translate-x-0 group-hover:rotate-0 group-hover:opacity-100",
                  ].join(" ")}
                >
                  {item.note}
                </span>

                <span className="relative z-10">{item.label}</span>

                {isActive && (
                  <>
                    <span className="absolute -right-1 -top-3 rotate-[-14deg] text-xl font-black text-[#e78fad] opacity-90 transition-all duration-500">
                      {item.note}
                    </span>

                    <span className="absolute bottom-1.5 left-6 right-6 h-px bg-[#20171a]/35" />
                  </>
                )}

                <span className="absolute inset-0 translate-x-[-115%] bg-gradient-to-r from-transparent via-white/35 to-transparent transition duration-700 group-hover:translate-x-[115%]" />
              </a>
            );
          })}
        </div>

        <a
          href="#contact"
          className="hidden rounded-full border border-[#20171a]/15 bg-[#fff8ef] px-5 py-3 text-xs font-black uppercase tracking-[0.22em] text-[#20171a] shadow-sm transition duration-500 hover:-translate-y-0.5 hover:bg-[#20171a] hover:text-[#fff8ef] md:inline-flex"
        >
          Get in touch
        </a>

        <a
          href="#contact"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#20171a] text-[#fff8ef] shadow-[0_12px_35px_rgba(32,23,26,0.22)] transition duration-500 hover:-translate-y-0.5 md:hidden"
          aria-label="Go to contact section"
        >
          ♪
        </a>
      </nav>
    </header>
  );
}