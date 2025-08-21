import { useRef, useState, useEffect } from 'react';
import PrimaryProductCard, { type PrimaryProduct } from './PrimaryProductCard';

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

  const scrollToDir = (direction: 'left' | 'right') => {
    const el = trackRef.current;
    if (!el || isScrolling) return;

    setIsScrolling(true);
    const isMobile = window.innerWidth < 768;
    const distance = isMobile ? el.clientWidth * 0.8 : el.clientWidth * 0.6;

    el.scrollTo({
      left: direction === 'left' ? el.scrollLeft - distance : el.scrollLeft + distance,
      behavior: 'smooth',
    });

    window.setTimeout(() => {
      setIsScrolling(false);
      checkScrollButtons();
    }, 350);
  };

  const handleScroll = () => checkScrollButtons();

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStart == null || touchEnd == null) return;
    const delta = touchStart - touchEnd;
    if (delta > 50 && canScrollRight) scrollToDir('right');
    if (delta < -50 && canScrollLeft) scrollToDir('left');
    setTouchStart(null);
    setTouchEnd(null);
  };

  useEffect(() => {
    const id = window.setTimeout(checkScrollButtons, 0);
    return () => window.clearTimeout(id);
  }, [products]);

  useEffect(() => {
    const onResize = () => checkScrollButtons();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <div className="relative w-full">
      {/* Track */}
      <div
        ref={trackRef}
        className="
          flex overflow-x-auto gap-4 md:gap-6
          px-4 md:px-6 pr-6
          scroll-smooth
          snap-x snap-mandatory md:snap-none
          [-ms-overflow-style:none] [scrollbar-width:none]
        "
        style={{ WebkitOverflowScrolling: 'touch' }}
        onScroll={handleScroll}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="
              shrink-0
              snap-start md:snap-none
              w-[calc(100vw-112px)]
              md:w-[280px] lg:w-[300px]
            "
          >
            <PrimaryProductCard product={product} />
          </div>
        ))}
      </div>

      {/* Left Arrow — visible on all sizes */}
      <button
        onClick={() => scrollToDir('left')}
        disabled={!canScrollLeft || isScrolling}
        className={`
          flex pointer-events-auto
          absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4
          z-20 w-9 h-9 md:w-10 md:h-10 rounded-full
          bg-white shadow-lg border border-gray-200
          items-center justify-center transition-all
          ${canScrollLeft && !isScrolling ? 'text-[#37372f] hover:bg-gray-50 cursor-pointer' : 'text-gray-300 cursor-not-allowed'}
        `}
        aria-label="Previous products"
      >
        ←
      </button>

      {/* Right Arrow — visible on all sizes */}
      <button
        onClick={() => scrollToDir('right')}
        disabled={!canScrollRight || isScrolling}
        className={`
          flex pointer-events-auto
          absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4
          z-20 w-9 h-9 md:w-10 md:h-10 rounded-full
          bg-white shadow-lg border border-gray-200
          items-center justify-center transition-all
          ${canScrollRight && !isScrolling ? 'text-[#37372f] hover:bg-gray-50 cursor-pointer' : 'text-gray-300 cursor-not-allowed'}
        `}
        aria-label="Next products"
      >
        →
      </button>
    </div>
  );
}
