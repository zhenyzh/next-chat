import axios from "axios";

const BASE_URL = process.env.VITE_NEXT_APP_BASE_URL

export const api = axios.create({
    baseURL: `${BASE_URL}`,
    withCredentials: true,
})

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
})