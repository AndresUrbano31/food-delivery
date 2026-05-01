"use client";

import Image from "next/image";
import Link from "next/link";

const FloatingCircle = ({ src, className }: { src: string, className: string }) => (
  <div className={`absolute ${className} bg-white/70 rounded-full shadow-2xl flex items-center justify-center p-[3px] transition-all`}>
    <div className="relative w-full h-full rounded-full overflow-hidden">
      <img src={src} alt="Food" className="w-full h-full object-cover" />
    </div>
  </div>
);

export default function OnboardingScreen() {
  return (
    <main className="min-h-screen flex flex-col md:flex-row w-full bg-white">
      {/* Left/Top Section: Visuals */}
      <div className="relative overflow-hidden w-full h-[60vh] md:h-screen md:w-1/2 bg-gradient-to-b from-[#E8D4D0] to-[#F5EBE8]">
        {/* Circle 1: Dumplings */}
        <FloatingCircle 
          src="/images/dumplings.png"
          className="top-[2%] left-[-15%] w-[120px] h-[120px] md:top-[10%] md:left-[5%] md:w-48 md:h-48 z-10"
        />
        {/* Circle 2: Biryani */}
        <FloatingCircle 
          src="/images/biryani.png"
          className="top-[14%] right-[-15%] w-[130px] h-[130px] md:top-[15%] md:right-[15%] md:w-40 md:h-40 z-10"
        />
        {/* Circle 3: Pizza */}
        <FloatingCircle 
          src="/images/pizza.png"
          className="top-[22%] left-[50%] -translate-x-1/2 w-[190px] h-[190px] md:top-[40%] md:left-[50%] md:w-72 md:h-72 z-20"
        />
        {/* Circle 4: Burger */}
        <FloatingCircle 
          src="/images/burger.png"
          className="top-[46%] left-[-12%] w-[160px] h-[160px] md:top-[65%] md:left-[10%] md:w-48 md:h-48 z-10"
        />
        {/* Circle 5: Spring Rolls */}
        <FloatingCircle 
          src="/images/spring-rolls.png"
          className="top-[56%] left-[50%] -translate-x-1/2 w-[110px] h-[110px] md:top-[80%] md:left-[45%] md:w-32 md:h-32 z-10"
        />
        {/* Circle 6: Gyoza */}
        <FloatingCircle 
          src="/images/gyoza.png"
          className="top-[42%] right-[-15%] w-[140px] h-[140px] md:top-[70%] md:right-[5%] md:w-48 md:h-48 z-10"
        />
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
