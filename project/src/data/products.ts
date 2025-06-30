import { Product } from '../types';

export const products: Product[] = [
  // New Products
  {
    id: '1',
    name: 'Gaming Laptop RTX 4070',
    description: 'High-performance gaming laptop with RTX 4070, 16GB RAM, 1TB SSD',
    price: 180000,
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=500',
    category: 'new',
    type: 'Laptop'
  },
  {
    id: '2',
    name: 'Desktop Workstation',
    description: 'Professional workstation with Intel i7, 32GB RAM, RTX 4060',
    price: 150000,
    image: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'new',
    type: 'Desktop'
  },
  {
    id: '3',
    name: '4K Gaming Monitor',
    description: '27" 4K 144Hz Gaming Monitor with HDR support',
    price: 45000,
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'new',
    type: 'Monitor'
  },
  {
    id: '4',
    name: 'Mechanical Keyboard',
    description: 'RGB Mechanical Gaming Keyboard with Cherry MX switches',
    price: 8500,
    image: 'https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'new',
    type: 'Accessories'
  },
  
  // Second-Hand Products
  {
    id: '5',
    name: 'Used Gaming Laptop GTX 1660',
    description: 'Good condition gaming laptop with GTX 1660, 8GB RAM, 512GB SSD',
    price: 85000,
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=500',
    category: 'second-hand',
    type: 'Laptop'
  },
  {
    id: '6',
    name: 'Refurbished Desktop PC',
    description: 'Excellent condition desktop with i5 processor, 16GB RAM',
    price: 55000,
    image: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'second-hand',
    type: 'Desktop'
  },
  {
    id: '7',
    name: 'Used 24" Monitor',
    description: '24" Full HD monitor in great condition, perfect for office work',
    price: 15000,
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'second-hand',
    type: 'Monitor'
  },
  {
    id: '8',
    name: 'Gaming Mouse & Pad',
    description: 'High-precision gaming mouse with RGB and large mousepad',
    price: 3500,
    image: 'https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'second-hand',
    type: 'Accessories'
  }
];