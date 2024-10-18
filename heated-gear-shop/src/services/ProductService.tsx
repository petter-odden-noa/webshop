import axios from 'axios';

const API_URL = 'https://localhost:7002/api';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

export const ProductService = {
  getProducts: async (): Promise<Product[]> => {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
  },
  getProductById: async (id: number): Promise<Product> => {
    const response = await axios.get(`${API_URL}/products/${id}`);
    return response.data;
  },
};