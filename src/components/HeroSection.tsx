import { ProductCollage } from "./ProductCollage";
import { HeroContent } from "./HeroContent";
import { ImageWithFallback } from "./ImageWithFallback";

export function HeroSection() {
  return (
    <section className="relative h-[90vh] bg-white">
      {/* Background product collage */}
      <ProductCollage />

      {/* Main hero content */}
      <div className="relative z-10 flex flex-col items-center justify-start min-h-screen px-6 pt-16 pb-32 md:pt-20 lg:pt-24">
        <div className="text-center space-y-8 w-full max-w-sm md:max-w-2xl lg:max-w-4xl mt-8 md:mt-12 lg:mt-16">
          <ImageWithFallback
            src="https://images.ctfassets.net/6dgb2p7c933b/unRMz8vywblZJ1TausFST/73a347df025370e2f1b58fe16db5d34c/bestof2025.png"
            alt="Award badge"
            className="size-[150px] object-contain m-auto mb-6"
          />
          <HeroContent />
        </div>
      </div>
    </section>
  );
}
