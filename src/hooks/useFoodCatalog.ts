import { useQuery } from '@tanstack/react-query';
import { ApiService } from '@/services/api.service';
import { ICategory, IProduct } from '@/domain/types';

/**
 * Custom hook to encapsulate food catalog data fetching logic.
 * Enforces Single Responsibility Principle by decoupling API logic from the UI.
 */
export const useFoodCatalog = (activeCategoryId: string | null) => {
  const { 
    data: categories = [], 
    isLoading: isLoadingCategories,
    isError: isCategoriesError,
    error: categoriesError 
  } = useQuery<ICategory[], Error>({
    queryKey: ["categories"],
    queryFn: ApiService.fetchCategories,
  });

  const { 
    data: products = [], 
    isLoading: isLoadingProducts,
    isError: isProductsError,
    error: productsError
  } = useQuery<IProduct[], Error>({
    queryKey: ["products", activeCategoryId],
    queryFn: () => ApiService.fetchProducts(activeCategoryId || undefined),
    enabled: !!activeCategoryId, // Only fetch products if a category is selected
  });

  return {
    categories,
    isLoadingCategories,
    isCategoriesError,
    categoriesError,

    products,
    isLoadingProducts,
    isProductsError,
    productsError,
  };
};
