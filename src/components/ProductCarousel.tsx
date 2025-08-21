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

  return (
    <div className="relative w-full">
      {/* Left Arrow */}
      {canScrollLeft && (
        <button
          onClick={() => scrollToDir("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full shadow bg-white hover:bg-gray-100"
        >
          ←
        </button>
      )}

      {/* Scrollable Track */}
      <div
        ref={trackRef}
        className="
          flex overflow-x-auto gap-4 md:gap-6
          px-0 md:px-0
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
              md:w-[280px] mr-4 lg:w-[21.5vw]
            "
          >
            <PrimaryProductCard product={product} />
          </div>
        ))}

        {/* Spacer so last card can center */}
        <div className="shrink-0 w-[8vw] md:hidden" aria-hidden />
      </div>

      {/* Right Arrow */}
      {canScrollRight && (
        <button
          onClick={() => scrollToDir("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full shadow bg-white hover:bg-gray-100"
        >
          →
        </button>
      )}
    </div>
  );
}
