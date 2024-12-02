import axios from 'axios';

// Define types for your data
interface LandTransaction {
  id: string;
  price: number;
  area: number;
  type: string;
  coordinates: [number, number];
  // Add other properties as needed
}

interface FilterParams {
  type?: string[];
  minPrice?: number;
  maxPrice?: number;
  minArea?: number;
  maxArea?: number;
  // Add other filter parameters as needed
}

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

export const api = {
  async getLandTransactions(filters: FilterParams): Promise<LandTransaction[]> {
    try {
      const response = await axios.get(`${API_BASE_URL}/transactions`, {
        params: filters
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching land transactions:', error);
      throw error;
    }
  },

  async getLandTypes(): Promise<string[]> {
    try {
      const response = await axios.get(`${API_BASE_URL}/types`);
      return response.data;
    } catch (error) {
      console.error('Error fetching land types:', error);
      throw error;
    }
  }
}; 