import { create } from 'zustand';
import { CONFIG } from '@/config/constants';

interface AppState {
  activeCategoryId: string | null;
  setActiveCategory: (id: string) => void;
  cartCount: number;
  incrementCart: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  activeCategoryId: CONFIG.DEFAULT_CATEGORY_ID,
  setActiveCategory: (id) => set({ activeCategoryId: id }),
  cartCount: 0,
  incrementCart: () => set((state) => ({ cartCount: state.cartCount + 1 })),
}));
