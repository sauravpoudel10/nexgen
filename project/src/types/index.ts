export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'new' | 'second-hand';
  type: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  message: string;
  avatar?: string;
}