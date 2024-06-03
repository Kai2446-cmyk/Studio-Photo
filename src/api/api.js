// src/api/api.js
import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

export const fetchPackages = async () => {
  try {
    const response = await axios.get(`${API_URL}/packages`);
    return response.data;
  } catch (error) {
    console.error('There was an error fetching the packages data!', error);
    throw error;
  }
};

export const fetchPayments = async () => {
  try {
    const response = await axios.get(`${API_URL}/payments`);
    return response.data;
  } catch (error) {
    console.error('There was an error fetching the payments data!', error);
    throw error;
  }
};
