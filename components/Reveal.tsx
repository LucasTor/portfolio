"use client";

import { useEffect, useRef, type ElementType, type ComponentPropsWithoutRef } from "react";

type RevealProps<T extends ElementType> = { as?: T } & ComponentPropsWithoutRef<T>;

export default function Reveal<T extends ElementType = "div">({
  as,
  className,
  ...props
}: RevealProps<T>) {
  const Tag: ElementType = as ?? "div";
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return <Tag ref={ref} className={`reveal ${className ?? ""}`} {...props} />;
}
