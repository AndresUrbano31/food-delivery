import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { Product } from "@/lib/api";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/food/${product.id}`} className="block group mt-16">
      <div className={`bg-[#FFF5F5] rounded-[32px] p-4 shadow-sm h-full flex flex-col transition-all hover:shadow-md relative ${product.categoryId === '4' ? 'pt-4' : 'pt-20'}`}>
        {product.categoryId === '4' ? (
          <div className="w-full aspect-square rounded-[24px] overflow-hidden mb-3 relative shrink-0">
            <Image 
              src={product.imageUrl} 
              alt={product.name} 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ) : (
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[140px] h-[140px]">
            <Image 
              src={product.imageUrl} 
              alt={product.name} 
              fill 
              className="object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <div className="mt-auto text-center px-1">
          <h3 className="font-bold text-gray-900 text-[15px] leading-tight mb-2 min-h-[36px] flex items-center justify-center">
            {product.name}
          </h3>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star 
                key={star} 
                size={14} 
                className="fill-[var(--color-primary)] text-[var(--color-primary)]" 
              />
            ))}
          </div>
          <div className="flex items-center justify-center font-bold text-[11px] text-[var(--color-secondary)]">
            <span>{product.distance}</span>
            <span className="mx-1.5">&bull;</span>
            <span>{product.deliveryTime}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
