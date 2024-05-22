import axios from 'axios';

const API_URL = process.env.API_BASE_URL;

export const searchBooksByAuthor = async (authorName, page = 1, limit = 10) => {
  try {
    const response = await axios.get(`${API_URL}/search.json?author=${authorName}&page=${page}&limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error("Error searching books by author", error);
    throw error;
  }
};
