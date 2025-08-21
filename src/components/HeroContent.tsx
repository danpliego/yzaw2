// import { Button } from "./ui/button";

export function HeroContent() {
  return (
    <div className="space-y-6 animate-fade-in-up animation-delay-500">
      <header className="space-y-4">
        <h1 className="font-['Arsenal'] text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-[#37372f] leading-tight">
          2025 Yardzen Awards
        </h1>

        <div className="space-y-4 text-[#37372f] max-w-2xl mx-auto lg:max-w-3xl">
          <p className="font-['Arsenal'] text-xl mb-0">
            Each year, our design and editorial teams come together to honor the
            products that transform yards into truly livable spaces. The 2025
            Yardzen Awards feature a combination of Designer Picks—our most-used
            products across real client projects—and Also Great picks—standouts
            selected for innovation, design appeal, and sustainability.
          </p>
        </div>
      </header>

      <div className="pt-4">
        {/* <Button 
          variant="outline" 
          size="lg"
          className="border-[rgba(98,110,88,0.1)] text-[#37372f] hover:bg-[#37372f]/5 transition-all duration-300 px-8 py-3"
        >
          Meet the winners
        </Button> */}
      </div>
    </div>
  );
}
