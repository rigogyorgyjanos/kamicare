import React, { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

type NavItem = { href: string; label: string };
const NAV_ITEMS: NavItem[] = [
  { href: "#bemutatkozas", label: "Bemutatkozás" },
  { href: "#szolgaltatasok", label: "Szolgáltatásaink és Árak" },
  { href: "#elerhetoseg", label: "Elérhetőség" },
  { href: "#hazirend", label: "Házirend" },
  { href: "#galeria", label: "Galéria" },
];

function useLockBodyScroll(locked: boolean) {
  useEffect(() => {
    const original = document.body.style.overflow;
    if (locked) document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = original; };
  }, [locked]);
}

function useOnClickOutside(
  ref: React.RefObject<HTMLElement | null>,
  handler: (e?: MouseEvent | TouchEvent) => void
) {
  useEffect(() => {
    function listener(e: MouseEvent | TouchEvent) {
      if (!ref.current) return;
      const target = e.target as Node | null;
      if (target && ref.current.contains(target)) return;
      handler(e);
    }
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

export default function Navbar({ logoText = "KamiCare" }: { logoText?: string }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useLockBodyScroll(open);
  useOnClickOutside(panelRef, () => setOpen(false));

  // Bezárás ESC-re
  useEffect(() => {
    function onKey(e: KeyboardEvent) { if (e.key === "Escape") setOpen(false); }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Ha görgetünk, legyen színes a header; tetején átlátszó
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll(); // init
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        (scrolled || open) ? "bg-[#a8a394] shadow-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#top" className={`font-semibold tracking-wide text-2xl ${(scrolled || open ? "text-[#9a7142]" : "text-[#d6b277]" )} `}>
            {logoText}
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`
                  ${(scrolled || open ? "text-[#9a7142]" : "text-[#d6b277]" )}
                   hover:text-[#9a7142] stroke-2 stroke-black transition-colors text-md font-medium relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#9a7142] after:transition-all hover:after:w-full`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            aria-label={open ? "Menü bezárása" : "Menü megnyitása"}
            className="md:hidden inline-flex items-center justify-center px-3 py-2"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X color="#9a7142" className="h-5 w-5 " /> : <Menu className="h-5 w-5 text-[#9a7142]" strokeWidth={2} />}
          </button>
        </div>
      </div>

      {/* Mobile fullscreen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-50" aria-modal="true" role="dialog"
          >
            <motion.div
              ref={panelRef}
              initial={{ y: "-8%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: "-8%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              className="fixed inset-0 bg-[#c1c6c1]"
            >
              <div className="mx-auto flex h-full max-w-6xl flex-col px-6 py-6">
                <div className="flex items-center justify-between">
                  <a
                    href="#top"
                    className="font-semibold tracking-wide text-[#9a7142] text-xl"
                    onClick={() => setOpen(false)}
                  >
                    {logoText}
                  </a>
                  <button
                    aria-label="Menü bezárása"
                    className="inline-flex items-center justify-center px-3 py-2"
                    onClick={() => setOpen(false)}
                  >
                   <X color="#9a7142" className="h-5 w-5 " />
                  </button>
                </div>

                <hr className="text-[#d6b277] mt-2" />

                <div className="mt-8 flex-1">
                  <ul className="flex flex-col gap-5">
                    {NAV_ITEMS.map((item, i) => (
                      <motion.li
                        key={item.href}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.05 * i }}
                      >
                        <a
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="text-lg sm:text-3xl font-semibold text-[#9a7142]/75 hover:text-[#9a7142]"
                        >
                          {item.label}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <hr className="text-[#d6b277] mb-2" />
                <div className="pb-6 text-center text-xs text-[#9a7142]">
                  <p>© {new Date().getFullYear()} {logoText}. Minden jog fenntartva.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
