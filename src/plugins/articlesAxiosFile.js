import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://gnews.io/api/v4/', // Replace with your API base URL
    headers: {
        'Content-Type': 'application/json',
        // Add any other headers if needed
    },
});

export default apiClient;