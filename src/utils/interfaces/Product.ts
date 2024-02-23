export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  idProduct?: number;
}

export interface ProductCart extends Product {
  quantity: number;
}

export interface ProductInfo extends ProductCart {
  addToCart: () => void;
  removeFromCart: () => void;
}
