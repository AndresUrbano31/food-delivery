import Image from "next/image";
import { cn } from "@/lib/utils";

interface CategoryPillProps {
  id: string;
  name: string;
  iconUrl: string;
  isActive: boolean;
  onClick: () => void;
}

export function CategoryPill({ name, iconUrl, isActive, onClick }: CategoryPillProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 px-3 py-2 rounded-full transition-all whitespace-nowrap",
        isActive 
          ? "bg-[var(--color-tertiary)] text-white shadow-md" 
          : "bg-[#BDB5B1] text-white shadow-sm hover:opacity-90"
      )}
    >
      <div className="w-8 h-8 rounded-full overflow-hidden bg-white/20 p-0.5">
        <Image src={iconUrl} alt={name} width={32} height={32} className="rounded-full object-cover w-full h-full" />
      </div>
      <span className="font-medium pr-2 text-sm">{name}</span>
    </button>
  );
}
