"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X, FileText, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

const links = [
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Work", href: "/#work" },
  { name: "Experience", href: "/#experience" },
  { name: "Education", href: "/#education" },
  { name: "Services", href: "/#services" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("work");

  useEffect(() => {
    const ids = links.map((l) => l.name.toLowerCase());
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { threshold: 0.25, rootMargin: "-80px 0px 0px" }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <nav className="container-x mt-3 sm:mt-4">
        <div className="card-glass hairline-border flex h-14 items-center justify-between rounded-full px-4 md:px-5 shadow-glass hover:border-cyan-500/30 transition-colors">
          {/* Brand & Available Indicator from Ref/index.html */}
          <Link
            href="/#top"
            className="flex items-center gap-2.5 active:scale-95 transition-transform group"
          >
            <div className="relative h-8 w-8 overflow-hidden rounded-full ring-1 ring-cyan-400/50 bg-gradient-to-tr from-cyan-400 via-emerald-400 to-purple-500 flex items-center justify-center font-bold text-black text-xs shadow-[0_0_15px_rgba(0,245,212,0.5)]">
              SK
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-white tracking-wide flex items-center gap-1.5">
                Sonu Kumar
                <span className="text-[9px] px-1.5 py-0.2 rounded bg-cyan-500/20 text-cyan-300 font-mono border border-cyan-400/40 shadow-[0_0_8px_rgba(0,245,212,0.3)]">
                  PRO
                </span>
              </span>
              <span className="flex items-center gap-1.5 text-[10px] text-zinc-400">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                </span>
                <span className="text-emerald-300 font-medium">Available</span>
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden items-center gap-6 text-xs lg:text-sm md:flex">
            {links.map((link) => {
              const isActive = active === link.name.toLowerCase();
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative py-1 transition font-medium ${
                    isActive ? "text-cyan-300 font-semibold drop-shadow-[0_0_8px_rgba(0,245,212,0.5)]" : "text-foreground-muted hover:text-foreground-primary"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-cyan-400 shadow-glow-cyan"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/resume"
              className="flex items-center gap-1.5 rounded-full border border-border-subtle bg-zinc-900/60 px-3.5 py-1.5 text-xs text-foreground-secondary transition hover:border-cyan-400/40 hover:text-foreground-primary"
            >
              <FileText size={13} className="text-cyan-400" />
              <span>Resume</span>
            </Link>
            <Link
              href="/#contact"
              className="px-3.5 py-1.5 text-xs font-semibold text-cyan-300 bg-gradient-to-r from-cyan-950/80 via-indigo-950/80 to-purple-950/80 border border-cyan-400/40 rounded-full active:scale-95 hover:border-cyan-400 hover:shadow-[0_0_18px_rgba(0,245,212,0.45)] transition-all cursor-pointer flex items-center gap-1.5"
            >
              <span>Hire Me</span>
              <ArrowUpRight size={13} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <Link
              href="/#contact"
              className="px-2.5 py-1 text-[11px] font-semibold text-cyan-300 bg-gradient-to-r from-cyan-950/80 via-indigo-950/80 to-purple-950/80 border border-cyan-400/40 rounded-full active:scale-95 hover:border-cyan-400 transition-all cursor-pointer"
            >
              Hire Me
            </Link>
            <button
              aria-label="Toggle mobile menu"
              className="w-8 h-8 rounded-full bg-zinc-800/80 border border-white/10 flex items-center justify-center text-zinc-300 active:scale-90 hover:border-cyan-500/40 transition-all cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="glass mt-2.5 max-h-[calc(100dvh-5rem)] overflow-y-auto rounded-3xl p-5 sm:p-6 md:hidden shadow-2xl border border-border-subtle"
            >
              <div className="flex flex-col space-y-2.5 sm:space-y-3">
                {links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between border-b border-border-subtle py-2.5 text-base font-medium text-foreground-secondary hover:text-foreground-primary"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight size={15} className="text-foreground-muted" />
                  </Link>
                ))}

                <Link
                  href="/resume"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-2.5 text-base font-semibold text-accent-primary"
                >
                  <span className="flex items-center gap-2">
                    <FileText size={16} /> View Resume / CV
                  </span>
                  <ArrowUpRight size={15} />
                </Link>

                <div className="pt-4 mt-2 border-t border-border-subtle flex flex-wrap items-center justify-between gap-3 text-xs text-foreground-muted">
                  <div className="flex items-center gap-2.5">
                    <a
                      href={`https://github.com/${profile.social.github}`}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-full border border-border-subtle hover:text-foreground-primary hover:bg-background-secondary"
                      title="GitHub"
                    >
                      <Github size={15} />
                    </a>
                    <a
                      href={`https://linkedin.com/in/${profile.social.linkedin}`}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-full border border-border-subtle hover:text-foreground-primary hover:bg-background-secondary"
                      title="LinkedIn"
                    >
                      <Linkedin size={15} />
                    </a>
                    <a
                      href={`mailto:${profile.email}`}
                      className="p-2 rounded-full border border-border-subtle hover:text-foreground-primary hover:bg-background-secondary"
                      title="Email"
                    >
                      <Mail size={15} />
                    </a>
                  </div>
                  <Link
                    href="/#contact"
                    onClick={() => setOpen(false)}
                    className="rounded-full bg-foreground-primary px-4 py-2 text-xs font-semibold text-background-primary"
                  >
                    Let&apos;s talk
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
