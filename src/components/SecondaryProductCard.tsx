import { ImageWithFallback } from './ImageWithFallback';

export interface SecondaryProduct {
  id: string;
  title: string;
  brandLogo: string;
  image: string;
  description?: string;
  link?: string;
}

interface SecondaryProductCardProps {
  product: SecondaryProduct;
}

export default function SecondaryProductCard({ product }: SecondaryProductCardProps) {
  return (
    <a 
      href={product.link || "#"}
      target="_blank"
      className="bg-[rgba(255,255,255,.5)] rounded-lg overflow-hidden group cursor-pointer transition-all hover:border-[rgba(0,0,0,0.2)]"
    >
      <div className="flex flex-row gap-2 md:gap-4 items-start justify-start p-4">
        {/* Image */}
        <div className="bg-[#ffffff] overflow-hidden relative rounded-[5.024px] shrink-0 size-[80px] md:size-[100px]">
          <ImageWithFallback
            src={product.image}
            alt={product.title}
            className="absolute bg-center bg-cover bg-no-repeat h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col gap-2 items-start justify-start min-h-0">
          <h4 className="font-['Arsenal'] text-base md:text-lg text-[#37372f] leading-[1.4] tracking-[0.18px] group-hover:text-[#4e5a44] transition-colors font-medium m-0">
            {product.title}
          </h4>
          
          <div className="h-4 md:h-[20.8px] min-w-[48px] max-w-[80px]">
            <ImageWithFallback
              src={product.brandLogo}
              alt={`${product.title} brand logo`}
              className="h-full w-auto max-w-full object-contain object-left"
            />
          </div>
          
          {product.description && (
            <p className="text-sm text-[#6d6e5e] leading-[1.4] font-normal m-0">
              {product.description}
            </p>
          )}
        </div>
      </div>
    </a>
  );
}