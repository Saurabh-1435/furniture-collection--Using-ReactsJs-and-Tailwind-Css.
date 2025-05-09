
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  inStock: boolean;
  featured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  description: string;
}

export interface CartItem {
  productId: string;
  quantity: number;
  product: Product;
}

export interface User {
  id: string;
  email: string;
  name: string;
}
