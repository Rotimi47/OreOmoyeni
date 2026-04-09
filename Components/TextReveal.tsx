"use client";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function TextReveal({ text }: { text: string }) {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const ctx = gsap.context(() => {
      const words = gsap.utils.toArray(".word");

      gsap.fromTo(
        words,
        { opacity: 0, y: 30, filter: "blur(6px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }, textRef);

    return () => ctx.revert();
  }, []);

  // Split into words
  const wordsArray = text.split(" ");

  // Precompute highlight state properly
  let isHighlighting = false;

  const renderedWords = wordsArray.map((word, i) => {
    const starts = word.startsWith("[");
    const ends = word.endsWith("]");

    const shouldHighlight = isHighlighting || starts;

    if (starts) isHighlighting = true;

    const cleanWord = word.replace(/[\[\]]/g, "");

    const element = (
      <span key={i} className="inline-block overflow-hidden">
        <span
          className={`word inline-block ${
            shouldHighlight ? "text-[#C778DD]" : ""
          }`}
        >
          {cleanWord}&nbsp;
        </span>
      </span>
    );

    if (ends) isHighlighting = false;

    return element;
  });

  return (
    <h1 ref={textRef} className="text-white text-3xl font-semibold">
      {renderedWords}
    </h1>
  );
}