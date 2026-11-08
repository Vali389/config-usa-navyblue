import React, { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 320) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    toggleVisibility();

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-[#102B4E] text-white shadow-xl ring-2 ring-gold/70 transition-all duration-300 hover:scale-110 hover:bg-[#1a3f6d] hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 cursor-pointer animate-in fade-in zoom-in-75"
    >
      <ChevronUp className="h-5 w-5 text-gold" strokeWidth={2.5} />
    </button>
  );
}
