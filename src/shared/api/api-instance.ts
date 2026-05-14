import { AxiosError } from "axios";
import { api } from "./api";

export class ApiError extends Error {
  response?: any;

  constructor(response: any) {
    super(`Api Error: ${response?.status}`);
    this.response = response;
  }
}

export const apiInstance = async <T>(
  url: string,
  config?: {
    data?: unknown;
    method?: "GET" | "POST" | "DELETE" | "PUT" | "PATCH";
    signal?: AbortSignal;
    params?: Record<string, unknown>;
  },
): Promise<T> => {
  try {
    const response = await api.request<T>({
      url,
      method: config?.method ?? "GET",
      data: config?.data,
      signal: config?.signal,
      params: config?.params,
    });
    return response.data;
  } catch (err) {
    if (err instanceof AxiosError && err.response) {
      throw new ApiError(err.response);
    }
    throw err;
  }
};
