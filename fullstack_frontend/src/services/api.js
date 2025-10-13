// src\services\api.js

const api = axios.create({
    baseURL: 'https://localhost:3000' // URL BASE DA API
});

export default api;