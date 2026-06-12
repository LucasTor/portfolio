"use client";

import { useCallback, useEffect, useState } from "react";

type Theme = "dark" | "light";

function currentTheme(): Theme {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(currentTheme);

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try {
        localStorage.setItem("lt-theme", next);
      } catch {}
      return next;
    });
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLElement && /input|textarea|select/i.test(e.target.tagName)) return;
      if (e.key === "t" || e.key === "T") toggle();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [toggle]);

  return (
    <div className="fixed top-5 right-5 z-[100]">
      <button
        onClick={toggle}
        title="Toggle theme — press T"
        className="flex cursor-pointer items-center gap-[9px] rounded-full border border-line bg-[color-mix(in_oklab,var(--bg)_78%,transparent)] px-[15px] py-[9px] font-mono text-[11px] tracking-[0.08em] text-muted backdrop-blur-[16px] hover:border-accent hover:text-fg"
      >
        <span className="text-sm leading-none">◐</span>
        <span suppressHydrationWarning>{theme} · t</span>
      </button>
    </div>
  );
}
