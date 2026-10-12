"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const reducedMotion = useReducedMotion();
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (reducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
      autoRaf: false,
    });
    lenisRef.current = lenis;

    // Attach to window for potential imperative access
    if (typeof window !== "undefined") {
      (window as unknown as { __lenis?: Lenis }).__lenis = lenis;
    }

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Initial hash scroll if URL contains hash on load
    if (window.location.hash) {
      const hash = window.location.hash;
      setTimeout(() => {
        const target = document.querySelector(hash);
        if (target) {
          lenis.scrollTo(hash, { offset: -80, duration: 1.2 });
        }
      }, 150);
    }

    const handleHash = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href) return;

      // Handle both "#section" and "/#section" when on home page
      const currentPath = window.location.pathname;
      const isHome = currentPath === "/" || currentPath === "";

      let targetId: string | null = null;
      if (href.startsWith("#") && href.length > 1) {
        targetId = href;
      } else if (href.startsWith("/#") && href.length > 2 && isHome) {
        targetId = href.replace(/^\//, "");
      }

      if (targetId) {
        const el = document.querySelector(targetId);
        if (el) {
          e.preventDefault();
          lenis.scrollTo(targetId, { offset: -80, duration: 1.2 });
          history.pushState(null, "", targetId);
        }
      }
    };

    document.addEventListener("click", handleHash);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", handleHash);
    };
  }, [reducedMotion]);

  // Scroll to top or hash when pathname changes
  useEffect(() => {
    if (!lenisRef.current) return;
    if (window.location.hash) {
      setTimeout(() => {
        lenisRef.current?.scrollTo(window.location.hash, { offset: -80, duration: 1 });
      }, 100);
    } else {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  return <>{children}</>;
}
