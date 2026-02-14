import { type ReactNode, useState } from "react";

interface NavLink {
  key: string;
  label: ReactNode;
  href: string;
  children?: { label: string; href: string; external?: boolean }[];
}

const links: NavLink[] = [
  {
    key: "work",
    label: "Work",
    href: "#experience",
    children: [
      { label: "Experience", href: "#experience" },
      { label: "Projects", href: "#projects" },
    ],
  },
  {
    key: "life",
    label: <>Life <span className="text-matcha-300 font-hand text-[14px]">(updates)</span></>,
    href: "#about",
    children: [
      { label: "About Me", href: "#about" },
      { label: "Travel", href: "#travel" },
      { label: "Reading", href: "#reading" },
    ],
  },
  {
    key: "balance",
    label: <>Balanc<s className="text-warm-gray/40">e</s><span className="text-matcha-300 font-hand text-[14px]">ing hobbies</span></>,
    href: "#making",
    children: [
      { label: "Sewing", href: "#sewing" },
      { label: "Woodworking", href: "#woodworking" },
      { label: "Hiking", href: "#hiking" },
    ],
  },
  {
    key: "sayhi",
    label: "Say Hi",
    href: "#contact",
    children: [
      { label: "Email", href: "mailto:razhou43@gmail.com", external: true },
      { label: "LinkedIn", href: "https://linkedin.com/in/rachelz4301", external: true },
    ],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-cream/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#" className="font-serif text-xl text-matcha-800 italic">
          r.
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8 items-baseline">
          {links.map((l) => (
            <li key={l.key} className="relative group">
              <a
                href={l.href}
                className="text-[13px] tracking-wide text-warm-gray hover:text-matcha-600 transition-colors py-2"
              >
                {l.label}
              </a>

              {l.children && (
                <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute top-full left-1/2 -translate-x-1/2 pt-3">
                  <div className="bg-cream/95 backdrop-blur-md rounded-xl shadow-lg border border-matcha-100/40 py-2 px-1 min-w-[140px]">
                    {l.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        {...(child.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="block px-4 py-2 text-[12px] tracking-wide text-warm-gray hover:text-matcha-700 hover:bg-matcha-50/50 rounded-lg transition-colors"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 cursor-pointer"
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-matcha-700 transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-matcha-700 transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-matcha-700 transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden px-6 pb-8 bg-cream/95 backdrop-blur-md">
          {links.map((l) => (
            <div key={l.key} className="border-b border-matcha-100/30 last:border-0">
              <button
                onClick={() => setMobileExpanded(mobileExpanded === l.key ? null : l.key)}
                className="w-full flex items-center justify-between py-4 text-sm text-warm-gray hover:text-matcha-600 transition-colors"
              >
                {l.label}
                {l.children && (
                  <span className={`text-[10px] text-matcha-300 transition-transform ${mobileExpanded === l.key ? "rotate-180" : ""}`}>
                    ▼
                  </span>
                )}
              </button>

              {l.children && mobileExpanded === l.key && (
                <div className="pb-3 pl-4 space-y-1">
                  {l.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      {...(child.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      onClick={() => setMobileOpen(false)}
                      className="block py-2 text-[13px] text-warm-gray/70 hover:text-matcha-600 transition-colors"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
