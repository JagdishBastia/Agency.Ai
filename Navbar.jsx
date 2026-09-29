import { useState } from "react";
import { navLinks } from "../data.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand text-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4" aria-label="Main">
        <a href="#" className="font-display text-xl font-extrabold tracking-tight">
          Agency.ai
        </a>

        <ul className="hidden items-center gap-8 text-sm font-medium md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="underline-offset-4 hover:underline">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="rounded-full bg-white px-5 py-2 font-semibold text-brand transition hover:bg-lilac"
            >
              Book a call
            </a>
          </li>
        </ul>

        <button
          className="rounded-md border border-white/40 px-3 py-1.5 text-sm font-medium md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open && (
        <ul id="mobile-menu" className="border-t border-white/20 px-5 pb-4 md:hidden">
          {[...navLinks, { label: "Book a call", href: "#contact" }].map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block py-3 text-base font-medium">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}