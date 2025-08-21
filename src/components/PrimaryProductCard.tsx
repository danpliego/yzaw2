import { ImageWithFallback } from "./ImageWithFallback";

export interface PrimaryProduct {
  id: string;
  title: string;
  brandLogo: string;
  image: string;
  description: string;
  hasAward?: boolean;
  link?: string;
}

interface PrimaryProductCardProps {
  product: PrimaryProduct;
}

export default function PrimaryProductCard({
  product,
}: PrimaryProductCardProps) {
  return (
    <a
      href={product.link || "#"}
      target="_blank"
      className="flex flex-col h-full items-start justify-start min-h-[320px] md:min-h-[380px] group cursor-pointer transition-transform hover:scale-[1.02] flex-shrink-0 w-[calc(100vw-80px)] md:w-auto"
    >
      {/* Product container */}
      <div className="flex flex-col gap-3 md:gap-[11.41px] items-start justify-start w-full">
        {/* Image container */}
        <div className="bg-white h-[250px] md:h-[250.315px] overflow-hidden relative rounded-lg md:rounded-[11.41px] w-full">
          <ImageWithFallback
            src={product.image}
            alt={product.title}
            className="absolute bg-center bg-cover bg-no-repeat h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* Hover badge */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-90 transition-opacity duration-300">
            <span className="bg-black/50 backdrop-blur-[40px] text-white text-xs md:text-sm px-3 py-1 rounded-full">
              View product →
            </span>
          </div>

          {product.hasAward && (
            <div className="absolute flex h-[60px] md:h-[84.66px] items-center justify-center right-2 md:right-2 top-[-2px] w-[60px] md:w-[84.66px]">
              <div className="flex-none rotate-[345deg] scale-75 md:scale-100">
                <ImageWithFallback
                  src="https://images.ctfassets.net/6dgb2p7c933b/unRMz8vywblZJ1TausFST/73a347df025370e2f1b58fe16db5d34c/bestof2025.png"
                  alt="Award badge"
                  className="size-[69.138px] object-contain"
                />
              </div>
            </div>
          )}
        </div>

        {/* Content card */}
        <div className="flex flex-col gap-2 md:gap-[5.705px] items-start justify-start w-full ">
          <h3 className="font-['Arsenal'] text-base md:text-[15.689px] text-[#37372f] leading-[1.4] tracking-[0.1569px] group-hover:text-[#4e5a44] transition-colors font-medium m-0">
            {product.title}
          </h3>

          <div className="h-4 md:h-[17.116px] min-w-[48px] md:min-w-[73.217px] max-w-[100px] md:max-w-[120px]">
            <ImageWithFallback
              src={product.brandLogo}
              alt={`${product.title} brand logo`}
              className="h-full w-auto max-w-[100px] object-contain object-left"
            />
          </div>

          <p className="text-sm text-[#6d6e5e] leading-[1.4] font-normal m-0">
            {product.description}
          </p>
        </div>
      </div>
    </a>
  );
}
