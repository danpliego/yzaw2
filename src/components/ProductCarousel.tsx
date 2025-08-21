import { useRef, useState, useEffect } from "react";
import PrimaryProductCard, { type PrimaryProduct } from "./PrimaryProductCard";

interface ProductCarouselProps {
  products: PrimaryProduct[];
}

export default function ProductCarousel({ products }: ProductCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);

  // Touch swipe (mobile)
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const checkScrollButtons = () => {
    const el = trackRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
  };

  const scrollToDir = (direction: "left" | "right") => {
    const el = trackRef.current;
    if (!el || isScrolling) return;

    setIsScrolling(true);
    const isMobile = window.innerWidth < 768;
    const distance = isMobile ? el.clientWidth * 0.8 : el.clientWidth * 0.6;

    el.scrollTo({
      left:
        direction === "left"
          ? el.scrollLeft - distance
          : el.scrollLeft + distance,
      behavior: "smooth",
    });

    window.setTimeout(() => {
      setIsScrolling(false);
      checkScrollButtons();
    }, 350);
  };

  const handleScroll = () => checkScrollButtons();

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) =>
    setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e: React.TouchEvent) =>
    setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStart == null || touchEnd == null) return;
    const delta = touchStart - touchEnd;
    if (delta > 50 && canScrollRight) scrollToDir("right");
    if (delta < -50 && canScrollLeft) scrollToDir("left");
    setTouchStart(null);
    setTouchEnd(null);
  };

  useEffect(() => {
    const id = window.setTimeout(checkScrollButtons, 0);
    return () => window.clearTimeout(id);
  }, [products]);

  useEffect(() => {
    const onResize = () => checkScrollButtons();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const arrowBase =
    "z-10 grid place-items-center rounded-full shadow-lg ring-1 ring-black/5 bg-white/95 backdrop-blur transition " +
    "w-10 h-10 md:w-11 md:h-11 hover:scale-105 disabled:opacity-40 disabled:cursor-not-allowed";

  const iconBase =
    "h-5 w-5 text-[#6d6e5e] transition-transform duration-150";

  return (
    <div className="relative w-full">
      {/* Left/Right edge fades (desktop mostly) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-gray-50 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-gray-50 to-transparent"
      />

      {/* Left Arrow */}
      <button
        type="button"
        aria-label="Scroll left"
        className={`${arrowBase} absolute left-2 top-1/2 -translate-y-1/2`}
        onClick={() => scrollToDir("left")}
        disabled={!canScrollLeft}
      >
        <svg viewBox="0 0 24 24" className={`${iconBase} group-hover:-translate-x-0.5`}>
          <path
            d="M15.5 19.5L8.5 12l7-7.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Right Arrow */}
      <button
        type="button"
        aria-label="Scroll right"
        className={`${arrowBase} absolute right-2 top-1/2 -translate-y-1/2`}
        onClick={() => scrollToDir("right")}
        disabled={!canScrollRight}
      >
        <svg viewBox="0 0 24 24" className={`${iconBase} group-hover:translate-x-0.5`}>
          <path
            d="M8.5 19.5L15.5 12l-7-7.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div
        ref={trackRef}
        className="
          flex overflow-x-auto gap-4 md:gap-6
          px-4 md:px-6
          scroll-smooth
          snap-x snap-mandatory md:snap-none
          touch-pan-x overscroll-x-contain
          [-ms-overflow-style:none] [scrollbar-width:none]
        "
        style={{ WebkitOverflowScrolling: "touch" }}
        onScroll={handleScroll}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Spacer so first card can center */}
        <div className="shrink-0 w-[8vw] md:hidden" aria-hidden />

        {products.map((product) => (
          <div
            key={product.id}
            className="
              shrink-0
              snap-center md:snap-none
              w-[80vw] sm:w-[78vw]
              md:w-[280px] m-4 lg:w-[300px]
            "
          >
            <PrimaryProductCard product={product} />
          </div>
        ))}

        {/* Spacer so last card can center */}
        <div className="shrink-0 w-[8vw] md:hidden" aria-hidden />
      </div>
    </div>
  );
}
