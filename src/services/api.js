// src/services/api.js
import axios from 'axios';

const API_BASE_URL = 'https://openlibrary.org';

export const fetchBooks = async (page = 1, limit = 10) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/search.json?q=books&page=${page}&limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching books data", error);
    throw error;
  }
};
