import axios from "axios";
import { tokenService } from "../token-service";

const BASE_URL = process.env.NEXT_PUBLIC_APP_BASE_URL;

export const api = axios.create({
  baseURL: `${BASE_URL}/api`,
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = tokenService.get();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      error.config &&
      !error.response._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const { data } = await axios.post(`${BASE_URL}/refresh`, {
          withCredentials: true,
        });
        tokenService.set(data.accessToken);
        return api.request(originalRequest);
      } catch {
        console.log("Пользователь не авторизован");
        tokenService.clear();
      }
    }
    throw error;
  },
);
