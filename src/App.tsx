import CategorySection from "./components/CategorySection";
import { HeroSection } from "./components/HeroSection";
import { sections } from "./catalogData";

// Temporary CTA banner (we need to swap with real CTA component
// function CTABanner() {
//   return (
//     <div className="w-full bg-[#4e5a44] text-white py-12 px-6 flex flex-col items-center justify-center text-center">
//       <h2 className="font-['Arsenal'] text-2xl md:text-5xl mb-6">Start designing your dream space for outdoor living</h2>
//       <button className="bg-white text-[#4e5a44] px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition">
//         Explore Yardzen Design Plans
//       </button>
//     </div>
//   );
// }

export default function App() {
  return (
    <>
    yardzen nav here
        <HeroSection />
        {sections.map((section) => (
          <div key={section.title}>
            <CategorySection {...section} />
          </div>
        ))}
    
      include yz cta footer component here
      <br />
      include yz footer here
    </>
  );
}
