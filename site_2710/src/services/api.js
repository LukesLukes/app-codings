import axios from 'axios';

// O servidor backend local provavelmente está rodando na porta 3000.
const api = axios.create({
    baseURL: "https://localhost:3000", // URL BASE DA API
    timeout: 5000,
});

export default api;