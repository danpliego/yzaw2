import { ProductCollage } from "./ProductCollage";
import { AwardBadge } from "./AwardBadge";
import { HeroContent } from "./HeroContent";

export function HeroSection() {
  return (
    <section className="relative h-[90vh] bg-white">
      {/* Background product collage */}
      <ProductCollage />
      
      {/* Main hero content */}
      <div className="relative z-10 flex flex-col items-center justify-start min-h-screen px-6 pt-16 pb-32 md:pt-20 lg:pt-24">
        <div className="text-center space-y-8 w-full max-w-sm md:max-w-2xl lg:max-w-4xl mt-8 md:mt-12 lg:mt-16">
          <AwardBadge />
          <HeroContent />
        </div>
      </div>
      
      {/* Carousel indicator */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === 3 ? 'bg-[#f3f3ed]' : 'bg-[#f3f3ed]/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}