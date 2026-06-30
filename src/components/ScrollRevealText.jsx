import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollRevealText({ children, className = "", as: Tag = "p", delay = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const words = el.querySelectorAll(".reveal-word");
    if (!words.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        { opacity: 0, y: 20, rotateX: -20 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.5,
          stagger: 0.04,
          delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, [delay]);

  const splitIntoWords = (text) => {
    if (typeof text !== "string") return text;
    return text.split(" ").map((word, i) => (
      <span key={i} className="reveal-word inline-block">
        {word}&nbsp;
      </span>
    ));
  };

  const processChildren = (children) => {
    if (typeof children === "string") {
      return splitIntoWords(children);
    }
    return children;
  };

  return (
    <Tag ref={ref} className={className}>
      {processChildren(children)}
    </Tag>
  );
}
