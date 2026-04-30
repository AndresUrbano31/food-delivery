import { ICategory, IProduct, IProductDTO, ICategoryDTO } from '@/domain/types';
import { mockCategoriesDTO, mockProductsDTO } from '@/config/mockData';
import { CONFIG } from '@/config/constants';

/**
 * Adapter class to normalize API data structures into robust Frontend Domain Entities.
 */
class ApiAdapter {
  static adaptCategory(dto: ICategoryDTO): ICategory {
    return {
      id: dto._id,
      name: dto.title,
      iconUrl: dto.icon_path,
    };
  }

  static adaptProduct(dto: IProductDTO): IProduct {
    return {
      id: dto._id,
      categoryId: dto.category_id,
      name: dto.title,
      rating: dto.customer_rating,
      reviews: dto.total_reviews,
      distance: dto.distance_str,
      deliveryTime: dto.delivery_time_str,
      price: dto.price_usd,
      calories: dto.calories_kcal,
      diameter: dto.diameter_cm,
      description: dto.desc,
      imageUrl: dto.image_path,
    };
  }
}

/**
 * Centralized API Service for all network requests.
 * Includes exhaustive error handling.
 */
export class ApiService {
  /**
   * Fetches all categories.
   */
  static async fetchCategories(): Promise<ICategory[]> {
    try {
      // Simulate network request
      await new Promise(resolve => setTimeout(resolve, CONFIG.MOCK_DELAY_MS));
      
      // Simulate network failure randomly (disabled for stability, but this is where it would be)
      // if (Math.random() < 0.05) throw new Error("Network Error");

      return mockCategoriesDTO.map(ApiAdapter.adaptCategory);
    } catch (error) {
      console.error('[ApiService] Error fetching categories:', error);
      throw error;
    }
  }

  /**
   * Fetches products, optionally filtered by category.
   */
  static async fetchProducts(categoryId?: string): Promise<IProduct[]> {
    try {
      await new Promise(resolve => setTimeout(resolve, CONFIG.MOCK_DELAY_MS));

      let dtos = mockProductsDTO;
      if (categoryId) {
        dtos = dtos.filter(dto => dto.category_id === categoryId);
      }

      return dtos.map(ApiAdapter.adaptProduct);
    } catch (error) {
      console.error(`[ApiService] Error fetching products for category ${categoryId}:`, error);
      throw error;
    }
  }

  /**
   * Fetches a single product by its ID.
   */
  static async fetchProductById(id: string): Promise<IProduct> {
    try {
      await new Promise(resolve => setTimeout(resolve, CONFIG.MOCK_DELAY_MS));

      const dto = mockProductsDTO.find(dto => dto._id === id);
      
      if (!dto) {
        throw new Error(`Product with ID ${id} not found.`);
      }

      return ApiAdapter.adaptProduct(dto);
    } catch (error) {
      console.error(`[ApiService] Error fetching product ${id}:`, error);
      throw error;
    }
  }
}
