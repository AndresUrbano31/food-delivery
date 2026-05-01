"use client";

import { useMemo } from "react";
import { Search, SlidersHorizontal, MapPin, Menu, Home as HomeIcon, Heart, Trash2, Bell, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useAppStore } from "@/store/useAppStore";
import { CategoryPill } from "@/components/category-pill";
import { ProductCard } from "@/components/product-card";
import { useFoodCatalog } from "@/hooks/useFoodCatalog";
import { CONFIG } from "@/config/constants";

export default function HomePage() {
  const { activeCategoryId, setActiveCategory } = useAppStore();
  const { categories, isLoadingCategories, products, isLoadingProducts } = useFoodCatalog(activeCategoryId);

  // Performance optimization: Memoize rendered lists to prevent unnecessary re-renders
  const renderedCategories = useMemo(() => {
    return categories.map((category) => (
      <CategoryPill
        key={category.id}
        id={category.id}
        name={category.name}
        iconUrl={category.iconUrl}
        isActive={activeCategoryId === category.id}
        onClick={() => setActiveCategory(category.id)}
      />
    ));
  }, [categories, activeCategoryId, setActiveCategory]);

  const renderedProducts = useMemo(() => {
    return products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ));
  }, [products]);

  return (
    <div className="min-h-screen pb-24 bg-gradient-home md:bg-none md:bg-[var(--color-neutral)] flex justify-center">
      <main className="w-full max-w-md md:max-w-4xl px-6 pt-12 md:bg-white md:min-h-screen md:shadow-2xl md:px-8">
        {/* Top Navigation */}
        <header className="flex items-center justify-between mb-8 w-full">
          <div className="w-12 h-12 rounded-full overflow-hidden shadow-sm shrink-0">
            <img 
              src="/images/profile-v3.png" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={20} className="text-gray-900" />
            <span className="font-semibold text-lg text-gray-900">{CONFIG.DEFAULT_LOCATION}</span>
            <ChevronDown size={20} className="text-gray-900" />
          </div>
          <button className="bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-sm shrink-0">
            <img 
              src="/images/menu-icon-v3.png" 
              alt="Menu" 
              className="w-6 h-6 object-contain"
            />
          </button>
        </header>

        {/* Title */}
        <h1 className="font-['Montserrat'] font-bold text-[32px] text-black/95 mb-6 leading-[1.1] [text-shadow:_0_2px_4px_rgb(0_0_0_/_25%)]">
          Ready to order your<br />favourite food ?
        </h1>

        {/* Search Bar */}
        <div className="flex items-center bg-white rounded-full shadow-sm p-1.5 mb-8">
          <img 
            src="/images/search-icon.png" 
            alt="Search" 
            className="w-6 h-6 object-contain ml-2 shrink-0" 
          />
          <input 
            type="text" 
            placeholder="Search your food" 
            className="flex-1 bg-transparent border-none outline-none focus:ring-0 text-base text-[var(--color-secondary)] placeholder-gray-400 py-3 min-w-0 px-3"
          />
          <img 
            src="/images/filter-icon.png" 
            alt="Filter" 
            className="w-12 h-12 object-contain shrink-0 cursor-pointer hover:opacity-90 transition-opacity"
          />
        </div>

        {/* Category Filter */}
        <div className="flex overflow-x-auto scrollbar-hide gap-3 mb-8 -mx-6 px-6 md:mx-0 md:px-0">
          {isLoadingCategories ? (
            <div className="animate-pulse flex gap-3">
              {[1, 2, 3, 4].map(i => <div key={i} className="h-12 w-28 bg-gray-200 rounded-full"></div>)}
            </div>
          ) : (
            renderedCategories
          )}
        </div>

        {/* Popular Food List */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-900">Popular Food</h2>
            <button className="text-xs text-gray-500 font-medium">See all</button>
          </div>

          {isLoadingProducts ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16">
              {[1, 2, 3, 4].map(i => <div key={i} className="h-48 bg-gray-200 rounded-[32px] animate-pulse"></div>)}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {renderedProducts}
            </div>
          )}
        </div>
      </main>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-transparent flex justify-center z-50 pointer-events-none md:hidden">
        <div className="fixed bottom-0 left-0 right-0 bg-[#F6EBEB] rounded-t-[32px] px-8 py-5 flex justify-between items-center shadow-[0_-4px_10px_rgba(0,0,0,0.02)] md:relative md:bg-white md:shadow-none md:mt-8 md:rounded-none z-50 pointer-events-auto w-full max-w-md md:max-w-[400px]">
          <button className="w-12 h-12 rounded-full bg-[var(--color-primary)] flex items-center justify-center shadow-sm shrink-0">
            <img 
              src="/images/home-icon.png" 
              alt="Home" 
              className="w-6 h-6 object-contain"
            />
          </button>
          <button className="w-12 h-12 flex items-center justify-center text-gray-400 hover:text-[var(--color-primary)] transition-colors">
            <Heart size={22} />
          </button>
          <button className="w-12 h-12 flex items-center justify-center text-gray-400 hover:text-[var(--color-primary)] transition-colors">
            <Trash2 size={22} />
          </button>
          <button className="w-12 h-12 flex items-center justify-center text-gray-400 hover:text-[var(--color-primary)] transition-colors relative">
            <Bell size={22} />
            <span className="absolute top-3 right-3 w-2 h-2 bg-[var(--color-primary)] rounded-full border-2 border-white"></span>
          </button>
        </div>
      </div>
    </div>
  );
}
