import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://fakestoreapi.com/', // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
    // Add any other headers if needed
  },
});

export default apiClient;