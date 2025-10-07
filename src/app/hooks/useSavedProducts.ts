import { create } from 'zustand';

interface SavedProductsState {
  savedProducts: string[];
  toggleSaveProduct: (codigo: string) => void;
  isSaved: (codigo: string) => boolean;
}

const useSavedProducts = create<SavedProductsState>((set, get) => ({
  savedProducts: typeof window !== 'undefined' && localStorage.getItem('savedProducts')
    ? JSON.parse(localStorage.getItem('savedProducts')!)
    : [],

  toggleSaveProduct: (codigo: string) => {
    const prev = get().savedProducts;
    const updated = prev.includes(codigo)
      ? prev.filter((c) => c !== codigo)
      : [...prev, codigo];

    localStorage.setItem('savedProducts', JSON.stringify(updated));
    set({ savedProducts: updated });
  },

  isSaved: (codigo: string) => {
    return get().savedProducts.includes(codigo);
  },
}));

export default useSavedProducts;
