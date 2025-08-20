import { useRef, useState, useEffect } from 'react';
import PrimaryProductCard, { type PrimaryProduct } from './PrimaryProductCard';

interface ProductCarouselProps {
  products: PrimaryProduct[];
}

export default function ProductCarousel({ products }: ProductCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);

  // Touch event handling for mobile swipe
  const [touchStart, setTouchStart] = useState<number>(0);
  const [touchEnd, setTouchEnd] = useState<number>(0);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scrollTo = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current || isScrolling) return;
    
    setIsScrolling(true);
    const container = scrollContainerRef.current;
    const isMobile = window.innerWidth < 768;
    
    // Calculate scroll distance
    const scrollDistance = isMobile 
      ? container.clientWidth * 0.8 // On mobile, scroll by ~80% of container width
      : container.clientWidth / 2;  // On desktop, scroll by half container width
    
    const newScrollLeft = direction === 'left' 
      ? container.scrollLeft - scrollDistance
      : container.scrollLeft + scrollDistance;

    container.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth'
    });

    // Reset scrolling flag after animation
    setTimeout(() => {
      setIsScrolling(false);
      checkScrollButtons();
    }, 300);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && canScrollRight) {
      scrollTo('right');
    }
    if (isRightSwipe && canScrollLeft) {
      scrollTo('left');
    }
  };

  useEffect(() => {
    checkScrollButtons();
    
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollButtons);
      return () => container.removeEventListener('scroll', checkScrollButtons);
    }
  }, [products]);

  useEffect(() => {
    const handleResize = () => {
      checkScrollButtons();
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative w-full">
      {/* Carousel Container */}
      <div 
        ref={scrollContainerRef}
        className="carousel-container flex gap-4 md:gap-6 overflow-x-auto"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Mobile: show cards with specific width to create 1.5 card view */}
        <div className="md:hidden flex gap-4 pl-4">
          {products.map((product) => (
            <div 
              key={product.id}
              className="w-[calc(100vw-96px)] flex-shrink-0"
            >
              <PrimaryProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Desktop: show standard grid that can scroll */}
        <div className="hidden md:flex gap-6">
          {products.map((product) => (
            <div 
              key={product.id}
              className="w-[280px] lg:w-[300px] flex-shrink-0"
            >
              <PrimaryProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows - Left */}
      <button
        onClick={() => scrollTo('left')}
        disabled={!canScrollLeft || isScrolling}
        className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center transition-all ${
          canScrollLeft && !isScrolling
            ? 'text-[#37372f] hover:bg-gray-50 cursor-pointer' 
            : 'text-gray-300 cursor-not-allowed'
        }`}
        aria-label="Previous products"
      >
        ←
      </button>

      {/* Navigation Arrows - Right */}
      <button
        onClick={() => scrollTo('right')}
        disabled={!canScrollRight || isScrolling}
        className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center transition-all ${
          canScrollRight && !isScrolling
            ? 'text-[#37372f] hover:bg-gray-50 cursor-pointer' 
            : 'text-gray-300 cursor-not-allowed'
        }`}
        aria-label="Next products"
      >
        →
      </button>
    </div>
  );
}