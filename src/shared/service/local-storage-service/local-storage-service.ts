export const localStorageService = {
  set: <T>(key: string, value: T) => {
    return localStorage.setItem(key, JSON.stringify(value));
  },
  get: (key: string) => {
    return localStorage.getItem(key);
  },
  clear: (key: string) => {
    return localStorage.removeItem(key);
  },
};
