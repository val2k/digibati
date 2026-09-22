"use client";

import { useEffect, useRef } from "react";

export default function OfferReveal({ children, className }) {
  const gridRef = useRef(null);

  useEffect(() => {
    const grid = gridRef.current;
    const cards = Array.from(grid.children);
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reducedMotion.matches || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Stagger cards entering together; stacked mobile cards start immediately.
        entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => cards.indexOf(a.target) - cards.indexOf(b.target))
          .forEach((entry, index) => {
            entry.target.style.setProperty("--reveal-delay", `${index * 130}ms`);
            entry.target.dataset.reveal = "visible";
            observer.unobserve(entry.target);
          });
      },
      { threshold: 0.12, rootMargin: "0px 0px -32px 0px" },
    );

    const showAll = () => {
      observer.disconnect();
      cards.forEach((card) => {
        delete card.dataset.reveal;
        card.style.removeProperty("--reveal-delay");
      });
    };

    const showFocusedCard = (event) => {
      const card = cards.find((item) => item.contains(event.target));
      if (!card) return;
      delete card.dataset.reveal;
      observer.unobserve(card);
    };

    cards.forEach((card) => {
      card.dataset.reveal = "pending";
      observer.observe(card);
    });
    grid.addEventListener("focusin", showFocusedCard);
    reducedMotion.addEventListener("change", showAll);

    return () => {
      showAll();
      grid.removeEventListener("focusin", showFocusedCard);
      reducedMotion.removeEventListener("change", showAll);
    };
  }, []);

  return <div ref={gridRef} className={className}>{children}</div>;
}
