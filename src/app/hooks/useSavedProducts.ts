import { useEffect, useState } from 'react';

const useSavedProducts = () => {
  const [savedProducts, setSavedProducts] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('savedProducts');
    if (saved) {
      setSavedProducts(JSON.parse(saved));
    }
  }, []);

  const toggleSaveProduct = (codigo: string) => {
    setSavedProducts((prev) => {
      let updated: string[];
      if (prev.includes(codigo)) {
        updated = prev.filter((c) => c !== codigo);
      } else {
        updated = [...prev, codigo];
      }
      localStorage.setItem('savedProducts', JSON.stringify(updated));
      return updated;
    });
  };

  const isSaved = (codigo: string) => savedProducts.includes(codigo);

  return { toggleSaveProduct, isSaved };
};

export default useSavedProducts;
