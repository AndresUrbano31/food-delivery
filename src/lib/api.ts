export interface Category {
  id: string;
  name: string;
  iconUrl: string;
}

export interface Product {
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

const mockCategories: Category[] = [
  { id: '1', name: 'Biryani', iconUrl: '/images/icon-biryani.png' },
  { id: '2', name: 'Pizza', iconUrl: '/images/icon-pizza.png' },
  { id: '3', name: 'Burger', iconUrl: '/images/icon-burger.png' },
  { id: '4', name: 'Sandwich', iconUrl: '/images/icon-pizza.png' },
];

const mockProducts: Product[] = [
  {
    id: 'p1',
    categoryId: '1',
    name: 'Hyderabadi Biryani',
    rating: 4.8,
    reviews: 1050,
    distance: '2.5 km',
    deliveryTime: '20 min delivery',
    price: 7.50,
    calories: 450,
    diameter: 15.05,
    description: 'Hyderabadi biryani is a culinary masterpiece that tantalizes the senses with its aromatic spices, tender meat, and fragrant basmati rice. originating from the vibrant city of the Hyaderabad in india, this is iconic dish...',
    imageUrl: '/images/hyderabadi.png',
  },
  {
    id: 'p2',
    categoryId: '1',
    name: 'Bombay Biryani',
    rating: 4.5,
    reviews: 1320,
    distance: '3.5 km',
    deliveryTime: '25 min delivery',
    price: 8.50,
    calories: 380,
    diameter: 15.05,
    description: 'Bombay biryani is a culinary masterpiece that tantalizes the senses with its aromatic spices, tender panner, mater and fragrant basmati rice. originating from the vibrant city of the Hyaderabad in india, this is iconic dish...',
    imageUrl: '/images/bombay.png',
  },
  {
    id: 'p3',
    categoryId: '2',
    name: 'onion capsicum pizza',
    rating: 4.9,
    reviews: 1550,
    distance: '2.5 km',
    deliveryTime: '20 min delivery',
    price: 10.50,
    calories: 480,
    diameter: 18.05,
    description: 'Onion capsicum pizza is a culinary masterpiece that tantalizes the senses with its aromatic spices, tender onion and capsicum and tragrant pizza base. originating from the vibrant city of the Hyaderabad in India, this is iconic dish...',
    imageUrl: '/images/pizza-onion-v2.png',
  },
  {
    id: 'p4',
    categoryId: '2',
    name: 'Panner pizza',
    rating: 4.2,
    reviews: 1130,
    distance: '3.5 km',
    deliveryTime: '25 min delivery',
    price: 9.50,
    calories: 460,
    diameter: 12.05,
    description: 'Panner and mater pizza is a culinary masterpiece that tantalizes the senses with its aromatic spices, tender panner, mater and tragrant pizza base. originating from the vibrant city of the Hyaderabad in india, this is iconic dish...',
    imageUrl: '/images/pizza-panner.png',
  },
  {
    id: 'p5',
    categoryId: '3',
    name: 'Veg Burger',
    rating: 4.2,
    reviews: 1130,
    distance: '2.5 km',
    deliveryTime: '20 min delivery',
    price: 12.50,
    calories: 560,
    diameter: 6.05,
    description: 'Veg burger is a culinary masterpiece that tantalizes the senses with its aromatic spices, tender aalu tiki and tamato,other and tragrant burger base. originating from the vibrant city of the Hyaderabad in india, this is iconic dish...',
    imageUrl: '/images/burger-veg.png',
  },
  {
    id: 'p6',
    categoryId: '3',
    name: 'Paneer Burger',
    rating: 4.6,
    reviews: 1230,
    distance: '3.5 km',
    deliveryTime: '25 min delivery',
    price: 8.50,
    calories: 460,
    diameter: 4.00,
    description: 'Panner burger is a culinary masterpiece that tantalizes the senses with its aromatic spices, tender panner,aalu tiki and tamato,other and tragrant burger base. originating from the vibrant city of the Hyaderabad in india, this is iconic dish...',
    imageUrl: '/images/burger-paneer.png',
  },

  {
    id: 'p7',
    categoryId: '4',
    name: 'Veg Sandwhic',
    rating: 4.6,
    reviews: 1230,
    distance: '2.5 km',
    deliveryTime: '20 min delivery',
    price: 7.50,
    calories: 460,
    diameter: 4.00,
    description: 'Veg sandwhic is a culinary masterpiece that tantalizes the senses with its aromatic spices, tender panner,aalu and tamato,other and tragrant burger base. originating from the vibrant city of the Hyaderabad in india, this is iconic dish...',
    imageUrl: '/images/sandwich-veg.png',
  },
  {
    id: 'p8',
    categoryId: '4',
    name: 'Potato Sandwhic',
    rating: 4.6,
    reviews: 1343,
    distance: '3.5 km',
    deliveryTime: '25 min delivery',
    price: 6.50,
    calories: 460,
    diameter: 4.00,
    description: 'Potato sandwhic is a culinary masterpiece that tantalizes the senses with its aromatic spices, tender panner,aalu and tamato,other and tragrant burger base. originating from the vibrant city of the Hyaderabad in india, this is iconic dish...',
    imageUrl: '/images/sandwich-potato.png',
  }
];

export const fetchCategories = async (): Promise<Category[]> => {
  // Simulate network delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockCategories);
    }, 500);
  });
};

export const fetchProducts = async (categoryId?: string): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (categoryId) {
        resolve(mockProducts.filter(p => p.categoryId === categoryId));
      } else {
        resolve(mockProducts);
      }
    }, 500);
  });
};

export const fetchProductById = async (id: string): Promise<Product> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = mockProducts.find(p => p.id === id);
      if (product) {
        resolve(product);
      } else {
        reject(new Error('Product not found'));
      }
    }, 500);
  });
};
