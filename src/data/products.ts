
import { Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Modern Sofa',
    description: 'Comfortable modern sofa with wooden legs and soft cushions.',
    price: 999.99,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc',
    category: 'sofas',
    inStock: true,
    featured: true
  },
  {
    id: '2',
    name: 'Lounge Chair',
    description: 'Elegant lounge chair with premium leather upholstery.',
    price: 499.99,
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c',
    category: 'chairs',
    inStock: true,
    featured: true
  },
  {
    id: '3',
    name: 'Coffee Table',
    description: 'Modern coffee table with tempered glass top and wooden base.',
    price: 349.99,
    image: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc',
    category: 'tables',
    inStock: true,
    featured: false
  },
  {
    id: '4',
    name: 'Dining Table',
    description: 'Spacious dining table for 6 people made from solid oak.',
    price: 799.99,
    image: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7',
    category: 'tables',
    inStock: true,
    featured: false
  },
  {
    id: '5',
    name: 'Bedside Table',
    description: 'Compact bedside table with one drawer and shelf.',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1591129841117-3adfd313a592',
    category: 'bedroom',
    inStock: true,
    featured: false
  },
  {
    id: '6',
    name: 'King Size Bed',
    description: 'Luxurious king size bed with upholstered headboard.',
    price: 1299.99,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
    category: 'bedroom',
    inStock: true,
    featured: true
  },
  {
    id: '7',
    name: 'Bookshelf',
    description: 'Tall bookshelf with five shelves for your books and decor items.',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1588279102080-a9d8070a734c',
    category: 'storage',
    inStock: true,
    featured: false
  },
  {
    id: '8',
    name: 'Desk',
    description: 'Modern desk with drawers perfect for home office.',
    price: 399.99,
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd',
    category: 'office',
    inStock: true,
    featured: true
  }
];
