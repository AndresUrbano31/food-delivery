"use client";

import Image from "next/image";
import Link from "next/link";

const FloatingCircle = ({ src, className }: { src: string, className: string }) => (
  <div 
    className={`absolute bg-white/85 p-2 rounded-full shadow-xl ${className}`}
  >
    <div className="relative w-full h-full rounded-full overflow-hidden">
      <Image src={src} alt="Food" fill className="w-full h-full object-cover" />
    </div>
  </div>
);

export default function OnboardingScreen() {
  return (
    <main className="min-h-screen flex flex-col md:flex-row w-full bg-white">
      {/* Left/Top Section: Visuals */}
      <div className="relative flex-1 bg-gradient-to-b from-[#3B2A2A] to-[#F2E8E4] overflow-hidden h-[55vh] md:h-screen">
        <div className="relative w-full h-full max-w-[400px] mx-auto md:max-w-full">
          {/* Circle 1: Dumplings */}
          <FloatingCircle 
            src="/images/dumplings.png"
            className="w-44 h-44 top-[-5%] left-[-10%] md:w-52 md:h-52 md:top-[5%] md:left-[5%]"
          />
          {/* Circle 2: Biryani */}
          <FloatingCircle 
            src="/images/biryani.png"
            className="w-32 h-32 top-[10%] right-[-10%] md:w-40 md:h-40 md:top-[15%] md:right-[15%]"
          />
          {/* Circle 3: Pizza */}
          <FloatingCircle 
            src="/images/pizza.png"
            className="w-52 h-52 top-[30%] left-1/2 -translate-x-1/2 md:w-72 md:h-72 md:top-[35%] md:left-[40%]"
          />
          {/* Circle 4: Burger */}
          <FloatingCircle 
            src="/images/burger.png"
            className="w-48 h-48 top-[55%] left-[-15%] md:w-60 md:h-60 md:top-[55%] md:left-[10%]"
          />
          {/* Circle 5: Spring Rolls */}
          <FloatingCircle 
            src="/images/spring-rolls.png"
            className="w-32 h-32 top-[70%] left-[35%] md:w-40 md:h-40 md:top-[75%] md:left-[45%]"
          />
          {/* Circle 6: Gyoza */}
          <FloatingCircle 
            src="/images/gyoza.png"
            className="w-36 h-36 top-[50%] right-[-15%] md:w-44 md:h-44 md:top-[60%] md:right-[10%]"
          />
        </div>
      </div>

      {/* Right/Bottom Section: Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-white z-10 md:rounded-l-3xl shadow-[-10px_0_30px_rgba(0,0,0,0.05)]">
        <h1 className="text-4xl md:text-5xl font-black text-[var(--color-secondary)] mb-4 tracking-tight drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] leading-[1.1]">
          Test the Joy of <br/> Delivery
        </h1>
        <p className="text-[var(--color-secondary)] opacity-80 mb-10 max-w-xs mx-auto text-sm md:text-base leading-relaxed">
          Unlock a world of culinary delights, right at your fingertips
        </p>
        
        <Link href="/home" className="w-full max-w-[300px]">
          <button className="w-full bg-[var(--color-primary)] hover:opacity-90 text-white font-semibold py-4 rounded-full text-lg shadow-lg shadow-[#D9534F]/40 transition-all active:scale-95">
            Get Started
          </button>
        </Link>
        
        {/* Home indicator mockup for mobile */}
        <div className="mt-8 w-32 h-1.5 bg-gray-200 rounded-full md:hidden"></div>
      </div>
    </main>
  );
}
