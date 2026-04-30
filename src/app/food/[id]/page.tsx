"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, Heart, Star, Minus, Plus } from "lucide-react";
import { useProductDetails } from "@/hooks/useProductDetails";

export default function FoodDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const {
    product,
    isLoading,
    quantity,
    incrementQuantity,
    decrementQuantity,
    size,
    selectSize
  } = useProductDetails(id);

  if (isLoading) {
    return <div className="min-h-screen bg-gradient-details flex items-center justify-center">Loading...</div>;
  }

  if (!product) {
    return <div className="min-h-screen bg-gradient-details flex items-center justify-center">Product not found</div>;
  }

  return (
    <div className="h-[100dvh] overflow-hidden bg-gradient-details flex justify-center font-sans">
      <main className="w-full h-full flex flex-col max-w-md relative overflow-hidden bg-gradient-details md:border-x md:border-gray-200">
        
        {/* Header */}
        <header className="flex items-center justify-between p-6 relative z-10">
          <button onClick={() => router.back()} className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
            <ArrowLeft size={24} className="text-gray-800" />
          </button>
          <h1 className="font-bold text-xl text-gray-900">Details</h1>
          <button className="w-12 h-12 bg-[#F6EBEB] rounded-full flex items-center justify-center shadow-sm">
            <Heart size={20} className="fill-gray-800 text-gray-800" />
          </button>
        </header>

        {/* Content Area */}
        <div className="px-6 relative z-10 flex-1 flex flex-col pt-2 pb-32">
          
          <h1 className="text-[32px] leading-tight font-bold text-gray-900 mb-2 shrink-0">
            {product.categoryId === '4' ? "Sandwhic Bliss" : product.categoryId === '3' ? "Burger Bliss" : product.categoryId === '2' ? "Pizza Bliss" : product.name === "Hyderabadi Biryani" ? "Biriyani Bliss" : product.name}
          </h1>
          
          <div className="flex items-center gap-2 mb-4 shrink-0">
            <Star className="fill-[var(--color-primary)] text-[var(--color-primary)]" size={20} />
            <span className="text-base text-gray-500 font-semibold">
              {product.rating} ({product.reviews} review)
            </span>
          </div>

          <div className="flex flex-col gap-4 w-[50%] shrink-0">
            <div>
              <p className="text-base text-gray-500 font-medium mb-1">Price</p>
              <p className="text-2xl font-bold text-gray-900">$ {product.price.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-base text-gray-500 font-medium mb-1">Calories</p>
              <p className="text-2xl font-bold text-gray-900">{product.calories} Cal</p>
            </div>
            <div>
              <p className="text-base text-gray-500 font-medium mb-1">Diameter</p>
              <p className="text-2xl font-bold text-gray-900">{product.diameter.toFixed(2)} Cm</p>
            </div>
            
            {/* Controls */}
            <div className="flex items-center gap-3 mt-3">
              <button 
                onClick={decrementQuantity}
                className="w-9 h-9 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center hover:opacity-90 transition-all shadow-md shadow-[var(--color-primary)]/20 shrink-0"
              >
                <Minus size={18} />
              </button>
              <span className="font-bold text-xl w-6 text-center">{quantity.toString().padStart(2, '0')}</span>
              <button 
                onClick={incrementQuantity}
                className="w-9 h-9 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center hover:opacity-90 transition-all shadow-md shadow-[var(--color-primary)]/20 shrink-0"
              >
                <Plus size={18} />
              </button>
            </div>
          </div>

          {/* Size Selector */}
          <div className="mt-6 mb-4 shrink-0">
            <p className="font-bold text-gray-900 text-lg mb-3">Size</p>
            <div className="flex gap-3">
              {(["Small", "Medium", "Large"] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => selectSize(s)}
                  className={`px-4 py-1.5 rounded-full font-medium transition-colors text-sm ${
                    size === s
                      ? "bg-[var(--color-primary)] text-white shadow-md"
                      : "bg-[#EAEAEA] text-gray-800 hover:bg-gray-300"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="flex-1 pr-2 overflow-hidden flex flex-col justify-end min-h-0 mt-4">
            <p className="text-[#1A1A1A] text-[13px] leading-tight font-medium">
              {product.description.replace(/\.\.\.$/, '')}......<span className="font-bold text-black cursor-pointer">more_</span>
            </p>
          </div>
        </div>

        {/* Large Food Image (Positioned Absolute on the right) */}
        <div className={`absolute right-[-4rem] sm:right-[-3rem] top-[20%] w-[70%] sm:w-[65%] aspect-square pointer-events-none drop-shadow-2xl z-0 ${product.categoryId === '4' ? 'rounded-full overflow-hidden shadow-xl' : ''}`}>
          <Image 
            src={product.imageUrl} 
            alt={product.name} 
            fill 
            className={product.categoryId === '4' ? "object-cover scale-110" : "object-contain"}
          />
        </div>

        {/* Bottom CTA */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-transparent z-50">
          <button className="w-full bg-[var(--color-primary)] hover:opacity-90 text-white font-bold py-5 rounded-[32px] text-xl shadow-lg shadow-[var(--color-primary)]/30 transition-all">
            Add to Cart
          </button>
        </div>
      </main>
    </div>
  );
}
