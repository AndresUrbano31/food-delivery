/**
 * Represents a food category in the application.
 */
export interface ICategory {
  id: string;
  name: string;
  iconUrl: string;
}

/**
 * Represents a product in the catalog.
 */
export interface IProduct {
  id: string;
  categoryId: string;
  name: string;
  rating: number;
  reviews: number;
  distance: string;
  deliveryTime: string;
  price: number;
  calories: number;
  diameter: number;
  description: string;
  imageUrl: string;
}

/**
 * Represents an item in the shopping cart.
 */
export interface ICartItem {
  product: IProduct;
  quantity: number;
  size: 'Small' | 'Medium' | 'Large';
}

/**
 * Simulates a Data Transfer Object (DTO) coming from an external API.
 */
export interface IProductDTO {
  _id: string;
  category_id: string;
  title: string;
  customer_rating: number;
  total_reviews: number;
  distance_str: string;
  delivery_time_str: string;
  price_usd: number;
  calories_kcal: number;
  diameter_cm: number;
  desc: string;
  image_path: string;
}

export interface ICategoryDTO {
  _id: string;
  title: string;
  icon_path: string;
}
