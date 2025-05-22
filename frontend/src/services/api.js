import axios from 'axios';

const API_URL = 'http://localhost:5000';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add token to requests if it exists
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Auth services
export const auth = {
    register: (userData) => api.post('/user/register', userData),
    login: (credentials) => api.post('/user/login', credentials),
    getProfile: () => api.get('/user/profile'),
};

// Equipment services
export const equipment = {
    getAll: (filters) => api.get('/equipment', { params: filters }),
    getById: (id) => api.get(`/equipment/${id}`),
    create: (data) => api.post('/equipment', data),
    update: (id, data) => api.put(`/equipment/${id}`, data),
    delete: (id) => api.delete(`/equipment/${id}`),
};

// Export the api instance
export { api }; 