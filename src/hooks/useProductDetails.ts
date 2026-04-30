import { useState, useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ApiService } from '@/services/api.service';
import { IProduct } from '@/domain/types';

/**
 * Custom hook to encapsulate food details data fetching and local state logic.
 * Enforces Single Responsibility Principle by decoupling state from the UI component.
 */
export const useProductDetails = (productId: string) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [size, setSize] = useState<"Small" | "Medium" | "Large">("Small");

  const { 
    data: product, 
    isLoading,
    isError,
    error
  } = useQuery<IProduct, Error>({
    queryKey: ["product", productId],
    queryFn: () => ApiService.fetchProductById(productId),
  });

  const incrementQuantity = useCallback(() => {
    setQuantity((prev) => prev + 1);
  }, []);

  const decrementQuantity = useCallback(() => {
    setQuantity((prev) => Math.max(1, prev - 1));
  }, []);

  const selectSize = useCallback((newSize: "Small" | "Medium" | "Large") => {
    setSize(newSize);
  }, []);

  return {
    product,
    isLoading,
    isError,
    error,
    
    quantity,
    incrementQuantity,
    decrementQuantity,
    
    size,
    selectSize
  };
};
