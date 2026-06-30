import { useCallback } from "react";

export default function useScrollTo() {
  const scrollTo = useCallback((sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return scrollTo;
}
