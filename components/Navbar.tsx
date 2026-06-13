const navItems = ["About", "Experience", "Projects", "Certificates", "Skills", "Contact"];

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#0E0E0E]/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-sm font-semibold tracking-[0.25em]">
          MADDIE
        </a>

        <div className="hidden gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-[#C8C8C8] transition hover:text-[#F7F1E8]"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}