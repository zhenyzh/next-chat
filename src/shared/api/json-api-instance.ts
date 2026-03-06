import { AxiosError } from "axios";
import { api } from "./api"; // твой существующий экземпляр

export class ApiError extends Error {
  response?: any;

  constructor(response: any) {
    super(`Api Error: ${response?.status}`);
    this.response = response;
  }
}

export const jsonApiInstance = async <T>(
  url: string,
  config?: {
    json?: unknown;
    method?: "GET" | "POST" | "DELETE" | "PUT" | "PATCH";
    signal?: AbortSignal;
  },
): Promise<T> => {
  try {
    const response = await api.request<T>({
      url,
      method: config?.method ?? "GET",
      data: config?.json,
      signal: config?.signal,
    });
    return response.data;
  } catch (err) {
    console.log({ err });
    if (err instanceof AxiosError && err.response) {
      throw new ApiError(err.response.data.message);
    }
    throw err;
  }
};
