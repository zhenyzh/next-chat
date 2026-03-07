import axios from "axios";
import { useTokenService } from "../token-service";

const BASE_URL = `${process.env.NEXT_PUBLIC_APP_BASE_URL}/api`;

export const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = useTokenService.getState().get();
  console.log({ token });
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
        const { data } = await axios.get(`${BASE_URL}/auth/refresh`, {
          withCredentials: true,
        });
        useTokenService.getState().set(data.accessToken);
        return api.request(originalRequest);
      } catch {
        console.log("Пользователь не авторизован");
        useTokenService.getState().clear();
      }
    }
    throw error;
  },
);
