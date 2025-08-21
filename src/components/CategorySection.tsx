import ProductCarousel from './ProductCarousel';
import SecondaryProductCard, { type SecondaryProduct } from './SecondaryProductCard';
import { type PrimaryProduct } from './PrimaryProductCard';

// Author avatar component
const AuthorAvatar = ({ src, alt, size = "large" }: { src: string; alt: string; size?: "small" | "large" }) => {
  const sizeClasses = size === "small" ? "size-[28.713px]" : "size-20";
  
  return (
    <div className={`relative shrink-0 ${sizeClasses}`}>
      <div
        className="absolute bg-center bg-cover bg-no-repeat inset-0 rounded-full"
        style={{ backgroundImage: `url('${src}')` }}
        role="img"
        aria-label={alt}
      />
    </div>
  );
};

// TypeScript interfaces
export interface Author {
  name: string;
  avatar: string;
  description?: string;
}

export interface CategorySectionProps {
  // Main section
  title: string;
  description: string;
  authors: Author[];
  
  // Primary products section
  primarySectionTitle: string;
  primaryProducts: PrimaryProduct[];
  
  // Secondary products section
  secondarySectionTitle: string;
  secondarySectionDescription: string;
  secondaryProducts: SecondaryProduct[];
  
  // Styling
  backgroundColor?: string;
  className?: string;
}

// Main component
export default function CategorySection({
  title,
  description,
  authors,
  primarySectionTitle,
  primaryProducts,
  secondarySectionTitle,
  secondarySectionDescription,
  secondaryProducts,
  backgroundColor = "#f3f3ed",
  className = ""
}: CategorySectionProps) {
  return (
    <div 
      className={`relative w-full ${className}`}
      style={{ backgroundColor }}
    >
      <div className="px-4 md:px-8 py-8 md:py-[60px] max-w-7xl mx-auto">
        {/* Hero Section - Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-start w-full mb-8 md:mb-10">
          {/* Title - Left Column */}
          <div className="flex flex-col gap-2 items-start justify-start">
            <h1 className="font-['Arsenal'] text-2xl md:text-6xl text-[#3b482f] leading-[1.2] font-light m-0">
              {title}
            </h1>
          </div>

          {/* Description and Authors - Right Column */}
          <div className="flex flex-col gap-4 md:gap-6 items-start justify-start">
            <p className="text-base md:text-lg text-[#37372f] leading-[1.4] tracking-[0.18px] font-light m-0">
              {description}
            </p>
            
            {/* Authors Card */}
            <div className="bg-[rgba(255,255,255,.5)] rounded-lg overflow-hidden w-full">
              <div className="flex flex-row gap-4 items-start justify-start p-4">
                {/* Avatars - Centered */}
                <div className="flex flex-row items-center justify-center shrink-0 w-20">
                  {authors.map((author, index) => (
                    <AuthorAvatar 
                      key={`${author.name}-${index}`}
                      src={author.avatar} 
                      alt={author.name}
                      size="large"
                    />
                  ))}
                </div>
                
                {/* Authors Info - Right Side */}
                <div className="flex flex-col gap-2 items-start justify-start text-[#37372f] text-left w-full">
                  <h3 className="font-['Arsenal'] text-lg font-semibold m-0">
                    Curated by {authors.map(author => author.name).join(' and ')}
                  </h3>
                  {authors.map((author, index) => (
                    author.description && (
                      <p key={`${author.name}-desc-${index}`} className="text-base leading-[1.4] font-light m-0">
                        {author.description}
                      </p>
                    )
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Primary Products Section */}
        <div className="flex flex-col gap-4 items-start justify-start w-full mb-0">
          {/* Section Header */}
          <div className="flex flex-row items-center justify-between border-t border-[rgba(98,110,88,0.1)] pt-4 w-full">
            <div className="bg-[#ecf4bf] flex flex-row gap-2 items-center justify-center px-3 py-1.5 rounded-full">
              <span className="font-['Arsenal'] text-[#37372f] text-base md:text-lg tracking-[0.22px]">
                {primarySectionTitle}
              </span>
            </div>
          </div>

          {/* Product Carousel */}
          <ProductCarousel products={primaryProducts} />
        </div>

        {/* Secondary Products Section */}
        <div className="flex flex-col gap-4 items-start justify-start w-full">
          {/* Section Header */}
          <div className="flex flex-row items-start justify-center border-t border-[rgba(98,110,88,0.1)] pt-4 mt-6 w-full">
            <h2 className="font-['Arsenal'] text-xl md:text-[32px] text-[#3b482f] leading-[1.2] m-0">
              {secondarySectionTitle}
            </h2>
          </div>

          {/* Section Description */}
          <div className="flex flex-col gap-2 items-start justify-start w-full">
            <p className="text-base md:text-lg text-[#37372f] leading-[1.4] tracking-[0.18px] text-center w-full max-w-4xl mx-auto font-normal m-0">
              {secondarySectionDescription}
            </p>
          </div>

          {/* Secondary Product Cards - 3 Column Grid */}
          <div className={`${
            secondaryProducts.length < 3 
              ? 'flex flex-col md:flex-row justify-center gap-4 w-full' 
              : 'grid grid-cols-1 md:grid-cols-3 gap-4 w-full'
          }`}>
            {secondaryProducts.map((product) => (
              <SecondaryProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Export types for use in other components
export type { PrimaryProduct, SecondaryProduct };