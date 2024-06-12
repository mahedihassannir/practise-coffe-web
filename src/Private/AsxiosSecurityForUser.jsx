import axios from 'axios';
import { redirect } from 'react-router-dom';

// Create an axios instance
const axiosInstance = axios.create({
    baseURL: 'http://api.ecom-bd.com/api/v1/user',
    headers: {
        'Content-Type': 'application/json'
    }
});

// Add a request interceptor
axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('userToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

// Add a response interceptor
axiosInstance.interceptors.response.use((response) => {
    return response;
}, (error) => {
    if (error.response && error.response.status === 401) {
        // Handle 401 errors (unauthorized)
        console.error('Unauthorized. Redirecting to login.');
        // Redirect to login page or show a message
        redirect("/login")
    }
    return Promise.reject(error);
});

export default axiosInstance;
