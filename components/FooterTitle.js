"use client";

import { Fragment, useEffect, useRef } from "react";

const phrases = ["Votre savoir-faire mérite", "un site à sa hauteur."];
const lineDelay = 120;

export default function FooterTitle() {
  const titleRef = useRef(null);

  useEffect(() => {
    const title = titleRef.current;
    const words = Array.from(title.querySelectorAll(".footer-title-word"));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reducedMotion.matches || !("IntersectionObserver" in window)) return;

    let cancelled = false;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;

        // Measure at reveal time so mobile wrapping and earlier resizes are included.
        const positions = words.map((word) => word.getBoundingClientRect().top);
        let line = 0;
        let previousTop = positions[0];

        words.forEach((word, index) => {
          if (Math.abs(positions[index] - previousTop) > 2) {
            line += 1;
            previousTop = positions[index];
          }
          word.style.setProperty("--reveal-delay", `${line * lineDelay}ms`);
        });

        title.dataset.reveal = "visible";
        observer.disconnect();
      },
      { threshold: 0.2, rootMargin: "0px 0px -40px 0px" },
    );

    const showTitle = () => {
      cancelled = true;
      observer.disconnect();
      delete title.dataset.reveal;
      words.forEach((word) => word.style.removeProperty("--reveal-delay"));
    };

    // Keep the server-rendered title readable without JavaScript.
    title.dataset.reveal = "pending";
    document.fonts.ready.then(() => {
      if (!cancelled) observer.observe(title);
    });
    reducedMotion.addEventListener("change", showTitle);

    return () => {
      showTitle();
      reducedMotion.removeEventListener("change", showTitle);
    };
  }, []);

  return (
    <h2 ref={titleRef} className="footer-title font-display text-heading text-white">
      <span className="sr-only">{phrases.join(" ")}</span>
      <span aria-hidden="true">
        {phrases.map((phrase, phraseIndex) => (
          <Fragment key={phrase}>
            {phraseIndex > 0 && <br />}
            {phrase.split(" ").map((word, wordIndex) => (
              <Fragment key={`${phraseIndex}-${wordIndex}`}>
                {wordIndex > 0 && " "}
                <span className="footer-title-word">
                  <span className="footer-title-word-content">{word}</span>
                </span>
              </Fragment>
            ))}
          </Fragment>
        ))}
      </span>
    </h2>
  );
}
